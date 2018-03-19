// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
$(document).ready(function(){
      function giphyURLWithSearchTerm(searchTerm) {
        var searchTerm = $("input").val();
        var gifUrl = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
        return gifUrl;
    
    }
    
    function appendImageToBody(srcURL) {
        $("#result").html('<img src=' + srcURL + '>');
    }
    
    function callGiphyAPIWithSearchTerm(searchTerm) {
        $.ajax({
          url: giphyURLWithSearchTerm(searchTerm),
          method: "GET",
          success: function(response) {
            var random = Math.ceil(Math.random() * response.data.length);
            var url = response.data[random].images.original.url;
            appendImageToBody(url);
          },
        }); 
    }

    $("#search").click(function() {
        callGiphyAPIWithSearchTerm();
        $("#srch-term").val("");
    });
    
    
    function randomGiphyURL() {
            var randomUrl = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";
            return randomUrl;
        }
        function callRandomGiphyURL() {
            $.ajax({
              url: randomGiphyURL(),
              method: "GET",
              success: function(response) {
                 console.log(response);
                   var url = response.data.images.original.url;
                   appendImageToBody(url);
            },
        }); 
    }
    
    $("#randomButton").click(function() {
    callRandomGiphyURL();
    });
    
});