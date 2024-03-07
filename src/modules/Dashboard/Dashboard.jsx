import React from 'react'
import avatar from "../../assets/avatar.jpg"
import Input from '../../components/Input'

const Dashboard = () => {

  const contacts=[
    {
      name:"Muhammad Maaz",
      status:"available ",
      img:avatar
    },
    {
      name:"Muhammad Maaz",
      status:"available ",
      img:avatar
    },
    {
      name:"Muhammad Maaz",
      status:"available ",
      img:avatar
    },
    {
      name:"Muhammad Maaz",
      status:"available ",
      img:avatar
    },
    {
      name:"Muhammad Maaz",
      status:"available ",
      img:avatar
    },
  ]



  const renderContacts=contacts.map(({name,status,img})=>{
    return(
      <div className='flex p-2  cursor-pointer hover:bg-accent items-center mt-4'>
      <img src={img} className='h-14 rounded-full' alt="" />
      <div className='ml-4'>
        <h3 className='text-lg'>{name}</h3>
        <p className='text-sm'>{status}</p>
      </div>
    </div>  
    )
  })

  return (
    <div className='flex w-screen' >
        <div className="right w-[25%] min-h-screen border-black border-2 bg-primary   ">

          <div className='flex justify-center items-center mt-4'>
            <img src={avatar} className='h-20 rounded-full' alt="" />
            <div className='ml-4'>
              <h3 className='text-2xl'>Tutorial Dev</h3>
              <p className='text-lg'>My account</p>
            </div>
          </div>
          <hr className='mt-4'/>

          <h2 className='ml-4 text-accent'>Message</h2>

          {renderContacts}

        </div>
        <div className="center w-[50%] min-h-screen flex flex-col items-center border-black border-2">

          <div className='h-16 p-2 flex justify-between items-center bg-zinc-300 w-full'>

            <img src={avatar} alt="" className='h-full rounded-full' />
            <h2 className='text-4xl'>Name</h2>
            <p className='font-extrabold font-mono'> Online</p>

          </div>

          <div className='h-[80%] w-full  border-black border-2 over overflow-y-scroll'>
            <div className='h-[100px] px-4 py-5'>
                <div className='min-h-20 p-2 w-64 bg-accent rounded-lg'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, vel labore! Itaque, cum ab. Assumenda optio ipsa accusantium quae. Quis, sapiente perferendis ipsum provident a necessitatibus sed animi optio aliquid.
                </div>
                <div className='min-h-20 p-2 w-64 shadow-2xl	 bg-secondary rounded-lg mt-2 ml-auto'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde pariatur maxime vitae eius tempora recusandae consectetur necessitatibus temporibus, velit eveniet earum doloremque accusamus porro iste ipsa qui rem? Magnam?
                </div>
                <div className='min-h-20 p-2 w-64 shadow-2xl	 bg-secondary rounded-lg mt-2 ml-auto'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde pariatur maxime vitae eius tempora recusandae consectetur necessitatibus temporibus, velit eveniet earum doloremque accusamus porro iste ipsa qui rem? Magnam?
                </div>
            </div>
          </div>
          <div className='w-full p-4 flex items-center'>
          <Input className=' w-full p-4 border-0 ' label='Type a message' />
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" className='cursor-pointer' fill="none"/>
          <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
          <path d="M6.5 12h14.5" />

          
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-plus-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm0 6a1 1 0 0 0 -1 1v2h-2l-.117 .007a1 1 0 0 0 .117 1.993h2v2l.007 .117a1 1 0 0 0 1.993 -.117v-2h2l.117 -.007a1 1 0 0 0 -.117 -1.993h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z" fill="currentColor" stroke-width="0" />
</svg>
          
          </div>


        </div>
        <div className="left w-[25%] min-h-screen  border-black border-2"></div>
    </div>
  )
}

export default Dashboard