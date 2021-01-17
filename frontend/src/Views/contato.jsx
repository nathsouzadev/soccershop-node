import SentMsg from '../components/Contact/Msg';
import ButtonContact from '../components/Contact/contact';
import phone from '../assets/phone.svg';
import mail from '../assets/mail.svg';

const ContatcPage = () => {
        return (
            <>
            <main className="container mt-1" /** !!IMPORTANT >> configure render after sent message */>
                <div className="row mx-auto">
                    <ButtonContact url="mailto:contato@soccershop.com?subject:Contato via site" img={mail}>
                        contato@soccer.com
                    </ButtonContact>

                    <ButtonContact url="https://api.whatsapp.com/send?l=pt_BR&phone=05511999999999&text=Oi, quero informações sobre camisas do meu time" img={phone}>
                        (11) 99999-9999
                    </ButtonContact>
                </div>

                <SentMsg/>
            </main>
        </>
        );
}

export default ContatcPage;
