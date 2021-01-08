import payment from '../assets/payment.jpeg';

const Footer = () => {
        return(
            <>
                <div className="media mt-1">
                    <div className="media-body text-center">
                        <h5 className="mt-0 text-light">Formas de pagamento</h5>
                        <img src={payment} className="align-self-end img-fluid" alt="Formas de pagamento"/>
                        <p className="text-light">&copy; Nathally Souza</p>
                    </div>
                </div> 
            </>
        );
}

export default Footer;