// require('dotenv').config()
// const axios = require ('axios')

// const { PROTOCOL, BASE_URL, APPID, UNITS, CNT, Q, LANGUAGE} = process.env

// const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&lang=${LANGUAGE}&units=${UNITS}`


// axios
//     .get(url)
//     .then(res => {
//         //console.log(res)
//         return res.data
//     })
//     .then(res => {
//         return res['list']
//     })
//     .then(res => {
//         console.log(res)
//     })
    
//     .then(res => {
//         //for(let it = 0; i < res.length; i ++){
//           for (previsao of res){
//               console.log(`
//               Temp min: ${previsao.main.temp_min},
//               Temp max: ${previsao.main.temp_max},
//                 Descrição: ${previsao.weather[0].description}
//               `)
//           }  
//         })

// function fatorial(n){
//     if (n < 0) return Promise.reject('Valor não pode ser negativo')
//     let res = 1
//     for (let i = 2; i <= n; i++); res *= i;
//     return Promise.resolve(res)
// }
// async function chamadaComAsyncAwait(){
//     try{
//         const f1 = await fatorial(10)
//         console.log(f1)
//         const f2 = await fatorial(-10)
//         console.log(f2)
//     }
//     catch (e){
//         throw e;
//         console.log("Erro: "+ e)
//     }
// }

// chamadaComAsyncAwait()


// function chamadaConThenECatch(){
// fatorial(10)
//     .then(res => console.log(res))
//     .catch(erro => console.log("Erro: " + erro))

// fatorial(-10)
//     .then(res => console.log(res))
//     .catch(erro => console.log("Erro: " + erro))
// }
