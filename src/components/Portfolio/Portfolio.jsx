import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import YouTubeClone from "../../img/capture-youtube-clone.png";
import { themeContext } from "../../Context.js";

const Portfolio = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme?.state?.darkMode;

    return (
        <div className="portfolio" id="portfolio">
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="sidebar" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="ecommerce" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="musicapp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="hoc" />
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://youtube-clone-315au.netlify.app/" rel="noopener noreferrer" target="_blank">
                        <img src={YouTubeClone} alt="youtube-clone" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;