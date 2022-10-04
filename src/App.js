import './App.scss';

import FormName from './components/FormName';
import Header from './components/Header';
import FormPlanHeader from './components/FormPlanHeader';

import ActionFooter from './components/ActionFooter';

function App() {
  return (
    <div className="app">
      <Header/>
      <FormName/>
      <FormPlanHeader/>

      <ActionFooter/>
    </div>
  );
}

export default App;
