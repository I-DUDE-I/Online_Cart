fetch("https://dummyjson.com/carts")

.then(data => data.json())

.then(cartt => display(cartt))

function display(cartt) {
    for (let prod of cartt.carts){
        for (let item of prod.products) {
            console.log(item.id);
            card = `
            <div class="card" style="width: 18rem;">
            <img src="${item.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">price: <span class="crossedPrice">$${item.price}</span></p>
              <p class="card-text">discounted price: <span class="newPrice fs-5 text-success">$${((item.discountedTotal)/(item.quantity)).toFixed(2)}</span></p>
              <a href="#" class="btn btn-primary">Buy Now</a>
              <a href="#" class="btn btn-primary ms-2">Add to cart</a>
            </div>
            <div class="offer">
                ${item.discountPercentage}% OFF
            </div>
          </div>
          `

          cardContainer.innerHTML += card
        }
    }
}