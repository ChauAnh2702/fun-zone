import CharCard from './CharCard'
import CharCardMore from './CharCardMore'
import CharData from '../data/CharData'
import CharDataMore from '../data/CharDataMore'

export default function Char() {
    function moreChar() {
        var item = document.querySelectorAll(".moreChar");
        var more = document.getElementById("moreChar");
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

    const charElement = CharData.map(char => {
        return <CharCard img={char.img} title={char.title} link={char.link}/>
    })

    const charElementMore = CharDataMore.map(char => {
        return <CharCardMore img={char.img} title={char.title} link={char.link}/>
    })

    return (
        <section id="char" className="char">
            <div className="brief odd">
                <img src="images/brief-char.gif" alt="brief-char" />
                <div className="brief-text">
                    <h2>Park Characters</h2>
                    <p>
                        Guests can meet wildlife of all sorts at The Fun Zone, 
                        including the famous characters themselves. 
                        Below are all your friends looking forward to see you.
                    </p>
                </div>
            </div>
            
            <div className="ready">
                <h3>Want to play with me?</h3>
            </div>

            <div className="list">
                {charElement}
                {charElementMore}
            </div>

            <button id="moreChar" className="btn more" onClick={moreChar}>See More</button>
        </section>
    )
}