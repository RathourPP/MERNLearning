import { Fragment } from 'react';
// import Count from './Component/Counter'
import Count from './Component/FunctionalComponent/Counter'
import Employee from './Component/FunctionalComponent/Employee'
import User from './Component/User'
import Registration from './Component/Form';
import './Style/style.css';

function App() {
  return (
    <Fragment>
    {/* <Count/> */}
    <Employee/>
    </Fragment>
  );
}

export default App;
