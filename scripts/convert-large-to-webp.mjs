/**
 * 将超大 PNG 转为 WebP 并更新 src 中的引用
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../public/images')
const srcDir = path.join(__dirname, '../src')
const MIN_BYTES = 1.5 * 1024 * 1024
const MAX_SIDE = 1920
const QUALITY = 80

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, acc)
    else if (/\.(tsx?|jsx?|mjs)$/.test(ent.name)) acc.push(p)
  }
  return acc
}

async function main() {
  const pngs = fs
    .readdirSync(imagesDir)
    .filter((f) => f.toLowerCase().endsWith('.png'))
    .map((f) => ({ name: f, path: path.join(imagesDir, f), size: fs.statSync(path.join(imagesDir, f)).size }))
    .filter((f) => f.size >= MIN_BYTES)

  const converted = []

  for (const file of pngs) {
    const webpName = file.name.replace(/\.png$/i, '.webp')
    const webpPath = path.join(imagesDir, webpName)

    await sharp(file.path)
      .rotate()
      .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(webpPath)

    const webpSize = fs.statSync(webpPath).size
    if (webpSize < file.size * 0.85) {
      fs.unlinkSync(file.path)
      converted.push({ from: file.name, to: webpName, before: file.size, after: webpSize })
      console.log(
        `${file.name} → ${webpName}: ${(file.size / 1024 / 1024).toFixed(2)}MB → ${(webpSize / 1024 / 1024).toFixed(2)}MB`,
      )
    } else {
      fs.unlinkSync(webpPath)
      console.log(`跳过 ${file.name}（WebP 不够小）`)
    }
  }

  if (!converted.length) {
    console.log('无文件需要转换')
    return
  }

  const srcFiles = walk(srcDir)
  for (const { from, to } of converted) {
    for (const file of srcFiles) {
      let content = fs.readFileSync(file, 'utf8')
      if (!content.includes(from)) continue
      content = content.split(`'${from}'`).join(`'${to}'`)
      content = content.split(`"${from}"`).join(`"${to}"`)
      fs.writeFileSync(file, content)
    }
  }

  console.log(`\n已转换 ${converted.length} 张，并更新 src 引用`)
}

main()
