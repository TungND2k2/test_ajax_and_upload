showHome()

function showHome(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/admin/product",
        headers: {
            'Content-Type': 'application/json'
        },
        success: (products)=>{
            let html=''
            products.map((item,index)=>{
               html+= ` 
<table class="table table-hover" style="width: 500px;height: 100px"> 
<tr>
                   <td>${index+1}</td>
                   <td>${item.name}</td>
                   <td>${item.price}</td>
                   <td>${item.nameCategory}</td>
                   <td><img style="width: 100px;height: 100px" src="${item.image}" alt=""></td>
                   <td><button class="btn btn-danger" onclick="DeleteProduct('${item.id}')">Delete</button></td>
                   <td><button class="btn btn-info" onclick="showEditProduct('${item.id}')">Edit</button></td>

               </tr>
              </table>  `
            })
            $('#body').html(html)
        }
    })
}
function showAddProduct(){
    $('#body').html(`<input type="text" id="name" placeholder="name product">
    <input type="number" id="price" placeholder="price product">
    <input type="text" id="image" placeholder="image product">
    <input type="text" id="category" placeholder="category product">
    <button onclick="AddProduct()">Add</button>
`)
}
function AddProduct(){
    let name = $('#name').val();
    let price = $('#price').val();
    let image = $('#image').val();
    let category = $('#category').val();
    let product={

        name: name,
        price: price,
        image: image,
        category: category,

    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/admin/product/create",
        headers: {
            'Content-Type': 'application/json'
        },
        data:JSON.stringify(product),
        success: ()=>{showHome()

        }
})
}
function DeleteProduct(id){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/admin/product/delete/"+id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: ()=>{showHome()
        }
    })
}
function showEditProduct(id){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/admin/product/edit/"+id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: (product) => {
            $('#body').html(`<input type="text" id="name" placeholder="name product" value="${product.name}">
    <input type="number" id="price" placeholder="price product" value="${product.price}">
    <input type="text" id="image" placeholder="image product"value="${product.image}">
    <input type="text" id="category" placeholder="category product"value="${product.category}">
    <button onclick="SaveEditProduct('${product.id}')">Save</button>
`)
        }
    })
}
function SaveEditProduct(id){
    let name = $('#name').val();
    let price = $('#price').val();
    let image = $('#image').val();
    let category = $('#category').val();
    let product={

        name: name,
        price: price,
        image: image,
        category: category,

    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/admin/product/edit/"+id,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(product),
        success: ()=>{showHome()
        }
    })
}