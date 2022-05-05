import { useState } from 'react'
import './FromComponents.css'
function FormComponent(props) {

    //สร้าง state ข้างในเป็น function
    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState("");
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
        setAmount('');
    }
    return(
        <form onSubmit={saveItem}> 
        <div className="form-control">
            <label>ชื่อรายการ</label>
            <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle}  value={title}/>
        </div>
        <div className="form-control">
            <label>จำนวนเงิน</label>
            <input type="text" placeholder="(+รายรับ , -รายจ่าย )" onChange={inputAmount} value={amount}/>
        </div>
        <div>
            <button type="submit" className='btn'>เพิ่มข้อมูล</button>
        </div>
    </form>
    );
}

export default FormComponent;