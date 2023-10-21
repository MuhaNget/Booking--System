import React from 'react'
import "./searchItem.css"
import { useNavigate } from 'react-router-dom'

const SearchItem = () => {

    const navigate = useNavigate();

    const handleAvailability = () => {
        navigate("/hotels/1")
    }

  return (
    <div className='searchItem'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJl-du1I7jNDpEc9SjbHC_bk3-lDaaSkKLCQ&usqp=CAU" alt="item" className="searchItemImg" />
        <div className="searchDescription">
            <h1 className="searchTitle">Tower Street Apartments</h1>
            <span className="searchDistance">500m from center</span>
            <span className="searchTaxiOption">Free airport taxi</span>
            <span className="searchSubTitle">Studio Apartment with Air conditioning</span>
            <span className="searchFeatures">Entire studio: 1 bathroom : 21m 3 full bed</span>
            <span className="searchCancelOption">Free cancellation</span>
            <span className="searchCancelOptionSubTitle">You can cancel later, so lock in tis great price today!</span>
        </div>
        <div className="searchDetails">
            <div className="searchItemRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="searchDetailTexts">
                <span className="searchPrice">$123</span>
                <span className="searchItemOption">Includes taxes and fees</span>
                <button onClick={handleAvailability} className="searchCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem