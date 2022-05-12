import React from 'react'
import './Home.css'
import databiz from '../../assets/images/client-databiz.svg'
import audiophile from '../../assets/images/client-audiophile.svg'
import meet from '../../assets/images/client-meet.svg'
import maker from '../../assets/images/client-maker.svg'
import hero from '../../assets/images/image-hero-desktop.png'

const Home = () => {
  return (
    <div className={'home'}>
      <div className="home-items">
        <div className="top-section">
          <img src={hero} alt="" className="hero-image"/>
        </div>
        <div className="left-section">
          <h2 className="heading">Make remote work</h2>
          <p className="paragraph">Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.</p>
          <button className="homeBtn">Learn More</button>
          <div className="client-images">
            <img src={databiz} alt="" className={'client-image'}/>
            <img src={audiophile} alt="" className={'client-image'}/>
            <img src={meet} alt="" className={'client-image'}/>
            <img src={maker} alt="" className={'client-image'}/>
          </div>
        </div>
        <div className="right-section">
          <img src={hero} alt="" className="hero-image"/>
        </div>
      </div>
    </div>
  )
}

export default Home