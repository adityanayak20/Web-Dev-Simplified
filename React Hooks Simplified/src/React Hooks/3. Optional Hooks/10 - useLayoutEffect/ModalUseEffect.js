import React, {useState, useEffect, useRef} from 'react'

export default function ModalUseEffect() {
  const [show, setShow] = useState(false)
  const popup = useRef()
  const button = useRef()

  useEffect(() => {
    if(popup.current == null || button.current == null) return
    const { bottom } = button.current.getBoundingClientRect()
    popup.current.style.top = `${bottom + 25}px`
  }, [show])
  return (
    <>
      <label for={button}>useEffect Example</label>
        <br/>
        <button ref={button} onClick={() => setShow(prev => ! prev)}>
          Click Here
        </button>
        {show && (
          <div style={{position: 'absolute'}} ref={popup}>
            This is useEffect Popup
           </div> 
        )}
      </>
  )
}
