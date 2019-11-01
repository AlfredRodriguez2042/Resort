import React, { useContext,useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import defaultBCG from '../images/room-1.jpeg'
import { RoomContext } from '../Context'
import StyledHero from '../Components/StyledHero'


const SingleRoom = ({ match }) => {
   const [isMatch,seMatch] = useState({
       slug: match.params.slug,
       defaultBCG
   })
   let { getRoom } = useContext(RoomContext)
   const room = getRoom(isMatch.slug)
    if(!room){
        return <div className="error">
            <h3> no room found...</h3>
            <Link to="/rooms" className="btn-primary">back to rooms</Link>
        </div>
    }

   const { name, description, capacity, size, price, extras, breakfast, pets, images } = room

   const [mainImg, ...defaultImg] = images

    return (
        <div>
            <StyledHero images={mainImg || defaultBCG }>
                <Banner Title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
              <div className="single-room-images">
                  {defaultImg.map((img,i)=>(
                      <img key={i} src={img} alt={name}/>
                  ))}
              </div>
              <div className="single-room-info">
                  <article className="desc">
                      <h3>details</h3>
                      <p>{description}</p>
                  </article>
                  <article className="info">
                      <h3>info</h3>
                      <h6>price : ${price}</h6>
                      <h6>size : {size} SQFT</h6>
                      <h6>max capacity : { capacity > 1 ? ` ${capacity} people`: `${capacity} person`}</h6>
                      <h6>{pets?"pets allowed":"no pets allowed"}</h6>
                      <h6>{breakfast && "free breakfast included"}</h6>
                  </article>
              </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    { extras.map((extra,i)=>(
                        <li key={i}>- {extra}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default SingleRoom
