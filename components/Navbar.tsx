import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from "react-icons/io";
import tiktiklogo from '../utils/tiktik-logo.png'
import { GoogleLogin, googleLogout } from "@react-oauth/google"
import { createOrGetUser } from '../utils'



const Navbar = () => {
  const user = false
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2'>
      <Link href='/'>
        <div className='w-[100px] md:w-[130px] md:h-[30px] h-[38px]'>
          <Image src={tiktiklogo}
            alt='Logo'
            className='cursor-pointer'
            layout='responsive' />
        </div>
      </Link>
      <div>
        Search
      </div>
      <div>
        {user ? (
          <div>LOGGEDIN</div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response)}
            onError={() => console.log('error')}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar