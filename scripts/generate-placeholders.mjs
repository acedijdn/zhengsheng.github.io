import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '../public/images')

const files = [
  '主图.png',
  'ZS0508.png',
  'ZS0608.png',
  'ZS0808.png',
  'ZS2508.png',
  'ZS1808.png',
  '2008-06.png',
  'ZS0508K.png',
  '图片4.png',
  '主机.jpg',
  '扩振板.png',
  '线束.jpg',
  '智能沙发椅.png',
  '主页智能床垫.png',
  '主页智能疗愈.png',
  '智能按摩椅.png',
  '智能床图片修改 (7).png',
  '使用场景1.png',
  '使用场景2.png',
  '使用场景3.png',
  '使用场景4.png',
  '公司介绍.png',
  '地图.png',
  '体感讨价.png',
]

// 1x1 最小合法 PNG / JPEG（占位，后续可替换为真实图片）
const PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64',
)
const JPG = Buffer.from(
  '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAALCAABAAEBAREA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAA/AD8A/9k=',
  'base64',
)

fs.mkdirSync(outDir, { recursive: true })

for (const name of files) {
  const ext = path.extname(name).toLowerCase()
  const buf = ext === '.jpg' || ext === '.jpeg' ? JPG : PNG
  fs.writeFileSync(path.join(outDir, name), buf)
  console.log('created', name)
}
