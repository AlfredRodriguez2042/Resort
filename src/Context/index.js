import React, { createContext, useState } from 'react'

const RoomContext = createContext()

const RoomProvider = ({ children }) => {
    const [initialState, setInitialState] = useState()
    return (
       <RoomContext.Provider value="hello">
           { children }
       </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer

export { RoomConsumer, RoomProvider, RoomContext }
