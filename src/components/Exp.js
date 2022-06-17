import ExpCard from './ExpCard'
import ExpCardMore from './ExpCardMore'
import ExpData from '../data/ExpData'
import ExpDataMore from '../data/ExpDataMore'

export default function Exp() {
    function moreExp() {
        var item = document.querySelectorAll(".moreExp");
        var more = document.getElementById("moreExp");
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

    const expElement = ExpData.map(exp => {
        return <ExpCard img={exp.img} title={exp.title} link={exp.link}/>
    })

    const expElementMore = ExpDataMore.map(exp => {
        return <ExpCardMore img={exp.img} title={exp.title} link={exp.link}/>
    })

    return (
        <section id="exp" className="exp">
            <div className="brief odd">
                <img src="images/brief-exp.gif" alt="map" />

                <div className="brief-text">
                    <h2>Experience</h2>
                    <p>
                    Welcome to The ‘FUN ZONE’, the most Entertaining Theme Park in Vietnam.
                    We have 7 different internationally themed zones.
                    You will never fall short of excitement or thrills, 
                    thanks to the mascots that will make sure you are treated with the best of hospitality. 
                    There are zones like thrill rides, 7 wonders of the world, 
                    a massive food court and other areas ensuring 360 degrees of sheer entertainment.
                    </p>
                </div>
            </div>
            
            <div className="ready">
                <h3>Ready for all attractions?</h3>
            </div>

            <div className="list">
                {expElement}
                {expElementMore}
            </div>

            <button id="moreExp" className="btn more" onClick={moreExp}>See More</button>
        </section>
    )
}