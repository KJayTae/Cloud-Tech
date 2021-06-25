let listofpd = [{
    "name": "IPHONE 15 PRO MAX",
    "price": 1299,
    "images": "./Picture/ip12.png"
}, {
    "name": "IPHONE 10",
    "price": 1100,
    "images": "./Picture/ip11.png"
}]

let index = listofpd

let container = document.getElementById("container")


for (let index = 0; index < listofpd.length; index++) {
    console.log(listofpd[index])


    // -- Tạo DOM node
    // [1]  hình
    let pdimage = document.createElement("img")
    pdimage.src = listofpd[index].images
        // container.appendChild(pdimage)

    let pdname = document.createElement("p")
    pdname.textContent = listofpd[index].name
        // container.appendChild(pdname)

    // [2] ở giá
    let pdprice = document.createElement("p")
    pdprice.textContent = listofpd[index].price
        // container.appendChild(pdprice)

    // Tạo một thẻ chứa img, name, price


    // <div></div>
    let product = document.createElement("div")


    //<div class="productStyle"></div>
    product.className = "productStyle"

    //<div class="productStyle" id="hello"></div>
    product.id = "hello"

    product.onclick = function() {
        console.log("productClicked")
    }

    /* <div class="productStyle">
        // 42
        <img src="......">
        // 43
        <p>.....</p>
        // 44
        <p>.....</p>
    </div>
    */
    product.appendChild(pdimage);
    product.appendChild(pdname);
    product.appendChild(pdprice);
    container.appendChild(product)
        /* <div class="container">
            //
            <div class="product" clas="productStyle"></div>    
        </div>
        */
}