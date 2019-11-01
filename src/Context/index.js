import React, { createContext, useState, useEffect, useContext } from 'react'

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

    const getRoom = (slug)=>{
        let temRooms = [...initialState.rooms]
        const room = temRooms.find( room=>room.slug===slug)
        return room

    }
        
    return (
       <RoomContext.Provider value={{ ...initialState, getRoom}}>
           { children }
       </RoomContext.Provider>
    )
}

export function RoomHOC (Component){
    const consumer = useContext(RoomContext)
    return function wrapper (props){
        return <consumer>
           { value => <Component />}
        </consumer>
    }
}

export {  RoomProvider, RoomContext }
