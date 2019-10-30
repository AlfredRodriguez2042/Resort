import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../Components/Hero'
import Banner from '../Components/Banner'

const Page404 = () => {
    return (
        <div>
           <Hero>
               <Banner Title="404" Subtitle="Page not found">
                   <Link to="/" className="btn-primary">
                       return Home
                   </Link>
               </Banner>
           </Hero>
        </div>
    )
}

export default Page404
