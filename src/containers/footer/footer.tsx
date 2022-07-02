import React from 'react';
import './footer.css';

const formatPhoneNumber = (phoneNumber :  string) => {
    const matches = phoneNumber.match(/(\d{3})(\d{3})(\d{4})/);
    let formattedNumber = "(" + matches[1] + ") " + matches[2] + "-" + matches[3]; 
    return formattedNumber;
}


const Header = (props: any) => (
    <footer className="col-sm-12">
        <p>Brandon Bankert</p>
        <a href={"mailto:" + props.footer.Email + "?subject=Resume Site Contact"}>Email me</a>
        <a href={"tel:" + props.footer.Phone}>Phone: {formatPhoneNumber(props.footer.Phone)}</a>
    </footer>
);

export default Header;