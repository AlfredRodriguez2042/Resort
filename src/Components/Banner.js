import React from 'react'

const Banner = ({children,Title, Subtitle}) => {
    return (
        <div className="banner">
            <h1>{Title}</h1>
            <div></div>
            <p>{Subtitle}</p>
           {children}
            
        </div>
    )
}

export default Banner
