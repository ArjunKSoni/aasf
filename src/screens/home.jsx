import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
import PreviousEvents from '../components/PreviousEvents';
import {motion} from 'framer-motion';
import Gallery from '../components/Gallery';
import FaQ from '../components/FaQ';

export default function Home() {
  const containerStyle = {
    backgroundImage: `url(${'banner.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};
const [isBlurred, setIsBlurred] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 10;
            if (window.scrollY >= scrollThreshold) {
                setIsBlurred(true);
            } else {
                setIsBlurred(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div className=' h-screen'>
      <Nav blur={isBlurred}/>
      <motion.h1 animate={isBlurred?{x:0,y:0,scale:1}:{x:0,y:0,scale:0}} transition={{type:"tween",duration:1}} className='fixed top-16 text-2xl font-bold ml-2 text-black/50'>AASF</motion.h1>
      <div style={containerStyle} className=' h-1/3 w-full mb-2'>
        <motion.div animate={isBlurred?{x:0,y:50,scale:0.5}:{x:0,y:0,scale:1}} transition={{type:"tween",duration:1}} className='flex flex-col w-full h-full justify-center items-center pt-4'>
          <h1 className='text-white text-5xl font-extrabold drop-shadow-2xl'>Abhigyan <span className='text-yellow-300'>Abhikaushalam</span> Students</h1>
          <h1 className='text-white text-4xl drop-shadow-2xl'>Forum</h1>
        </motion.div>
      </div>
      <PreviousEvents/>  
      <Gallery/>
      <FaQ/>
    </div>
  )
}
