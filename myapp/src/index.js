import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// const myname = "mrinal";
import Heading from "./Heading";
import Para from "./Para";

// let curDate = new Date();
// curDate = curDate.getHours();

// let greeting = '';
// const cssStyle = {
//     color: 'green'
// }
// if (curDate >= 1 && curDate < 12)
// {
//     greeting = 'Good Morning';
//     cssStyle.color = 'Green';
// }
// else if (curDate >= 12 && curDate < 19)
// { 
//     greeting = 'Good Afternoon';
//     cssStyle.color = 'Orange';
// }
// else
// {
//     greeting = 'Good Night';
//     cssStyle.color = 'Black';
// }

ReactDOM.render(
    <>
        <Heading>
        <Para/>
            <p>This is my world!!</p>
            <ol>
                <li>Mrinal</li>
                <li>Anand</li>
                <li>NIT Agartala</li>
            </ol>
        </Heading>
        </>,
    document.getElementById('root')
);