function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

let Products = [
  new Product(1, "Cong Tac Tipo", 30000.0, 10, "Dien Tu", true),
  new Product(2, "O Cam Deli", 699000.0, 25, "Dien Tu", true),
  new Product(
    3,
    "Tua Vit Thu Dien Dien Tu Aman",
    3000000.0,
    15,
    "Cong Cu",
    true,
  ),
  new Product(4, "Ong Hoa Sen o21", 50000.0, 50, "Nuoc", true),
  new Product(5, "Ong Hoa Sen 027", 60000, 30, "Nuoc", false),
  new Product(6, "Que han", 14.99, 40, "Co Khi", true),
];
// 3. Tạo mảng mới chỉ chứa name và price của mỗi sp
const productNamePrice = Products.map(product => ({
  name: product.name,
  price: product.price
}));

console.log("Danh sách sản phẩm (name, price):");
console.log(productNamePrice);

// 4. Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const productsInStock = Products.filter(product => product.quantity > 0);

console.log("\nCác sản phẩm còn hàng trong kho:");
console.log(productsInStock);

// 5. Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensiveProduct = Products.some(product => product.price > 30000000);

console.log("\nCó sản phẩm có giá trên 30.000.000 không:", hasExpensiveProduct);