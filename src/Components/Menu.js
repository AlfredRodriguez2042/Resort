import React from 'react'
import { FaAlignRight } from 'react-icons/fa'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

const Menu = () => {
    const [open, isOpen] = React.useState(false)
    const toggle = React.useRef()

    const handleToggle = ()=>(
        isOpen({open: toggle.current})
    )
    
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                    <img src={logo} alt="logo"/>
                    </Link>
                    <button ref={toggle} type="button" className="nav-btn" onClick={handleToggle}>
                        <FaAlignRight/>
                    </button>
                    </div> 
                   <ul className={ open ? "nav-links show-nav": " nav-links"}>
                       <li>
                           <Link to="/">Home</Link>
                       </li>
                       <li>
                           <Link to="/rooms">Rooms</Link>
                       </li>

                   </ul>
            </div>
            
        </nav>
    )
}

export default Menu
