export const setAuthToken = (user) =>{
    const cuurentUser = {
        email:user.email
    }
    fetch('https://genius-car-server-self-ten.vercel.app/jwt',{
        method:'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify(cuurentUser)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        //localstorage a set kora lagebe jot token
        localStorage.setItem('genius-token',data.token);
      });
}