import React from 'react'
import { Link } from 'react-router-dom'
const Header = ({ title, style, cart, notify,count }) => {
  return (
    <div style={style}>

      <span >{title}</span>
      <div style={{ display: 'flex', alignItems: 'center', paddingRight: '50px', justifyContent: 'end', height: '25px', gap: '50px' }}>
        <Link to='/cart'><span> {cart}<i
          style={{
            borderRadius: '100%',
            background: 'red',
            color: 'white',
            padding: '8px',
            position: 'relative',
            fontSize: '10px',
            top: '-20px',
            left: '5px'
          }}>{count}</i></span></Link>
        <span>{notify}<i
          style={{
            background: 'red',
            borderRadius: '100%',
            color: 'white',
            padding: '8px',
            position: 'relative',
            fontSize: '10px',
            top: '-20px',
            left: '5px'
          }}>1</i></span>

      </div>
    </div>


  )
}

export default Header