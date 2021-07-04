
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>  {title}</h1>
            <Button color='green' text='login' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'default title'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// const headingStyle = { 
//     color: 'red',
//      backgroundColor:'black'}
export default Header
