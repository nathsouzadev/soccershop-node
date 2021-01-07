import React, { useState, useEffect } from 'react';

const MsgList = () => {
    const [msg, setMsg] = useState([]);

    useEffect(async () => {
        const url = "http://localhost:5000/msg";
        const res = await fetch(url);
        setMsg(await res.json());
    }, [])


    return(
        <>
            {   msg.map(row =>{
                return(
                    <div key={row.id_comment} className="card msg">
                        <div className="card-body">
                            <h5 className="card-title">{row.name_msg}</h5>
                            <p className="card-text">{row.msg}</p>
                            <p className="card-text"><small class="text-muted">{row.date}</small></p>
                        </div>
                    </div>
                    )
                })
            }
        </>
    )
}

export default MsgList;