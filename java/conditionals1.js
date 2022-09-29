function getInputValue(){
  
let inputVal = document.getElementById('myInput').value;
let princess = inputVal;

if (princess === 'ariel' || princess == 'Ariel') {
document.getElementById('output').textContent = "The Little Mermaid, good choice.";  
document.getElementById('picture').innerHTML = '<img src=' +'"https://www.pngall.com/wp-content/uploads/2017/03/Ariel-Download-PNG.png"' + '/>'
console.log('The Little Mermaid, good choice.');}

else if(princess === 'jasmine' || princess=='Jasmine'){
  document.getElementById('output').textContent="Aladin's a lucky dude.";
  document.getElementById('picture').innerHTML='<img src='+'"https://www.pngmart.com/files/4/Jasmine-PNG-Transparent-Image.png"'+'/>'
  console.log('Aladin\'s a lucky dude.');      
         } 

else if(princess === 'cinderella' || princess == 'Cinderella'){
document.getElementById('output').textContent = "Love the shoes.";
document.getElementById('picture').innerHTML = '<img src=' + '"https://purepng.com/public/uploads/large/cinderella-9y0.png"' + '/>'
console.log('Love the shoes.');      
         } 
  
else if(princess === 'snow white' || princess == 'Snow White' || princess == 'Snow white'){
document.getElementById('picture').innerHTML = '<img src=' + '"https://assets.stickpng.com/images/5874d04142e4d628738559ee.png"'+ '/>';
document.getElementById('output').textContent = "She's alright.";
console.log('She\'s alright.');      
         } 

else if(princess === 'tiana' || princess=='Tiana'){
  document.getElementById('output').textContent="I love this movie!";
  document.getElementById('picture').innerHTML='<img src='+'"https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Cartoons-PNG/Princess_Tiana_Transparent_PNG_Image.png?m=1469501702"'+'/>'
  console.log('I love this movie!');      
         } 

else if(princess === 'rapunzel' || princess == 'Rapunzel'){
document.getElementById('output').textContent = "Cutest movie out there!";
document.getElementById('picture').innerHTML = '<img src=' + '"https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Cartoons-PNG/Rapunzel_PNG_Clipart_Picture.png?m=1434276644"' + '/>'
    console.log('Cutest movie out there!');      
         } 
  
else if(princess === 'belle' || princess == 'beauty' || princess == 'Belle'){
document.getElementById('picture').innerHTML = '<img src=' + '"https://www.pngmart.com/files/6/Belle-PNG-Transparent.png"'+ '/>';
document.getElementById('output').textContent = "A classic, animated over live action.";
    console.log('A classic, animated over live action.');
}

else if(princess === 'mulan' || princess=='Mulan'){
  document.getElementById('output').textContent="Best example of 'girl power.'";
        document.getElementById('picture').innerHTML='<img src='+'"https://64.media.tumblr.com/b87366095aa4407be6c3de58b96699be/tumblr_o1mv0oRuAM1v56ooio1_1280.png"'+'/>'
    console.log('Best example of "girl power."');      
         } 

  else if(princess === 'merida' || princess == 'Merida'){
document.getElementById('output').textContent = "Next best 'girl power' example.";
document.getElementById('picture').innerHTML = '<img src=' + '"https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Cartoons-PNG/Princess_Merida_PNG_Clip_Art_Image.png?m=1469328901"' + '/>'
    console.log('Next best "girl power" example.');      
         } 
  
else if(princess === 'aurora' || princess == 'sleeping beauty' || princess == 'Aurora'){
document.getElementById('picture').innerHTML = '<img src=' + '"https://www.pngmart.com/files/6/Princess-Aurora-PNG-Picture.png"'+ '/>';
document.getElementById('output').textContent = "She's alright.";
    console.log('She\'s alright.');
}

  else if(princess === 'elsa' || princess == 'Elsa'){
document.getElementById('output').textContent = "I don't like her songs.";
document.getElementById('picture').innerHTML = '<img src=' + '"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db9ed8c9-b18e-40d7-9b96-eb34d64138e6/dfdxex5-cce06100-297a-42c2-bad2-2f9a815082b4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiOWVkOGM5LWIxOGUtNDBkNy05Yjk2LWViMzRkNjQxMzhlNlwvZGZkeGV4NS1jY2UwNjEwMC0yOTdhLTQyYzItYmFkMi0yZjlhODE1MDgyYjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HupHRI4M-iryddtoErPZj4Pfa0Faxhhm32QclT4r-aw"' + '/>'
    console.log('I don\'t like her songs.');      
         } 
  
else if(princess === 'anna' || princess == 'Anna'){
document.getElementById('picture').innerHTML = '<img src=' + '"https://www.pngmart.com/files/15/Frozen-Anna-PNG-HD.png"'+ '/>';
document.getElementById('output').textContent = "She's alright.";
console.log('She\'s alright.');      
         } 

  else if(princess === 'sophia' || princess == 'sophia the first'){
document.getElementById('output').textContent = "Is she not considered a princess?";
document.getElementById('picture').innerHTML = '<img src=' + '"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18630ce1-38c5-4c25-b708-d9fac7927adb/d7fvdo4-88422af3-7834-40a9-aba4-4fbc8514a398.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE4NjMwY2UxLTM4YzUtNGMyNS1iNzA4LWQ5ZmFjNzkyN2FkYlwvZDdmdmRvNC04ODQyMmFmMy03ODM0LTQwYTktYWJhNC00ZmJjODUxNGEzOTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mMgBVj_NwBPq5hTKuqq3cDcQj8qjQ5IeVFu4aaTIFhw"' + '/>'
    console.log('Is she not considered a princess?');      
         }

  else if(princess === 'moana' || princess == 'Moana'){
document.getElementById('output').textContent = "No love interest, woo!";
document.getElementById('picture').innerHTML = '<img src=' + '"https://static.wikia.nocookie.net/charactercommunity/images/9/97/Moana_%2811%29.png/revision/latest?cb=20200116013316"' + '/>'
    console.log('No love interest, woo!');      
         } 
  
else if(princess === 'raya' || princess == 'Raya'){
document.getElementById('picture').innerHTML = '<img src=' + '"https://static.wikia.nocookie.net/whitneygolucky20/images/5/5d/Raya.png/revision/latest?cb=20210320024416"'+ '/>';
document.getElementById('output').textContent = "Haven't seen the movie, is she a princess?";
console.log('Haven\'t seen the movie, is she a princess?');      
      } 

else {
  document.getElementById('picture').innerHTML = '<img src=' + '"https://www.pngkey.com/png/full/379-3797408_the-hunchback-of-notre-hunchback-of-notre-dame.png"'+ '/>';
  document.getElementById('output').textContent = "oof try again, she\'s not available";
  console.log('Invalid princess.');
}
}
