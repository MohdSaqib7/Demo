import React from 'react'
import './Footer.css'
import FooterCard from './FooterCard'

function Footer() {
  return (
    <div className='footer'>

        <FooterCard heading="About Us" ar={["Support Center","Customer Support","About Us","Copyright"]}/>
        <FooterCard heading="Our information" ar={["Return Policy","Privacy policy","Terms & Condition","Site Map"]}/>
        <FooterCard heading="My Account" ar={["Press inquire","directories","Social Media","Images"]}/>
        <FooterCard heading="Contact" ar={["LinkedIn","FaceBook","Instagram","email"]}/>
    </div>
  )
}

export default Footer