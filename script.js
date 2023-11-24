console.log("welcome to spotify");

//Initialize the Variable
let songIndex = 0;
let audioElement  = new Audio("Let-Me-Love-You(PaglaSongs).mp3");
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = Document.getElementById('myprogressBar');

 



let songs =[
{songname: "let me love you", filepath: "song/", coverpath: ""},
{songname: "let me love you", filepath: "song/", coverpath: ""},
{songname: "let me love you", filepath: "song/", coverpath: ""},
{songname: "let me love you", filepath: "song/", coverpath: ""},
{songname: "let me love you", filepath: "song/", coverpath: ""},
]
// audioElement.play();

//handel play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
//lisen to events
myprogressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update Seekbar
}) 