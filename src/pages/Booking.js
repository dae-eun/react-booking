import React from "react";
import { ReactComponent as Phone } from "../assets/images/phone.svg";
import { ReactComponent as Date } from "../assets/images/event_available.svg";
import { ReactComponent as Group } from "../assets/images/group.svg";
import { ReactComponent as Edit } from "../assets/images/edit.svg";
import { ReactComponent as Trash } from "../assets/images/trash.svg";

const Book = ({ bookData })=>{
    const { name, tel, date, person, tableInfo, messege }= bookData;
    return (
        <li className="grid_item">
            <div className="bookInfo_aria">
                <div>
                    <p>{name}</p>
                    <p><Phone />{tel}</p>
                </div>
                <p><Date />{date}</p>
                <p><Group />{person}</p>
                <p>{tableInfo}</p>
                <p>{messege}<Edit /></p>
            </div>
            <div className="btn_box_aria">
                <p className="btn_box_item "><Trash /></p>
                <p className="btn_box_item">Seated</p>
            </div>
        </li>
    )
}

const Booking = ()=>{
    const bookings = [
        {name: 'jason', tel: '012-345-6789', date:'june 1, 6:00PM', person:'4', tableInfo:'3', messege:'zxcv',},
        {name: 'David', tel: '012-345-6789', date:'june 1, 6:00PM', person:'', tableInfo:'',  messege:'dd',},
        {name: 'olivia', tel: '012-345-6789', date:'june 1, 6:00PM', person:'4', tableInfo:'3', messege:'',},
        {name: 'mary', tel: '012-345-6789', date:'june 1, 6:00PM', person:'4', tableInfo:'3', messege:'',},
        {name: 'ash', tel: '012-345-6789', date:'june 1, 6:00PM', person:'4', tableInfo:'3',  messege:'',},
    ];
    
    return (
        <div className="booking_aria">
            <ul className="grid_box">
                {bookings.map(function(e,index){
                    return <Book bookData={e} key={index} />
                })}
            </ul>
        </div>
    )
}

export default Booking