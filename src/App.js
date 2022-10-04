import './App.scss';
import {useState} from 'react';

import FormName from './components/FormName';
import Header from './components/Header';
import FormPlanHeader from './components/FormPlanHeader';
import FormPlan from './components/FormPlan';
import ActionFooter from './components/ActionFooter';

const defaultState = {
  name: 'Omarsys FE',
  prefemed: false,
  criteria: [{
    product: 'Casion',
    from: 0,
    to: 10,
    criterion: 'Net Revenue',
    percentage: 10
  }, {
    product: 'Casion',
    from: 10.01,
    to: 100,
    criterion: 'Net Revenue',
    percentage: 20
  }, {
    product: 'Lotto',
    from: 0,
    to: 20,
    criterion: 'Turnover',
    percentage: 10
  }]
}

function App() {
  const [plan, setPlan] = useState(defaultState)

  const updateName = (name, prefemed) => {
    return setPlan((prevState) => {return {...prevState, name, prefemed}})
  }

  const deleteAll = () => {
    return setPlan(() => ({
      name: '',
      prefemed: false,
      criteria: []
    }))
  }

  const addNewCriteria = (data) => {
    return setPlan((prev) => {
      const criteria = prev.criteria.reduce((newCriteria, curr) => {
        console.log(curr.to, data.from);
        newCriteria.push(curr);
        if(curr.product === data.product && (curr.to+0.01) === data.from) {
          newCriteria.push(data);
        }
        return newCriteria;
      }, [])

      if(criteria.length === prev.criteria.length && data.name && data.criteria) {
        criteria.push(data);
      }
      return {
        ...prev,
        criteria
      }
    })
  }

  const deleteRow = (index) => {
    return setPlan((prevState) => {
      const criteria = prevState.criteria.filter((_, i) => i !== index);
      return {
        ...prevState,
        criteria
      }
    })
  }

  return (
    <div className="app">
      <Header/>
      <FormName saveAction={updateName} data={plan}/>
      <FormPlanHeader addNewCriteria={addNewCriteria} data={plan}/>
      <FormPlan data={plan.criteria} deleteRow={deleteRow}/>
      <ActionFooter deleteAll={deleteAll} data={plan}/>
    </div>
  );
}

export default App;
