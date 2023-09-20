import React from 'react'
import { motion } from 'framer-motion';

export default function Gallery() {
    return (
        <div className='flex gap-4 overflow-scroll'>
            <motion.h1 animate={{ rotate: -90, x: 70 }} transition={{ type: 'tween', delay: 1, duration: 1 }} className='text-8xl font-extrabold underline-offset-8 underline'>GALLERY</motion.h1>
            <motion.div animate={{ x: -200 }} transition={{ type: 'tween', delay: 1, duration: 1 }}
                className="hover:cursor-pointer hover:scale-125 Gallery hover:rounded-3xl duration-300 overflow-hidden shadow shadow-black" style={{
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/08/20/18/42/mushrooms-8202942_640.jpg)', backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className='w-full h-full hover:bg-black/20'></div>
            </motion.div>
            <motion.div animate={{ x: -200 }} transition={{ type: 'tween', delay: 1, duration: 1 }}
                className="hover:cursor-pointer hover:scale-125 Gallery hover:rounded-3xl duration-300 overflow-hidden shadow shadow-black" style={{
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/08/20/18/42/mushrooms-8202942_640.jpg)', backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className='w-full h-full hover:bg-black/20'></div>
            </motion.div>
            <motion.div animate={{ x: -200 }} transition={{ type: 'tween', delay: 1, duration: 1 }}
                className="hover:cursor-pointer hover:scale-125 Gallery hover:rounded-3xl duration-300 overflow-hidden shadow shadow-black" style={{
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/08/20/18/42/mushrooms-8202942_640.jpg)', backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className='w-full h-full hover:bg-black/20'></div>
            </motion.div>
            <motion.div animate={{ x: -200 }} transition={{ type: 'tween', delay: 1, duration: 1 }}
                className="hover:cursor-pointer hover:scale-125 Gallery hover:rounded-3xl duration-300 overflow-hidden shadow shadow-black" style={{
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/08/20/18/42/mushrooms-8202942_640.jpg)', backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className='w-full h-full hover:bg-black/20'></div>
            </motion.div>
            

        </div>
    )
}
