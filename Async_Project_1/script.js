
const start=document.querySelector('#start')
const Stop=document.querySelector('#stop')

const myfunc=function(){
    console.log("ayan");
}

let myInterval;


start.addEventListener('click',(e)=>{
     myInterval=setInterval(myfunc,1000)
     
})

Stop.addEventListener('click',(e)=>{
     clearTimeout(myInterval)
})
