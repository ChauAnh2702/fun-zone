import Gap from '../components/Gap'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Overlay from '../components/Overlay'

export default function General() {
    return (
        <>
            <Gap />
            <Navbar />
            <div className='wrapper'>
                <Home />
            </div>
            <Overlay />
        </>
    )
}