import '../../styles/Layout.css'


export default function Button() {
  
 const handelReserv=(e)=>{
  e.preventDefault();
  console.log('hola')
  window.location.href='https://wa.link/zzr1ot'
 }
  
  return (
   <div>
   <div className="card-reservation">
    <div className="reservation-banner-up"></div>
           
    <button className='reserv-button' onClick={handelReserv}>Book Now Here!<img src="images/whatsapp-negro.png" alt="whatsapp"></img></button>
   </div>
   </div>
  )
}
