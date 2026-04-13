"use client"
import React from 'react'
import PrintForgeLogo from "@/public/printforge-logo.png"
import PrintForgeLogoIcon from "@/public/printforge-logo-icon.png"
import NavLink from './NavLink';
import Link from 'next/link' 
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname()
  return (
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Link href="/">
              <div className="relative cursor-pointer">
                {/* Desktop logo */}
                <img
                  src={PrintForgeLogo.src}
                  alt="PrintForge Logo"
                  className="w-[200px] h-auto hidden md:block"
                />
                {/* Mobile logo */}
                <img
                  src={PrintForgeLogoIcon.src}
                  alt="PrintForge Logo"
                  className="w-[40px] h-auto block md:hidden"
                />
              </div>
            </Link>
            <ul className="flex items-center gap-2.5">
                <NavLink href="/3d-models" isActive= {pathname.startsWith("/3d-models")} >3D Models</NavLink>
                <NavLink href="/about" isActive= {pathname === "/about"}>About</NavLink>
            </ul>
          </nav>
        </header>
  )
}
