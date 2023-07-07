console.log(`kjkjdkji`)
let masterplay=document.getElementById('masterplay')
let gif=document.getElementById('gif')
let audioElement=new Audio('1.mp3')
// audioElement.play()
masterplay.addEventListener('click',()=>{
   if(audioElement.pause || audioElement.currentTime<=0){
            audioElement.play();
            masterplay.classList.remove('fa-play ')
            
            jkjkwaj
   }
   else{
    audioElement.pause();
    
   }
});