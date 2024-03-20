import Item from './Item'
import {v4 as uuidv4} from 'uuid'

const Transaction = () => {
    const data = [
        {title : "ค่ารักษาพยาบาล",price :2000},
        {title : "ค่า internet" ,price :2000},
        {title : "100" ,price : 2000}
    ]
    return (
        <ul>
            {data.map(Element =>{
                return <Item title = {Element.title} price = {Element.price} key = {uuidv4()}/>
            })}
        </ul>
    ) ;
}

export default Transaction ;