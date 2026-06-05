export const CDN_BASE =
  'https://mp-d4cc1e1c-8fb4-4e0c-ad8e-238b35182d87.cdn.bspapp.com'

/** 拼接 CDN 路径，自动处理中文与空格编码 */
export function cdnUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return CDN_BASE + encodeURI(normalized)
}
