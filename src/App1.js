import React from 'react';
import ReactDOM from 'react-dom';
import App2 from "./App2";

class App1 extends React.Component{
   constructor(props){
       super(props);
       //this.result1 = this.props.num*2;
     };

   render() {
    const   result1 = this.props.num*2;
      return (
          <App2 result={result1}/> //this.result1
          )
     };
}

// function App1(props) {
//     const result1 = props.num*3;
//     return (
//         <App2 result={result1}/>
//     );
// }

export default App1;
