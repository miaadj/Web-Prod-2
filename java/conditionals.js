function getInputValue(){
  
let inputVal = document.getElementById('myInput').value;
let princess = inputVal;

if (princess === 'ariel' || princess == 'Ariel') {
document.getElementById('output').textContent = "The Little Mermaid, good choice.";  
document.getElementById('picture').innerHTML = '<img src=' +'"https://www.pngall.com/wp-content/uploads/2017/03/Ariel-Download-PNG.png"' + '/>'
console.log('The Little Mermaid, good choice.');


}else if(princess === 'jasmine' || princess=='Jasmine'){
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
else {
  document.getElementById('picture').innerHTML = '<img src=' + '"https://www.pngkey.com/png/full/379-3797408_the-hunchback-of-notre-hunchback-of-notre-dame.png"'+ '/>';
  document.getElementById('output').textContent = "oof try again, she\'s not available";
  console.log('Invalid princess.');
}
}
