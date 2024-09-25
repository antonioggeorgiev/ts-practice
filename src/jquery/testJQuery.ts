import { $ } from "./jQuery";

/**
 * Get the <button> element with the class 'continue'
 * and change its HTML to 'Next Step...'
 */
$("button.continue").html("Next Step...");

/**
 * Show the #banner-message element that is hidden with visibility:"hidden" in
 * its CSS when any button in #button-container is clicked.
 */
const hiddenBox = $("#banner-message");
$("#button-container button").on("click", (event) => {
  hiddenBox.show();
});

/**
 * Make an API call and fill a <div id="post-info">
 * with the response data
 */
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/33",
  successCb: (result) => {
    $("#post-info").html("<strong>" + result.title + "</strong>" + result.body);
  },
});
