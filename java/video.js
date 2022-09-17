    let myVideo = document.querySelector('video');
      let playBtn = document.querySelector('#play');
      let pauseBtn = document.querySelector('#stop');

      function playVideo() {
        myVideo.play();
      }

      function pauseVideo() {
        myVideo.pause();
      }

      playBtn.addEventListener('click', playVideo);
      pauseBtn.addEventListener('click', pauseVideo);