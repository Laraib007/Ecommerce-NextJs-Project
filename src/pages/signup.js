import React from 'react'
import img from '../component/Img/Clogo.png'
import Image from 'next/image'
import Link from 'next/link'



const Signup = () => {
  return (
    <div>
       <div>



<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
  <Image class="mx-auto mt-0 mb-0 h-90 w-auto" src={img} height={100} width={100}  />
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Signup Now</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
        <div class="">
          <input id="name" name="name" type="text" autocomplete="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm "/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium  text-gray-900">Email address</label>
        <div class="">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm "/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
         
        </div>
        <div class="">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
       <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
         
        </div>
        <div class="">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
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