import React from 'react';




// class BtnComponent extends React.Component{

//   constructor(props){
//     super(props);
//   }

//   //no need for a constructor...just a button
//   render() {
//     return (
//       <div>
//         {(this.props.status === 0)? 
//           <button className="timer-btn timer-btn-gre"
//           onClick={this.props.start}>Start</button> : ""
//         }
  
//         {(this.props.status === 1)? 
//           <div>
//             <button className="timer-btn timer-btn-red"
//                     onClick={this.props.stop}>Stop</button>
//             <button className="timer-btn timer-btn-yel"
//                     onClick={this.props.reset}>Reset</button>
//           </div> : ""
//         }
  
//        {(this.props.status === 2)? 
//           <div>
//             <button className="timer-btn timer-btn-gre"
//                     onClick={this.props.resume}>Resume</button>
//             <button className="timer-btn timer-btn-yel"
//                     onClick={this.props.reset}>Reset</button>
//           </div> : ""
//         }
       
//       </div>
//     );
//   }

// }

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0)? 
        <button className="timer-btn timer-btn-gre"
        onClick={props.start}>Start</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className="timer-btn timer-btn-red"
                  onClick={props.stop}>Stop</button>
          <button className="timer-btn timer-btn-yel"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button className="timer-btn timer-btn-gre"
                  onClick={props.resume}>Resume</button>
          <button className="timer-btn timer-btn-yel"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }
     
    </div>
  );
}

export default BtnComponent;