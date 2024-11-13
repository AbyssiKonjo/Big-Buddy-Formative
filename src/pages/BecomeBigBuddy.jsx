import React from 'react'

// Import Component
import PageHeader from '../components/PageHeader';
import BigBuddyForm from '../components/BigBuddyForm';

import Seo from '../components/Seo';

const BecomeBigBuddy = () => {
  return (
    <>
      <Seo
        title='Become A Big Buddy - Big Buddy Formative'
        description='Browse my amazing wordpress Post for my custom site.'
        url={window.location.href}
      />
      <div id='pageContent'>
        <PageHeader title='become a big buddy'/>
        <div id='contentInfo'></div>
        <BigBuddyForm/>
      </div>
    </>
  )
}

export default BecomeBigBuddy
