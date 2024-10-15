import React from 'react'
import Anda from '../Images/Andamasala.jpg'
import Bhel from '../Images/bhel.jpg'
import ChickenCurry from '../Images/chickencurry.jpg'
import CholeCurry from '../Images/Chole_curry.jpeg'

const BannerMain = () => {
  return (
    <>
        <div className="bannercontainer">
            <div className="cards">
                <div className="cardbox">
                    <div className="cardimg">
                        <img src={Anda} alt="First item" />
                    </div>
                    <div className="card-content">
                        <div className="content-item">
                            <h3>Anda Masala</h3>
                        </div>
                        <div className="content-item">
                            <p>Prepared in tasty tomato sauce and cooked in dum. </p>
                        </div>
                    </div>    
                </div>
                <div className="cardbox">
                    <div className="cardimg">
                        <img src={ Bhel} alt="Bhel" />
                    </div>
                    <div className="card-content">
                    <div className="content-item">
                            <h3>Bhel </h3>
                        </div>
                        <div className="content-item">
                            <p>A snack made with crisps, fresh herbs and tasty sauces. </p>
                        </div>
                    </div>    
                </div>
                <div className="cardbox">
                    <div className="cardimg">
                        <img src={ChickenCurry} alt="Chicken Curry" />
                    </div>
                    <div className="card-content">
                    <div className="content-item">
                            <h3>Chicken Curry</h3>
                        </div>
                        <div className="content-item">
                            <p>A slow cooked curry with tender and juicy chicken.</p>
                        </div>
                    </div>    
                </div>
                <div className="cardbox">
                    <div className="cardimg">
                        <img src={CholeCurry} alt="" />
                    </div>
                    <div className="card-content">
                    <div className="content-item">
                            <h3>Chole Curry</h3>
                        </div>
                        <div className="content-item">
                            <p>A healthy and vegetarian curry that is made with chickpeas. </p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </>
  )
}

export default BannerMain
