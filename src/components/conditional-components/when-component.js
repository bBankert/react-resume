import If from './if-component';

//TODO: Find out why the conditions aren't being properly configured
const When = ({expression, children}) => {
    return <If expression={expression}>{children}</If>
}

export default When;