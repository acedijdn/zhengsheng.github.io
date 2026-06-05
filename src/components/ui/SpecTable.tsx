interface SpecTableProps {
  specs: { label: string; value: string }[]
}

export default function SpecTable({ specs }: SpecTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-6 py-4 font-semibold text-navy">参数项</th>
            <th className="px-6 py-4 font-semibold text-navy">数值</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr
              key={spec.label}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
            >
              <td className="px-6 py-4 text-navy/70">{spec.label}</td>
              <td className="px-6 py-4 font-medium text-navy">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
