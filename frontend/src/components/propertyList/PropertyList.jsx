import React from 'react'
import "./propertyList.css"

const propertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJLUtrC2RWnNYVb_xYy5MuW42DZlEBhdObfz3y27GnVnB_swkEKt_csh_SulX-mGOV5Y&usqp=CAU" alt="image1" className='pListImg' />
            <div className="pListTitles">
                <h1>Hetels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSKJLmz8K5yRUYAoxzusY_VRzHJnpiEhgUg&usqp=CAU" alt="image2" className='pListImg'/>
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>232 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZ8xaR7nd1XKdejtWulAe-tXQcpzF9HhlEQ&usqp=CAU" alt="image3" className='pListImg' />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>234 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUiEC9tWKWWQwKHHUVXRx3WFIN8ooflMpIhg&usqp=CAU" alt="image4" className='pListImg' />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>235 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo45S78lc4q0cjwlItrGFw2GMeRu9XPDnv5A&usqp=CAU" alt="image5" className='pListImg' />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>236 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default propertyList