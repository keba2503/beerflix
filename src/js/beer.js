
const getbeers = (element, data) => {
  let i = 0;
  for ( i = 0; i < 10; i++) {
  
    element.innerHTML += `
  
    <div id=${data.beers[i].id} class="card">
        
          <div class="card-image-container">
                 <picture>
                   <img class="card-image" src=${data.beers[i].image} alt=${name} />
                  </picture>
            
          </div>
            
            <div class="card-content">
                <div>
                  <a href="#"> <h2>${data.beers[i].name}</h2> </a>
                </div>
                <p>${data.beers[i].description}</p>
            </div>
          
          <div class="card-footer">
            <div>
              <div>${data.beers[i].contributedBy}</div>
              <div>${data.beers[i].firstBrewed}</div>
            </div>   
          </div>
    </div> 
      </div>   
  </div>
  
  `;
  

  }    
  
}

export const getbeersSearch = (element, data) => {
  let i = 0;
  for ( i = 0; i < 10; i++) {
  
    element.innerHTML += `
  
    <div id=${data.beers[i].id} class="card">
        
          <div class="card-image-container">
                 <picture>
                   <img class="card-image" src=${data.beers[i].image} alt=${name} />
                  </picture>
            
          </div>
            
            <div class="card-content">
                <div>
                  <a href="#"> <h2>${data.beers[i].name}</h2> </a>
                </div>
                <p>${data.beers[i].description}</p>
            </div>
          
          <div class="card-footer">
            <div>
              <div>${data.beers[i].contributedBy}</div>
              <div>${data.beers[i].firstBrewed}</div>
            </div>   
          </div>
    </div>
     </div>   
  </div>
  
  `;
  

  }    
  
}



  export default getbeers;
 
