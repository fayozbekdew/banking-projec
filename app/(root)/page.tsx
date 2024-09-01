import TotalBalansBox from '@/components/TotalBalansBox'
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.action'
import { redirect } from '@/node_modules/next/navigation'

async function Home() {
  const loggedIn = await getLoggedInUser();
  if(!loggedIn) {redirect('/sign-in')}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
           <HeaderBox
           type="greeting"
           title="Welcome"
           subtext="Acces and manage your account and transactions efficiently."
           user={loggedIn?.name || 'Guest'}
           />
           <TotalBalansBox 
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={1234.56}
           />
        </header>
        Recent transaction
      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{
        $id: "bank123",
        accountId: "acc456",
        bankId: "bank789",
        accessToken: "token123",
        bankName: "Example Bank",
        accountType: "Checking",
        currentBalance: 1000.50,
        accountHolderName: "John Doe",
        accountNumber: "1234567890",
        name: "Personal Account"
      },{
        $id: "bank1234",
        accountId: "acc456",
        bankId: "bank789",
        accessToken: "token123",
        bankName: "Example Bank",
        accountType: "Checking",
        currentBalance: 1000.50,
        accountHolderName: "John Doe",
        accountNumber: "1234567890",
        name: "Personal Account2"
      }]}
      />
    </section>
  )
}

export default Home