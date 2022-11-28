import React from 'react'
import Card from './Card'


function Breakfast() {
  return (
    <div className=' p-2 lg:p-8 bg-slate-50 '>
      <div className='flex flex-col  justify-around lg:flex-row mt-36'>
      <Card no="1" food="BreakFast" name="Chai" IMG="https://i.pinimg.com/236x/dc/ed/fa/dcedfa89b05aa584eb800db3973ec260.jpg"price="20/- Rs "/>
      <Card no="2" food="BreakFast" name="Khanda phoa" IMG="https://i.pinimg.com/236x/ea/0c/7a/ea0c7ab8c486d3988e5f4b252a4e79ef.jpg" price="29/- Rs "/>
      <Card no="3" food="BreakFast" name="Rava sheera " IMG="https://i.pinimg.com/236x/48/83/9b/48839bf8a5449500326650cf10a003ba.jpg" price="15/- Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="4" food="BreakFast" name="Omelete pav" IMG="https://i.pinimg.com/236x/09/85/fc/0985fc0ee1f6e3f798f3bdc663df14ad.jpg" price="20/- Rs "/>
      <Card no="2" food="BreakFast" name="Puri" IMG="https://i.pinimg.com/564x/f9/98/db/f998db7a2433ba24aa16229a82b258d5.jpg" price="30/- Rs "/>
      <Card no="3" food="BreakFast" name="Vada pav " IMG="https://i.pinimg.com/236x/77/9b/24/779b247b59b2493c2bef45e9369d5228.jpg" price="29/- Rs"/>
      </div>
      </div>
  )
}

export default Breakfast