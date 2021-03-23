fetch('http://localhost:3000/user/0')
.then(res => res.json())
.then(data => {
    document.getElementById('userName').innerText = data.name
});

//post data to the server

const addUserBtn = document.getElementById('add-user')

addUserBtn.addEventListener('click', ()=>{
    const name = document.getElementById('user').value;
    // console.log(name);
    const user = {name}

    //post

    fetch('http://localhost:3000/addUser',{
        method:'POST',
        body:JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
        
        
    })
    .then(response => response.json())
    .then(data => updateUser(data));
}) 

const updateUser = (user) =>{
    document.getElementById('userName').innerText = user.name
}