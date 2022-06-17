import WhatsupCard from './WhatsupCard'
import WhatsupCardMore from './WhatsupCardMore'
import WhatsupData from '../data/WhatsupData'
import WhatsupDataMore from '../data/WhatsupDataMore'

export default function Whatsup() { 
    function moreWhatsup() {
        var item = document.querySelectorAll(".moreWhatsup");
        var more = document.getElementById("moreWhatsup");
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

    const whatsupElement = WhatsupData.map(whatsup => {
        return <WhatsupCard img={whatsup.img} date={whatsup.date} title={whatsup.title} link={whatsup.link}/>
    })

    const whatsupElementMore = WhatsupDataMore.map(whatsup => {
        return <WhatsupCardMore img={whatsup.img} date={whatsup.date} title={whatsup.title} link={whatsup.link}/>
    })

    return (
        <section id="whatsup" className="whatsup">
            <div className="brief even">
                <div className="brief-text">
                    <h2>Whatsup</h2>
                    <p>
                        Behold the courageous riders of Raveleijn, 
                        enjoy Europe’s biggest water show 
                        or spend some time with one of Eftelings inhabitants. 
                        All shows are free of charge during a park visit.
                    </p>
                </div>
                <img src="images/brief-whatsup.gif" alt="brief-whatsup" />
            </div>
            
            <div className="ready">
                <h3>Shows and Entertainment</h3>
            </div>

            <div className="list">
                {whatsupElement}
                {whatsupElementMore}
            </div>

            <button id="moreWhatsup" className="btn more" onClick={moreWhatsup}>See More</button>
        </section>
    )
}