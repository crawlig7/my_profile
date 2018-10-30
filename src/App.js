import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import './Components/Navigation'
import './Components/Content'
import './Components/Trending'
import './Components/Foot'
import Navigation from './Components/Navigation';
import Content from './Components/Content';
import Trending from './Components/Trending';
import Foot from './Components/Foot';



// News API
const apiKey = "3828950256d94c009209d8f088bf918f";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?" + "country=id&" + "apiKey=" + apiKey;

const urlEvery = "https://newsapi.org/v2/everything?q='tech'&apiKey=3828950256d94c009209d8f088bf918f";

class App extends Component {
  state = {
    listNews: [],
    listEvery:[],
    username: "",
    isLogin: false
  };
  componentDidMount = () => {
    const self = this;
    axios
      .get(urlHeadline)
      .then(function(response) {
        
        self.setState({ listNews: response.data.articles });
        // handle success
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });

      axios
      .get(urlEvery)
      .then(function(response) {
        self.setState({ listEvery: response.data.articles });
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });

  };
  
  render() {
    const {listNews,listEvery}=this.state
    
    return (
      
        <div classNameName="App"> 
       
             <Navigation/>
               <br></br>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3  '>

              <div className='row'>
              <h4 className='pull-left' >Trending Stories </h4> &nbsp;&nbsp;&nbsp;
              <a href='#' className='pull-right'>view all</a>
              </div>     
                {listEvery.map((item, key) => {
                const src_img = item.urlToImage === null ? 'kosong' : item.urlToImage;
                const content = item.urlToImage !== null ? item.content : "";
                return <Trending key={key} url={item.url} title={item.title} img={src_img} content={content} index={key} />;
                  })}
                  {/* <Trending/> */}
              </div>

            <div className='col-md-7  '>
                 
                {listNews.map((item, key) => {
                const src_img = item.urlToImage === null ? "https://img.huffingtonpost.com/asset/5bd7b10a260000450283e2f4.jpeg?cache=sGYdp0k3g9&ops=1200_630" : item.urlToImage;
                const content = item.content !== null ? item.content : "";
                return <Content key={key}  title={item.title} img={src_img} content={content} author={item.author} publish={item.publishedAt} />;
                  })}
                  
              

            {/* <Content /> */}
          </div>
          </div>
         
        </div> 
        <br></br>
           <Foot/>
       

      
 


 </div>

    );
  }
}

export default App;
