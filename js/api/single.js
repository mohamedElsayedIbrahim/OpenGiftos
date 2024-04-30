var search = location.search;
var itemID = search.replace('?item=','');

var fillSingleProduct =  document.getElementById('fillSingleProduct');

fetch(`https://fakestoreapi.com/products/${itemID}`)
.then( (response)=> response.json())
.then( (json) => {
    var preview = `
    <div class="col-md-5">
              <div>
                <img width="300" height="300" class="img-fluid" src="${json.image}" alt="${json.title}" title="${json.title}">
              </div>
            </div>
    
            <div class="col-md-7">
              <div>
                <div class="mb-3 heading_container">
                  <h2>
                  ${json.title}
                  </h2>
                  <h3 class="fs-6 text-success">
                  ${json.category}
                  </h3>
                </div>
                <div class="description mb-3">
                  <h3 class="fs-5">Description</h3>
                  <p class="lead">
                  ${json.description}
                  </p>
                </div>
      
                <div class="price mb-3">
                  <span class="fw-bold">price</span> $${json.price}
                </div>
      
                <div class="buy">
                  <button class="btn btn-danger">Buy now</button>
                </div>
              </div>
            </div>`;

    fillSingleProduct.innerHTML = preview
})