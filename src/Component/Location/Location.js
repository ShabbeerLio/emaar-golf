import React from 'react'
import "./Location.css"

const Location = () => {
    return (
        <div className='Location'>
            <div className="Page-title">
                <h3>Location</h3>
            </div>
            <div className="location-box">
            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14026.175993622192!2d76.9763495!3d28.4932764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17005bc7e1d3%3A0x39946b316896aa42!2sGodrej%20103%2C%20Gurgaon!5e0!3m2!1sen!2sin!4v1720259863784!5m2!1sen!2sin"></iframe>
            </div>
        </div>
    )
}

export default Location
