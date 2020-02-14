import getbeers from './beer.js'

const API_KEY = "1HETNZZ-EC2M5DG-MTPV5S4-YF0F5EB";
const url = "https://beerflix-api.herokuapp.com/api/v1";
const reqURL1 = `${url}/beers?search=a&limit=10`;

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
    // console.log(data);
  
    
    


        getbeers(rootelement, data);

   
  })

  .catch(function(err) {
    console.log(err);
  });

 