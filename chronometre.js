

function chrono() {
  let set=parseFloat(document.getElementById('set').value)
  let btn =document.querySelector('button');
  btn.addEventListener('submit',(event)=>{
    event.preventDefault()
  })


  function verifer(){

  if(isNaN(set)){
    document.getElementById('set').classList.add('error')
    let div=document.querySelector('div')
   let p=document.createElement('p')
    let text=document.createTextNode('Enter the number')
    p.appendChild(text)
    p.classList.add('error-p')
    div.appendChild(p)
        document.getElementById('chronometre').innerHTML="! ! ! ! ! !"
  }
}
verifer()
  let timer = set*60;
  let m
  let s
  let time=setInterval(start, 1000);
  function start(){
      m=Math.floor(timer/60);
    s = timer % 60;
    m=m<10? "0"+m:m
    s=s<10? "0"+s:s
    let chronometre=document.getElementById('chronometre').innerHTML=m+":"+s
        if(timer<=0){
      clearInterval(time);
      chronometre="finir"
     
    }
    timer--;
  } 
  let stuff=document.getElementById('stuff')
  stuff.addEventListener('click',()=>{
    clearInterval(time) 
    document.getElementById('chronometre').innerHTML="00"+":" +"00"
    document.getElementById('set').value=" "
    document.getElementById('set').classList.remove('error')
    let div=document.querySelector('div')
    let p=document.querySelector('p')
   
     div.removeChild(p) 
   
    

  })
 

  
  console.log(timer)

}







    
  
  