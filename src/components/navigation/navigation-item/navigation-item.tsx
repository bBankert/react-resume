import React from 'react';
import { Nav } from 'react-bootstrap';

interface INavigationItemProps {
    navigationLink: string
}


const NavigationItem = ({navigationLink}: INavigationItemProps) => {

    //for smooth scrolling
    function scrollToElement(event : any){
        event.preventDefault();
        //get index of # symbol
        let index = (event.target.href).indexOf('#');
        let target = document.querySelector((event.target.href).substring(index, (event.target.href).length)) as HTMLElement;
        //scroll to element
        window.scroll({
            top: target.offsetTop - 25,
            behavior: 'smooth'
        });
    }

    return(
        <Nav.Link onClick={(event) => scrollToElement(event)} href={"#"+(navigationLink.replace(" ","-").toLocaleLowerCase())}>{navigationLink}</Nav.Link>
    );
}

export default NavigationItem;