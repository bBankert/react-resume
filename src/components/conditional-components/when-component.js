import If from './if-component';

const When = ({expression, children}) => {
    return <If expression={expression}>{children}</If>
}

export default When;