var quotes = [
	{
		quote: "“Talk is cheap. Show me the code.“",
		author: "Linus Torvalds",
		authorUrl: "https://www.goodreads.com/author/show/92867.Linus_Torvalds"
	},
	{
		quote: "“Programs must be written for people to read, and only incidentally for machines to execute.“",
		author: "Harold Abelson",
		authorUrl: "https://www.goodreads.com/author/show/5409448.Harold_Abelson"
	},
	{
		quote: "“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.“",
		author: "John Woods",
		authorUrl: "https://www.goodreads.com/author/show/60287.John_Woods"
	},
	{
		quote: "“Walking on water and developing software from a specification are easy if both are frozen.“",
		author: "Edward Berard",
		authorUrl: "https://www.goodreads.com/author/show/1560922.Edward_Berard"
	},
	{
		quote: "“What kind of programmer is so divorced from reality that she thinks she'll get complex software right the first time?“",
		author: "James Alan Gardner",
		authorUrl: "https://www.goodreads.com/author/show/129426.James_Alan_Gardner"
	},
	{
		quote: "“Programming, it turns out, is hard. The fundamental rules are typically simple and clear. But programs built on top of these rules tend to become complex enough to introduce their own rules and complexity. You’re building your own maze, in a way, and you might just get lost in it.“",
		author: "Marijn Haverbeke",
		authorUrl: "https://www.goodreads.com/author/show/4209162.Marijn_Haverbeke"
	},
	{
		quote: "“Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.“",
		author: "Eagleson's Law",
		authorUrl: ""
	}
];

function randomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
};

var newQuoteButton = document.querySelector("#newQuote");
var quoteDisplay = document.querySelector("#quote");
var authorDisplay = document.querySelector("#author");

newQuoteButton.addEventListener("click", function() {
	var newQuote = randomQuote();
	quoteDisplay.textContent = newQuote.quote;
	authorDisplay.textContent = newQuote.author;
});

// <a href="https://twitter.com/intent/tweet?url=http://thoughtsoncoding.com/quote/52624cc7cdc3fd11fee77740&amp;text=Programs must be written for people to read, and only incidentally for machines to ...&amp;via=http://thoughtsoncoding.com/author/abelson--sussman">t</a>