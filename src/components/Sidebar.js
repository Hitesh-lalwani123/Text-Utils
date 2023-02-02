import React from 'react'

export default function Sidebar(props) {
    let mystyle = {
        backgroundColor:'grey',
        height : '60vh',
        width: '100px',
        float: 'left',
        margin:'0 5px',
        padding: '5px'
    }
  return (
    <>
    <div className="sidebar" id = "mySidebar" style={mystyle}>
        sidebar
    </div>
    </>
  )
}
