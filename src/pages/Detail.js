import { useEffect } from "react"
import Carousel from 'better-react-carousel'

import Navbar from '../components/Navbar'
import GapDetail from '../components/GapDetail'
import Footer from '../components/Footer'
import Overlay from '../components/Overlay'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

export default function ExpDetail(props) {
    useEffect(() => {
        document.querySelectorAll(".fa-map-location-dot").forEach((item) => {
            item.addEventListener("click", (event) => {
                event.target.nextElementSibling.style.display = "block";
            });
        });
        
        document.querySelectorAll(".closeMap").forEach((item) => {
            item.addEventListener("click", (event) => {
                event.target.parentElement.style.display = "none";
            });
        });
        
        document.querySelectorAll(".map-layer").forEach((item) => {
            item.addEventListener("click", (event) => {
                if(event.target === event.currentTarget) {
                    event.target.style.display = "none";
                }
            });
        });
    })

    return (
        <>
            <GapDetail/>
            <Navbar />
            <div className="wrapper wrapper-detail">
                {/* <!-- Home Section --> */}
                <section className="home home-detail home-exp" style={{backgroundImage: `url(${props.homeImg})`}}>
                    <div className="home-layer"></div>
                    <div className="home-text">
                        <h1 className="text-shadow">{props.homeTitle}</h1>
                        <a href="#subcribe" className="btn ticket">Reserve</a>
                    </div>
                </section>
            
                
                <section className="details">
                    <div className="details-text">
                        <div className="details-head">
                            <h3 className="heading-deatail">{props.title}</h3>
                            {/* <FontAwesomeIcon icon={faMapLocationDot} className="icon fa-map-location-dot" />
                            <div id="mapLayer" className="map-layer">
                                <img className="map-img" src="images/map.gif" alt="map" />
                                <FontAwesomeIcon icon={faCircleXmark} className="icon closeMap fa-circle-xmark" />
                            </div> */}
                        </div>
                        <p>{props.desc}</p>
                    </div>
                    
                    <Carousel cols={2} rows={1} gap={10} loop showDots>
                        <Carousel.Item>
                            <img className="carousel-item" src={props.img1} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-item" src={props.img2} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-item" src={props.img3} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-item" src={props.img4} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-item" src={props.img5} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-item" src={props.img6} />
                        </Carousel.Item>
                    </Carousel>
                </section>
            </div>
            <Footer />
            <Overlay />
        </>
    )
}