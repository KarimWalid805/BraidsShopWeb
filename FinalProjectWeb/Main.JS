
  const video = document.querySelector('.video');
  
video.addEventListener('mouseover', function () {
    this.play();
});

video.addEventListener('mouseout', function () {
    this.pause();
    this.currentTime = 0;
});

const video2 = document.querySelector('.video2');
  
video2.addEventListener('mouseover', function () {
    this.play();
});

video2.addEventListener('mouseout', function () {
    this.pause();
    this.currentTime = 0;
});

console.log(video2)

const video3 = document.querySelector('.video3');

video3.addEventListener('mouseover', function () {
  this.play();
});

video3.addEventListener('mouseout', function () {
  this.pause();
  this.currentTime = 0;
});

console.log(video3)