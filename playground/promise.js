const getUsers = () => {
    return new Promise((resolve,reject) => {
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
            resolve(users);
        },1000);
    });
}

const updateUsers = (users) => {
    return new Promise((resolve,reject) => {
        let i = 0;
        const newUser = users.map(item => {
            i++;
            return {...item,Tel:`081589123${i}`}
        })
        resolve(newUser);
    },1000);
}

// getUsers()
// .then(users => {
//     return updateUsers(users);
// }).then(usersReturn => {
//     console.log(usersReturn);
// })

const populateUsers = async () => {
    try{
        const users = await getUsers();
        const updatedUsers = await updateUsers(users);
        console.log(updatedUsers);
    }
    catch(err){
        console.log(err);
    }
}

populateUsers();