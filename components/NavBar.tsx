import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaFileLines } from 'react-icons/fa6'

const options = [
    {name: 'About', link: '#about'},
    {name: 'Projects', link: '#projects'},
]

export default function NavBar() {
  return (
    <header className='bg-purple-900 w-full md:text-xl'>
        <div className='flex justify-center md:justify-between item-center'>
            <div></div>
            <div className='flex space-x-5 md:mr-10'>
                {options.map((option) => {
                    return <a key={option.link} href={option.link}className='px-3 md:px-6 py-2'>{option.name}</a>
                })}
                <a href='https://github.com/Hemanka' target='_blank' rel='noopener noreferrer' className='px-3 md:px-6 py-3'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/hemant-kanoujia/' target='_blank' rel='noopener noreferrer' className='px-3 md:px-6 py-3'><FaLinkedin /></a>
                <a href='/HemantKanoujia_resume.pdf' target='_blank' rel='noopener noreferrer' className='px-3 md:px-6 py-3'><FaFileLines /></a>
            </div>
        </div>
    </header>
  )
}
