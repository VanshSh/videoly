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
import useAuthStore from '../store/authStore'


const Navbar = () => {

  const { userProfile, addUser, removeUser } = useAuthStore()
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-2'>
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
        {userProfile ? (
          <div className='flex gap-5 md:gap-10'>
            <Link href='/upload'>
              <button className='border-2 px-2 md:px-3 text-md gap-5 font-semibold flex items-center '>
                <IoMdAdd className='text-xl' />
                <span className='hidden md:block'>Upload</span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href='/'>
                <>
                  <Image width={40} height={40} className='rounded-full cursor-pointer' src={userProfile.image} alt='Profile photo' />
                </>
              </Link>
            )}
            <button type='button' className='px-2' onClick={() => {
              googleLogout();
              removeUser()
            }
            }>
              <AiOutlineLogout color='red' fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log('error')}
          />
        )}
      </div>
    </div >
  )
}

export default Navbar