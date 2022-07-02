import React from 'react';

const NavigationItem = (props: any) => {

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
        <a className="nav-link" onClick={(event) => scrollToElement(event)} href={"#"+(props.link.replace(" ","-").toLocaleLowerCase())}>{props.link}</a>
    </li>
    );
}

export default NavigationItem;