interface FilterTabsProps {
  tabs: string[]
  activeTab: string
  onTabChange?: (tab: string) => void
  getLabel?: (tab: string) => string
}

export default function FilterTabs({ tabs, activeTab, onTabChange, getLabel }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {tabs.map((tab) => {
        const isActive = tab === activeTab
        const label = getLabel ? getLabel(tab) : tab
        const className = `rounded-full px-4 py-2 text-sm font-medium transition-colors md:px-5 md:py-2.5 ${
          isActive
            ? 'bg-accent text-white'
            : 'border border-gray-200 bg-white text-navy/70 hover:border-accent/40 hover:text-accent'
        }`

        if (onTabChange) {
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              aria-pressed={isActive}
              className={className}
            >
              {label}
            </button>
          )
        }

        return (
          <span key={tab} className={className}>
            {label}
          </span>
        )
      })}
    </div>
  )
}
