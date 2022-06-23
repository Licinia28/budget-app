import './App.css';

import React, {useState} from "react" ;
import AddItem from './components/addItem';
import {DisplayTransaction} from './components/displayTransaction';
import Home from './components/home';

function App() 
{
   
  const [transaction, setTransaction] = useState ([]);

  
  const addTransaction = ((amount, transaction, transactionType)=>{

    setTransaction((item) => [...item, {
      amount:amount,
      item:item,
      transactionType:transactionType
    }])
    console.log(transaction);
  })

  return (
    <div className="container ">
      <Home list={transaction}/>
      <DisplayTransaction list={transaction} />
      <AddItem add = {addTransaction} />
    </div>
  );
}

export default App;
