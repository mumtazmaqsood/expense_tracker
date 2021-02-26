
import './App.css';


//import components
import { Header} from './components/Header';
import {Balance} from './components/Balance';
//import {TranscationHistory} from './components/TranscationHistory'
//import { AddTranscation } from './components/AddTranscation';
import { AccountSummary} from './components/AccountSummary';
import { TranscationHistory } from './components/TranscationHistory';
import { AddTranscation } from './components/AddTranscation';
import { GlobalProvider } from './context/GlobalState';

//import swDev from './swDev'



function App() {
  /* if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then((result)=>{
      console.log("Result",result);
    })
  } */
  //swDev();
  return (
    <GlobalProvider>
    <div className="App">
      Testing Code from github
      
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TranscationHistory /> 
        <AddTranscation/>
      </div>    
    </div>
  </GlobalProvider>
  );
}

export default App;
