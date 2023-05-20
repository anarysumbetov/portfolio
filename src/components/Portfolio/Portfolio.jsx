import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AppChess from "../../img/capture-app-chess.png";
import Dashboard from "../../img/capture-dashboard.png";
import ModernUiUxGPT3 from "../../img/capture-modern-ui-ux-gpt3.png";
import ModernUiUxRestaurant from "../../img/capture-modern-ui-ux-restaurant.png";
import YouTubeClone from "../../img/capture-youtube-clone.png";
import SpotifyCloneMusicPlayer from "../../img/capture-spotify-clone-music-player.png";
import CandyCrushClone from "../../img/capture-candy-crush-clone.png";
import GalleryProject from "../../img/capture-gallery-project.png";
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
                    <a href="https://anarysumbetov.github.io/app-chess/" rel="noopener noreferrer" target="_blank">
                        <img src={AppChess} alt="app-chess" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://anarysumbetov.github.io/dashboard/" rel="noopener noreferrer" target="_blank">
                        <img src={Dashboard} alt="dashboard" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://anarysumbetov.github.io/modern_ui_ux_gpt3/" rel="noopener noreferrer" target="_blank">
                        <img src={ModernUiUxGPT3} alt="modern-ui-ux-gpt3" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://anarysumbetov.github.io/modern_ui_ux_restaurant/" rel="noopener noreferrer" target="_blank">
                        <img src={ModernUiUxRestaurant} alt="modern-ui-ux-restaurant" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://youtube-clone-315au.netlify.app/" rel="noopener noreferrer" target="_blank">
                        <img src={YouTubeClone} alt="youtube-clone" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://anarysumbetov.github.io/spotify_clone_music_player/" rel="noopener noreferrer" target="_blank">
                        <img src={SpotifyCloneMusicPlayer} alt="spotify-clone-music-player" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://anarysumbetov.github.io/candy-crush-clone/" rel="noopener noreferrer" target="_blank">
                        <img src={CandyCrushClone} alt="candy-crush-clone" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://anarysumbetov.github.io/gallery_project/" rel="noopener noreferrer" target="_blank">
                        <img src={GalleryProject} alt="gallery-project" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;