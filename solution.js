import axios from 'axios'

// console.log(process.argv);
const response = await axios.get('https:/https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/' + process.argv[2])

console.log('The response is', response)
// 30f1c8a7
// 8dc124cbd1290b097e4306454a5c9ee0

