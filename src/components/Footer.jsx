import React from 'react'
import '../styles/Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className='footer'>

        <h3 > <i> 🧑‍🍳Cookin Guide🍴</i> </h3>

        <div className="footer-options">
          <ul>
            <li  onClick={()=>navigate(`/`)}>Go Home🏠</li>
            <li  onClick={()=>navigate(`/category/Chicken`)}>Chicken🍗🐔</li>
            <li  onClick={()=>navigate(`/category/Breakfast`)}>Breakfast🥪🥞</li>
          </ul>
          <ul>
            <li  onClick={()=>navigate(`/category/Dessert`)}>Dessert🍦/Sweet For Tounge🍧</li>
            <li  onClick={()=>navigate(`/category/Goat`)}>Goat🐐/Mutton🍖</li>
            <li  onClick={()=>navigate(`/category/Lamb`)}>Lamb🥩</li>
          </ul>
          <ul>
            <li  onClick={()=>navigate(`/category/Pasta`)}>Noodles🍜/Carbs🍝</li>
            <li  onClick={()=>navigate(`/category/Seafood`)}>Fresh From Waters ?🦈🐟🍤</li>
            <li  onClick={()=>navigate(`/category/Starter`)}>KickStarters🍟</li>
          </ul>
          <ul>
            <li  onClick={()=>navigate(`/category/Vegan`)}>Only Greens Are WE?🥬🥗🍏</li>
            <li  onClick={()=>navigate(`/category/Side`)}>Side/Dips</li>
            <li  onClick={()=>navigate(`/category/Miscellaneous`)}>Miscellaneous</li>
          </ul>
        </div>

        <hr />
        <p>  🧑‍🍳Cookin Guide🍴 - &copy; 2025 - All Rights Reserved</p>
    </div>
  )
}

export default Footer