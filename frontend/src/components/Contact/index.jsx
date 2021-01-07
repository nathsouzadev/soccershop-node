import React, { useState, useEffect } from 'react';
import phone from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import sent from '../../assets/sent.svg';

const Contact = () => {

    const [msg, setMsg] = useState([]);
    const [render, setRender] = useState(false);
    const [alert, setAlert] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(async () => {
        const url = "http://localhost:5000/msg";
        const res = await fetch(url);
        setMsg(await res.json());
    }, [render])
    
    function newMsg(event) {
        event.preventDefault();
        let form = new FormData(event.target);
        const url = "http://localhost:5000/msg/sent";
        fetch(url, { 
            method: "POST",
            body: form
        }).then((res) => res.json()).then((data) => {
            setRender(!render);
            setAlert(data)

            setTimeout(() => {
                setAlert(false);
            }, 1000)
        })

        setName('');
        setMessage('');
        
    }

    function sentWpp(){
        window.open("https://api.whatsapp.com/send?l=pt_BR&phone=05511999999999&text=Oi, quero informações sobre camisas do meu time");
    }

    function sentMail() {
        window.open("mailto:contato@soccershop.com?subject:Contato via site");
    }
    
        
    return (
        <>
            <main className="container mt-1">
                    <div className="row mx-auto">
                    <div className="col-sm-12 col-xl-6 mt-1">
                        <button type="button" onClick={sentMail} className="btn btn-primary btn-lg btn-block">
                                <img src={mail}/> contato@soccer.com
                        </button>
                    </div>

                    <div className="col-sm-12 col-xl-6 mt-1">
                        <button type="button" onClick={sentWpp} className="btn btn-primary btn-lg btn-block text-light">
                                <img src={phone}/>
                                (11) 99999-9999
                        </button>
                    </div>

                </div>

                <div className="row justify-content-center mt-1">
                    <h2 className="text-light">Fale conosco</h2>
                    <form className="col-12" onSubmit={newMsg}>
                        <div className="form-group">
                            <label className="text-light">Nome</label>
                                <input type="text" className="form-control" id="nome" name="name" placeholder="Digite seu nome" value={name} onChange={event=>setName(event.target.value)}/>
                            
                        </div>
                        <div className="form-group">
                            <label className="text-light">Mensagem</label>  
                                <textarea className="form-control" id="msg" rows="3" name="msg" placeholder="Digite sua mensagem" value={message} onChange={event=>setMessage(event.target.value)}/>
                              
                        </div>
                        <button className="btn btn-primary col-xl-12"><img src={sent}/> Enviar</button>
                    </form>
                </div>

                { alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                                Mensagem enviada!
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div> }

                <div className="mt-1">
                    { msg.map(row =>{
                        return(
                            <div key={row.id_comment} className="card msg">
                                <div className="card-body">
                                    <h5 className="card-title">{row.name_msg}</h5>
                                    <p className="card-text">{row.msg}</p>
                                    <p className="card-text"><small className="text-muted">{row.date}</small></p>
                                </div>
                            </div>
                            )
                    })
                    }
                </div>
            </main>
        </>
    );
    
}

export default Contact;
