interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.question}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-base font-semibold text-navy md:text-lg">{item.question}</h3>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 md:text-base">
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  )
}
