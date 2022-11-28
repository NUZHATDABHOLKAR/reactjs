import React from 'react'
function abc(){
 alert("THANK YOU FOR ORDER")
}
export default function Card(props) {
  return (
    <div className='p-1 border-2 border-white rounded-lg bg-white drop-shadow-xl ml-4 hover:bg-yellow-50'>
      <div className='flex'>
        <div>
        <p className=" border-2 border-grey-200 rounded-full w-8 h-8 text-center text-xl text-slate-500">{props.no}</p>
        <h4 className='text-slate-400'>{props.food}</h4>

     </div>
     
     <h6 className='text-xs text-slate-300 mx-4 my-2 hover:text-amber-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eveniet officia quas eligendi expedita veniam sunt.Fugiat corporis obcaecati doloremque?</h6>
     </div>
     <h1 className='text-center text-2xl '>{props.name}</h1>
     <hr className='my-4 '/>
     <img  className='w-80 h-60 mx-auto' src={props.IMG} alt="" />
     <div className='flex'><button className="mx-auto border-2 border-yellow-200 rounded-full my-4  p-2 px-4  hover:bg-yellow-200" >Order now</button><button className="mx-auto border-2 border-yellow-200 rounded-full my-4  p-2 px-4  hover:bg-yellow-200" >{props.price}</button></div>
    </div>
  )
}
