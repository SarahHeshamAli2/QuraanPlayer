const artistImage = document.querySelector(".artImg img")
const surahName = document.querySelector("#surahName")
const artistName = document.querySelector("#artistName")
const repeatBtn = document.querySelector("#repeatList")
const backBtn = document.querySelector("#backBtn")
const nextBtn = document.querySelector("#nextBtn")
const playBtn = document.querySelector("#playSong")
const allList = document.querySelector("#suraList")
const mainAudio = document.querySelector("#main-audio")
const progBar = document.querySelector("#progBar")
const progArea = document.querySelector("#progArea")
const section = document.querySelector("#secNum")

const myList = document.querySelector("#myList")


let quraanIndex=0;
let isPlaying = false

let myQuraanList = [ 

    {
        name :"سورة الناس",
        artist : "سعد الغامدي",
        image : "image.jpg",
        src : "Quraan/elnas.mp3",
        section : "الجزء 30",
    
    } ,
    {
        name :"سورة الإخلاص",
        artist : "سعد الغامدي",
        image : "image.jpg",
        src : "Quraan/ele5las.mp3",
        section : "الجزء 30"

    } ,
    {
        name :"سورة الفلق",
        artist : "سعد الغامدي",
        image : "image.jpg",
        src : "Quraan/elfalaq.mp3",
        section : "الجزء 30"

    } ,
 
    {
        name :"سورة المسد",
        artist : "سعد الغامدي",
        image : "image.jpg",
        src : "Quraan/elmasad.mp3",
        section : "الجزء 30"

    } ,
    
    {
        name :"سورة النصر",
        artist : "سعد الغامدي",
        image : "image.jpg",
        src : "Quraan/elnasr.mp3",
        section : "الجزء 30"

    } ,
    {
        name :"سورة الكافرون",
        artist : "سعد الغامدي",
        image : "image.jpg",
        src : "Quraan/elkaferon.mp3",
        section : "الجزء 30"

    } ,
    {
        name :"سورة الكوثر",
        artist : "ماهر المعيقلي",
        image : "mahre.jpg",
        src : "Quraan/elkawthar.mp3",
        section : "الجزء 30",
  

    } ,
    {
        name :"سورة الماعون",
        artist : "ماهر المعيقلي",
        image : "mahre.jpg",
        src : "Quraan/elma3on.mp3",
        section : "الجزء 30"

    } ,
    {
        name :"سورة قريش",
        artist : "ماهر المعيقلي",
        image : "mahre.jpg",
        src : "Quraan/qurish.mp3",
        section : "الجزء 30"

    } ,
    {
        name :"سورة الفيل",
        artist : "ماهر المعيقلي",
        image : "mahre.jpg",
        src : "Quraan/elfeel.mp3",
        section : "الجزء 30"

    } ,
    
    {
        name :"سورة يس",
        artist : " اسلام صبحي",
        image : "islamSubhi.jpg",
        src : "Quraan/yassin.mp3",
        section : "الجزء 22"

    } ,

    {
        name :"سورة الهمزه",
        artist : "ماهر المعيقلي",
        image : "mahre.jpg",
        src : "Quraan/elhomaza.mp3",
        section : "الجزء 30"

    } ,
    {
        name :"سورة الكهف",
        artist : "ناصر القطامي",
        image : "naseerElQatamy.jpg",
        src : "Quraan/elkahf.mp3",
        section : "الجزء 16"

    } ,

    {
        name :"سورة مريم",
        artist : "ناصر القطامي",
        image : "naseerElQatamy.jpg",
        src : "Quraan/maryam.mp3",
        section : "الجزء 16"

    } ,

    {
        name :"سورة طه",
        artist : "ناصر القطامي",
        image : "naseerElQatamy.jpg",
        src : "Quraan/taha.mp3",
        section : "الجزء 16"

    } ,
    {
        name :"سورة الرعد",
        artist : " اسلام صبحي",
        image : "islamSubhi.jpg",
        src : "Quraan/elra3d.mp3",
        section : "الجزء 13"

    } ,
    {
        name :"سورة يوسف",
        artist : " اسلام صبحي",
        image : "islamSubhi.jpg",
        src : "Quraan/youssif.mp3",
        section : "الجزء 12"

    } ,

    
    ]

window.addEventListener("load",()=>{
   loadMyQuraan(quraanIndex)
})

function loadMyQuraan(indexNumber){

    surahName.innerHTML = myQuraanList[indexNumber].name
    artistName.innerHTML = myQuraanList[indexNumber].artist
    artistImage.setAttribute("src",myQuraanList[indexNumber].image)
    mainAudio.src = myQuraanList[indexNumber].src
    section.innerHTML = myQuraanList[indexNumber].section
}

function playQuraan () {
    isPlaying = true
    playBtn.classList.remove("fa-play")
    playBtn.classList.add("fa-pause")
    playBtn.title = "pause surah"
    let myIcons = Array.from(document.querySelectorAll("#testing"))


  
    mainAudio.play()

}

function pauseQuraan () {
    isPlaying = false
    playBtn.classList.remove("fa-pause")
    playBtn.classList.add("fa-play")
    playBtn.title = "play surah"

    let myIcons = Array.from(document.querySelectorAll("#testing"))



    mainAudio.pause()
}


playBtn.addEventListener("click",()=>{

    isPlaying ? pauseQuraan() : playQuraan()

})

