import { Children } from 'react'

const Choose = ({ children }) => {
    const arrayOfChildren = Children.toArray(children)
  
    const allowedChildren = arrayOfChildren.filter(child => child.type.name === 'When')

    const otherwise = arrayOfChildren.find(child => child.type.name === 'Otherwise');
  
    if (otherwise && allowedChildren.every(child => !child.props.expression)) return otherwise
    
    return allowedChildren.map(child => child)
  }
  
  export default Choose;