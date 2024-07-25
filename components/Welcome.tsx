import React from 'react'
import Image from 'next/image'

const Welcome = () => {
  return (
    <section className='w-full'>
        {/* welcome and a picture side by side */}
        {/* <div className='justify-center item-center flex flex-wrap'>
            <div className='py-14'>
                <div className='px-12 '>
                    <h1 className='justify-center item-center flex sm:text:xl md:text-2xl lg:text-3xl'>Greetings!</h1>
                    <h1 className='justify-center item-center flex sm:text:lg md:text-xl lg:text-2xl'>I am</h1>
                    <h1 className='justify-center item-center flex sm:text:lg md:text-xl lg:text-2xl'>Hemant Kanoujia</h1>
                </div>
            </div>
            <div className='justify-center item-center flex'>
                <Image src='/photo.png' alt='Hemant' width={300} height={200}/>
            </div>
        </div> */}
        {/* <div className='md:my-24 text-center justify-center item-center flex flex-col md:flex-row md:space-x-64'>
         */}
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
