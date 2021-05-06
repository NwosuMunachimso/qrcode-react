import React, {useState, useEffect, useRef} from 'react';

type Props = { //Here we are defining type props
    name?: string;
    other?: string;
}


const Mail: React.FC<Props> = (props)  => {
    const QRCode = require('qrcode.react'); //Here, we are declaring the code to generate QR codes

    
    const [email, setEmail] = useState(''); //Here, I called on a useState and passed the variable email to hold the current value of the state and the function setEmail to change the state value. It is initialized as an empty string
    const [esubject, setEsubject] = useState('');// Here, I called on useState and passed the variable esubject and the function setEsubject which holds the value of the current state of the email subject and the function which puts in the current value in the variable. It is initialized as an empty string
    const [emessage, setEmessage] = useState(''); // Here, I called on useState and passed the variable emessage and the function SetEmessage which 
    //holds the value of the current state of the email message and the function which puts in the current value in the variable. It is initialized as an empty string
   
    
    let userInfoInput: any = useRef(); //any is used here to accommodate possible undefined.
    

  
    const showEmail = (event:any) => {//Here, I defined a function(showEmail) to pass the email the user inputs as what the setEmail function will set as the current state value in the email variable.
        setEmail(event.target.value);
    };

    const showEsubject = (event:any) => {//Here, I defined a function(showEsubject) to pass the email subject the user inputs as what the setEsubject function will set as the current state value in the esubject variable.
        setEsubject(event.target.value);
    };

    const showEmessage = (event:any) => {//Here, I defined a function(showEmessage) to pass the email message the user inputs as what the setEmessage function will set as the current state value in the emessage variable.
        setEmessage(event.target.value);
    };
        
    

    useEffect(() => {
        userInfoInput.current.focus(); //focus on the referenced input field 
    }, []); //The array symbol so that it wouldn't run repeatedly, rather only once

//Below on line 52, enables the user to input an email and when inputted, the showEmail function is ran which puts the current state value of email in the email variable.
//Below on line 61, enables the user to input a message and when inputted, the showEmessage function is ran which puts the current state value of email message in the emessage variable.
//Below on line 67, enables the user to input a message and when inputted, the showEsubject function is ran which puts the current state value of email subject in the esubject variable.
//Below on line 71, when the user clicks the generate code button, the function showEmail is ran.
//Below on line 73, the code generates a qr code for email with the defined specifics.
    return (
        <div className="box has-background-primary is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <p className="title has-text-centered">Email</p>

            <br />
            <p>
                <input className="input" ref={userInfoInput} type="text" 
                placeholder="Enter Email" onInput = {showEmail}/>
            </p>
            <br />

            <p>
                <input className="input" ref={userInfoInput} type="text" 
                placeholder="Enter Email Message" onInput = {showEmessage}/>
            </p>
            <br />
            <p>
                <input className="input" ref={userInfoInput} type="text" 
                placeholder="Enter Email Subject" onInput = {showEsubject}/>
            </p>
            <br />
            <p> 
                <button className="button is-link" onClick={showEmail}> 
                    Generate QR Code
                </button>
            </p>
            <br />
            <div>
                <QRCode value={`mailto:${email}?subject=${esubject}&body=${emessage}`} size={256} fgColor="black"/>
            </div>
        </div>
            
    )

    
}

export default Mail;//Here I exported the mail component 
