import React, { useState } from 'react'
import img from '../component/Img/Clogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';


const Signup =  () => {




  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleChange = (e)=> {
if(e.target.name == "name"){
setName(e.target.value)

}
else if(e.target.name == "email"){
  setEmail(e.target.value)
  
  }

  else if(e.target.name == "password"){
    setPassword(e.target.value)
    
    }

  }





const onFormSubmit = async (e)=>{
e.preventDefault()
  let data = {name, email, password}
  let response = await fetch('http://localhost:3000/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(Object.keys(result));


if(Object.keys(result)== "sucess"){
  toast.success('Signup Successful', {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  } else { toast.error('Email Already Exists ', {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });}

setName('')
setEmail('')
setPassword('')

}




  return (
    <div>
      <ToastContainer
position="top-left"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
       <div>



<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
  <Image class="mx-auto mt-0 mb-0 h-90 w-auto" src={img} height={100} width={100}  />
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Signup Now</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" onSubmit={onFormSubmit} method="POST">

        <div class="">
          <input onChange={handleChange} value={name} id="name" name="name" type="text" placeholder='  Name' autocomplete="name" required class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm "/>
        </div>

        <div class="">
          <input onChange={handleChange} value={email} id="email" name="email" type="email" placeholder='  Email address' autocomplete="email" required class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm "/>
        </div>
   

      <div>
        <div class="flex items-center justify-between">
         
        </div>
        <div class="">
          <input onChange={handleChange} value={password} id="password" name="password" type="password" placeholder='  Password' autocomplete="current-password" required class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign Up</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Already a member?
      <Link href="login" class="font-semibold leading-6 text-pink-600 hover:text-pink-500">Login Now!</Link>
    </p>
  </div>
</div>


    </div>
    </div>
  )
}

export default Signup