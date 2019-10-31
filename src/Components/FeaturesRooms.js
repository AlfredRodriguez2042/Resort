import React,{ useContext } from 'react'

import Loading from './Loading'
import Room from './Room'
import Title from './Titles'
import { RoomContext } from '../Context'

const FeaturesRooms = () => {
  let {featuredRooms:rooms, loading} = useContext(RoomContext)
 
    return (
        <section className="featured-rooms">
            <Title title="featured Room"/>
            <div className="featured-rooms-center">
               { loading?<Loading/>:rooms.map((room,i)=>(
                  <Room key={i} room={room}/>
                ))}
                
            </div>
            
        </section>
    )
}

export default FeaturesRooms
