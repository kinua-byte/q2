const fetch = require('node-fetch');
fetch('https://example.com/')
    .then(res => res.text())
    .then(body => console.log(body));