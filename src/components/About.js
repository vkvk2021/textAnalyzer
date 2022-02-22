import React from 'react'

export default function About (props) {
  return (
    <div>
      <h4 style={{color:props.mode==='light'?'black':'white'}}> This is about page. </h4>
    </div>
  )
}
