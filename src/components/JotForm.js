import React, { useEffect } from 'react'

function JotForm() {
  useEffect(() => {
    const ifr = document.getElementById('JotFormIFrame-233002839334148')
    // ... rest of the script logic ...

    // Add event listener
    if (window.addEventListener) {
      window.addEventListener('message', handleIFrameMessage, false)
    } else if (window.attachEvent) {
      window.attachEvent('onmessage', handleIFrameMessage)
    }

    // Cleanup on component unmount
    return () => {
      if (window.removeEventListener) {
        window.removeEventListener('message', handleIFrameMessage, false)
      } else if (window.detachEvent) {
        window.detachEvent('onmessage', handleIFrameMessage)
      }
    }
  }, [])

  // Move the functions from the script outside of useEffect but inside the component
  const handleIFrameMessage = (e) => {
    // ... function logic ...
  }

  const isPermitted = (originUrl, whitelisted_domains) => {
    // ... function logic ...
  }

  return (
    <iframe
      id='JotFormIFrame-233002839334148'
      
      onLoad={() => window.parent.scrollTo(0, 0)}
      allowTransparency='true'
      allowFullScreen='true'
      allow='geolocation; microphone; camera'
      src='https://form.jotform.com/233002839334148'
      frameBorder='0'
      style={{
        minWidth: '100%',
        maxWidth: '100%',
        height: '539px',
        border: 'none',
      }}
      scrolling='no'
    ></iframe>
  )
}

export default JotForm
