import React from 'react'
import a from "../assets/contact1.png"
const Contact = () => {
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
      <form className='form'>
        <div className='contact-container'>
          <div>
            <input
              type='text'
              className='input-contact'
              placeholder='your name'
            />
          </div>
          <div>
            <input
              type='email'
              className='input-contact'
              placeholder='your email'
            />
          </div>
        </div>
        <div>
          <input type='text' className='input-contact' placeholder=' subject' />
        </div>
        <div>
          <input type='text' className='input-contact input-message' placeholder='message' />
        </div>
        <button className='btn btn-contact input-contact'>send message</button>
      </form>
      <img src={a} alt="" />
    </div>
  )
}

export default Contact
