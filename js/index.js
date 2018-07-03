$(document).ready(function(){
  
$("#roll").on("click", showstuff)
  function showstuff(){
    
    function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
    allTiles = ['planet', 'SpongeBob Squarepants', 'chainsaw', 'mayor', 'ballet', 'zipper', 'fog', 'Neil Armstrong', 'chicken', 'saliva', 'train station', 'tea', 'cap', 'river', 'candy', 'snowball', 'Terminator', 'mole', 'breakfast', 'Hollywood', 'GPS unit', 'Dora the Explorer', 'babysitter', 'banana', 'color', 'Albert Einstein', 'heavy metal', 'Olympic Games', 'pirate', 'school', 'elephant' ];
    resultingTile = randomFrom(allTiles);
    console.log(resultingTile);
      
    $("#result").text(resultingTile);
  }});