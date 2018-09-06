const request = require('request')

// request.get('http://www.baidu.com',function(error,resp,body){
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', resp && resp.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// })

request.post({ url: 'http://localhost:5555/rest/login', form: { key: 'value' } },
  function (err, httpResponse, body) {
    console.log('login')
    console.log(body)
  })
