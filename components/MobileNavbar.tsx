'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants/index"
import { cn } from "@/lib/utils"
import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"
import { usePathname } from '@/node_modules/next/navigation'
import Footer from "./Footer"

function MobileNavbar({user}: MobileNavProps) {
  const pathname = usePathname()
    return (
    <section >
        <Sheet>
          <SheetTrigger>
            <Image
            src='/icons/hamburger.svg'
            width={30}
            height={30}
            alt='hamburger menu'
            className="cursor-pointer"
            />
          </SheetTrigger>
            <SheetContent side="left" className='border-none bg-white'>
            <Link
        href='/'
        className='cursor-pointer flex items-center gap-1 px-4'
        >
        <Image
        src='/icons/logo.svg'
        width={34}
        height={34}
        alt='site logo'
        
        />
       <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'> Horizon</h1>
        </Link>
        <div className='mobilenav-sheet'>
           <SheetClose asChild>
             <nav className="flex h-full flex-col gap-6 pt-16 text-white">
             {sidebarLinks.map(item => {
            const isActive  =  pathname === item.route || pathname.startsWith(`${item.route}/`)
            return(
                <SheetClose asChild key={crypto.randomUUID()}>
                <Link 
                key={crypto.randomUUID()}
                href={item.route}
                className={cn('mobilenav-sheet_close w-full', {'bg-bankGradient': isActive})}
                >
               
                <Image 
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={cn({'brightness-[3] invert-0': isActive})}
                />
                <p className={cn('text-16 font-semibold text-black-2', {'text-white': isActive})}>
                    {item.label}
                </p>
                </Link>
                </SheetClose>
            )
        })}
             </nav>
           </SheetClose>
           <Footer user={user} type="mobile"/>
        </div>
        
  </SheetContent>
</Sheet>
    </section>
  )
}

export default MobileNavbar