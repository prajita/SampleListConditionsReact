import React from 'react'
import '../App.css'

const Validation = (props)=>{
    var checkLength = 5
   return(
    <div className="App">
    {
        props.lengthText >= checkLength ?
        <p>the length of the text is {props.lengthText}.Text long enough</p>
        :
        <p>the length of the text is {props.lengthText}.Text too short</p>
    }
    </div>
   ) 

}

export default Validation