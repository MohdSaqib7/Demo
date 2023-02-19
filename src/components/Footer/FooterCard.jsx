import React from 'react'

function FooterCard(props) {
  return (
    <div className='footerCard'>
            <h1 className='footer-head'>{props.heading}</h1>
            <div className='menu'>
                <h2>{props.ar[0]}</h2>
                <h2>{props.ar[1]}</h2>
                <h2>{props.ar[2]}</h2>
                <h2>{props.ar[3]}</h2>
            </div>
            <img src='https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png' alt='loading' width="100px" height="60px"></img>
        </div>
  )
}

export default FooterCard