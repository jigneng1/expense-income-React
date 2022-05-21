import Item from "./Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid'; //library generete key
function Transaction(props) {
    const {item} = props; //สร้างเป็น destruction
    return(
        <ul className="item-list">
            {item.map((e)=>{
                return <Item key={uuidv4()} {...e}></Item>
                // ...e คือเอามาทั้ง object ต้องชื่อตาม props
            })}
        </ul>
    );
}

export default Transaction;