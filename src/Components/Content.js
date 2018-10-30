import React from 'react';
import PropTypes from "prop-types";


const Content= props=>{
  return (
    <div>
    <div class="card aw" >
    <div className='row'>
    <div className='col-sm-1'><img  class=" img-circle " width='40px' alt="kumparanNEWS" src="https://alibaba.kumpar.com/kumpar/image/upload/w_50,h_50,c_fill,g_face,f_jpg,q_auto,fl_progressive,fl_lossy/tufp3tpktdtkkk9uzl25.jpg"></img>
   </div>
   <div className='col-sm-5'><span className='pull-left'>KumparanNews</span> <br></br><span className='text-muted small'>{props.publish}</span></div>



     </div>
    <img class="card-img-top" src={props.img} alt="Card image cap"/>
    <div class="card-body">Authors : 
    <span className=' text-muted'>&nbsp; {props.author} </span>
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.content}</p>
    </div>
    <hr></hr>
    
    <div class="card-body text-center">
      <a href="#" class="card-link text-secondary fa fa-heart">Sukai</a>
      <a href="#" class="card-link text-secondary fa fa-comment ">Komentar</a>
      <a href="#" class="card-link text-secondary fa fa-share-alt">Bagikan</a>
    </div>
  </div>
  <br></br>
  {/* <div class="card aw" >
    <div className='row'>
    <div className='col-sm-1'><img  class=" img-circle " width='40px' alt="kumparanNEWS" src="https://alibaba.kumpar.com/kumpar/image/upload/w_50,h_50,c_fill,g_face,f_jpg,q_auto,fl_progressive,fl_lossy/tufp3tpktdtkkk9uzl25.jpg"></img>
   </div>
   <div className='col-sm-5'><span className='pull-left'>KumparanNews</span> <br></br><span className='text-muted small'>senin 29 oktober 2018-16:49</span></div>



     </div>
    <img class="card-img-top" src="https://alibaba.kumpar.com/kumpar/image/upload/q_auto,f_jpg,fl_progressive,fl_lossy,c_fill,g_face,w_640,ar_16:9/vkzmwerlsm9ximxoyn2j.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">6 Kantong Jenazah Korban Lion Air Tiba di Pelabuhan JICT Tanjung Priok</h5>
      <p class="card-text">Keenam kantong jenazah langsung dibawa ke RS Polri Kramat Jati.</p>
    </div>
    <hr></hr>
    
    <div class="card-body text-center">
      <a href="#" class="card-link text-secondary fa fa-heart">Sukai</a>
      <a href="#" class="card-link text-secondary fa fa-comment ">Komentar</a>
      <a href="#" class="card-link text-secondary fa fa-share-alt">Bagikan</a>
    </div>
  </div> */}



  </div>
  );}
  Content.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string
  };
  export default Content;