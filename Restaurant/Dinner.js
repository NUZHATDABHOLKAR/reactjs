import Card from "./Card"
function Dinner() {
  return (
    <div className=' p-2 lg:p-8 bg-slate-50'>
      <div className='flex flex-col  justify-around lg:flex-row mt-36'>
      <Card no="1" food="Dinner" name="Fruit salad" IMG="https://i.pinimg.com/236x/af/61/6c/af616c58b59c722a1ff3a248cdff7e53.jpg"price="199/- Rs "/>
      <Card no="2" food="Dinner" name="fruitveg salad " IMG="https://i.pinimg.com/236x/24/e6/2f/24e62f472d28725ef5a59333337674cb.jpg" price="249/- Rs "/>
      <Card no="3" food="Dinner" name="Vegetable Salad" IMG="https://i.pinimg.com/236x/af/bc/67/afbc678aedfc1ed49b0863b19901065a.jpg" price="199/- Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="1" food="Dinner" name="Panjabi thali" IMG="https://i.pinimg.com/236x/21/c0/3d/21c03d951d05879f802c04d54c48402c.jpg"price="399/- Rs "/>
      <Card no="2" food="Dinner" name="Mutton " IMG="https://i.pinimg.com/236x/f8/bb/ba/f8bbba8bb9e9479da88439975c1a98d7.jpg" price="249/- Rs "/>
      <Card no="3" food="Dinner" name="Rajma chawal" IMG="https://i.pinimg.com/236x/62/be/ce/62becee271caf4db4c9cf6c29eba39a4.jpg" price="199/- Rs"/>
      </div>
      <div className='flex flex-col  justify-around lg:flex-row my-4'>
      <Card no="1" food="Dinner" name="South thali" IMG="https://i.pinimg.com/236x/2b/04/5d/2b045d361ca6d0b02bd8b10f0fc55b8f.jpg"price="349/- Rs "/>
      <Card no="2" food="Dinner" name="Fish carry" IMG="https://i.pinimg.com/236x/95/bc/39/95bc394c4215fcc79e98a7838389dcdd.jpg" price="49/- Rs "/>
      <Card no="3" food="Dinner" name="Hydarabdhi biryani" IMG="https://i.pinimg.com/236x/0f/54/f9/0f54f99bb592318def00786e6676e36d.jpg" price="499/- Rs"/>
      </div>
      </div>
  )
}

export default Dinner