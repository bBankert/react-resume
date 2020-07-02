import React from 'react';

const NavigationItem = props => (
    <li className="nav-item">
        <a className="nav-link" href={"#"+(props.link.replace(" ","-").toLocaleLowerCase())}>{props.link}</a>
    </li>
);

export default NavigationItem;