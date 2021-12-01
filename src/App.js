import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div>
//       <WelcomeComponent />
//     </div>
//   )
// }

// export default App;

// class WelcomeComponent extends React.Component {
//   render() {
//     return <h1>Codetrain is awesome, react works!!!!</h1>
//   }
// }

function App() {
  return (
    <div>
      <WelcomeComponent name="Jamil" />
    </div>
  );
}

export default App;

class WelcomeComponent extends React.Component {
  render() {
    return <h1>{this.props.name} is awesome, react works!!!!</h1>
  }
}

