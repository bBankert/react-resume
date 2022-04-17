import Navigation from '../components/navigation/navigation';

const Header = props => (
    <header>
        {props.header && props.header.length > 0 ? 
            <Navigation data={props.header}/> : 
            <p>Loading</p>
        }
    </header>
);

export default Header;