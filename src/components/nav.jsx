import React from 'react'

export default function Nav() {
    const containerStyle = {
        backgroundImage: `url(${'banner.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className='w-screen'>

            <div style={containerStyle} className='h-1/3'>
                <div className='flex flex-row justify-evenly'>
                    <div className='px-3'>
                        <img src={'aasf.png'} width={70} height={70} className='rounded-full invert' alt="" srcset="" />
                    </div>
                    <div className='flex flex-row w-full p-3 justify-evenly'>
                        <h1 className='text-xl px-4 py-2 rounded-full grayimg text-white hover:shadow-lg hover:scale-105 duration-300 hover:cursor-pointer'>Home</h1>
                        <h1 className='text-xl px-4 py-2 rounded-full grayimg text-white hover:shadow-lg hover:scale-105 duration-300 hover:cursor-pointer'>About</h1>
                        <h1 className='text-xl px-4 py-2 rounded-full grayimg text-white hover:shadow-lg hover:scale-105 duration-300 hover:cursor-pointer'>Quiz</h1>
                        <h1 className='text-xl px-4 py-2 rounded-full grayimg text-white hover:shadow-lg hover:scale-105 duration-300 hover:cursor-pointer'>Games</h1>
                    </div>
                    <div className='p-3'>
                        <div className='text-lg  bg-yellow-300 px-7 py-2 hover:text-black hover:shadow-lg hover:scale-105 duration-300 hover:cursor-pointer rounded-full'>
                            Login
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
