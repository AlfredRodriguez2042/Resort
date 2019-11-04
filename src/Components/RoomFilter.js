import React,{ useContext } from 'react'
import { RoomContext } from '../Context'
import Title from './Titles'

const unique = (items,value)=>(
    [... new Set(items.map((item)=> item[value]))]
) 

const RoomFilter = ({rooms}) => {
    const {
         changeInput, type, capacity,
         price,minPrice, maxPrice, maxSize,
         minSize, breakfast,pets, filterRooms} = useContext( RoomContext )

     let types = unique(rooms,"type")
     let alltypes = ["all", ...types]
     let uniqtypes = alltypes.map((item,i)=>(
         <option value={item} key={i}>
             {item}
         </option>
     ))
     const people = unique(rooms,'capacity')
     let   peoples = people.map((people,i)=>(
         <option key={i} value={people}>{people}</option>
     ))
    
    return (
        <section className="filter-container">
            <Title title="search rooms"  />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                    name="type"
                    id="type"
                    value={type}
                    className="form-control"
                    onChange={ changeInput }
                    onClick={filterRooms}
                    >
                      {uniqtypes}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                    name="capacity"
                    id="capacity"
                    value={capacity}
                    className="form-control"
                    onChange={ changeInput }
                    onClick={filterRooms}
                    >
                      {peoples}
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="price"> room price ${price}</label>
                    <input
                     type="range"
                     name="price"
                     id="price"
                     min={minPrice}
                     max={maxPrice}
                     value={price}
                     onChange={ changeInput }
                     onMouseUp={ filterRooms }
                     className="form-control"
                     />
                </div>
            </form>
        </section>
    )
}

export default RoomFilter
