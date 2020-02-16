import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/residential">Residential Calculations</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/commercial">Commercial Calculations</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/ductdesign">Duct Design</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#contact" className="button special fit" onClick={props.onToggleMenu}>Contact</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
