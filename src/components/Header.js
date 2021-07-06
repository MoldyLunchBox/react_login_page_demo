
import Button from './Button'
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { AuthContext } from '../context';
import LoginForm from './LoginForm';
import UserInfo from './UserInfo';

const Header = ({ title }) => {
    const authContext = useContext(AuthContext);
    return (
        <header className='header'>
            {/* <h1>  {title}</h1> */}
            {authContext.auth.isAuth ? <UserInfo /> : <LoginForm />}
            {/* <Button color='green' text='login' /> */}
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
