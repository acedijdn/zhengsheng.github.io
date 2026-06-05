import { useMemo, useRef, useState } from 'react'
import { imageList, type ImageKey } from '../../config/images'
import {
  clearImageOverride,
  getImageOverrides,
  setImageOverride,
} from '../../lib/imageResolver'
import SiteImage from '../../components/ui/SiteImage'
import PageBanner from '../../components/ui/PageBanner'

const OVERRIDE_NOTE = '已配置 CDN 链接的将直接显示；未配置的使用代码生成图，可上传本地替换。'

function notifyUpdate() {
  window.dispatchEvent(new Event('zensheng-images-updated'))
}

export default function ImagesAdmin() {
  const [filter, setFilter] = useState<string>('全部')
  const [, setTick] = useState(0)
  const fileInputRefs = useRef<Partial<Record<ImageKey, HTMLInputElement | null>>>({})

  const categories = useMemo(
    () => ['全部', ...Array.from(new Set(imageList.map((item) => item.category)))],
    [],
  )

  const filtered = filter === '全部' ? imageList : imageList.filter((item) => item.category === filter)

  const overrides = getImageOverrides()

  const handleUpload = (key: ImageKey, file: File | undefined) => {
    if (!file) return
    const url = URL.createObjectURL(file)
    setImageOverride(key, url)
    notifyUpdate()
    setTick((n) => n + 1)
  }

  const handleClear = (key: ImageKey) => {
    clearImageOverride(key)
    notifyUpdate()
    setTick((n) => n + 1)
  }

  return (
    <>
      <PageBanner title="图片管理" subtitle="统一管理全站插图与占位图，支持本地预览替换" />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  filter === cat
                    ? 'bg-accent text-white'
                    : 'border border-gray-200 bg-white text-navy/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50 text-navy/70">
                    <th className="px-4 py-3 font-medium">预览</th>
                    <th className="px-4 py-3 font-medium">标识</th>
                    <th className="px-4 py-3 font-medium">名称</th>
                    <th className="px-4 py-3 font-medium">分类</th>
                    <th className="px-4 py-3 font-medium">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item) => (
                    <tr key={item.key} className="border-b border-gray-50 align-top">
                      <td className="px-4 py-4">
                        <div className="w-28 overflow-hidden rounded-lg border border-gray-100">
                          <SiteImage
                            imageKey={item.key}
                            aspectRatio={item.key === 'team-avatar' ? 'aspect-square' : 'aspect-[4/3]'}
                            className="rounded-none"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-4 font-mono text-xs text-navy/60">{item.key}</td>
                      <td className="px-4 py-4">
                        <p className="font-medium text-navy">{item.label}</p>
                        <p className="mt-1 text-xs text-navy/50">{item.description}</p>
                        <p className="mt-2 text-xs text-accent/80">{OVERRIDE_NOTE}</p>
                        {item.customUrl && !overrides[item.key] && (
                          <p className="mt-1 text-xs text-green-600">已配置 CDN 图片</p>
                        )}
                        {overrides[item.key] && (
                          <p className="mt-1 text-xs text-green-600">已使用本地替换图</p>
                        )}
                      </td>
                      <td className="px-4 py-4 text-navy/60">{item.category}</td>
                      <td className="px-4 py-4">
                        <input
                          ref={(el) => {
                            fileInputRefs.current[item.key] = el
                          }}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleUpload(item.key, e.target.files?.[0])}
                        />
                        <div className="flex flex-col gap-2">
                          <button
                            type="button"
                            onClick={() => fileInputRefs.current[item.key]?.click()}
                            className="rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-400"
                          >
                            上传替换
                          </button>
                          {overrides[item.key] && (
                            <button
                              type="button"
                              onClick={() => handleClear(item.key)}
                              className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-navy/70 hover:border-accent hover:text-accent"
                            >
                              恢复默认
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-sm text-navy/50">
            提示：也可在 <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">src/config/images.ts</code>{' '}
            中为对应项设置 <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">customUrl</code> 永久覆盖。
          </p>
        </div>
      </section>
    </>
  )
}
