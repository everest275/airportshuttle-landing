import React from 'react'
import '../../styles/ReservationForm.css'
function ReservationForm() {
  return(
  <div className='reservation-box-contain'>
    <div className="card-frm-res">
    <span className="title-message-res">Leave a Comment</span>
    <form className="form-message">
      <div className="group">
      <input placeholder="" type="text" required=""/>
      <label htmlFor="name">Name</label>
      </div>
  <div className="group">
      <input placeholder="" type="email" id="email" name="email" required=""/>
      <label htmlFor="email">Email</label>
      </div>
  <div className="group">
      <textarea placeholder="" id="comment" name="comment" rows="5" required=""></textarea>
      <label htmlFor="comment">Comment</label>
  </div>
      <button className='button-res-sub'type="submit">Submit</button>
      <button className='button-res-cancel'>Cancel</button>
    </form>
  </div>
  </div>
  )
}
export default ReservationForm