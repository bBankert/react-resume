import React from 'react';
import './footer.css';
//import Navigation from '../components/navigation/navigation';

const formatPhoneNumber = (phoneNumber) => {
    let formattedNumber = phoneNumber.match(/(\d{3})(\d{3})(\d{4})/);
    formattedNumber = "(" + formattedNumber[1] + ") " + formattedNumber[2] + "-" + formattedNumber[3]; 
    return formattedNumber;
}


const Header = props => (
    <footer className="col-sm-12">
        <p>Brandon Bankert</p>
        <a href={"mailto:" + props.footer.Email + "?subject=Resume Site Contact"}>Email me</a>
        <a href={"tel:" + props.footer.Phone}>Phone: {formatPhoneNumber(props.footer.Phone)}</a>
    </footer>
);

export default Header;