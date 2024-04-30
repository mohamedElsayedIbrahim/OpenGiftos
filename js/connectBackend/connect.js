export function getDataFromApi(element, url) { 

    var fillAllProducts = document.querySelector(element);
    fetch(url)
    .then( (resp) => { return resp.json() } )
    .then( (json)=>{
        var preview = ``;

        for (const item of json) {
            preview = `<div class="col-sm-6 col-md-4 col-lg-3">
            <div class="box">
            <a href="single.html?item=${item.id}">
                <div class="img-box">
                <img src="${item.image}" alt="${item.title}" title="${item.title}">
                </div>
                <div class="detail-box">
                <h6>
                    ${item.title.slice(0,25)}..
                </h6>
                <h6>
                    Price
                    <span>
                    $${item.price}
                    </span>
                </h6>
                </div>
                <div class="new">
                <span>
                    New
                </span>
                </div>
            </a>
            </div>
        </div>`;

        fillAllProducts.insertAdjacentHTML('afterbegin',preview)
        }
    })
 }