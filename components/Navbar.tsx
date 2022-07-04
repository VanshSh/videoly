import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from "react-icons/io";
import tiktiklogo from '../utils/tiktik-logo.png'


const Navbar = () => {
 return (
  <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2'>
   <Link href='/'>
    <div>
     <Image src={tiktiklogo}
      alt='Logo'
      className='cursor-pointer'
      layout='responsive' />
    </div>
   </Link>
  </div>
 )
}

export default Navbar