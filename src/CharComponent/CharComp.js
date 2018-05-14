import React from 'react'
import '../App.css'

const CharComp = (props)=>{
    return(
                <a  onClick = {props.click} className = "displayBlock">{props.numberVal}</a>
          )
    }

export default CharComp