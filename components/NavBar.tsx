import React from 'react'

const options = [
    {name: 'About', link: '#about'},
    {name: 'Projects', link: '#projects'},
]

export default function NavBar() {
  return (
    <header className='bg-purple-900 w-full md:text-2xl'>
        <div className='justify-between md:item-center md:flex'>
            <div></div>
            <div className='flex space-x-5 md:mr-10'>
                {options.map((option) => {
                    return <a key={option.link} href={option.link}className='p-6'>{option.name}</a>
                })}
            </div>
        </div>
    </header>
  )
}
