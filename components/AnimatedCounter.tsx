'use client'
import CountUp from 'react-countup'

function AnimatedCounter({amount} : {amount: number}) {
  return (
    <div className='w-full'>
       <CountUp 
       end={amount}
       decimals={2}
       decimal=','
       duration={2.5}
        prefix={'$'}
       />
    </div>
  )
}

export default AnimatedCounter