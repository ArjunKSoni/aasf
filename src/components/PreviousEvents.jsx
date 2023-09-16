import React from 'react'

export default function PreviousEvents() {
    return (
        <div className='flex'>
            <div className='p-5 w-2/3'>
                <div className='flex'>
                    <h1 className='text-2xl flex-1 font-bold border-b-4 border-yellow-400'>Previous</h1>
                    <h1 className=' hover:cursor-pointer hover:text-blue-500 duration-300 font-extrabold'>see all >></h1>
                </div>


            </div>
            <div className='p-5 w-1/3'>
                <div className='flex'>
                    <h1 className='text-2xl flex-1 font-bold border-b-4 border-yellow-400'>Upcoming</h1>
                    <h1 className=' hover:cursor-pointer hover:text-blue-500 duration-300 font-extrabold'>see all >></h1>
                </div>
            </div>
        </div>
    )
}
