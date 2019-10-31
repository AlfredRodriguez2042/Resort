import React, { createContext, useState, useEffect } from 'react'

// Data
import items from '../data'

const RoomContext = createContext()

const RoomProvider = ({ children }) => {
    
    const [initialState, setInitialState] = useState({
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true
    })
    const formatData = (items)=>{
        let tempItems = items.map((item)=>{
            let id = item.sys.id
            let images = item.fields.images.map(image=>         image.fields.file.url  
            )
            let room = {...item.fields,images,id}
            return room
        })
        return tempItems
    }
    useEffect(()=>{
        const rooms = formatData(items)
        let featuredRooms = rooms.filter((room)=>room.featured === true )
        setInitialState({
            rooms, featuredRooms, sortedRooms:rooms, loading: false
        })
        
    },[])
    
    return (
       <RoomContext.Provider value={initialState}>
           { children }
       </RoomContext.Provider>
    )
}



export {  RoomProvider, RoomContext }
