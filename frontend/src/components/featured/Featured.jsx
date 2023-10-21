import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/685430.jpg?k=feb35225bc04453df21e423c669e1a7b056fd5e958841447d70a4d4b8d6b4294&o=" alt="Booking_image" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/683767.jpg?k=bb33bb77be173f09b5e338b8e7ad3094e8ed6636005c97abfe365d3b8515f558&o=" alt="Booking_image" className='featuredImg' />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>563 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/641331.jpg?k=0760e64a42df59ebb25acd3163e747df8799795984ba148eaf444de9f3c73fb8&o=" alt="Booking_image" className='featuredImg' />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>544 properties</h2>
        </div>
      </div>

    </div>
  )
}

export default Featured;