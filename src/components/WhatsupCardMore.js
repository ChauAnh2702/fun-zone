import { Link } from 'react-router-dom'

export default function WhatsupCardMore(props) {
    return (
        <div className="item moreWhatsup showOrHide">
            <img src={props.img} />
            <p>{props.date}</p>
            <h4>{props.title}</h4>
            <Link to={props.link}>Read More</Link>
        </div>
    )
}       