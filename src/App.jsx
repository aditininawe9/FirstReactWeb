import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    let currDate = new Date(2021, 9,6,16);
    currDate = currDate.getHours();
    let greeting = " ";
    const cssStyle = {};

    if(currDate >=1 && currDate < 12){
    greeting = "Good Morning";
    cssStyle.color = 'blue';
    }
    else if(currDate >= 12 && currDate < 19){
    greeting = "Good Evening";
    cssStyle.color = 'orange';
    }
    else{
    greeting = "Good Night";
    cssStyle.color = 'darkblue';
    }
    return(
        <>
        <div>
            <h1>
            Hello Sir,<span> {greeting}</span>
            </h1>
        </div>
        </>
    );
}

export default App;