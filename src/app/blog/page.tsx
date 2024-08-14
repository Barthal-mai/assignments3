import React from 'react'
import Link from 'next/link';
import {blog} from "@/constants";
function blogpage() {
  return (
    <ul className="top-link flex gap-3">
      {
        blog.map((item,index)=>(
          <li><Link key={item.id} href={`/blog/${item.id}`}>{item.title}</Link></li>
        ))
      }
    
  </ul>
  )
}

export default blogpage;