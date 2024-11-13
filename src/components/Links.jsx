import { Routes, Route } from 'react-router-dom';

// Import Pages
import Home from '../pages/Home'
import About from '../pages/about/About'
import Partners from '../pages/Partners';
import Stories from '../pages/Stories';
import Mentors from '../pages/Mentors';
import Contact from '../pages/Contact';
import BecomeBigBuddy from '../pages/BecomeBigBuddy';
import Donate from '../pages/Donate';

// Single Page Import
import Story from './Story';
import Partner from './Partner';

const Links = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/partners' element={<Partners/>}/>
      <Route path='/stories' element={<Stories/>}/>
      <Route path='/mentors' element={<Mentors/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/become-a-big-buddy' element={<BecomeBigBuddy/>}/>

      {/* Single Pages */}
      <Route path='/partner/:id' element={<Partner/>}/>
      <Route path='/story/:id' element={<Story/>}/>

      {/* Donation page/Shop */}
      <Route path='/donate' element={<Donate/>}/>
    </Routes>
  )
}

export default Links
