import React from 'react'
import Link from 'next/link';
function layout({children}) {
  return (
    <div className='innerWrapper flex gap-5'>
        <div className='siderBar col-span-3'>
            <h2 className="mb-6 text-sm font-semibold text-gray-600 uppercase text-white">About Sub Page</h2>
            <ul className="top-link gap-3">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about/missionvision">Mission & Vision</Link></li>
              <li><Link href="/about/message">Message</Link></li>
              <li><Link href="/about/team">Team</Link></li>
            </ul>
        </div>
        <div className='subPageContent'>{children}</div>
        </div>
  )
}

export default layout;