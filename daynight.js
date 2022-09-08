let hour = 19;
   console.log(hour);

let background = document.querySelector('body'); 
   if (hour >= 18 || hour < 6) {
      
      background.style.backgroundColor = '#0c376f';
     } else {
      background.style.backgroundColor = '#f4f0c3'; 
  }  

