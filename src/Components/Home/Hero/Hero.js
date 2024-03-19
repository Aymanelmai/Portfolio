import React from 'react'
import './Hero.css'
import Emoji from '../../Images/Emoji'
import { ReactTyped } from 'react-typed'
import { FaReact, FaHtml5, FaAngular } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { IoLogoCss3 } from 'react-icons/io5'
import { SiSpring } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'
// import  AymanePhoto  from '../../../Assets/AymanePhoto.jpg'

const email = 'aymanelmai1@gmail.com'

const handleEmailClick = () => {
  window.location.href = `mailto:${email}`
}

const Hero = () => {
  return (
    
    
        <div>
      <div className='Hero_Spacer_Container'>
        <div className='Spacer'></div>
        <div className='Hero_First_Container'>
          <p className='Hero_P1'>Hi, my name is :</p>

          <div className='Hero_Animated_Container'>
            <div>
              <ReactTyped
                className='Hero_P2'
                strings={['Aymane Elmai']}
                typeSpeed={40}
              />
              <Emoji symbol='👋' label='wave' />
            </div>

            <ReactTyped
              className='Hero_P2'
              strings={[
                'Junior Developper',
                'I Create High Quality Web Applications',
                ''
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>

          <div className='Hero_Icons'>
            <p className='Hero_Icons_Techstack'>Tech Stack:</p>
            <IconContext.Provider value={{ color: '#f06529', size: '2rem' }}>
              <FaHtml5 />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#2965f1', size: '2rem' }}>
              <IoLogoCss3 />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#61dbfb', size: '2rem' }}>
              <FaReact />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#dd0031', size: '2rem' }}>
              {' '}
              <FaAngular />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#6db33f', size: '2rem' }}>
              <SiSpring />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#4DB33D', size: '2rem' }}>
              <DiMongodb />
            </IconContext.Provider>
          </div>

          <button onClick={handleEmailClick} className='Button_Email'>
            Get In Touch
          </button>
        </div>
      </div>
    </div>
    

  )
}

export default Hero
