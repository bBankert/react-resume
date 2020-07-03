import React from 'react';
import $ from 'jquery';

const NavigationItem = props => {

    //for smooth scrolling
    function scrollToElement(event){
        event.preventDefault();
        //get index of # symbol
        let index = (event.target.href).indexOf('#');
        let target = (event.target.href).substring(index, (event.target.href).length);
        //scroll to element
        $("html,body").stop().animate({
            scrollTop: $(target).offset().top - 25
        },"slow","swing");
    }

    return(
    <li className="nav-item">
        <a className="nav-link" onClick={(event) => scrollToElement(event)} href={"#"+(props.link.replace(" ","-").toLocaleLowerCase())}>{props.link}</a>
    </li>
    );
}

export default NavigationItem;