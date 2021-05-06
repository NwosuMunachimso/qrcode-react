import React, {useState, useEffect, useRef} from 'react'; //here, I imported react, usestate, useeffect, usererf

type Props = { //Here we are defining type props
    name?: string;
    other?: string;
}


const Url: React.FC<Props> = (props)  => {
    const QRCode = require('qrcode.react'); //Here, I declared the code to generate QR codes

    const [url, setUrl] = useState('');// Here, I called on useState and defined the variable url and the function SetUrl which 
    //Url holds the value of the current state of the url and the function chnages the current state value in the variable. It is initialized as an empty string
    let userInfoInput: any = useRef(); //any is used here to accommodate possible undefined.
    

    const showUrl = (event:any) => {//Here, I defined a function(showURL) to pass the URL the user inputs as what the setURL function will set as the current state value in the URL variable.
        setUrl(event.target.value);
    };

    useEffect(() => {
        userInfoInput.current.focus(); //focus on the referenced input field 
    }, []); //The array symnbol so that it wouldn't run repeatedly, rather only once

//Below on line 35, enables the user to input a url and when inputted, the showUrl function is ran which puts the current state value of url in the url variable.
//Below on line 39, when the user clicks the generate code button, the function showUrl is ran.
//Below on line 45, the code generates a qr code for url with the defined specifics.

    return (
        <div className="box has-background-primary is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <p className="title has-text-centered">URL</p>
            <br />
            <p>
                <input className="input" ref={userInfoInput} type="text" 
                placeholder="Enter Url" onInput = {showUrl}/>
            </p>
            <br />
            <p> 
                <button className="button is-link" onClick={showUrl}> 
                    Generate QR Code
                </button>
            </p>
            <br />
            <div>
                <QRCode value={url} size={256} fgColor="black"/>
            </div>
            </div>
            
            )
        
            
        }
        
        export default Url; //Here, I exported the Url component
