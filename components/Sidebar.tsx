'use client'

import { sidebarLinks } from '@/constants/index'
import { cn } from '@/lib/utils'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import { usePathname } from '@/node_modules/next/navigation'
import React from 'react'
import Footer from './Footer'

function Sidebar({user}: SiderbarProps) {
  const pathname = usePathname()
    return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
        href='/'
        className='mb-12 cursor-pointer flex items-center gap-2'
        >
        <Image
        src='/icons/logo.svg'
        width={34}
        height={34}
        alt='site logo'
        className='size-[24px] max-xl:size-14'
        />
       <h1 className='sidebar-logo'> Horizon</h1>
        </Link>
        {sidebarLinks.map(item => {
            const isActive  =  pathname === item.route || pathname.startsWith(`${item.route}/`)
            return(
                <Link 
                key={crypto.randomUUID()}
                href={item.route}
                className={cn('sidebar-link', {'bg-bankGradient': isActive})}
                >
               
                <div className='relative size-6'>
                <Image 
                src={item.imgURL}
                alt={item.label}
                fill
                className={cn({'brightness-[3] invert-0': isActive})}
                />
                </div>
                <p className={cn('sidebar-label', {'!text-white': isActive})}>
                    {item.label}
                </p>
                </Link>
            )
        })}
      </nav>
      <Footer user={user} type="desktop"/>
    </section>
  )
}

export default Sidebar