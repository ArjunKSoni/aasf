import React from 'react'
import { motion } from 'framer-motion';

export default function PreviousEvents() {
    return (
        <div className='flex'>
            <div className='p-5 widthPrev'>
                <div className='flex'>
                    <h1 className='text-2xl flex-1 font-bold border-b-4 border-yellow-400'>Previous</h1>
                    <h1 className=' hover:cursor-pointer hover:text-blue-500 duration-300 font-bold'>{'see all >>'}</h1>
                </div>
                <div className='flex flex-row gap-6 overflow-x-scroll p-4'>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.1 },
                        }} initial={{ scale: 1 }} className="hover:cursor-pointer PrevEvent hover:rounded-3xl duration-300 overflow-hidden shadow shadow-black" style={{
                            backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/08/15/05/37/lighthouse-8191282_1280.jpg)', backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <motion.div className='h-full w-full duration-300 hover:backdrop-blur-sm bg-black/30 flex flex-col justify-end p-5'>
                            <h1 className='text-white font-bold '>21 May 2023 Campus</h1>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, repudiandae.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.1 },
                        }} initial={{ scale: 1 }} className="hover:cursor-pointer PrevEvent hover:rounded-3xl duration-300 overflow-hidden shadow shadow-black" style={{
                            backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/08/15/05/37/lighthouse-8191282_1280.jpg)', backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <motion.div className='h-full w-full duration-300 hover:backdrop-blur-sm bg-black/30 flex flex-col justify-end p-5'>
                            <h1 className='text-white font-bold '>21 May 2023 Campus</h1>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, repudiandae.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.1 },
                        }} initial={{ scale: 1 }} className="hover:cursor-pointer PrevEvent hover:rounded-3xl duration-300 overflow-hidden shadow shadow-black" style={{
                            backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/08/15/05/37/lighthouse-8191282_1280.jpg)', backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <motion.div className='h-full w-full duration-300 hover:backdrop-blur-sm bg-black/30 flex flex-col justify-end p-5'>
                            <h1 className='text-white font-bold '>21 May 2023 Campus</h1>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, repudiandae.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.1 },
                        }} initial={{ scale: 1 }} className="hover:cursor-pointer PrevEvent hover:rounded-3xl duration-300 overflow-hidden shadow shadow-black" style={{
                            backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/08/15/05/37/lighthouse-8191282_1280.jpg)', backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <motion.div className='h-full w-full duration-300 hover:backdrop-blur-sm bg-black/30 flex flex-col justify-end p-5'>
                            <h1 className='text-white font-bold '>21 May 2023 Campus</h1>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, repudiandae.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div className='p-5 widthUp'>
                <div className='flex'>
                    <h1 className='text-2xl flex-1 font-bold border-b-4 border-yellow-400'>Upcoming</h1>
                    <h1 className=' hover:cursor-pointer hover:text-blue-500 duration-300 font-bold'>{'see all >>'}</h1>
                </div>
                <div className='overflow-y-scroll upcomingEvent'>
                    <div className='flex gap-4 p-3'>
                        <img className='rounded-lg' src="https://cdn.pixabay.com/photo/2023/09/10/05/40/motmot-8244307_640.jpg" width={100} height={100} alt="" srcset="" />
                        <div>
                            <h4 className=' text-gray-500 text-xs'>21 July 2023, MITS CAMPUS</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, itaque mollitia dolor atque eveniet esse.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 p-3'>
                        <img className='rounded-lg' src="https://cdn.pixabay.com/photo/2023/09/10/05/40/motmot-8244307_640.jpg" width={100} height={100} alt="" srcset="" />
                        <div>
                            <h4 className=' text-gray-500 text-xs'>21 July 2023, MITS CAMPUS</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, itaque mollitia dolor atque eveniet esse.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 p-3'>
                        <img className='rounded-lg' src="https://cdn.pixabay.com/photo/2023/09/10/05/40/motmot-8244307_640.jpg" width={100} height={100} alt="" srcset="" />
                        <div>
                            <h4 className=' text-gray-500 text-xs'>21 July 2023, MITS CAMPUS</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, itaque mollitia dolor atque eveniet esse.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 p-3'>
                        <img className='rounded-lg' src="https://cdn.pixabay.com/photo/2023/09/10/05/40/motmot-8244307_640.jpg" width={100} height={100} alt="" srcset="" />
                        <div>
                            <h4 className=' text-gray-500 text-xs'>21 July 2023, MITS CAMPUS</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, itaque mollitia dolor atque eveniet esse.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 p-3'>
                        <img className='rounded-lg' src="https://cdn.pixabay.com/photo/2023/09/10/05/40/motmot-8244307_640.jpg" width={100} height={100} alt="" srcset="" />
                        <div>
                            <h4 className=' text-gray-500 text-xs'>21 July 2023, MITS CAMPUS</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, itaque mollitia dolor atque eveniet esse.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 p-3'>
                        <img className='rounded-lg' src="https://cdn.pixabay.com/photo/2023/09/10/05/40/motmot-8244307_640.jpg" width={100} height={100} alt="" srcset="" />
                        <div>
                            <h4 className=' text-gray-500 text-xs'>21 July 2023, MITS CAMPUS</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, itaque mollitia dolor atque eveniet esse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
