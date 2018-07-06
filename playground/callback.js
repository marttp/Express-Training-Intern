const fetchUsers = (callback) => {
    setTimeout(()=>{
        const users = [
            {
                id: 1,
                name: 'Mart',
                age: 21
            },
            {
                id: 2,
                name: 'Tarm',
                age: 21
            },
        ];
        callback(users);
    },1000);
}


const updateUsers = (users, callback) => {
    setTimeout(()=>{
        users[0].age = users[0].age + 10;
        callback(users);
    },2000);
}

            //callback(users)
fetchUsers((users)=>{
    updateUsers(users,(updateUser)=>{
        console.log(updateUser);
    });
});