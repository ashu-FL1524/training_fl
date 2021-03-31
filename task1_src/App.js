import logo from './logo.svg';
import './App.css';
import Compt from "./Compt";
import Form from "./components/Form";
import UnControlledForm from "./components/UnControlledForm"


function App() {
  return (
    <div className="App">
      
          <Compt />
          <Form />
          <UnControlledForm />
    
    </div>
  );
}

export default App; 



// import React from 'react';
// import './App.css';
// import ErrorBoundary from './components/ErrorBoundary';
// import Hero from './components/Hero';
// import { Component } from 'react';

// class App extends Component{
//   render()
//   {
//     return(
//       <div className = "App">
//         <ErrorBoundary>
//             <Hero lapName = "HP" />
//         </ErrorBoundary>
//         <ErrorBoundary>
//             <Hero lapName = "Dell" />
//         </ErrorBoundary>
//         <ErrorBoundary>
//             <Hero lapName = "Sony" />
//         </ErrorBoundary>
//       </div>
//     );
//   }
  
// }
// export default App