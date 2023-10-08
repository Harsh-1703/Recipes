
var saigyouji = document.getElementById('yuyuko'),
music = document.getElementById('ResurrectionButterfly-80%Reflowering')
 audios = document.querySelectorAll('audio');
 console.log(audios);

 saigyouji.addEventListener('mouseover', function() {
 [].forEach.call(audios, function(audio) {
 music.play();
 });
 }, false);

 saigyouji.addEventListener('mouseleave', function() {
 music.pause();
 music.currentTime = 0;
 }, false);

 function myFunction() {
     document.getElementById("shitpost").style.display = "block";
 }