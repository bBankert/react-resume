import React from 'react';
import './footer.css';

interface IFooterProps {
    email: string,
    phone: string
}


const Footer = ({email,phone}: IFooterProps) => {
    const formatPhoneNumber = (phoneNumber :  string) => {
        if(!phoneNumber){
            return '';
        }
        const matches = phoneNumber.match(/(\d{3})(\d{3})(\d{4})/);
        let formattedNumber = "(" + matches[1] + ") " + matches[2] + "-" + matches[3]; 
        return formattedNumber;
    }


    return(
        <footer className="col-sm-12">
            <p>Brandon Bankert</p>
            <a href={`mailto:${email}?subject=Resume Site Contact`}>Email me</a>
            <a href={`tel:${phone}`}>Phone: {formatPhoneNumber(phone)}</a>
        </footer>
    )
};

export default Footer;