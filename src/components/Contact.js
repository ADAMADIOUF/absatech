// import React from 'react'
// import a from "../assets/contact1.png"
// const Contact = () => {
//   return (
//     <div className='contact section-center'>
//       <div className='title contact-title'>
//         <h3>Contact For Any Query</h3>
//         <p>
//           Absatech Contact" refers to the contact information provided by
//           Absatech, a digital solution provider with a wealth of experience.
//           Absatech offers a reliable and accessible means of communication for
//           individuals, businesses, or clients seeking their services or
//           expertise. Whether you have inquiries, need assistance, or want to
//           discuss potential collaborations, the Absatech contact information
//           serves as your gateway to connect with their knowledgeable team. Reach
//           out to Absatech through the provided contact details to explore
//           digital solutions, discuss your unique needs, or simply engage in a
//           productive conversation with their dedicated professionals.
//         </p>
//       </div>
//       <div className='contact-container'>
//         <article>
//           <form className='form'>
//             <div className='contact-container'>
//               <div>
//                 <input
//                   type='text'
//                   className='input-contact'
//                   placeholder='your name'
//                 />
//               </div>
//               <div>
//                 <input
//                   type='email'
//                   className='input-contact'
//                   placeholder='your email'
//                 />
//               </div>
//             </div>
//             <div>
//               <input
//                 type='text'
//                 className='input-contact'
//                 placeholder=' subject'
//               />
//             </div>
//             <div>
//               <input
//                 type='text'
//                 className='input-contact input-message'
//                 placeholder='message'
//               />
//             </div>
//             <button className='btn btn-contact input-contact'>
//               send message
//             </button>
//           </form>
//         </article>
//         <article className='contact-details'>
//           <h5>REACH OUT TODAY</h5>
//           <h3>Contact us to get the process started!</h3>
//           <p>
//             We will get in touch with you ASAP to discuss your project or
//             digital marketing need.
//           </p>
//           <h6>1101 32 ND AVE SW</h6>
//           <h6>Minot north dakota</h6>
//           <h6>absatech@gmail.com</h6>
//           <h6>+1 701 500 32 59</h6>
//         </article>
//       </div>
//       <img src={a} alt='' />
//     </div>
//   )
// }

// export default Contact
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/.netlify/functions/contact', {
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
          emailName: '',
          message: '',
        })
      } else {
        const errorData = await response.json()
        setMessage(`Failed to send message. ${errorData.message || ''}`)
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type='email'
          placeholder='Email'
          value={formData.emailName}
          onChange={(e) =>
            setFormData({ ...formData, emailName: e.target.value })
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
        <button type='submit' disabled={isSubmitting}>
          Send Message
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Contact
