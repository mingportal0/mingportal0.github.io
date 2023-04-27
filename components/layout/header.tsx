import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import React from 'react'
import Link from './Link'
import { Icon } from '../util/icon'

export const Header = ({ data }) => {
  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState('')

  React.useEffect(() => {
    if (window && window.location.pathname.startsWith('/admin')) {
      setPrefix('/admin')
    }
  }, [])

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={data.name}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Icon
                parentColor={data.color}
                data={{
                  name: data.icon.name,
                  color: data.icon.color,
                  style: data.icon.style,
                }}
              />
            </div>
            {typeof data.name === 'string' ? (
              <div className="hidden h-full text-2xl font-semibold sm:block">
                {data.name}
              </div>
            ) : (
              data.name
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {data.nav.map((link) => (
            <Link
              key={link.label}
              href={`${prefix}/${link.href}`}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav data={data} />
      </div>
    </header>
  )
}
