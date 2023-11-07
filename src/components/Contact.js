import React, { useEffect, useState } from 'react'
import a from "../assets/map2.png"
const Contact = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/.netlify/functions/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          message: '',
          subject: '',
        })
        setTimeout(() => setMessage(''), 3000) // Clear message after 3 seconds
      } else {
        const errorData = await response.json()
        setMessage(`Failed to send message. ${errorData.message || ''}`)
        setTimeout(() => setMessage(''), 3000) // Clear message after 3 seconds
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
      setTimeout(() => setMessage(''), 3000) // Clear message after 3 seconds
    }

    setIsSubmitting(false)
  }

  return (
    <div className='contact section-center'>
      <div className='title contact-title'>
        <h3>Contact For Any Query</h3>
        <p>
          Absatech Contact" refers to the contact information provided by
          Absatech, a digital solution provider with a wealth of experience.
          Absatech offers a reliable and accessible means of communication for
          individuals, businesses, or clients seeking their services or
          expertise. Whether you have inquiries, need assistance, or want to
          discuss potential collaborations, the Absatech contact information
          serves as your gateway to connect with their knowledgeable team. Reach
          out to Absatech through the provided contact details to explore
          digital solutions, discuss your unique needs, or simply engage in a
          productive conversation with their dedicated professionals.
        </p>
      </div>
      <div className='contact-container'>
        <article>
          <form onSubmit={handleSubmit} className='form'>
            <input
              type='text'
              placeholder='Name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              type='email'
              placeholder='Email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <input
              type='text'
              placeholder='subject'
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              required
            />
            <textarea
              placeholder='Message'
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
            <button type='submit' disabled={isSubmitting} className='btn'>
              Send Message
            </button>
          </form>
          {message && <p>{message}</p>}
        </article>
        <article className='contact-details'>
          <h5>REACH OUT TODAY</h5>
          <h3>Contact us to get the process started!</h3>
          <p>
            We will get in touch with you ASAP to discuss your project or
            digital marketing need.
          </p>
          <h5>1101 32 ND AVE SW</h5>
          <h5>Minot north dakota</h5>
          <h5>absatech@gmail.com</h5>
          <h5>+1 701 500 32 59</h5>
        </article>
      </div>
      <img src={a} alt='' />
    </div>
  )
}

export default Contact
