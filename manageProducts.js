let productsList = ["Iphone XS" , "Samsung Galaxy Z Fold 3", "Xiaomi Redmi 10" , "Iphone 11", "Oppo Renno7", "Iphone 12" ];
let amount = [5, 6, 2, 4, 3, 9];
let images = ["https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-vang-600x600-600x600.jpg" ,
              "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1121544672.jpeg",
              "https://cdn.tgdd.vn/Products/Images/42/246200/redmi-10-gray-600x600.jpg",
              "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/286885732.jpeg",
              "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/c/o/combo_product_-_black_-_reno7_4g.png",
              "https://cdn.hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max-2.png"];
// Hàm hiển thị

function showAllProducts() {
    let content = ""
    for (let i =0; i < productsList.length; i++) {
        content += "<tr>" +
                        "<td class ='nameProducts'>" + productsList[i] + "</td>" +
                        "<td><img src='" + images[i] + "'></td>" +
                        "<td class ='amoutProducts'>" + amount[i] + "</td>" +
                        "<td><button onclick ='editProducts("+i+")'>Sửa</button> <button onclick = 'delProducts("+i+")'>Xóa</button></td>" +
                    "</tr>"
    }
    document.getElementById("products").innerHTML = content;
}showAllProducts();

// Hàm để tạo sản phẩm
// Có điều kiện để tạo trùng sản phẩm thì alert ra hộp thoại
function createNewProducts() {
    let newP = document.getElementById("newP").value;
    let amountP = document.getElementById("amountP").value;
    let newImages = document.getElementById("newImages").value;
    let flag = false;
    for (let i =0; i < productsList.length; i++) {
        if (newP == productsList[i]) {
            flag = true;
        }
    }
    if (flag == false) {
        amount.push(amountP);
        productsList.push(newP);
        images.push(newImages);
        showAllProducts();
        document.getElementById("newP").value = "";
        document.getElementById("amountP").value = "";
    }else {
        alert("Sản phẩm đã có trong dach sách");
        document.getElementById("newP").value = "";
        document.getElementById("amountP").value = "";
    }

}

// Hàm để xóa sản phẩm 
// có tham số để truyền vào vị trí cần xóa
function delProducts(index) {
    let check = confirm("Bạn có chắc chắn muốn xóa? ");
    if (check == true){
        productsList.splice(index, 1);
        amount.splice (index, 1);
        images.splice (index, 1);
        showAllProducts();
    }
 
}

// Hàm để edit
// Sửa sản phẩm theo tham số index
// Cho người dụng nhập vào sp mới
// Gán lại sp cho sp cũ
// hiển thị lại danh sách 
let editCheck = true; //biến để edit hàng này thì không được edit hàng khác
function editProducts(index) {
    // let newValue = prompt("Mời bạn nhập tên sản phẩm mới ", productsList[index]);
    // let newAmount = prompt ("Mời bạn nhập số lượng ")
    // let newImages = prompt ("Nhập link ảnh")
    // amount[index] = newAmount;
    // productsList[index] = newValue;
    // images[index] = newImages;
    // showAllProducts();
    let check = document.getElementsByClassName('nameProducts')[index].innerHTML;
    let check_1 = document.getElementsByClassName('amoutProducts')[index].innerHTML;
    if (check == productsList[index] && check_1 == amount[index] && editCheck == true) {
        document.getElementsByClassName('nameProducts')[index].innerHTML =  '<input type="text"  id="changeNameProducts" value="' + check + '">';
        document.getElementsByClassName('amoutProducts')[index].innerHTML = '<input type="number"  id="changeAmoutProducts" value="' + check_1 + '">';
        editCheck = false;
    }
    if (check != productsList[index] && check_1 != amount[index] && editCheck == false) {
        productsList[index] = document.getElementById("changeNameProducts").value;
        document.getElementsByClassName('nameProducts')[index].innerHTML = productsList[index];
        amount[index] = document.getElementById("changeAmoutProducts").value;
        document.getElementsByClassName('amoutProducts')[index].innerHTML = amount[index];
        editCheck = true;
        console.log(editCheck);
    }
    
}

// Hàm để tìm kiếm
function searchProducts() {
    let productName = document.getElementById("newP").value;
    if (productName === "" || productName === null || productName === undefined) return showAllProducts();
    var productSearch = [];
    var amountSearch = [];
    var imagesSearch = [];
    for (let i = 0; i<productsList.length; i++) {
        if (productsList[i].includes(productName)) {
            productSearch.push(productsList[i]);
            amountSearch.push(amount[i]);
            imagesSearch.push (images[i]);
        }
    }
    let content = "";
    for (let i =0; i < productSearch.length; i++) {
        content += "<tr>" +
                        "<td>" + productSearch[i] + "</td>" +
                        "<td><img src='" + imagesSearch[i] + "'></td>" +
                        "<td>" +  amountSearch [i] + "</td>" +
                        "<td><button onclick ='editProducts("+i+")'>Sửa</button> <button onclick = 'delProducts("+i+")'>Xóa</button></td>" +
                    "</tr>"
    }
    document.getElementById("products").innerHTML = content;
    
}