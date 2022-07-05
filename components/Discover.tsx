import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { topics } from '../utils/constants'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'

const Discover = () => {
 const activeTopicStyle = 'xl:border-2 hover:bg-primary xl:border-[#f51997] px-3 py-2 rounded xl:rounded-full flex  items-center gap-2 justify-center cursor-pointer text-[#ff1997]'

 const topicStyle = 'xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex  items-center gap-2 justify-center cursor-pointer text-black '

 const router = useRouter()
 const { topic } = router.query

 return (
  <div className='xl:border-b-2 xl:border-gray-200 pb-6'>

   <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>Popular Topics</p>
   <div className='flex gap-2 flex-wrap'>{topics.map((item) => (
    <Link key={item.name} href={`/?topic=${item.name}`}>

     <div className={topic === item.name ? activeTopicStyle : topicStyle}>
      <span className='font-bold text-2xl xl:text-md'>{item.icon}</span>
      <span className='font-medium capitalize text-md hidden xl:block '>{item.name}</span>
     </div>
    </Link>
   ))}</div>
  </div>
 )

}

export default Discover