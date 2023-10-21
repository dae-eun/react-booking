import React, { useState } from "react";
import { ReactComponent as MathMinus } from "../assets/images/math-minus.svg";
import { ReactComponent as MathPlus } from "../assets/images/math-plus.svg";
import { ReactComponent as DropDown } from "../assets/images/arrow_drop_down.svg";
import { ReactComponent as Date } from "../assets/images/event_available.svg";
import { ReactComponent as Clock } from "../assets/images/alarm_on.svg";
import { ReactComponent as Today } from "../assets/images/today.svg";
import { ReactComponent as Trash } from "../assets/images/trash.svg";
import { ReactComponent as Up } from "../assets/images/chevron-up.svg";
import { ReactComponent as Down } from "../assets/images/chevron-down.svg";



let books=[] ;
let addBooks=[];
let tableItems =[];
const month=[
    {1:"Jan"},
    {2:"Feb"},
    {3:"Mar"},
    {4:"Apr"},
    {5:"May"},
    {6:"Jun"},
    {7:"jul"},
    {8:"Aug"},
    {9:"Sep"},
    {10:"Oct"},
    {11:"Nov"},
    {12:"Dec"},
];
// tableItems create array
(function item(){
    let index=0;
    for(let floor=1; floor<4; floor++){
        for(let table=1; table<7; table++){
            index++
            let item = {table,floor,index}
            tableItems = [...tableItems,item]
        }
    }
})();


// dropbox control
const selectbox=()=>{
    document.addEventListener('click', e=>{
        if(e.target.closest('.table_btn')){
            e.target.closest('.table_btn').closest('.table_item').classList.toggle('on')
        }
        if(!e.target.closest('.table_btn')){
            document.querySelectorAll('.table_item').forEach(el => {
                el.classList.remove('on');
            });
        }
    })
}
selectbox();

// dim control
const dim=()=>{
    document.addEventListener('click', e=>{
        if(e.target.closest('.dateBtn')){
            document.querySelector('.dim').classList.toggle('on')
        }
        if(e.target.closest('.closeBtn')){
            document.querySelector('.dim').classList.remove('on')
        }
    })
}
dim();
const About = ()=>{
    const [inputs, setInputs ] = useState({
        name: '',
        tel: '', 
        date:'', 
        messege:'',
    });
    const {name, tel, date, tableInfo, messege} = inputs;
    const [ table, setTables ]=useState([])
    const [ person, setNumber ] = useState(0);
    const [ hourItem, setHour ] = useState(0);
    const [ minItem,  setMin ] = useState(0);
    const [ timeType, setType ] = useState( {meridiemItem: 'PM'} )
    const [ dateValue, setDate ] = useState( {date: '2023'} )
    const {meridiemItem} = timeType;

    const TableItem = ({tableData})=>{
        return(
            <li className="talbe_info_item">
                <label htmlFor={"tableInfo"+tableData.index}>
                    <input type="text" id={"tableInfo"+tableData.index} name="table" className="selectbox__input" onClick={onClick}  defaultValue={Object.values(tableData)} />
                    <span className="bo-selectbox__label">Reseved Table {tableData.table} <span>&#183;</span> Floor {tableData.floor}</span>
                </label>
            </li>
        )
    }
    const MonthItem = ({month})=>{
        return(
            <li className="month_item">
                <label htmlFor={"tableInfo"+Object.keys(month)}>
                    <input type="text" id={"tableInfo"+Object.keys(month)} name="table" className="selectbox__input" onClick={onClick}  defaultValue={Object.keys(month)} />
                    <span assName="bo-selectbox__label">{Object.values(month)}</span>
                </label>
            </li>
        )
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        addBooks={...inputs,person,table}
        books=[...books,addBooks]
        
    }
    const onClick = (e)=>{
        const value = e.target.value;
        setTables([
            ...table,value
        ])
    }
    const onChange = (e)=>{
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...inputs,
            [id]: value
        })
    }
    const changeType = ()=>{
        const item = document.querySelector('.meridiemItem')
        if(item.innerHTML === 'PM'){
            setType({meridiemItem:'AM'})
        }else{
            setType({meridiemItem:'PM'})
        }
    }

    return (
        <form onSubmit={onSubmit} className="bookItem_wrap">
            <div className="bookItem_box">
                <p className="textItem">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" defaultValue={name} onChange={onChange} placeholder="Name"/>
                </p>
                <p className="textItem">
                    <label htmlFor="tel">Phone</label>
                    <input type="tel" id="tel" defaultValue={tel} onChange={onChange} placeholder="Phone"/>
                </p>
                <p className="dateItem">
                    <label htmlFor="date">Select Date</label>
                    <button type="button" id="date" className="dateBtn" defaultValue={date} onChange={onChange}><Date />Select Date</button>
                </p>
            </div>
            <div className="bookItem_box">
                <p className="num_item">
                    <label htmlFor="person">Guests</label>
                    <button type="button" onClick={()=>setNumber(person - 1)}><MathMinus /></button>
                    <input type="text" id="person" value={person} onChange={onChange}/>
                    <button type="button" onClick={()=>setNumber(person + 1)}><MathPlus /></button>
                </p>
                <div className="table_item">
                    <button type="button" className="table_btn" defaultValue={tableInfo}>Select Table<DropDown /></button>
                    <ul>
                        {tableItems.map(function(tableItems,index){
                            return <TableItem tableData={tableItems} key={index}/>
                        })}
                    </ul>
                </div>
            </div>
            <div className="bookItem_box">
                <textarea placeholder="Add Note.." defaultValue={messege}></textarea>
            </div>
            <div className="bookItem_box">
                <button>Save</button>
            </div>

            {/* dim */}
            <div className="dim">
                <div className="selectDate_box">
                    <div className="selectDate_line">
                        <Clock />
                        <p className="selectDate_info">{(hourItem<10?"0"+hourItem:hourItem)+"\n:\n"+(minItem<10?"0"+minItem:minItem)+"\n"+meridiemItem}</p>
                    </div>
                    <div className="selectDate_line">
                        <Today />
                        <div className="selectDate_info">
                            <ul>
                                <li className="table_item">
                                    <button type="button" className="table_btn" defaultValue={tableInfo}>Select Table<DropDown /></button>
                                    <ul>
                                        {month.map(function(month,index){
                                            return <MonthItem month={month} key={index}/>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <ul>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="selectDate_line">
                        <ul className="control_time_box">
                            <li>
                                <button type="button" onClick={()=>setHour(hourItem<12? hourItem + 1 : hourItem - 12)} ><Up /></button>
                                <p>{hourItem<10?"0"+hourItem:hourItem}</p>
                                <button type="button" onClick={()=>setHour(hourItem>0? hourItem - 1 : 0)} ><Down /></button>
                            </li>
                            <li>
                                <button type="button" onClick={()=>setMin(minItem<50? minItem + 10 : minItem - 50)} ><Up /></button>
                                <p>{minItem<10?"0"+minItem:minItem}</p>
                                <button type="button" onClick={()=>setMin(minItem>0? minItem - 10 : 0)} ><Down /></button>
                            </li>
                            <li>
                                <button type="button" onClick={changeType}><Up /></button>
                                <p className="meridiemItem" value={meridiemItem}>{meridiemItem}</p>
                                <button type="button" onClick={changeType}><Down /></button>
                            </li>
                        </ul>
                    </div>
                    <div className="selectDate_line">
                        <p className="btn_box">
                            <button type="button" className="closeBtn"><Trash /></button>
                            <button type="button">Save</button>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default About;