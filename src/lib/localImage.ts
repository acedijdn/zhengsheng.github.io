/** public/images 下的本地静态图片路径（兼容 GitHub Pages base） */
export function localImage(filename: string): string {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}images/${filename}`
}
