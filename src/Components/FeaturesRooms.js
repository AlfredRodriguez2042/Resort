import React,{ useContext } from 'react'

import Loading from './Loading'
import Room from './Room'
import Title from './Titles'
import { RoomContext } from '../Context'

const FeaturesRooms = () => {
 const {featuredRooms:rooms, loading} = useContext(RoomContext)
  const room = rooms.map((room,i)=>(
      <Room key={i} room={room} />
  ))

    return (
        <section className="featured-rooms">
            <Title title="featured Room"/>
            <div className="featured-rooms-center">
                {loading?<Loading/>:<Room/>}
                {console.log(loading)}
            </div>
            
        </section>
    )
}

export default FeaturesRooms
