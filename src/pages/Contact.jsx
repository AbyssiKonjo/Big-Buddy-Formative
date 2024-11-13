import React from 'react'

// Import Component
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <div id='pageContent'>
        <PageHeader title='contact us'/>
        <div id='contentInfo'>
          <ContactForm/>
        </div>
      </div>
    </>
  )
}

export default Contact
