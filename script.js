console.log("welcome to spotify");

let songIndex=0;

let audioElement=new Audio('./songs/1.mp3');

let masterPlay=document.getElementById('masterPlay');

let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})

audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})
//audioElement.play();