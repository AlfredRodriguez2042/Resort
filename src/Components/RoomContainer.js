import React,{ useContext } from 'react'

// Compoenents
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import Loading from './Loading'
import { HOC } from '../Context/HOC'
import { RoomContext } from '../Context'
const RoomContainer = () => {
  
    const { loading, sortedRooms, rooms } = useContext(RoomContext)

   
    if(loading){
        return <Loading/>
    }
    return(
       <div>
           <RoomFilter rooms={rooms}/>
           <RoomList rooms={sortedRooms}/>
        </div>
    )    
}

export default HOC(RoomContainer)
