import React from 'react'
import Card from './Card'
function Evening() {
  return (
    <div className=' p-2 lg:p-8 bg-slate-50 '>
      <div className='flex flex-col  justify-around lg:flex-row mt-36'>
      <Card no="1" food="Evening" name="Aloo pakora" IMG="https://i.pinimg.com/564x/b4/53/b5/b453b50a91b67b6e4f627d0038e5536e.jpg"price="39/- Rs "/>
      <Card no="2" food="Evening" name="pizza" IMG="https://i.pinimg.com/236x/ac/b9/14/acb914bef0f871b6b166f39de2919dd5.jpg" price="229/- Rs "/>
      <Card no="3" food="Evening" name="Samosa" IMG="https://i.pinimg.com/236x/35/47/90/354790ef813f126fbd51c52e7958f1ab.jpg" price="29/- Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="4" food="Evening" name="Onion pakora" IMG="https://i.pinimg.com/236x/e8/d3/ab/e8d3abe75f858be325f36c055a39615e.jpg"price="39/- Rs "/>
      <Card no="5" food="Evening" name="panipuri" IMG="https://i.pinimg.com/236x/d8/70/b6/d870b6029ff191266a9a3237e068e7d6.jpg" price="49/- Rs "/>
      <Card no="6" food="Evening" name="Dosa" IMG="https://i.pinimg.com/236x/61/23/74/612374b37b28b6790d6fbcb2ab5e8f82.jpg" price="69/- Rs"/>
      </div>
      </div>
  )
}

export default Evening