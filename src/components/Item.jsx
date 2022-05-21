import './Item.css'
function Item({title,amount}) {
    const status = amount<0 ? "expenses":"income";
    const symbol = amount<0 ? "-" : "+";
    return(
            <li className={status}>{title}<span>{symbol}{Math.abs(amount)}</span></li>
    );
}

export default Item;