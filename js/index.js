$(document).ready(function(){
  
$("#roll").on("click", showstuff)
  function showstuff(){
    
    function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
    allTiles = ['It is based on the premise that...', 'as something does something...', 'however', 'Also, one must look at...', 'Finally...', 'It does not necessarily mean that...', 'The first issue to be addressed is...', 'I also feel that...', '... This is not the case.', 'While... may...' ];
    resultingTile = randomFrom(allTiles);
    console.log(resultingTile);
      
    $("#result").text(resultingTile);
  }
 


});
