/*
    Call BackEnd API via Apiclient.js

*/
import { apiCall } from "./api-client.js";
function loadPizza(){
    const URL = 'https://raw.githubusercontent.com/brainmentorspvtltd/pizza-api/main/pizza.json';
    const promise = apiCall(URL);
    // Pending
    promise.then(function(response){
        const pr = response.json();
        pr.then(function(data){
            printPizzas(data.Vegetarian);
            console.log('Pizza Data ', data);
        }).catch(function(err){
            console.log('Invalid JSON ', err);
        })
    }).catch(function(err){
        console.log('Unable to make API Call ', err);
    });
}
loadPizza();

function printPizzas(pizzas){
    // Loop and call printPizza
    for(var i = 0 ; i<pizzas.length; i++){
        printPizza(pizzas[i]);
    }

}

function printPizza(pizza){
    // Design of one pizza
    const card  = `
    <div class="col-4 card">
  <img src="${pizza.assets.menu[0].url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pizza.name}</h5>
    <p class="card-text">${pizza['menu_description']} &#8377; ${pizza.price}</p>
    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>`;
const div = document.getElementById('pizzas');
div.innerHTML = div.innerHTML +  card;
}