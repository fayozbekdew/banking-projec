import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"
import BankCard from "./BankCard"

function RightSidebar({user, transactions, banks}: RightSidebarProps) {
  return (
    <aside className="w-[300px]">
        <section className="flex flex-col ">
          <div className="profile-banner" />
          <div className="profile">
            <div className="profile-img">
                <span className="text-5xl font-bold text-blue-500">
                    {user?.name[0]}
                </span>
            </div>
            <div className="profile-details">
                <h1 className="profile-name">
                    {user?.name}
                </h1>
                <p className="profile-email">
                    {user?.email}
                </p>
            </div>
          </div>
        </section>
        <section className="banks">
           <div className="w-full flex justify-between">
            <h2 className="header-2">My Banks</h2>
            <Link href='/' className="flex gap-2 ">
                <Image 
                src='/icons/plus.svg'
                width={20}
                height={20}
                alt='plus icon'
                />
                <h2 className="text-14 font-semibold text-gray-600">
Add Bank
                </h2>
            </Link>
           </div>
           {banks?.length > 0 && (
            <div className="flex flex-1 relative flex-col items-center justify-center gap-5">
                <div className="relative z-10">
                    <BankCard
                    key={banks[0].$id}
                    account={banks[0]}
                    userName={`${user.firstName} ${user.lastName}`}
                    showBalance={false}
                    />
                </div>
                {banks[1] && (
                    <div className="absolute right-0 top-8 z-0 w-[90%]">
                        <BankCard
                    key={banks[1].$id}
                    account={banks[1]}
                    userName={`${user.firstName} ${user.lastName}`}
                    showBalance={false}
                    />
                    </div>
                )}
            </div>
           )}
        </section>
    </aside>
  )
}

export default RightSidebar