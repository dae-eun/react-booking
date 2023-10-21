import React, { useState } from "react";

const About = ()=>{
    const [inputs, setInputs] = useState({
        name: 'jason',
        tel: '012-345-6789', 
        date:'june 1, 6:00PM', 
        person:'4', 
        tableInfo:'3', 
        messege:'zxcv',
    });

    const {name, tel, date, person, tableInfo, messege} = inputs

    const onChange = (e)=>{
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...inputs,
            [id]: value
        })
    }
    return (
        <div>
            <div>
                <p>
                    <label for="name">Name</label>
                    <input type="text" id="name" value={name} onChange={onChange}/>
                </p>
                <p>
                    <label for="name">Phone</label>
                    <input type="tel" id="tel" value={tel} onChange={onChange}/>
                </p>
                <p>
                    <label for="name">Date</label>
                    <input type="date" id="date" value={date} onChange={onChange}/>
                </p>
            </div>
            <div>
                <p>
                    <label for="name">Person</label>
                    <input type="text" id="person" value={person} onChange={onChange}/>
                </p>
                <p>
                    <label for="name">Name</label>
                    <input type="text" id="name" value={tableInfo} onChange={onChange}/>
                </p>
            </div>
            <div>
                <textarea placeholder="Add Note.."></textarea>
            </div>
        </div>
    );
}

export default About;