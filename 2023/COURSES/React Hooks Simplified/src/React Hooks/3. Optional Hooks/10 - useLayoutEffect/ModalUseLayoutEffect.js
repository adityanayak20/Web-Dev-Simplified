import React, {useState, useLayoutEffect, useRef} from 'react'

export default function ModalUseLayoutEffect() {
  const [show, setShow] = useState(false)
  const popup = useRef()
  const button = useRef()

  useLayoutEffect(() => {
    if(popup.current == null || button.current == null) return
    const { bottom } = button.current.getBoundingClientRect()
    popup.current.style.top = `${bottom + 25}px`
  }, [show])

  return (
    <>
      <label for={button}>useLayoutEffect Example</label>
      <br/>
      <button ref={button} onClick={() => setShow(prev => ! prev)}>
        Click Here
      </button>
      {show && (
        <div style={{position: 'absolute'}} ref={popup}>
          This is useLayoutEffect Popup
        </div>
      )}
    </>
  )
}
