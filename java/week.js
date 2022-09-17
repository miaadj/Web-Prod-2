const d= new Date(); 
   let day = d.getDay() 
   console.log(day); 


if (day == 0){ 

  document.getElementById('changing').textContent="Why are you here on a Sunday?";
  document.getElementById('changing').style.color = '#f3d363';

}else if(day == 1){

  document.getElementById('changing').textContent="Happy Monday!";
   document.getElementById('changing').style.color = '#f3d363';

}else if(day == 2){

  document.getElementById('changing').textContent="Tuesday";
  document.getElementById('changing').style.color = '#f3d363';

}else if(day == 3){

  document.getElementById('changing').textContent="Hump Day";
  document.getElementById('changing').style.color = '#f3d363';

}else if(day == 4){

  document.getElementById('changing').textContent="Friday's Eve!";
  document.getElementById('changing').style.color = '#f3d363';

}else if(day == 5){

  document.getElementById('changing').textContent="Woo Friday!";
  document.getElementById('changing').style.color = '#f3d363';

}else if(day == 6){

  document.getElementById('changing').textContent="Woo Saturday!";
  document.getElementById('changing').style.color = '#f3d363';
}