import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { useEffect, useReducer, useState } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';

function App() {
    const [items, setItems] = useState([]);
    const [reportIncome, setReportIncome] = useState(0);
    const [reportExpense, setReportExpense] = useState(0);
    const onAddNewItem = (newItem) => {
        setItems((prevItem) => {
            return [newItem, ...prevItem]
        })
    }
    useEffect(() => {
        const amounts = items.map(items => items.amount);
        const income = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0);
        const expense = (amounts.filter(element => element < 0).reduce((total, element) => total += element, 0)) * -1;

        setReportIncome(income);
        setReportExpense(expense);

    }, [items], reportIncome, reportExpense);
    //reducer state 
    const [ShowReport, setShowReport] = useState(false);
    const reducer = (state, action) => {
        switch (action.type) {
            case "SHOW":
                return setShowReport(true);
            case "HIDE":
                return setShowReport(false);
        }
    }
    const [result, dispatch] = useReducer(reducer, ShowReport)
    return (
        <DataContext.Provider value={
            {
                income: reportIncome,
                expense: reportExpense
            }
        }>
            <div className="container">
                <h1 style={{ color: 'red', textAlign: 'center', fontSize: '1.5rem' }}>แอพบัญชีรายรับ-รายจ่าย</h1>
                {ShowReport && <ReportComponent />}
                <FormComponent onAddItem={onAddNewItem} />
                <Transaction item={items} />
                <button style={{margin:"0px 5px"}} onClick={() => dispatch({ type: "SHOW"})}>Show</button>
                <button onClick={() => dispatch({ type: "HIDE"})}>Hide</button>
            </div>
        </DataContext.Provider>
    );
}

export default App;
