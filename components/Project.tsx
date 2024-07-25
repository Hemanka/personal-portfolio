import { describe } from 'node:test'
import React from 'react'

const projects = [
    {
        name: 'PetPals',
        description: 'A tinder like application for pets. It helps pet owners to find a partner for their pets. It has features like account management, swiping, and matching.',
        languages: ['Next.js, TypeScript, Tailwind CSS, Prism, NoSQL, Vercel'],
        link: 'https://github.com/almond5/PetPals'
    },
    {
        name: 'Fuzz4All',
        description: 'An open-source project that incorrporates AI for the fuzzing process of testing. For this project, I worked on implementing a UI that would display the fuzzing results. The purpose of such a UI is to help the user understand the results of the fuzzing process and make it easier for the user to access the rseults.',
        languages: ['Python , Flask, Docker'],
        link: 'https://github.com/DavidF09/fuzz4all'
    },
    {
        name: 'Perosnal Portfolio',
        description:'A web application that showcases my project and skills. I used Next.js and Tailwind to create the web application.',
        languages: ['Next.js, TypeScript, Tailwind CSS'],
        link:'https://github.com/Hemanka/personal-portfolio'
    },
    {
        name: 'College Event Management System',
        description: 'A web application that helps in managing college events. It has features like event registration, event management, and event feedback. It also has a hierarchical-role based access control system for managing users and the community.',
        languages: ['HTML/CSS, JavaScript, PHP, MySQL'],
        link: 'https://github.com/vlazo1214/College-Event-Website'
    },
    {
        name: 'Contact Manager',
        description: 'A LAMP stack web application that allows the users to manager their contacts. It has features like create contact, update contact, delete contact, and search contact.',
        languages: ['HTML/CSS, JavaScript, PHP, MySQL, DigitalOcean'],
        link: 'https://github.com/hemkan/Contact-Manager'
    },
]

function Project() {
  return (
    <section id='projects' className='pt-1'>
        {/* <div className='mt-8'></div> */}

        <div className='m-10'>
            <h1 className='px-1 md:px-10 mt-3 mb-1 md:mb-7 md:mt-10 text-3xl md:text-5xl font-bold'>Projects</h1>
            <div className='md:px-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    {projects.map((project) => {
                        return <a 
                            key={project.link}
                            href={project.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-3 ml-1 md:ml-3 mr-5 my-4 border-2 border-gray-300 rounded-lg'
                        >
                            <div>
                                <h2 className='font-bold mb-4'>{project.name}</h2>
                                <p className='mb-4 leading-7'>{project.description}</p>
                                <div>
                                    {project.languages.map((language) => {
                                        return <span>{language}  </span>
                                    })}
                                </div>
                            </div>
                        </a>
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project