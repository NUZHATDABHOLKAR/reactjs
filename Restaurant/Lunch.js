import React from 'react'
import Card from './Card'

function lunch() {
  return (
    <div className=' p-2 lg:p-8 bg-slate-50'>
      <div className='flex flex-col  justify-around lg:flex-row mt-36'>
      <Card no="1" food="Lunch" name="Dal Roti" IMG="https://i.pinimg.com/564x/e6/1b/80/e61b80831bcc31acd2a17aa5d85bb434.jpg" price="49/-  Rs"/>
      <Card no="2" food="Lunch" name=" Paneer Lazeez Makhni Biryani" IMG="https://i.pinimg.com/564x/20/7f/91/207f9108452facdba6b78840dbb8e6ff.jpg" price="119/-  Rs"/>
      <Card no="3" food="Lunch" name="Veg Pulao" IMG="https://i.pinimg.com/236x/61/55/5f/61555f289ba137e533066a67c7d558da.jpg" price="79/-  Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="4" food="Lunch" name="Mutton Birayni " IMG="https://i.pinimg.com/236x/a4/26/36/a4263672a53084a8bbd7ea50ce3dc291.jpg" price="199/-  Rs"/>
      <Card no="5" food="Lunch" name="Chicken Biryani" IMG="https://i.pinimg.com/236x/1b/0b/35/1b0b355d3cc81b926df0c911c7032e74.jpg" price="179/-  Rs"/>
      <Card no="6" food="Lunch" name="Dal Fry" IMG="https://i.pinimg.com/564x/62/ba/8d/62ba8df1428a1e2a32c788bec196a69b.jpg" price="119/-  Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="7" food="Lunch" name="Zera Rice" IMG="https://i.pinimg.com/564x/f4/28/32/f428323e4eb88ba70962251e35353354.jpg" price="99/-  Rs"/>
      <Card no="8" food="Lunch" name="Dal Makhni" IMG="https://i.pinimg.com/236x/0e/67/63/0e6763a0866b0c14fdf66b2433cd310c.jpg" price="199/-  Rs"/>
      <Card no="9" food="Lunch" name="Masala Rice" IMG="https://i.pinimg.com/236x/6d/e1/c1/6de1c11625c8a0ab9030bb02ae0b0de6.jpg" price="129/-  Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="10" food="Lunch" name="Paneer onion baji with Roti " IMG="https://i.pinimg.com/236x/b4/e7/79/b4e779e40c16a7ae75d84b3f7ff257e3.jpg"price="139/-  Rs"/>
      <Card no="11" food="Lunch" name="Roti" IMG="https://i.pinimg.com/236x/4b/37/89/4b37895ee959c98f8f90cbcbff37481c.jpg"  price="29/-  Rs"/>
      <Card no="12" food="Lunch" name="Naan" IMG="https://i.pinimg.com/236x/27/29/69/2729695a20b0e8ea07dfd75e9d754d09.jpg" price="39/-  Rs"/>
      </div>
    </div>
  )
}

export default lunch