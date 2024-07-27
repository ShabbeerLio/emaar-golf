import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'
import Basketball from "../../Assets/CAtegory/basketball.jpg"
import Swimming from "../../Assets/CAtegory/pool.webp"
import banhall from "../../Assets/CAtegory/hall.jpg"
import Play from "../../Assets/CAtegory/kids.webp"
import cricket from "../../Assets/CAtegory/cricket.webp"
import pet from "../../Assets/CAtegory/pet.webp"
import garden from "../../Assets/CAtegory/garden.jpg"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Overview = () => {
    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };
    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form heading={"Book Your Site Visit"} btntxt={"Book A Site Visit"} />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>Godrej Sector 103 Sector Gurgaon is a luxury residential project that is developed for the comfort and lavish lifestyle of its customers or buyers. Our carefully designed and meticulously developed 2BHK, 3BHK, and 4BHK residences offer superb design and construction with luxurious interiors. Beautifully manicured lawns, well-defined tennis courts, basketball, football, and baseball facilities, and a well-equipped children’s play area fitted with swings, all in a well-developed clubhouse make for a perfect environment for recreation.</p>
                            <p> Emphasis goes to safety and environmental conservation measures; hence, our smart security systems are available round-the-clock to ensure the safety of you and your loved ones. Their strategic location off Dwarka Expressway means that residents can easily access and commute to various destinations without straining. From the foregoing, it can be understood that Godrej Sector 103 Gurgaon is a perfect blend of comfort and privacy that will definitely suit those who do not want to compromise with quality of life. Experience the blend of luxury and utility at Godrej Sector 103 Gurgaon where lush greenery enhances the taste of luxury living.</p>
                        </div>
                        <div className="overview-category">
                            <ReactOwlCarousel
                                items={6}
                                nav={true}
                                dots={false}
                                responsive={responsiveOptions}
                            >
                                <div className="category-card">
                                    <img src={garden} alt="Godrej Sector 103" />
                                    <p>Garden</p>
                                </div>
                                <div className="category-card">
                                    <img src={Swimming} alt="Godrej Sector 103" />
                                    <p>Swimming Pool</p>
                                </div>
                                <div className="category-card">
                                    <img src={cricket} alt="Godrej Sector 103" />
                                    <p>Cricket Net</p>
                                </div>
                                <div className="category-card">
                                    <img src={banhall} alt="Godrej Sector 103  price" />
                                    <p>multipurpose Hall</p>
                                </div>
                                <div className="category-card">
                                    <img src={Basketball} alt="Godrej Sector 103  Expressway" />
                                    <p>Basketball Court</p>
                                </div>
                                <div className="category-card">
                                    <img src={Play} alt="Godrej Sector 103  Plans" />
                                    <p>Kid's Play</p>
                                </div>
                                <div className="category-card">
                                    <img src={pet} alt="Godrej Sector 103  Plans" />
                                    <p>Pet Park</p>
                                </div>
                            </ReactOwlCarousel>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
