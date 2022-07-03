import React from 'react';

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
    <li className="nav-item">
        <a className="nav-link" onClick={(event) => scrollToElement(event)} href={"#"+(navigationLink.replace(" ","-").toLocaleLowerCase())}>{navigationLink}</a>
    </li>
    );
}

export default NavigationItem;