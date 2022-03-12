import React, {useState,useRef,useEffect} from 'react'

const Box = (props) => {
  let letterref = useRef(null)

  useEffect(() => {
    // console.log('from box',props.isActive)
    if(props) {
      if(props.isActive) {
        letterref.current.focus()
      }
    }
  },[props])

  const handleInput = (e) => {
    let val = e.target.value
    letterref.current = val
    props.checkTheChar(props.boxNum, val)
  }

  return (<div>
    <input type='text' size="1" onChange={handleInput} style={{color: props.discolor}} maxLength='1' ref={letterref} />
  </div>)
}

export default Box;