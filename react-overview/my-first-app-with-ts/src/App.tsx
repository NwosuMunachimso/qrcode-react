import React from 'react'; //Here, I imported react 
import './App.css'; //Here, I imported app.css to add css to my file


import Mail from './components/mail'; //Here we are importing the components; mail, url and sms to be mounted on the parent app component
import Url from './components/url';
import Sms from './components/sms';

//on line 17,23,30 the imported components are being mounted on the parent app component
const App: React.FC = () => {
  return (
    <div>
      <p className="title has-text-centered">QRCode Generator</p>
      <div className="columns">
        <div className="column">

          <Mail />

        </div>

        <div className="column">

          <Url />

        </div>


        <div className="column">

          <Sms />

        </div>
      </div>

      <p className="title has-text-centered">By Muna Nwosu</p>

    </div>

  );
}

export default App; //Here, I exported the App parent component