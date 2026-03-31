const promiseOne = new Promise(function(resolve, reject){
    //do any async tast 
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