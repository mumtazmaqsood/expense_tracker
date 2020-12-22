
import './App.css';


//import components
import { Header} from './components/Header';
import {Balance} from './components/Balance';
//import {TranscationHistory} from './components/TranscationHistory'
//import { AddTranscation } from './components/AddTranscation';
import { AccountSummary} from './components/AccountSummary';
import { TranscationHistory } from './components/TranscationHistory';
import { AddTranscation } from './components/AddTranscation';

function App() {
  return (
    <div className="App">
      Testing Code
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TranscationHistory /> 
        <AddTranscation/>
      </div>    
    </div>
  );
}

export default App;
