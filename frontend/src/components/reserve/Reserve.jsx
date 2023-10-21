import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./reserve.css"

const Reserve = ({setOpen}) => {
    // const [open, setOpen] = useState();
    // const [selectedRooms, setSelectedRooms] = useState([]);

    // const handleSelect = (e) => {
    //     const selected = e.target.checked;
    //     const value = e.target.value;
    // }

    const navigate = useNavigate()

    const handleButton = () => {
        setOpen(false)
        navigate("/")
    }
    console.log('first')

  return (
    <div className='reserve'>
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={() => setOpen(false)}/>

            <span>Select your rooms:</span>
            <div className="rItem">
                <div className="rItemInfo">
                    <div className="rTitle">King's room</div>
                    <div className="rDesc">King's size bed, 1 bathroom and 1 kitchen</div>
                    <div className="rMax">Max people: <b>2</b></div>
                    <div className="rPrice">$200</div>
                </div>
{/* 
                <div className="rItemInfo">
                    <div className="rTitle">King's room</div>
                    <div className="rDesc">King's size bed, 1 bathroom and 1 kitchen</div>
                    <div className="rMax">Max people: <b>2</b></div>
                    <div className="rPrice">$200</div>
                </div>

                <div className="rItemInfo">
                    <div className="rTitle">King's room</div>
                    <div className="rDesc">King's size bed, 1 bathroom and 1 kitchen</div>
                    <div className="rMax">Max people: <b>2</b></div>
                    <div className="rPrice">$200</div>
                </div> */}

                <div className="rSelectRooms">
                    <div className="room">
                        <label>200</label>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
            <button className='rButton' onClick={handleButton}>Pay Now or Reserve</button>
        </div>
       
    </div>
  )
}

export default Reserve