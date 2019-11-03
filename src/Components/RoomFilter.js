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
         minSize, breakfast,pets, filterRooms,filtro } = useContext( RoomContext )

     let types = unique(rooms,"type")
     let alltypes = ["all", ...types]
     let uniqtypes = alltypes.map((item,i)=>(
         <option value={item} key={i}>
             {item}
         </option>
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
                    onChange={changeInput}
                    >
                      {uniqtypes}
                    </select>
                </div>
            </form>
        </section>
    )
}

export default RoomFilter