function nextSurah() {

    quraanIndex ++

    quraanIndex > myQuraanList.length-1 ? quraanIndex = 0 : quraanIndex = quraanIndex

    loadMyQuraan(quraanIndex)

    playQuraan()
}



nextBtn.addEventListener("click",()=>{
nextSurah()

})


function prevSurah( ) {

    quraanIndex--

    quraanIndex < 0 ? quraanIndex = myQuraanList.length -1 : quraanIndex =quraanIndex
    loadMyQuraan(quraanIndex)
    playQuraan()
}

backBtn.addEventListener("click",()=>{
    prevSurah()
})

function repeatSurah(){
if (repeatBtn.classList == "fa-solid fa-repeat") {
repeatBtn.classList.add("text-primary")
}
else if (repeatBtn.classList == "fa-solid fa-repeat text-primary") {
    repeatBtn.classList.remove("fa-repeat")
    repeatBtn.classList.add("fa-shuffle")
    repeatBtn.title="shuffle quraan list"
}

else {
  repeatBtn.classList.remove("fa-shuffle")
  repeatBtn.classList.remove("text-primary")
  repeatBtn.classList.add("fa-repeat")
  repeatBtn.title="repeat surah"

}


}


repeatBtn.addEventListener("click",()=>{
    repeatSurah()
})

mainAudio.addEventListener("ended",()=>{

if(repeatBtn.classList == "fa-solid fa-repeat") {
    nextSurah()
}

else if (repeatBtn.classList == "fa-solid fa-repeat text-primary"){
    mainAudio.currentTime = 0;
    loadMyQuraan(quraanIndex)
    playQuraan()
}
else {
    let randomIndex = Math.floor(Math.random()*myQuraanList.length)
    do {
        randomIndex = Math.floor(Math.random()*myQuraanList.length)
    } while (quraanIndex == randomIndex) {
        quraanIndex = randomIndex
        loadMyQuraan(randomIndex)
        playQuraan()
    }

}
})

mainAudio.addEventListener("timeupdate",(e)=>{
const currentTime = e.target.currentTime;
const duration = e.target.duration;
let progressWidth = (currentTime/duration)*100
progBar.style.width = `${progressWidth}%`
let currTime = document.querySelector("#currTime")
let maxDuration = document.querySelector ("#maxDuration")


mainAudio.addEventListener("loadeddata",()=>{

    const myDuration = mainAudio.duration
 

   const interval = setInterval(() => {
    const _myCurrTime = mainAudio.currentTime

        currTime.innerHTML = timeFormatting( _myCurrTime)
    }, 1000);

    maxDuration.innerHTML= timeFormatting(myDuration)

    mainAudio.addEventListener("ended",()=>{
        clearInterval(interval)
    })


})
})



progArea.addEventListener("click",(e)=>{
    let progressWidth = progArea.clientWidth
    let clickOffset = e.offsetX
    let quraanDuration = mainAudio.duration
    mainAudio.currentTime = (clickOffset / progressWidth) * quraanDuration

})



function timeFormatting(time) {

    if(time && !isNaN(time)) {
const mins = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60)
const secs = Math.floor(time % 60) < 10 ? `0${ Math.floor(time % 60)}` :  Math.floor(time % 60)

return `${mins}:${secs}`
    } 
return "00:00"


}



let myIndex = document.querySelector("#index")
let surahN = document.querySelector("#surahN")
let artistN = document.querySelector("#artistN")
let quDur = document.querySelector("#quDur")
let listPlayIcon = document.querySelector("#listPlayIcon")
for(let i=0 ;i<myQuraanList.length ;i++) {

    surahN.innerHTML += `<p class="" onclick = 'clickedSurah(${i})'>${myQuraanList[i].name}</p>`

    artistN.innerHTML += `    <p onclick = 'clickedSurah(${i})'> ${myQuraanList[i].artist}</p>
    
    `

    
myIndex.innerHTML+= `<p > ${i+1}</p>`
}


function clickedSurah(index) {
    mainAudio.src = myQuraanList[index].src
    loadMyQuraan(index)
    playQuraan()


mainAudio.addEventListener("ended",()=>{

if(repeatBtn.classList == "fa-solid fa-repeat") {
    nextSurah()
}

else if (repeatBtn.classList == "fa-solid fa-repeat text-primary"){
    mainAudio.currentTime = 0;
    loadMyQuraan(index)
    playQuraan()
}
else {
    let randomIndex = Math.floor(Math.random()*myQuraanList.length)
    do {
        randomIndex = Math.floor(Math.random()*myQuraanList.length)
    } while (index == randomIndex) {
        index = randomIndex
        loadMyQuraan(randomIndex)
        playQuraan()
    }

}
})

        
   console.log(myQuraanList[index].src);
   
}

listPlayIcon.addEventListener("click",(e)=>{


 

    if(e.target.classList.contains("fa-play") ) {



        e.target.classList.remove("fa-play")
        e.target.classList.add("fa-pause")
        $(e.target).next().hide()
        playQuraan()
   
        

    }
    else if(e.target.classList.contains("fa-pause") ) {
        
        e.target.classList.add("fa-play")
        e.target.classList.remove("fa-pause")
        pauseQuraan()
    }


})




// $(allList ).on( "click", function() {
//     $( "#myList" ).slideToggle(  );
//   });
allList.addEventListener("click",()=>{
    myList.classList.toggle("show")
})


progArea.addEventListener("click",()=>{console.log("pro");})