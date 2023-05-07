import React from 'react'
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-between items-center flex-col p-5 max-w-[1240px] mx-auto'>
        <nav className='flex justify-between items-center w-full mb-10 pt3'>
            <img src={logo} alt="logo" className='w-32 object-contain' />

            <button
                type='button'
                className='text-white bg-blue-700 px-6 py-2 rounded-full'
            >
                Github    
            </button> 
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='orange_gradient'>OPENAI GPT-4</span>
        </h1>
        <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero