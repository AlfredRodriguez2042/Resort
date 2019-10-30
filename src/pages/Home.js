// Dependecies
import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import Services from '../Components/Services'

const Home = () => {
    return (
        <div>
           <Hero>
               <Banner Title="luxurious Room" Subtitle="deluxe rooms starting at $299">
                   <Link to="rooms" className="btn-primary">
                  our rooms
                   </Link>
               </Banner>
             </Hero>
             <Services></Services>
            
        </div>
    )
}

export default Home
