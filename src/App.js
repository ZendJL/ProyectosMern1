import React,{ Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  
  //obtener fecha
  let fecha = new Date().getFullYear();
   return(
    <Fragment>
      <Header titulo = 'Tienda Virtual'/>
      <Footer fecha = {fecha}/>
    </Fragment>
  );
   }
export default App;
