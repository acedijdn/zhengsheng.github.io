/**
 * 压缩 public/images 下所有图片（保持原文件名与格式）
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../public/images')
const MAX_SIDE = 1920
const JPEG_QUALITY = 82

const EXT = new Set(['.png', '.jpg', '.jpeg', '.webp'])

function formatBytes(n) {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(2)} MB`
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!EXT.has(ext)) return null

  const before = fs.statSync(filePath).size
  const meta = await sharp(filePath).metadata()
  const hasAlpha = meta.hasAlpha === true

  let pipeline = sharp(filePath).rotate()

  if (
    (meta.width && meta.width > MAX_SIDE) ||
    (meta.height && meta.height > MAX_SIDE)
  ) {
    pipeline = pipeline.resize({
      width: MAX_SIDE,
      height: MAX_SIDE,
      fit: 'inside',
      withoutEnlargement: true,
    })
  }

  const tmpPath = `${filePath}.opt.tmp`
  const isJpeg = ext === '.jpg' || ext === '.jpeg'

  if (isJpeg) {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath)
  } else if (ext === '.png') {
    await pipeline
      .png({
        compressionLevel: 9,
        effort: 10,
        palette: !hasAlpha,
        quality: 90,
      })
      .toFile(tmpPath)
  } else if (ext === '.webp') {
    await pipeline.webp({ quality: 82 }).toFile(tmpPath)
  }

  const after = fs.statSync(tmpPath).size
  if (after <= before) {
    fs.renameSync(tmpPath, filePath)
    return { name: path.basename(filePath), before, after }
  }

  fs.unlinkSync(tmpPath)
  return { name: path.basename(filePath), before, after: before, skipped: true }
}

async function main() {
  const files = fs.readdirSync(imagesDir).filter((f) => EXT.has(path.extname(f).toLowerCase()))
  console.log(`优化 ${files.length} 张图片（最长边 ≤ ${MAX_SIDE}px）...\n`)

  let totalBefore = 0
  let totalAfter = 0

  for (const file of files) {
    const filePath = path.join(imagesDir, file)
    try {
      const result = await optimizeFile(filePath)
      if (!result) continue
      totalBefore += result.before
      totalAfter += result.after
      const pct = result.before > 0 ? ((1 - result.after / result.before) * 100).toFixed(1) : '0'
      const note = result.skipped ? ' (已是最优)' : ''
      console.log(
        `${result.name}: ${formatBytes(result.before)} → ${formatBytes(result.after)} (-${pct}%)${note}`,
      )
    } catch (err) {
      console.error(`失败 ${file}:`, err.message)
    }
  }

  console.log(`\n合计: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)}`)
  const saved = ((1 - totalAfter / totalBefore) * 100).toFixed(1)
  console.log(`节省约 ${saved}%`)
}

main()
