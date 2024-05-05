let htmlProducts ='';

fetch('https://api.myjson.online/v1/records/f9e977cc-0d2b-4539-86ce-8d9756fea196')
    .then((res) => res.json())
    .then((response) => { 
        console.log(response)
        for(let i=0; i<response.data.length; i++) {
            htmlProducts += `
            <div class="card">
            <img src="${response.data[i].img}"  class="card-img-top"  alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${response.data[i].nameProd}</h5>
              <p class="card-text">${response.data[i].desc}</p>
              <p class="card-text">Price:${response.data[i].price}</p>
            </div>
            <button>Buy</button>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            </div>
            `
        }
        document.getElementById('container-card').innerHTML = htmlProducts;
    }) 