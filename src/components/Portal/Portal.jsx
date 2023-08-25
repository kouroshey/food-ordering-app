import ReactDOM from 'react-dom'

const Portal = (props) => {
    
  return ReactDOM.createPortal(props.children, document.getElementById('portal-root'))
}

export default Portal