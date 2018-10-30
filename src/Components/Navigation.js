import React from 'react';


const Navigation=()=>{
  return (
<div className='container'>    
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
<img src='https://kumparan.com/dist/ea424096e816a20cc76f3d1279692158.svg' width='150'></img> &nbsp;&nbsp;&nbsp;
<form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-info my-2 my-sm-0 fa fa-search" type="submit">  </button>
    </form>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarText">
  
  <ul className=" nav navbar-nav mr-auto">
   
  </ul>

  <ul className=" nav navbar-nav">
    <li className="nav-item">
      <a className="nav-link text-info fa fa-users strong" href="#">Login</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-info fa fa-users  strong" href="#">Signup</a>
    </li>
    
    <li className="nav-item">
      <a className="nav-link text-info " href="#"> <span className="strong fa fa-list-alt"> List</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-danger fa fa-plus-circle strong " href="#"> Create Story</a>
    </li>
  </ul>
 
 
  
</div>
</nav>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
{/* <ul className=" nav navbar-nav mr-auto">
   
   </ul> */}
  <ul className=" nav navbar-nav">

    <li className="nav-item">
      <a className="nav-link " href="#">Lion air jatuh</a>
    </li>
    <li className="nav-item">
      <a className="nav-link  " href="#">  Video</a>
    </li>
    <li className="nav-item">
      <a className="nav-link  " href="#"> Honor</a>
    </li>
    <li className="nav-item">
      <a className="nav-link  " href="#"> News</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="#"> Sepak Bola</a>
    </li>
    <li className="nav-item">
      <a className="nav-link  " href="#"> ekonomi</a>
    </li>
    <li className="nav-item">
      <a className="nav-link  " href="#"> Politik</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="#"> Hiburan</a>
    </li>
  <li className="nav-item">
      <a className="nav-link " href="#"> kesenangan</a>
    </li>

    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         More
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Internasional</a>
          <a class="dropdown-item" href="#">MOTO GP</a>
          <a class="dropdown-item" href="#">Eureka</a>
        </div>
      </li>
    
  </ul>
  
</nav>
</div>
);};
export default Navigation;
