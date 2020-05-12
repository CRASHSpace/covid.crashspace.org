import Link from 'next/link'
import { useModal } from 'react-modal-hook'

import Banner from './banner'

const links = [
  { href: 'https://github.com/CRASHSpace/COVID-19-3dprints', label: 'Make' },
  {
    href:
      'https://bit.ly/crashcovid-donate',
    label: 'Donate'
  },
  { href: '/about', label: 'About' }
]

export default function Nav({ home }) {
  return (
    <>
      <nav className={home ? 'bg-cool-gray-900' : 'bg-cool-gray-900 mb-8'}>
        <ul className="w-full flex justify-between items-center px-6 py-4 pt-6">
          <li>
            <Link href="/">
              <a className="flex flex-nowrap items-center">
                
                  <img src="crashlogo.png" className="mr-3 w-10" />
                <span className="text-white font-semibold hidden md:block">
                  CRASH LA Makers United
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
