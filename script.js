// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.




const appVue = new Vue({
    // 
    el: "#app",


    data: {
        // array che dovrà contenere le dieci mail stampate nel DOM
        listaMail : [],
        svuotaListaMail : []

    },


    methods: {

        // funzione per il pulsante "stampa mail" che chiederà le email al server
        
        
        stampaMail() {
            for (let i = 0; i <= 9; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    // funzione arrow altrimenti il this non funziona e non stamperà le mail nel dom
                    .then((response) => {
                        // stampo solo la mail contenuta nei data ricevuti dal server
                        console.log(response.data.response);
                        this.listaMail.push(response.data.response);

                    });
            }
        //chiusura funziona stampaMail    
        },


        /*funzione per pulsante svuotaListaMail
        svuotaListaMail(){
            listaMail(listaMail.lenght = 0);
        },
        */


//chiusura di methods
    },


//chiusura di vue   
});


//                          APPUNTI LEZIONE 17/06/2022


/*                     URI                     HTTP BODY
axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function (response) {
        console.log(response.data.response);
    
    });
*/
/* 
RISULTATO DEL CONSOLE.LOG di response.data.response sarà il valore che abbiamo richiesto*/


/* 
RISULTATO CONSOLE LOG response.data => Restituisce un oggetto con due chiavi: 
    -response : contiene il valore richiesto al server
    -success : booleano che indica l'esito della richiesta al server


        {success: true, response: 6}
        response: 6
        success: true
        [[Prototype]]: Object
*/

/* 
RISULTATO DEL CONSOLE LOG DI response
Object

CONFIG = INFORMAZIONI INVIATE AL SERVER
config: {url: 'https://flynn.boolean.careers/exercises/api/random/int', method: 'get', headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
---------------------------------------------------------------------------------
DATA = RISPOSTA DEL SERVER SOTTO FORMA DI OGGETTO (Content-Type:application/json)
data: {success: true, response: 9}
----------------------------------------------------------------------------------

headers: {cache-control: 'no-cache, private', content-length: '29', content-type: 'application/json'}
request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
status: 200
statusText: "OK"
[[Prototype]]: Object

OGGETTO JSON SOTTO FORMA DI STRINGA CONTENUTO NEL REQUEST che corrisponde alla risponde alla risposta del server
response: "{\"success\":true,\"response\":9}"
*/