// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/*global $*/
$(document).ready(function() {
    function giphyURLWithSearchTerm(searchTerm) {
        var searchTerm = $("input").val();
        var gifUrl = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
        return gifUrl;

    }

    function appendImageToBody(srcURL) {
        $("#results").append('<img src=' + srcURL + '>');
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
    
    function callGiphyAPIWithTwoSearchTerms(searchTerm, searchTermTwo) {
        $.ajax({
            url: "https://api.giphy.com/v1/stickers/search?q="+ searchTerm + "&api_key=dc6zaTOxFJmzC&rating=g",
            method: "GET",
            success: function(response) {
                console.log(response);
                var url = response.data[0].images.original.url;
                appendImageToBody(url);
            },
        });

        $.ajax({
            url: "https://api.giphy.com/v1/stickers/search?q="+ searchTermTwo + "&api_key=dc6zaTOxFJmzC&rating=g",
            method: "GET",
            success: function(response) {
                console.log(response);
                var urltwo = response.data[0].images.original.url;
                appendImageToBody(urltwo);
            },
        });
    };
    
    $("#search").click(function() {
        callGiphyAPIWithSearchTerm();
    });
    
     $("#randomButton").click(function() {
        callRandomGiphyURL();
    });

    $("#searchTwo").click(function() {
        var inputValue = $("#srch-term-one").val();
        var secondValue = $("#srch-term-two").val();
        callGiphyAPIWithTwoSearchTerms(inputValue, secondValue);
    });
});
