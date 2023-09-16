import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
import PreviousEvents from '../components/PreviousEvents';

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
    <div className='w-screen h-screen'>
      <Nav blur={isBlurred}/>
      <div style={containerStyle} className=' h-1/3 w-full mb-2'>
        <div className='flex flex-col w-full h-full justify-center items-center pt-4'>
          <h1 className='text-white text-5xl drop-shadow-2xl'>Yours <span className='text-yellow-300'>Personalized</span> Students</h1>
          <h1 className='text-white text-4xl drop-shadow-2xl'>Forum</h1>
        </div>
      </div>
      <PreviousEvents/>
    </div>
  )
}
