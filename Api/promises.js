const promiseOne = new Promise(function(resolve, reject){
    // do any async tast 
    // DB conected
    setTimeout(function(){
        console.log(`async task is compelete`)
        resolve()

    },1000)
})
promiseOne.then(function(){
    console.log(`promise consumed`)
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`async task 2`)
        resolve()
    },1000)
}).then(function(){
    console.log(`complited task 2`)
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`task three`)
        resolve({user:"mohit",email:"mohitnayak0001@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({name:`mohit`, email:`mohit@nayak`})
        }else{
            reject(`ERROR : Somthing went wrong`)
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user)
    return(user.name)
}).then((email)=>{
    console.log(email)
}).catch((error)=>{
    console.log('error')
}).finally(()=>{
    console.log('the promis resolve and rejected')
})

const promisFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({name:`java`, type:`front`})
        }else{
            reject(`JS went wrong`)
        }
    },1000)
})
async function consumePromiseFive(){
    try {
    const response = await promisFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive();

async function GetAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log('E:',error)
    }
}
GetAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then ((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch(()=>{
    
})