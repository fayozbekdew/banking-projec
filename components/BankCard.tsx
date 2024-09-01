import { formatAmount } from "@/lib/utils"
import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"

function BankCard({account,userName,showBalance=true}: CreditCardProps) {
  return (
    <div className="flex flex-col w-[250px] h-[150px]">
        <Link href='/' className="bank-card">
            <div className="bank-card_content">
                <div>
                    <h1 className="text-16 font-semibold text-white">
                        {account.name || userName}
                    </h1>
                    <p className="font-ibm-plex-serif font-black text-white">
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>
                <article className="flex flex-col gap-2">  
                <div className="flex justify-between">
                    <h1 className="text-12 font-semibold text-white">
                        {userName}
                    </h1>
                    <h1 className="text-12 font-semibold text-white">
                        **/**
                    </h1>
                </div>
                <p className="text-14 font-semibold flex items-center  text-white tracking-[1.1px]">
                    **** **** **** <span className="text-14 ml-1">{1234}</span>
                </p>
                </article>
                
            </div>
            <div className="bank-card_icon">
              <Image 
              src='/icons/Paypass.svg'
              height={20}
              width={20}
              alt='credit card icon'
              />
              <Image 
              src='/icons/mastercard.svg'
              height={45}
              width={32}
              alt='credit card icon'
              className="ml-8"
              />
            </div>
            <Image
            src='/icons/lines.svg'
            width={316}
            height={190}
            alt='lines'
            className="absolute top-0 left-0"
            />
        </Link>
    </div>
  )
}

export default BankCard