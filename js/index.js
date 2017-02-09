$(document).ready(function() {
  
  $("#quote-button").on("click", function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(data) {
      if (data.quoteAuthor === "") {
        data.quoteAuthor = "Anonymous";
      }
      $("#quote-box").html(data.quoteText + "<br>" + data.quoteAuthor);
    });
  });
});