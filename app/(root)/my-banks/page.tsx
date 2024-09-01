import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const banks = [
    {
      $id: "bank001",
      accountId: "acc001",
      bankId: "bank001",
      accessToken: "token001",
      bankName: "Chase Bank",
      accountType: "Savings",
      currentBalance: 8500.75,
      accountHolderName: "Alice Johnson",
      accountNumber: "9876543210",
      name: "Emergency Fund"
    },
    {
      $id: "bank002",
      accountId: "acc002",
      bankId: "bank002",
      accessToken: "token002",
      bankName: "Wells Fargo",
      accountType: "Checking",
      currentBalance: 1250.00,
      accountHolderName: "Bob Smith",
      accountNumber: "1234567891",
      name: "Daily Expenses"
    },
    {
      $id: "bank003",
      accountId: "acc003",
      bankId: "bank003",
      accessToken: "token003",
      bankName: "Bank of America",
      accountType: "Checking",
      currentBalance: 2400.45,
      accountHolderName: "Carol White",
      accountNumber: "4567891230",
      name: "Household"
    },
    {
      $id: "bank004",
      accountId: "acc004",
      bankId: "bank004",
      accessToken: "token004",
      bankName: "CitiBank",
      accountType: "Savings",
      currentBalance: 5000.00,
      accountHolderName: "David Lee",
      accountNumber: "7891234560",
      name: "Vacation Savings"
    },
    {
      $id: "bank005",
      accountId: "acc005",
      bankId: "bank005",
      accessToken: "token005",
      bankName: "HSBC",
      accountType: "Checking",
      currentBalance: 3050.30,
      accountHolderName: "Emily Davis",
      accountNumber: "1597534860",
      name: "Investment Account"
    },
    {
      $id: "bank006",
      accountId: "acc006",
      bankId: "bank006",
      accessToken: "token006",
      bankName: "Capital One",
      accountType: "Checking",
      currentBalance: 720.89,
      accountHolderName: "Frank Martin",
      accountNumber: "7531594826",
      name: "Shopping Account"
    }
  ];
  
  return (
    <section className='flex'>
      <div className="my-banks">
        <HeaderBox 
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activites."
        />

        <div className="space-y-4">
          <h2 className="header-2">
            Your cards
          </h2>
          <div className="flex flex-wrap gap-6">
          {banks.length >= 1  && (
            banks.map(item => (
                    <BankCard
                    key={item.$id}
                    account={item}
                    userName={loggedIn?.name}
                    showBalance={false}
                    />
            ))
          ) }
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks