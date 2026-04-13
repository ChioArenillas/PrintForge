
import Link from "next/link"
import { NavLinkProps } from "../types"

export default function NavLink({ href, children, isActive }: NavLinkProps) {
  const linkColor = isActive ? 'text-[#F77D36]' : 'text-gray-700'
  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-[#F77D36] 
            ${linkColor}`}
      >
        {children}
      </Link>
    </li>
  )
}

