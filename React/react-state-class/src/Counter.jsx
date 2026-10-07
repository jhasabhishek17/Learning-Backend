import { useState } from "react";


// Creates a state variable with an initial value of 0 and stores the state value and update function in an array
// export default function Counter () {
//     //let count = 0;
//     let arr = useState(0);
//     console.log(arr);


//// Creates a count state starting from 0 and a function to increase its value by 1
export default function Counter () {
    let [count , setCount ] = useState(0); // this is our initialisation line 
    
    let incCount = () => {
        setCount(count+1);
        console.log(count);
    };


// function incCount() {
//     count += 1;
//     console.log(count);
// }

// return (
//     <div>
//         <h3>Count = { }</h3>
//         <button>Increase Count</button>
//     </div>
//   );
// }

return (
    <div>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>Increase Count</button>
    </div>
  );
}


// callback code

// let incCount = () => {
//     setCount((currCount) => {
//         return currCount +1;
//     });
//     setCount((currCount) => {
//         return currCount +1;
//     });
// }

// in the callback code if it is not writen in callback format then it works as single time no matter how many we write tha code and if code is writen is callback format then it will work functionally means step by step 
// In React, a re-render happens when state or props change, causing the component to run again and update the UI with the latest data.