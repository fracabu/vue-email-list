// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.



/*
const appVue = new Vue({
    // 
    el: "#app",


    data: {

    },


    methods: {

    }
});
*/
//                      URI                     HTTP BODY
axios
    .get("https://flynn.boolean.careers/exercises/api/random/int")
    .then(function (response) {
        console.log(response);
    });

/* 
RISULTATO DEL CONSOLE LOG DI RESPONSE
Object
config: {url: 'https://flynn.boolean.careers/exercises/api/random/int', method: 'get', headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
data: {success: true, response: 9}
headers: {cache-control: 'no-cache, private', content-length: '29', content-type: 'application/json'}
request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
status: 200
statusText: "OK"
[[Prototype]]: Object
*/