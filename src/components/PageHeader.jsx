import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

const PageHeader = ({ title, image_url }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        event.preventDefault();
        navigate(-1);
    }

  return (
    <div className='header-section'>
        <p onClick={handleBackClick}><IoIosArrowBack/></p>
        <h1>{title}</h1>
    </div>
  )
}

export default PageHeader
