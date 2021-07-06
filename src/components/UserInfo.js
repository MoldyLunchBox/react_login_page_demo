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
    alert(addr);
}

const UserInfo = () => {
    return (
        <table>
           {
               
               userInfo.map((user) =>(
                <tr>{user.name}<input type="radiobox" onClick={user_details(user.address)}></input> </tr>
               
               ))
           } 
        </table>
    )
}

export default UserInfo;
