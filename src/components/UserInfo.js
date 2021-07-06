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
] 

const UserInfo = () => {
    return (
        <>
           {
               userInfo.map((user) =>(
                   <h3>{user.name}</h3>
               ))
           } 
        </>
    )
}

export default UserInfo
