import React from 'react'
import { Link} from 'react-router-dom'


import Hero from '../Components/Hero'
import Banner from '../Components/Banner'

const Rooms = () => {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner Title=" Our Rooms">
                    <Link to="/" className="btn-primary" >
                    return Home
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Rooms
