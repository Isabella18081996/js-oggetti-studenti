/* Descrizione:
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */


var arrStudenti = [
  {
    nome : 'Mario',
    cognome : 'Rossi',
    età : 15
  },
  {
    nome : 'Giacomo',
    cognome : 'Chiari',
    età : 17
  },
  {
    nome : 'Mariella',
    cognome : 'Carrozza',
    età : 18
  }


]

console.log(arrStudenti);

var mioNome = prompt("Inserisci qui il tuo nome");
var mioCognome = prompt("E ora il tuo cognome");
var miaEtà = parseInt(prompt("E quanti anni hai?"));

//console.log(mioNome);
//console.log(mioCognome);
//console.log(miaEtà);

addStudente(arrStudenti, mioNome, mioCognome, miaEtà);

for( var studente of arrStudenti){

  for(key in studente){
    console.log("chiave : " + key + " valore: " + studente[key]);
  }
  console.log("-----------------")
}





//FUNZIONE PER AGGIUNGERE UNO STUDENTE

function addStudente (strStudenti, nuovoNome, nuovoCognome, nuovaEtà){
    strStudenti.push({
      nome : nuovoNome,
      cognome : nuovoCognome,
      età : nuovaEtà
    })
}