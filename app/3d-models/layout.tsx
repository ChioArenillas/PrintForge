import React from 'react'
import ModelsNavbar from '../components/ModelsNavbar'
import { ModelsLayoutProps } from '../types'

export default function ModelsLayout({ children }: ModelsLayoutProps ) {
  return (
    <div>
        <ModelsNavbar />
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}
