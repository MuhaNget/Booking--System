import React, { useState } from 'react'
import "./hotel.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/navbar/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import Reserve from '../../components/reserve/Reserve'

export default function Hotel() {

  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (index) => {
    setSliderNumber(index);
    setOpen(true);
  }

  // const handleClick = () => {
  //   setOpenModel(true)
  // }

  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction){
      newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    }
    else {
      newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }

    setSliderNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>

      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[sliderNumber].src} alt="my_image" className='sliderImage'/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hetel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation}/>
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">Excellent location - 500m form center</span>
          <span className="hotelPriceHighLight">Book a stay over $114 at this property and get a free airport taxi</span>
          <div className="hotelImages">
          {photos.map((photo, index) => (
              <div className="hotelImgWrapper" key={index}>
                <img
                onClick={() => handleOpen(index)}
                  src={photo.src}
                  alt="hotel_details"
                  className="hotelImage"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Paris</h1>
              <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, nulla, aut sint voluptate asperiores delectus animi vel labore earum molestias aliquam nam, vitae tempore soluta corrupti quos optio libero dolorem? Recusandae, consectetur odit ducimus cum ad sint velit placeat quia dolores minima laboriosam rerum provident, quam temporibus tenetur ipsa cupiditate non possimus, adipisci sit ullam? Quibusdam facere architecto, repellendus, necessitatibus cupiditate ut aperiam quaerat provident voluptatibus eaque quasi delectus optio perspiciatis quidem pariatur veritatis commodi hic placeat. Qui laudantium ipsam sapiente quisquam vero quam ab, at tempore quas eos eius vel exercitationem sint quasi accusantium aspernatur totam nobis accusamus.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of Paris, this property has an excellent location score of 9.8!</span>
              <h2><b>$945</b> (9 nights)</h2>
              <button onClick={() => setOpenModel(true)}>Make Payment or Reserve!</button>
            </div>
          </div>
        </div>

        <MailList/>
        <Footer/>

      </div>
        {openModel && <Reserve setOpen={setOpenModel}/>}
        {/* <Reserve setOpen={setOpenModel}/> */}
    </div>
  )
}
