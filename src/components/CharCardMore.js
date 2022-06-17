import { Link } from 'react-router-dom'

export default function CharCardMore(props) {
    return (
        <Link to={props.link} className="item moreChar showOrHide">
            <img src={props.img} alt="character" />
            <h4>{props.title}</h4>
        </Link>
    )
}