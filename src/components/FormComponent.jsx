import { useEffect, useState } from 'react'
import './FromComponents.css'
function FormComponent(props) {
    //สร้าง state ข้างในเป็น function
    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState(0);
    const inputTitle  =(event) =>{
        setTitle(event.target.value);
    }
    const inputAmount =(event) =>{
        setAmount(event.target.value);
    }
    const saveItem =(event) =>{
        event.preventDefault()
        const itemData ={
            //ดึงมาจาก state
            title:title,
            amount:Number(amount) //convert  to num
        }
        //set default
        props.onAddItem(itemData);//bottom-up
        setTitle('');
        setAmount(0);
    }
    const [formValid,setformValid] = useState(false);
    useEffect(()=>{
        const checkData = title.trim().length>0 && amount !==0 ; //boolean
        setformValid(checkData);
       
    },[title,amount]);
    return(
        <form onSubmit={saveItem}> 
        <div className="form-control">
            <label>ชื่อรายการ</label>
            <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle}  value={title}/>
        </div>
        <div className="form-control">
            <label>จำนวนเงิน</label>
            <input type="number" placeholder="(+รายรับ , -รายจ่าย )" onChange={inputAmount} value={amount}/>
        </div>
        <div>
            <button type="submit" className='btn' disabled={!formValid}>เพิ่มข้อมูล</button>
        </div>
    </form>
    );
}

export default FormComponent;