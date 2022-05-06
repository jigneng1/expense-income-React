import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { useState } from 'react';


function App() {
    const[items , setItems] = useState([]);
    const onAddNewItem =(newItem) =>{
        setItems((prevItem)=>{
            return [newItem,...prevItem]
        })
    }
  return (
    <div className="container">
        <h1 style={{color:'red',textAlign:'center',fontSize:'1.5rem'}}>แอพบัญชีรายรับ-รายจ่าย</h1>
        <FormComponent onAddItem = {onAddNewItem}/>
        <Transaction item={items}/>
    </div>
  );
}

export default App;
