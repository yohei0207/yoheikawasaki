import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Head from './Head';
import Top from './Top';
import Music from './Music_component/Music';
import Product from './Product_component/Product';
import Foot from './Foot';
const homeUrl = process.PUBLIC_URL;



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <BrowserRouter>
        <Head />
        <div className='container-fluid my_main'>
          <Routes>
            
            <Route path={homeUrl} element={<Top />} />
            <Route path= {homeUrl + "/product"} element={<Product />} />
            <Route path={homeUrl + "/music"} element={<Music />} />

          </Routes>
        </div>
        <Foot />

      </BrowserRouter>



    );
  }

}
export default App;
