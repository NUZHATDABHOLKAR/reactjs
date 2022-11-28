import React from 'react'
import Card from './Card'
function All() {
  return (
    <div className=' p-2 lg:p-8 bg-slate-50'>
      <div className='flex flex-col  justify-around lg:flex-row mt-36'>
      <Card no="1" food="Dinner" name="Fruit salad" IMG="https://i.pinimg.com/236x/af/61/6c/af616c58b59c722a1ff3a248cdff7e53.jpg"price="199/- Rs "/>
      <Card no="2" food="Dinner" name="fruitveg salad " IMG="https://i.pinimg.com/236x/24/e6/2f/24e62f472d28725ef5a59333337674cb.jpg" price="249/- Rs "/>
      <Card no="3" food="Dinner" name="Vegetable Salad" IMG="https://i.pinimg.com/236x/af/bc/67/afbc678aedfc1ed49b0863b19901065a.jpg" price="199/- Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row'>
      <Card no="4" food="Evening" name="Aloo pakora" IMG="https://i.pinimg.com/564x/b4/53/b5/b453b50a91b67b6e4f627d0038e5536e.jpg"price="39/- Rs "/>
      <Card no="5" food="Evening" name="pizza" IMG="https://i.pinimg.com/236x/ac/b9/14/acb914bef0f871b6b166f39de2919dd5.jpg" price="229/- Rs "/>
      <Card no="6" food="Evening" name="Samosa" IMG="https://i.pinimg.com/236x/35/47/90/354790ef813f126fbd51c52e7958f1ab.jpg" price="29/- Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="7" food="Lunch" name="Mutton Birayni " IMG="https://i.pinimg.com/236x/a4/26/36/a4263672a53084a8bbd7ea50ce3dc291.jpg" price="199/-  Rs"/>
      <Card no="8" food="Lunch" name="Chicken Biryani" IMG="https://i.pinimg.com/236x/1b/0b/35/1b0b355d3cc81b926df0c911c7032e74.jpg" price="179/-  Rs"/>
      <Card no="9" food="Lunch" name="Dal Fry" IMG="https://i.pinimg.com/564x/62/ba/8d/62ba8df1428a1e2a32c788bec196a69b.jpg" price="119/-  Rs"/>
      </div>
      
      <div className='flex flex-col  justify-around lg:flex-row'>
      <Card no="10" food="BreakFast" name="Chai" IMG="https://i.pinimg.com/236x/dc/ed/fa/dcedfa89b05aa584eb800db3973ec260.jpg"price="20/- Rs "/>
      <Card no="11" food="BreakFast" name="Khanda phoa" IMG="https://i.pinimg.com/236x/ea/0c/7a/ea0c7ab8c486d3988e5f4b252a4e79ef.jpg" price="29/- Rs "/>
      <Card no="12" food="BreakFast" name="Rava sheera " IMG="https://i.pinimg.com/236x/48/83/9b/48839bf8a5449500326650cf10a003ba.jpg" price="15/- Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="13" food="Evening" name="Onion pakora" IMG="https://i.pinimg.com/236x/e8/d3/ab/e8d3abe75f858be325f36c055a39615e.jpg"price="39/- Rs "/>
      <Card no="14" food="Evening" name="panipuri" IMG="https://i.pinimg.com/236x/d8/70/b6/d870b6029ff191266a9a3237e068e7d6.jpg" price="49/- Rs "/>
      <Card no="15" food="Evening" name="Dosa" IMG="https://i.pinimg.com/236x/61/23/74/612374b37b28b6790d6fbcb2ab5e8f82.jpg" price="69/- Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="16" food="Lunch" name="Zera Rice" IMG="https://i.pinimg.com/564x/f4/28/32/f428323e4eb88ba70962251e35353354.jpg" price="99/-  Rs"/>
      <Card no="17" food="Lunch" name="Dal Makhni" IMG="https://i.pinimg.com/236x/0e/67/63/0e6763a0866b0c14fdf66b2433cd310c.jpg"price="199/-  Rs"/>
      <Card no="18" food="Lunch" name="Masala Rice" IMG="https://i.pinimg.com/236x/6d/e1/c1/6de1c11625c8a0ab9030bb02ae0b0de6.jpg"price="129/-  Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="19" food="Dinner" name="Panjabi thali" IMG="https://i.pinimg.com/236x/21/c0/3d/21c03d951d05879f802c04d54c48402c.jpg"price="399/- Rs "/>
      <Card no="20" food="Dinner" name="Mutton " IMG="https://i.pinimg.com/236x/f8/bb/ba/f8bbba8bb9e9479da88439975c1a98d7.jpg" price="249/- Rs "/>
      <Card no="21" food="Dinner" name="Rajma chawal" IMG="https://i.pinimg.com/236x/62/be/ce/62becee271caf4db4c9cf6c29eba39a4.jpg" price="199/- Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="22" food="BreakFast" name="Omelete pav" IMG="https://i.pinimg.com/236x/09/85/fc/0985fc0ee1f6e3f798f3bdc663df14ad.jpg" price="20/- Rs "/>
      <Card no="23" food="BreakFast" name="Puri" IMG="https://i.pinimg.com/564x/f9/98/db/f998db7a2433ba24aa16229a82b258d5.jpg" price="30/- Rs "/>
      <Card no="24" food="BreakFast" name="Vada pav " IMG="https://i.pinimg.com/236x/77/9b/24/779b247b59b2493c2bef45e9369d5228.jpg" price="29/- Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="25" food="Lunch" name="Zera Rice" IMG="https://i.pinimg.com/564x/f4/28/32/f428323e4eb88ba70962251e35353354.jpg" price="99/-  Rs"/>
      <Card no="26" food="Lunch" name="Dal Makhni" IMG="https://i.pinimg.com/236x/0e/67/63/0e6763a0866b0c14fdf66b2433cd310c.jpg" price="199/-  Rs"/>
      <Card no="27" food="Lunch" name="Masala Rice" IMG="https://i.pinimg.com/236x/6d/e1/c1/6de1c11625c8a0ab9030bb02ae0b0de6.jpg" price="129/-  Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="28" food="Dinner" name="South thali" IMG="https://i.pinimg.com/236x/2b/04/5d/2b045d361ca6d0b02bd8b10f0fc55b8f.jpg"price="349/- Rs "/>
      <Card no="29" food="Dinner" name="Fish carry" IMG="https://i.pinimg.com/236x/95/bc/39/95bc394c4215fcc79e98a7838389dcdd.jpg" price="49/- Rs "/>
      <Card no="30" food="Dinner" name="Hydarabdhi biryani" IMG="https://i.pinimg.com/236x/0f/54/f9/0f54f99bb592318def00786e6676e36d.jpg" price="499/- Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="31" food="Lunch" name="Paneer onion baji with Roti " IMG="https://i.pinimg.com/236x/b4/e7/79/b4e779e40c16a7ae75d84b3f7ff257e3.jpg"price="139/-  Rs"/>
      <Card no="32" food="Lunch" name="Roti" IMG="https://i.pinimg.com/236x/4b/37/89/4b37895ee959c98f8f90cbcbff37481c.jpg"  price="29/-  Rs"/>
      <Card no="33" food="Lunch" name="Naan" IMG="https://i.pinimg.com/236x/27/29/69/2729695a20b0e8ea07dfd75e9d754d09.jpg" price="39/-  Rs"/>
      </div>
    </div>
  
  )
}

export default All