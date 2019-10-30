import React, { useState } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan,FaBeer} from 'react-icons/fa'
// Components
import Titles from './Titles'

const Services = () => {
    const [services,setServices] = useState([
        {
        icon:<FaCocktail/>,
        title: "free Cocktails",
        info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, in modi deserunt pariatur cum quisquam vel esse illo totam quis.'
         },
         {
         icon:<FaHiking/>,
         title:"Endless Hiking",
         info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, in modi deserunt pariatur cum quisquam vel esse illo totam quis."
         },
         {
          icon:<FaShuttleVan/>,
          title:"Free Shuttle",
          info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, in modi deserunt pariatur cum quisquam vel esse illo totam quis."   
         },
         {
          icon:<FaBeer/>,
          title:"Strongest Beer",
          info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, in modi deserunt pariatur cum quisquam vel esse illo totam quis."   
         }

])

    return (
        <section className="services">
            <Titles title="Services"/>
            <div className="services-center">
                {services.map((item,i)=>( 
                    <article key={i} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>

                    </article>
    ))}
            </div>
            
        </section>
    )
}

export default Services
