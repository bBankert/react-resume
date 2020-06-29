import React from 'react';
import Navigation from '../components/navigation/navigation';

const Header = props => (
    <div id="header">
        {props.header && props.header.length > 0 ? <Navigation data={props.header}/> : <p>Loading</p>}
    </div>
);

export default Header;