$(document).ready(function(){
   
  /*Open random article*/
  $("#random").click(function(e){
    e.preventDefault();
    var randWin = window.open("https://en.wikipedia.org/wiki/Special:Random");
    if(randWin){
      randWin.focus();
    }else{
      alert("Allow popups for this website");
    }
  })
   
  /*Search event*/
  $("#search").click(function(e){ 
                               
     e.preventDefault();
  
    //if the input is empty, show info message
    if(!$("#querySearch").val()){
      alert("Type in your query");
    }else{
       var searchText = $("#querySearch").val();
      
    // Get JSON-formatted data from the server

    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchText +    "&limit=10namespace=0&format=json&origin=*", function( resp ) {
      
      for(var i = 0; i < resp[1].length; ++i){
        var articleId = "#item-" + i;
      
        $(articleId).html("<h3>" + resp[1][i] + "</h3>" + "<p>" + resp[2][i] + "</p>"
                       + "<a href=" + resp[3][i] + " target=\"_blank\">Lear More</a>"); 
        $(articleId).removeClass("hide");
       
      }
    });
    }
  });
});