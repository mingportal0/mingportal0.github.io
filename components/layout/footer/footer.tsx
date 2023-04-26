import React from 'react'
import Link from 'next/link'
import SocialIcon from '../../../components/social-icons'

export const Footer = ({ data, icon, rawData }) => {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="github" href={data.social.github} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>밍밍이</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">밍밍이의 작업실</Link>
        </div>
        <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
          <div>{` • `}</div>
          <Link href="https://tina.io/">Tina CMS</Link>
        </div>
      </div>
    </footer>
  )
}
