import React,{ useContext } from 'react'

import Roomfilter from './RoomFilter'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import Loading from './Loading'
import { RoomContext } from '../Context'
const RoomContainer = () => {
    const RoomComsumer = useContext(RoomContext)
    const { loading, sortedRooms, rooms} = RoomComsumer
    if(loading){
        return <Loading/>
    }
    return(
       <div>
           <RoomFilter rooms={rooms}/>
           <RoomList rooms={sortedRooms}/>
           {console.log(loading)}
       </div>
    )    
}

export default RoomContainer
