import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
      <div>
        <h1>404</h1>
      </div>
      <Link href="/">Вернуться</Link>
    </div>
  )
}
