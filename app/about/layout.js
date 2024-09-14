import Link from 'next/link'
import React from 'react'

export default function AboutLayout({children}) {
  return (
    <div>
        <nav>
          <ul className="mt-6 mb-6 flex gap-6">
            <li><Link href="/about/mission">Mission</Link></li>
            <li><Link href="/about/vision">Vision</Link></li>
          </ul>
        </nav>
        {children}
    </div>
  )
}
