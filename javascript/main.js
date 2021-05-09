document.querySelector(".js-go").addEventListener("click", function () {
  var input = document.querySelector("input").value;
  var url =
    "https://api.giphy.com/v1/gifs/search?q=" +
    input +
    "&api_key=U9aIyKli7Jxp38TqdOC2yePIEm07ZSHb";

  var GiphyAJAXCall = new XMLHttpsRequest();
  GiphyAJAXCall.open("GET", url);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", function (callResponse) {
    var data = callResponse.target.response;
    pushToDOM(data);
  });
});

document
  .querySelector(".js-userinput")
  .addEventListener("keyup", function (keyPressed) {
    if (keyPressed.which == 13) {
      var input = document.querySelector("input").value;
      var url =
        "https://api.giphy.com/v1/gifs/search?q=" +
        input +
        "&api_key=U9aIyKli7Jxp38TqdOC2yePIEm07ZSHb";

      var GiphyAJAXCall = new XMLHttpRequest();
      GiphyAJAXCall.open("GET", url);
      GiphyAJAXCall.send();

      GiphyAJAXCall.addEventListener("load", function (callResponse) {
        var data = callResponse.target.response;
        pushToDOM(data);
      });
    }
  });

function pushToDOM(input) {
  var response = JSON.parse(input);
  var imageUrls = response.data;
  var container = document.querySelector(".js-container");

  container.innerHTML = "";

  imageUrls.forEach(function (image) {
    var imageUrl = image.images.fixed_height.url;
    container.innerHTML += '<img src="' + imageUrl + '" class="m-1">';
  });
}
