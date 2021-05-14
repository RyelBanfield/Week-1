document.querySelector('.js-go').addEventListener('click', function () {
  const input = document.querySelector('input').value
  const url =
    'https://api.giphy.com/v1/gifs/search?q=' +
    input +
    '&api_key=U9aIyKli7Jxp38TqdOC2yePIEm07ZSHb'

  const GiphyAJAXCall = new XMLHttpRequest()
  GiphyAJAXCall.open('GET', url)
  GiphyAJAXCall.send()

  GiphyAJAXCall.addEventListener('load', function (callResponse) {
    const data = callResponse.target.response
    pushToDOM(data)
  })
})

document
  .querySelector('.js-userinput')
  .addEventListener('keyup', function (keyPressed) {
    if (keyPressed.which === 13) {
      const input = document.querySelector('input').value
      const url =
        'https://api.giphy.com/v1/gifs/search?q=' +
        input +
        '&api_key=U9aIyKli7Jxp38TqdOC2yePIEm07ZSHb'

      const GiphyAJAXCall = new XMLHttpRequest()
      GiphyAJAXCall.open('GET', url)
      GiphyAJAXCall.send()

      GiphyAJAXCall.addEventListener('load', function (callResponse) {
        const data = callResponse.target.response
        pushToDOM(data)
      })
    }
  })

function pushToDOM (input) {
  const response = JSON.parse(input)
  const imageUrls = response.data
  const container = document.querySelector('.js-container')

  container.innerHTML = ''

  imageUrls.forEach(function (image, index) {
    setTimeout(function () {
      const imageUrl = image.images.fixed_height.url
      container.innerHTML = '<img src="' + imageUrl + '" class="m-1">'
    }, index * 1500)
  })
}
