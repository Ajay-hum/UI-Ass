import React from 'react'
import './home.css'

//Importing Images and Icons for use
import img1 from '../../Assets/UI ASS icons/paystack-removebg-preview.svg'
import img2 from '../../Assets/UI ASS icons/google-removebg-preview.svg'
import img3 from '../../Assets/UI ASS icons/kpmg-removebg-preview.svg'
import img from '../../Assets/UI ASS icons/hero-image.svg'


export default function Home() {
  return (
    <section className="homeSection">
      <div className="layout">
        <div className="content">
          <div className="textDiv">
            <h1>Find a <span>job</span> easily</h1>
            <p className='p1'>With verified, up-to-date job listings directly from employer websites, 
              we create a premium experience for job seekers, employers and data seekers alike</p>
            <p><b>Trusted by:</b></p>
          </div>
          <div className="bar-icons">
            <img src={img1} alt="pstack" />
            <img src={img2} alt="Gog" />
            <img src={img3} alt="kpmg" />
          </div>
        </div>
        <div className="imageContainer">
          <img src={img} alt="hero-img" className="hero-image" />
        </div>
      </div>
    </section>
  )
}
