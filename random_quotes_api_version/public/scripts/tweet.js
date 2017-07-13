//on page load, populate href attribute of the tweet button
//web intent tweet button. Params: https://dev.twitter.com/web/tweet-button/parameters

//select html elements
var tweetButton = document.querySelector('#tweet');
var quoteText = document.querySelector('#quoteBox>h2');
var quoteAuthor = document.querySelector('#quoteBox>h3');

//shorten a string to less than maxLen characters without truncating words + adding ...
function shorten(str, maxLen, separator = ' ') {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen))+'..."';
}

//140 max chars allowed in twitter less 1 space between quote and author less the additional '..."' in function above
var maxLen = 140 - '..." '.length - quoteAuthor.textContent.length;
var shortQuoteText = shorten(quoteText.textContent, maxLen);

//build and update the href attribute
var url = `https://twitter.com/intent/tweet?text=${shortQuoteText}%20${quoteAuthor.textContent}`;
tweetButton.setAttribute('href', url);