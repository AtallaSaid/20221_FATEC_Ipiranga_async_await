require('dotenv').config()
const axios = require ('axios')

const { PROTOCOL, BASE_URL, APPID, UNITS, CNT, Q, LANGUAGE} = process.env

const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&lang=${LANGUAGE}&units=${UNITS}`


axios
    .get(url)
    .then(res => {
        //console.log(res)
        return res.data
    })
    .then(res => {
        return res['list']
    })
    .then(res => {
        console.log(res)
    })
    
    .then(res => {
        //for(let it = 0; i < res.length; i ++){
          for (previsao of res){
              console.log(`
              Temp min: ${previsao.main.temp_min},
              Temp max: ${previsao.main.temp_max},
                Descrição: ${previsao.weather[0].description}
              `)
          }  
        })


