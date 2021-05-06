import React, {useState, useEffect, useRef} from 'react'; //Here, I imported react, usestate, useeffect, useref 

type Props = { //Here we are defining type props
    name?: string;
    other?: string;
}


const Sms: React.FC<Props> = (props)  => {
    const QRCode = require('qrcode.react'); //Here, I declared the code to generate QR codes

   
    const [sms, setSms] = useState('');//Here, I called on useState and defined the variable sms and the function SetSms. The variable 
    //holds the value of the current state of the sms and the function which puts in the current value in the variable. It is initialized as an empty string
    const [smessage, setSmessage] = useState('');//Here, I called on seState and defined the variable smessage to hold the current value of the state and the function setSmessage to change it tp the current state value. It is initialized as an empty string.
    
    
    let userInfoInput: any = useRef(); //any is used here to accommodate possible undefined.
    

    

    const showSms = (event:any) => {//Here, we defined a function(showSms) to pass the Sms number the user inputs as what the setSms function will set as the current state value in the sms variable.
        setSms(event.target.value);
    };

    const showSmessage = (event:any) => {//Here, we defined a function(showMessage) to pass the message the user inputs as what the setSmessage function will set as the current state value in the smessage variable.
        setSmessage(event.target.value);
    };

    

    useEffect(() => {
        userInfoInput.current.focus(); //focus on the referenced input field 
    }, []); //The array symnbol so that it wouldn't run repeatedly, rather only once

//Below on line 48, enables the user to input a number and when inputted, the showSms function is ran which puts the current state value of the phone number in the sms variable.
//Below on line 54, enables the user to input a message and when inputted, the showSmessage function is ran which puts the current state value of sms message in the smessage variable.
//Below on line 57, when the user clicks the generate code button, the function showSms is ran.
//Below on line 65, the code generates a qr code for Sms with the defined specifics.

    return (
        <div className="box has-background-primary is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <p className="title has-text-centered">SMS</p>

            <br />
            <p>
                <input className="input" ref={userInfoInput} type="text" 
                placeholder="Enter Number" onInput = {showSms}/>
            </p>
            <br />

            <p>
                <input className="input" ref={userInfoInput} type="text" 
                placeholder="Enter SMS message" onInput = {showSmessage}/>
            </p>
            <br />
            <p> 
                <button className="button is-link" onClick={showSms}> 
                    Generate QR Code
                </button>
            </p>
            <br />
            <div>
                <QRCode value={`SMSTO:${sms}:${smessage}`} size={256} fgColor="black"/>
            </div>
            
    

        </div>
            
    )

    
}

export default Sms; //Here, I exported the Sms component
