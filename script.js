console.log("welcome to spotify");

let songIndex=0;

let audioElement=new Audio('./songs/1.mp3');

let masterPlay=document.getElementById('masterPlay');

let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');

let songItems=Array.from(document.getElementsByClassName('songIntems'));

let songs=[
    {songName:"love you",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"love you",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songName:"love you",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songName:"love you",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songName:"love you",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songName:"love you",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songName:"love you",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songName:"love you",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    {songName:"love you",filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},
    {songName:"love you",filepath:"songs/10.mp3",coverpath:"covers/10.jpg"},
]


songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

});


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
   // console.log(progress);
    myProgressBar.value=progress;
})
//audioElement.play();
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})