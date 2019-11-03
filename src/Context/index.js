import React, { createContext, useState, useEffect, useContext } from 'react'

// Data
import items from '../data'

const RoomContext = createContext()

const RoomProvider = ({ children }) => {
    
    const [initialState, setInitialState] = useState({
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
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
        let maxprice = Math.max(...rooms.map(item => item.price))
        let maxsize = Math.max(...rooms.map(item => item.size))
        setInitialState({
            ...initialState,
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading: false,
            price: maxprice,
            maxSize: maxsize
        })
    

    },[])

    const getRoom = (slug)=>{
        let temRooms = [...initialState.rooms]
        const room = temRooms.find( room=>room.slug===slug)
        return room

    }
    const changeInput = (e,cb)=>{
        e.preventDefault()
        const type = e.target.type
        const name = e.target.name
        const value = e.type === "checkbox" ? e.target.checked : e.target.value
        console.log(type,name,value)

        setInitialState({
            ...initialState,
            [name]:value,
        })
       return cb => filterRooms()
    }
    
    const filterRooms = (data)=>{
        const {rooms,type, capacity,
             price, minSize, maxSize,
              breakfast, pets} = initialState
        let tempRooms = [...rooms]
        if(type !== "all"){
           tempRooms = tempRooms.filter(item => item.type === type)
        }
        setInitialState({
           ...initialState,
            sortedRooms: tempRooms
        })
       console.log(tempRooms)
    }
    
   
        
    return (
       <RoomContext.Provider value={{ ...initialState, getRoom, changeInput,filterRooms,}}>
           { children }
       </RoomContext.Provider>
    )
}

export function RoomHOC (Component){
    return function wrapper (props){
        return  <Component {...props} context={null}/>
       
    }
}

export {  RoomProvider, RoomContext }
