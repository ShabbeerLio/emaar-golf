import React from 'react'
import bannerimg from "../../Assets/banner.jpg"
import "./Banner.css"
import IconData from '../Icons/IconData'

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-image">
                    <img src={bannerimg} alt="Godrej Sector 103" />
                </div>
                <div className="banner-stick">
                    <div className="banner-stick-box">
                        <span>New Launch</span>
                        <h2>Sobha 106 Gurgaon</h2>
                        <h5>At Sobha 106 Gurgaon , Haryana 122006</h5>
                        <h5>Stunning architecture influenced by the timeless elegance of European design.</h5>
                        {/* <p>Premium 3 & 4 BHK Luxurious Apartments & Studios  </p> */}
                        {/* <p>Price Starts <span>@ ₹7.25  Cr*</span></p> */}
                        <div className="banner-card">
                            {IconData.map((item) => (
                                <div className="banner-card-box">
                                    <img src={item.cover} alt="" />
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
