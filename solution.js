import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const options = {
     headers : {
        'app_id': process.env.APP_ID,
        'app_key': process.env.APP_KEY
     }
}

//  axios.method(url, config)

const response = await axios.get('https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/' + process.argv[2], options)

console.log('The response is', response.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
// 30f1c8a7
// 8dc124cbd1290b097e4306454a5c9ee0

