$(document).ready(()=>{

  let songList = [
    {
      name : "الفاتحة",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/001.mp3",
      fav  : "false"
    },

    {
      name : "البقرة",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/002.mp3",
      fav  : "false"
    },

    {
      name : "اَل عمران",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/003.mp3",
      fav  : "false"
    },
    {
      name : "النساء",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/004.mp3",
      fav  : "false"
    },
    {
      name : "المائدة",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/005.mp3",
      fav : "false"
    },
    {
      name : "الأنعام",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/006.mp3",
      fav : "false"
    },
    {
      name : "الأنفال",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/008.mp3",
      fav : "false"
    },
    {
      name : "التوبة",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/009.mp3",
      fav : "false"
    },
    {
      name : "هود",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/011.mp3",
      fav : "false"
    },
    {
      name : "يوسف",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/012.mp3",
      fav : "false"
    },
    {
      name : "الرعد",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/013.mp3",
      fav : "false"
    },
    {
      name : "إبراهيم",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/014.mp3",
      fav : "false"
    },
    {
      name : "الحجر",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/015.mp3",
      fav : "false"
    },
    {
      name : "النحل",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/016.mp3",
      fav : "false"
    },
    {
      name : "الإسراء",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/017.mp3",
      fav : "false"
    },
    {
      name : "الكهف",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/018.mp3",
      fav : "false"
    },
    {
      name : "مريم",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/019.mp3",
      fav : "false"
    },
    {
      name : "طه",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/020.mp3",
      fav : "false"
    },
    {
      name : "الأنبياء",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/021.mp3",
      fav : "false"
    },
    {
      name : "الحج",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/022.mp3",
      fav : "false"
    },
    {
      name : "المؤمنون",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/023.mp3",
      fav : "false"
    },
    {
      name : "النّور",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/024.mp3",
      fav : "false"
    },
    {
      name : "الفرقان",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/025.mp3",
      fav : "false"
    },
    {
      name : "الشعراء",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/026.mp3",
      fav : "false"
    },
    {
      name : "العنكبوت",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/029.mp3",
      fav : "false"
    },
    {
      name : "الرّوم",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/030.mp3",
      fav : "false"
    },
    {
      name : "لقمان",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/031.mp3",
      fav : "false"
    },
    {
      name : "السجدة",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/032.mp3",
      fav : "false"
    },
    {
      name : "الأحزاب",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/033.mp3",
      fav : "false"
    },
    {
      name : "سبأ",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/034.mp3",
      fav : "false"
    },
    {
      name : "فاطر",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/035.mp3",
      fav : "false"
    },
    {
      name : "يس",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/036.mp3",
      fav : "false"
    },
    {
      name : "الصافات",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/037.mp3",
      fav : "false"
    },
    {
      name : "الزمر",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/039.mp3",
      fav : "false"
    },
    {
      name : "غافر",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/040.mp3",
      fav : "false"
    },
    {
      name : "الشوري",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/042.mp3",
      fav : "false"
    },
    {
      name : "الزخرف",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/043.mp3",
      fav : "false"
    },
    {
      name : "الدّخان",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/044.mp3",
      fav : "false"
    },
    {
      name : "الجاثية",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/045.mp3",
      fav : "false"
    },
    {
      name : "الأحقاف",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/046.mp3",
      fav : "false"
    },
    {
      name : "محمد",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/047.mp3",
      fav : "false"
    },
    {
      name : "الفتح",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/048.mp3",
      fav : "false"
    },
    {
      name : "الحجرات",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/049.mp3",
      fav : "false"
    },
    {
      name : "ق",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/050.mp3",
      fav : "false"
    },
    {
      name : "الذاريات",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/051.mp3",
      fav : "false"
    },
    {
      name : "الطور",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/052.mp3",
      fav : "false"
    },
    {
      name : "النجم",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/053.mp3",
      fav : "false"
    },
    {
      name : "القمر",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/054.mp3",
      fav : "false"
    },
    {
      name : "الرحمن",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/055.mp3",
      fav : "false"
    },
    {
      name : "الواقعة",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/056.mp3",
      fav : "false"
    },
    {
      name : "المجادلة",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/058.mp3",
      fav : "false"
    },
    {
      name : "الحشر",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/059.mp3",
      fav : "false"
    },
    {
      name : "الممتحنة",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/060.mp3",
      fav : "false"
    },
    {
      name : "الصف",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/061.mp3",
      fav : "false"
    },
    {
      name : "الجمعة",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/062.mp3",
      fav : "false"
    },
    {
      name : "المنافقون",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/063.mp3",
      fav : "false"
    },
    {
      name : "التغابن",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/064.mp3",
      fav : "false"
    },
    {
      name : "الطلاق",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/065.mp3",
      fav : "false"
    },
    {
      name : "التحريم",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/066.mp3",
      fav : "false"
    },
    {
      name : "القلم",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/068.mp3",
      fav : "false"
    },
    {
      name : "الحاقة",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/069.mp3",
      fav : "false"
    },
    {
      name : "المعارج",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/070.mp3",
      fav : "false"
    },
    {
      name : "نوح",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/071.mp3",
      fav : "false"
    },
    {
      name : "المزّمّل",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/073.mp3",
      fav : "false"
    },
    {
      name : "المدّثر",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/074.mp3",
      fav : "false"
    },
    {
      name : "الإنسان",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/076.mp3",
      fav : "false"
    },
    {
      name : "النبأ",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/078.mp3",
      fav : "false"
    },
    {
      name : "النازعات",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/079.mp3",
      fav : "false"
    },
    {
      name : "عبس",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/080.mp3",
      fav : "false"
    },
    {
      name : "التكوير",
      track : "https://dl2.islamweb.net/Audio3/quran/mesarawi/hafs_aasem/081.mp3",
      fav : "false"
    }
  ]
  // Acces To All Controller
  let playBtn = $(".play"),
      prevBtn = $(".prev"),
      nextBtn = $(".next"),
      title   = $(".bottom-content h2"),
      seek     = $(".timeline .seek"),
      favAudio = $(".heart"),
      replayaAudio = $(".replay"),
      volumeBtn = $("span.volume i"),
      volumeSlider = $("span.volume input"),
      playingSong = false,
      mainAudio = new Audio(),
      index = parseInt(localStorage.getItem("index")) || 0;


  // Get Data From LocalStorage
  mainAudio.currentTime = localStorage.getItem("currentTime");
  songList[index].fav = localStorage.getItem("fav") || "false";
  $(replayaAudio).addClass(localStorage.getItem("replayAudio"))
  if(songList[index].fav == "true"){
    $(favAudio).addClass("active")
  }

  // All Function's
  function loadTrack(current){
    localStorage.setItem("index",current)
    mainAudio.src = songList[current].track;
    title.text("سورة " + songList[current].name);
    mainAudio.load()
  }

  loadTrack(index)

  // checking Song Is Playing Or No
  function isPlay() { 
    if(playingSong == false){
      playSong()
    }
    else{
      pauseSong()
    }
   }

   $(playBtn).on("click",()=>{
    isPlay()
    volumeActive($(volumeBtn))
   })


  // Play Song
  function playSong(){
    mainAudio.setAttribute("autoplay","")
    mainAudio.play();
    playingSong = true;
    $(playBtn).html("<i class='fas fa-pause'></i>")
  }

  // Pause Song
  function pauseSong(){
    mainAudio.pause();
    playingSong = false;
    $(playBtn).html("<i class='fa fa-play'></i>")
  }


  // Next Song
  function next(){
    if(index < songList.length - 1){
      index += 1
    }
    else{
      index = 0;
    }
    loadTrack(index);
    playSong()
  }

  $(nextBtn).on("click",()=>{
    next()
    timelineUpdate();
    favAudioInit()
  })


  // Prev Song
  function prev(){

    if(index > 0){
      index -= 1
    }
    else{
      index = songList.length - 1;
    }
    loadTrack(index);
    playSong()
  }

  $(prevBtn).on("click",()=>{
    prev()
    timelineUpdate()
    favAudioInit()
  });

  // Keyboard Events
  $(document).on("keydown",(e)=>{
    if(e.keyCode === 39){
      $(prevBtn).click()
    }
    else if(e.keyCode === 37){
      $(nextBtn).click()
    }
    else if(e.keyCode === 32){
      e.preventDefault()
      $(playBtn).click()
    }
    else if(e.keyCode === 72){
      $(favAudio).click();
    }
    else if(e.keyCode === 82){
      $(replayaAudio).click()
    }
    else{
      return;
    }
  })

  // Fav Active And Replay Song
  function favAudioInit(){
    if(songList[index].fav == "false"){
      $(favAudio).removeClass("active")
      localStorage.setItem("fav","false")
    }
    else{
      $(favAudio).addClass("active")
      localStorage.setItem("fav","true")
    }
    volumeActive($(volumeBtn))
  }
  $(favAudio).on("click",function(){
    if(songList[index].fav == "false"){
      songList[index].fav = "true"
      $(favAudio).addClass("active");
    }
    else{
      $(favAudio).removeClass("active");
      songList[index].fav = "false";
    }
    favAudioInit()
  });

  $(replayaAudio).on("click",function(){
    $(this).toggleClass("active")
    if($(this).hasClass("active")){
      localStorage.setItem("replayAudio","active")
    }
    else{
      localStorage.setItem("replayAudio","")
    }
  });

  // TimeLine Play
  mainAudio.addEventListener("timeupdate",()=>{
    if($(".timeline").length){
      let position = localStorage.getItem("currentTime") / mainAudio.duration;
      seek.css({
        "width" : position * 100 + "%"
      })
      localStorage.setItem("currentTime",mainAudio.currentTime);
      if(mainAudio.ended){
        $(playBtn).html("<i class='fa fa-play'></i>");
        timelineUpdate()
        if($(replayaAudio).hasClass("active")){
          mainAudio.currentTime = 0;
          loadTrack(index)
          playSong()
        }
        else{
          index += 1
          loadTrack(index)
          playSong()
        }
      }
    }
  })

  function timelineUpdate(){
      seek.css({
        "width" : 0
      })
  }

  // volume
  $(volumeSlider).val(localStorage.getItem("volumeValue")) || 85
  mainAudio.volume = localStorage.getItem("volume") || 0.85
  $(volumeBtn).on("click",function(){
    $(this).parent().toggleClass("active")
    $(volumeSlider).toggleClass("active")
  })

  function volumeActive(e){
      $(e).parent().removeClass("active")
      $(volumeSlider).removeClass("active")
  }

  $(volumeSlider).on("change",()=>{
    mainAudio.volume = $(volumeSlider).val() / 100;
    localStorage.setItem("volume",mainAudio.volume)
    localStorage.setItem("volumeValue",$(volumeSlider).val())
    if($(volumeSlider).val() == 0){
      $(volumeBtn).removeClass("fa-volume")
      $(volumeBtn).addClass("fa-volume-mute")
    }
    else{
      $(volumeBtn).addClass("fa-volume")
      $(volumeBtn).removeClass("fa-volume-mute")
    }
  })

});

console.log(navigator);