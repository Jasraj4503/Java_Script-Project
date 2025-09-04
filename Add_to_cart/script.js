let productList = JSON.parse(localStorage.getItem('productList'))
show()

document.querySelector('#blog').addEventListener('submit', (e) => {
    e.preventDefault()
    let category = document.querySelector('#category')
    let name = document.querySelector('#name')
    let url = document.querySelector('#url')
    let price = document.querySelector('#price')
    let description = document.querySelector('#description')

    var arr = productList || []
    console.log(arr)

    const id = Date.now()

    const newProduct = {
        id,
        category: category.value.toUpperCase(),
        name: name.value.toUpperCase(),
        price: price.value,
        url: url.value,
        description: description.value
    }
    console.log('newProduct: ', newProduct)

    arr.push(newProduct)
    localStorage.setItem('productList', JSON.stringify(arr))
    document.querySelector('#blog').reset()
    show()
})

function show() {
    let productList = JSON.parse(localStorage.getItem('productList')) || [];
    let output = ""
    if (productList == null || productList.length == 0) {
        var result = `
           <div class="card col-6 mx-auto p-5 my-5 shadow border-0 text-center">
                <b>No Records</b>
           </div
        `
        document.querySelector('#showProduct').innerHTML = result
    }
    else {
        productList.forEach((product) => {
            output += `
            <div class="col-lg-4">
                <div class="card shadow border-0 mt-3">
                    <img src="${product.url}" alt="" style="width:100%; height:200px; object-fit:cover; object-position:center">
                    <div class="card-body">
                        <h2>${product.name}</h2>
                        <ul>
                            <li>Category: ${product.category} </li>
                            <li>Price: ${product.price}</li>
                            <li>Description: ${product.description}</li>
                        </ul>
                        <button onclick="addToCart(${product.id})" class="btn btn-warning">Add to cart</button>
                    </div>
                </div>
            </div>
        `
        })
        document.querySelector('#showProduct').innerHTML = output
    }
}

//////// Add to Cart
function addToCart(id) {
    // alert(id)
    alert("Item added to cart")
    let cartList = JSON.parse(localStorage.getItem('cartList')) || [];

    const s_product = productList.find((product) => {
        return product.id == id
    })
    console.log(cartList)
    console.log(s_product)

    const existCart = cartList.find((cart) => {
        return cart.id == id
    })
    console.log(existCart)

    if (existCart) {
        existCart.count++

    } else {
        const newCart = {
            ...s_product, count: 1
        }
        cartList.push(newCart)
    }
    localStorage.setItem('cartList', JSON.stringify(cartList))
    location.reload()
}

function cartLength() {
    let cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    const counting = cartList.map((cart) => {
        return cart.count
    })
    console.log(counting)
    const sum = counting.reduce((acc, curr) => {
        return acc + curr
    })
    document.querySelector('#output').innerHTML = sum
}
cartLength()