import React, { useState } from 'react'
import a from "../assets/contact1.png"
const Contact = () => {
  const[name,setName]=useState("")
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

console.log(name,email,subject,message);

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
          <form className='form' name='contact' method='POST' data-netlify="true">
            <input type='hidden' name='form-name' value="contact"/>
            <div className='contact-container'>
              <div>
                <input
                  type='text'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='input-contact'
                  placeholder='your name'
                />
              </div>
              <div>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='input-contact'
                  placeholder='your email'
                />
              </div>
            </div>
            <div>
              <input
                type='text'
                id='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className='input-contact'
                placeholder=' subject'
              />
            </div>
            <div>
              <input
                type='text'
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='input-contact input-message'
                placeholder='message'
              />
            </div>
            <button type='submit' className='btn btn-contact input-contact'>
              send message
            </button>
          </form>
        </article>
        <article className='contact-details'>
          <h5>REACH OUT TODAY</h5>
          <h3>Contact us to get the process started!</h3>
          <p>
            We will get in touch with you ASAP to discuss your project or
            digital marketing need.
          </p>
          <h6>1101 32 ND AVE SW</h6>
          <h6>Minot north dakota</h6>
          <h6>absatech@gmail.com</h6>
          <h6>+1 701 500 32 59</h6>
        </article>
      </div>
      <img src={a} alt='' />
    </div>
  )
}

export default Contact
