import React from 'react';
import PropTypes from "prop-types";

const Trending = props => {
  return (
    
    <div>
        
        
    <div class="card" >
    
    {/* <div class="card-header">
      
    </div> */}
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><span className='circle'>{props.index+1}#</span>	<a href={props.url} >{props.title}</a>
    </li>
      {/* <li class="list-group-item">	<span className='circle'>2#</span>Basarnas: Lion Air Jakarta-Pangkal Pinang Dipastikan Jatuh</li>
      <li class="list-group-item"><span className='circle'>3#</span>	Daftar 181 Penumpang Pesawat Lion Air yang Jatuh di Tanjung Karawang</li>
      <li class="list-group-item">	<span className='circle'>4#</span>Menhub: Ada Indikasi Pesawat Lion Air Tak Bisa Lanjut Terbang</li>
      <li class="list-group-item">	<span className='circle'>5#</span>	Kronologi Jatuhnya Pesawat Lion Air Jakarta-Pangkal Pinang di Karawang</li>
         */}
    </ul>
  </div>
  </div>
      



  )}

  Trending.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string
  };
  
  export default Trending;