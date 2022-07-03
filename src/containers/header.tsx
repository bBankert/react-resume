import React from 'react';
import Navigation from '../components/navigation/navigation';

interface IHeaderProps {
    navigation: string[]
}

const Header = ({navigation} : IHeaderProps) => (
    <header>
        {navigation && navigation.length > 0 ? 
            <Navigation navigationItems={navigation}/> : 
            <p>Loading</p>
        }
    </header>
);

export default Header;