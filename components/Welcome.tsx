import React from 'react'
import Image from 'next/image'

const Welcome = () => {
  return (
    <section className='w-full'>
        <div className='md:my-24 text-center flex flex-col md:flex-row justify-around'>
            <div>
                <h1 className='mt-8 mb-3 md:mt-20 sm:text-xl md:text-3xl font-bold'>Welcome!</h1>
                <h1 className='sm:text-lg md:text-3xl'>I am</h1>
                <h1 className='mb-10 sm:text-lg md:text-3xl'>Hemant Kanoujia</h1>
            </div>
            <div className="justify-center item-center flex">
                <Image src='/photo.png' alt='Hemant' width={300} height={200} className='rounded-full'/>
            </div>
        </div>
    </section>
  )
}

export default Welcome
