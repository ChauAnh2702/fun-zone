import { Link } from 'react-router-dom'

export default function CharCard(props) {
    return (
        <Link to={props.link} className="item">
            <img src={props.img} alt="character" />
            <h4>{props.title}</h4>
        </Link>
    )
}