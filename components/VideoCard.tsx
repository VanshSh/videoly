import next, { NextPage } from "next";
import { Video } from "../types";
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill, BsPlay } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';


interface IProps {
 post: Video
}
const VideoCard: NextPage<IProps> = ({ post }) => {
 console.log('138');

 return (
  <div className="flex flex-col border-b-2 border-gray-200 pb-6">
   <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
    <div className="md:w-16 md:h-16 w-10 h-10">

     <Link href='/'>
      <>
       <img width={62} height={62} className='rounded-full' src={post.postedBy.image} alt='Profile photo' />
      </>
     </Link>
    </div>
   </div>
  </div>
 );
}

export default VideoCard;