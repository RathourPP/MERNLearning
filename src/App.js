import { Fragment } from 'react';
// import Count from './Component/Counter'
import Count from './Component/FunctionalComponent/Counter'
import Employee from './Component/FunctionalComponent/Employee'
import Test from './Component/FunctionalComponent/test'
import User from './Component/User'
import Registration from './Component/Form';
import Header from './Component/PropsComponent/Header'
import history from './history';
import './Style/style.css';

function App(props) {
  const OnClickRedirect=()=>{
    props.history.push("/Registration");
}
  return (
    <button onClick={()=>{OnClickRedirect()}}>Click Me</button>
  );
}

export default App;
