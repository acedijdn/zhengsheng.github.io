interface FilterTabsProps {
  tabs: string[]
  activeTab: string
}

export default function FilterTabs({ tabs, activeTab }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {tabs.map((tab) => (
        <span
          key={tab}
          className={`rounded-full px-4 py-2 text-sm font-medium md:px-5 md:py-2.5 ${
            tab === activeTab
              ? 'bg-accent text-white'
              : 'border border-gray-200 bg-white text-navy/70'
          }`}
        >
          {tab}
        </span>
      ))}
    </div>
  )
}
