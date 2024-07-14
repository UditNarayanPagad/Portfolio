import React from 'react'
import Home from '../../components/Home'
import Grid from '../../components/Grid'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

const page = () => {
  return (
    <main className='relative bg-black-100 mx-auto flex flex-col justify-center items-center text-white sm:px-10 px-4 overflow-hidden'>
      <div className='max-w-7xl w-full'>
        <Home/>
        <Grid/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  )
}

export default page