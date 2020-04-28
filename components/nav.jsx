import Link from 'next/link'
import { useModal } from 'react-modal-hook'

import Banner from './banner'

const links = [
  { href: '/instructions', label: 'Make' },
  {
    href: 'https://charity.gofundme.com/o/en/campaign/makers-united-against-covid-19',
    label: 'Donate'
  },
]

export default function Nav({ home }) {
  return (
    <>
      <nav className={home ? 'bg-cool-gray-900' : 'bg-cool-gray-900 mb-8'}>
        <ul className="w-full flex justify-between items-center px-6 py-4 pt-6">
          <li>
            <Link href="/">
              <a className="flex flex-nowrap items-center">
                <img src="NYCMakesPPELogo.svg" className="mr-3 w-10" />
                <span className="text-white font-semibold hidden md:block">
                  CRASHSpace COVID19
                </span>
              </a>
            </Link>
          </li>
          <ul className="flex justify-between items-center">
            {links.map(({ href, label, hide }) => (
              <li
                key={`${href}${label}`}
                className={hide ? 'ml-4 hidden md:block' : 'ml-4'}
              >
                <a href={href} className="btn-blue no-underline text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </>
  )
}
