import React,{ useContext } from 'react'


 export const HOC = (Component ) => {
    
    return function wrapper (props){
        return <Component/>
    }
}


