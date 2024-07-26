import React from 'react'

function About() {
  return (
    <section id='about' className='pt-1'>
      <div className='m-10'>
      <h1 className='px-1 md:px-10 mt-3 mb-1 md:mb-7 md:mt-10 text-3xl md:text-5xl font-bold'>About</h1>
          <p className='mt-3 pl-1 md:pl-10 md:w-3/5 w-auto leading-7'>
              Hello! I am Heamnt Kanoujia, a rising senior at University of Central Flordia majoring in Computer Science.

              My CS journey started in high school, where I took my first programming class. It was something that started off as a casual interest but quickly turned into a passion.
          </p>

          <p className='mt-3 pl-1 md:pl-10 md:w-3/5 w-auto leading-7'>
            Currently, I am working getting my bachelor's degree in Computer Science. I have taken courses in Data Structures, Algorithms, and Software Engineering. I have also worked on various projects that have helped me gain experience in different languages and frameworks.
          </p>
      </div>
    </section>
  )
}

export default About