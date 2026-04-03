const user ={
    name:'mohit',
    class:'SYBCA',
    clg:'MSU',
    loginCount:true,
    username:'mohit@2403',

    getuserDetais: function(){
        console.log(this)
    }
}
console.log(user.username)
console.log(user.name)
console.log(user.getuserDetais())