console.log("welcome to spotify")
//Initialize the variables
let index = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    
        {songName: "Warriyo - Mortals", filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
        {songName: "cielo - Humma-Humma", filePath: "songs/2.mp3",coverPath:"covers/2.jpg"},
        {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3",coverPath:"covers/3.jpg"},
        {songName: "Diffrent Heaven & Ehide", filePath: "songs/4.mp3",coverPath:"covers/4.jpg"},
        {songName: "janjhi- Heroes - tonight", filePath: "songs/5.mp3",coverPath:"covers/5.jpg"},
        {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3",coverPath:"covers/6.jpg"},
        {songName: "sakhiyan", filePath: "songs/7.mp3",coverPath:"covers/7.jpg"},
        {songName: "Bhula Dena", filePath: "songs/8.mp3",coverPath:"covers/8.jpg"},
        {songName: "Tumhari Kasam", filePath: "songs/9.mp3",coverPath:"covers/9.jpg"},
        {songName: "Na jana", filePath: "songs/10.mp3",coverPath:"covers/10.jpg"},
    
]
songItems.forEach((element, i)=>{
    console.log('element, i');
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})

// audioElementplay();
// handle play and pause button

masterPlay.addEventListener('click',  ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play')
        masterPlay.classList.remove('fa-circle-pause')

        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id); 
    
        console.log("index")
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${index+1}.mp3`;
        audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
      
    })

    document.getElementById('next').addEventListener('click', (e)=>{
        if(index>=9){
            index = 0;
        }
        else{
            index += 1;
        }
      
        audioElement.src = `songs/${index+1}.mp3`;
        audioElement.currentTime = 0;
      audioElement.play();
    
      masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
      
    })
    document.getElementById('previous').addEventListener('click', ()=>{
        if(index<=0){
            index = 0;
        }
        else{
            index -= 1;
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src  = `songs/${index+1}.mp3`;
            audioElement.currentTime = 0;
          audioElement.play();
        }
    //     audioElement.src = `songs/${index+1}.mp3`;
    //     audioElement.currentTime = 0;
    //   audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
      
    })

  
})