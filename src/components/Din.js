import { useEffect } from 'react'
import DinCard from './DinCard'
import DinData from '../data/DinData'
import DinCardMore from './DinCardMore'
import DinDataMore from '../data/DinDataMore'

export default function Din() {
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

    function moreDin() {
        var item = document.querySelectorAll(".moreDin");
        var more = document.getElementById("moreDin");
        for(var i=0; i<item.length; i++) {
            item[i].classList.toggle("showOrHide");
        }
        if(more.innerHTML == "See Less") {
            more.innerHTML = "See More";
        } else {
            more.innerHTML = "See Less";
        }
        more.scrollIntoView(false);
    }

    const dinElement = DinData.map(din => {
        return <DinCard img={din.img} title={din.title} dishes={din.dishes} service={din.service} link={din.link}/>
    })

    const dinElementMore = DinDataMore.map(din => {
        return <DinCardMore img={din.img} title={din.title} dishes={din.dishes} service={din.service} link={din.link}/>
    })

    return (
        <section id="din" className="din">
            <div className="brief even">
                <div className="brief-text">
                    <h2>Leisure &amp; Dinner</h2>
                    <p>
                        Whether you just want to have a drink or bite:
                        in the park you’ll find everything from fast food
                        take aways to medieval dinners and tasty pancakes.
                    </p>
                </div>
                <img src="images/brief-din.gif" alt="brief-din" />
            </div>
            
            <div className="ready">
                <h3>Check out our restaurants</h3>
            </div>

            <div className="list">
                {dinElement}
                {dinElementMore}
            </div>

            <button id="moreDin" className="btn more" onClick={moreDin}>See More</button>
        </section>
    )
}