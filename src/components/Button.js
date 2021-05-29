import PropTypes from 'prop-types'

const Button = ({ color, text, onAdd }) => {
    
    return (
        <button className="btn"
        style={{backgroundColor: color}}
        onClick={onAdd}
        >{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Button'
}
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onAdd: PropTypes.func
}

export default Button
