import React from 'react';

const NavigationItem = props => (
    <li class="nav-item">
        <a class="nav-link" href={"#"+(props.link.replace(" ","-").toLocaleLowerCase())}>{props.link}</a>
      </li>
);

export default NavigationItem;