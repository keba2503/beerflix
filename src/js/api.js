import getbeers from './beer.js'
import getbeersSearch from './beer.js'

const API_KEY = "1HETNZZ-EC2M5DG-MTPV5S4-YF0F5EB";
const url = "https://beerflix-api.herokuapp.com/api/v1";
const reqURL1 = `${url}/beers?search=a&limit=10`;
const formularioBuscar = document.querySelector("#search-form");
const rootelement = document.querySelector("#main-layout-beers");

  
  fetch(reqURL1, {
    method: "GET",
    withCredentials: true,
    headers: {
    "X-API-KEY": API_KEY,
    "Content-Type": "application/json"
    }
  })
 

  .then(resp => resp.json())
  .then(data => {
   
    getbeers(rootelement, data);

   
  })

  .catch(function(err) {
    console.log(err);
  });


  formularioBuscar.addEventListener("submit", e => {
  e.preventDefault();
    
    let texto = document.querySelector("#buscador").value;
    const reqURL2 = `${url}/beers?search=${texto}&limit=10`;
        
   fetch(reqURL2, {
      method: "GET",
      withCredentials: true,
      headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => {      
     rootelement.innerHTML = " ";
     getbeersSearch(rootelement, data);
     })
        
    .catch(function(error) {
        console.log(error);
    });
});