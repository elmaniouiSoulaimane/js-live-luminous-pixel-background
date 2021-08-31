$(document).ready(function () {
  var nbrColumns = Math.floor(screen.width/100);
  var nbrRows = Math.floor(screen.height/100);
  var columnGap = ( Math.floor(screen.width) - (nbrColumns * 100)) / Math.floor(nbrColumns);
  var rowGap =( Math.floor(screen.height) - (nbrRows * 100))/Math.floor(nbrRows);
  console.log(screen.width,nbrColumns,columnGap)
  $(".grid-container").css({"grid-template-columns":"repeat("+nbrColumns+",100px)","grid-template-rows":"repeat("+nbrRows+",100px)","grid-column-gap":columnGap, "grid-row-gap":rowGap});
    //Generates 4 row sets for the grid layout
    for (let row = 1; row <= nbrColumns; row++) {
        //Generates 9 pixel columns for the grid layout
      for (let column = 1; column <= nbrRows; column++) {
          //Each grid item has a row and column classes that holds their unique position in the grid
        $(".grid-container").append("<div class='grid-item' row=" +row +" column=" +column +"></div>");
      }
    }
    function changeColor(){
      //Generate random row index
      var randomRow = Math.floor(Math.random() * 20);
      //Generate random column index
      var randomColumn = Math.floor(Math.random() * 10);
      //Generate a random color
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      //Fade the selected div
      $(".grid-item[row='" + randomRow + "'][column='" + randomColumn + "']").fadeOut(3000);
      //change the background color of the selected div
      $(".grid-item[row='" + randomRow + "'][column='" + randomColumn + "']").css({'background-color':'#'+randomColor,'filter':blur(5+'px')});
      //Fade it in!
      $(".grid-item[row='" + randomRow + "'][column='" + randomColumn + "']").fadeIn(3000);
    }
      
    //Change the delay time for when to call the function as needed below
    window.setInterval(function(){changeColor();}, 100);  
  });
  