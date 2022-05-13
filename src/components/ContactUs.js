import React from 'react'



import {BsTwitter,BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'

import {SiBuymeacoffee} from 'react-icons/si'

function ContactUs(props) {
  return (
    <div className="container">


        <div className='d-flex flex-row bd-highlight justify-content-evenly my-5' style={{fontSize:'2.5rem', marginTop:'15rem'}}>

        <a href="https://twitter.com/IshanMondaljs" target='#blank'>
         <BsTwitter/>
        </a>

        <a href="https://www.linkedin.com/in/ishanmondaljs/" target='#blank'>
         <BsLinkedin/>
        </a>

        <a href="https://github.com/ishan-im" target='#blank'>
        <BsGithub/>
        </a>

        <a href="https://www.instagram.com/ig_ismondal7/" target='#blank'>
        <BsInstagram/>
        </a>

        <a href="https://www.buymeacoffee.com/dashboard" target='#blank'>
        <SiBuymeacoffee/>
        </a>
        
        </div>
        
    </div>
  )
}

export default ContactUs