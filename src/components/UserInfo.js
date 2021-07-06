import { useState } from 'react';

const userInfo = [
    {
        id: 1,
        name: 'edward',
        address: 'rue 7 okld kfdkfd lkfdfl',
    },
    {
        id: 2,
        name: 'abdu',
        address: 'rue hjjhj okld kfdkfd lkfdfl',
    },
    {
        id: 3,
        name: 'new guy',
        address: 'rue defdf okld kfdkfd lkfdfl',
    },
    {
        id: 3,
        name: 'new guy',
        address: 'rue defdf okld kfdkfd lkfdfl',
    },
] 

function user_details(addr){
    <h3>{addr}</h3>;
}

const UserInfo = () => {
    const [address, setAddress] = useState('');

    return (
        <table>
           {
               
               userInfo.map((user) =>(
                <tr>{user.name}<input type="radio" name="check"  onChange={() => setAddress(user.address)}></input> </tr>
               
               ))
           }
           <tr>{address}</tr>         
        </table>
    )
}

export default UserInfo;
