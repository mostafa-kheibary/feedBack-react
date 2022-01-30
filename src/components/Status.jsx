import './Status.css'
function Status({feedback}) {
  let avrage = feedback.reduce((prev,num)=>(num.rating+prev),0)/feedback.length;
  avrage = avrage.toFixed(1); 
  return ( 
    <div className="status">
      <h4 className='status__text'>{feedback.length} Reviews</h4>
      <h4 className='status__text'>Avrage Rating : {isNaN(avrage) ? '0' : avrage}</h4>
    </div>
   );
}

export default Status;