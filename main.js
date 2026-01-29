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
  new Product(6, "Que han", 40000, 40, "Co Khi", true),
  new Product(7, "May khoan dien", 1500000.0, 5, "Cong Cu", true),
  new Product(8, "Tai nghe Bluetooth", 2500000.0, 0, "Accessories", false),
  new Product(9, "Pin sac du phong", 800000.0, 20, "Accessories", true),
  new Product(10, "Laptop Gaming", 35000000.0, 8, "Dien Tu", true),
];
// 3. Tạo mảng mới chỉ chứa name và price của mỗi sp
const productNamePrice = Products.map((product) => ({
  name: product.name,
  price: product.price,
}));

console.log("Danh sách sản phẩm (name, price):");
console.log(productNamePrice);

// 4. Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const productsInStock = Products.filter((product) => product.quantity > 0);

console.log("\nCác sản phẩm còn hàng trong kho:");
console.log(productsInStock);

// 5. Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensiveProduct = Products.some(
  (product) => product.price > 30000000,
);

console.log("\nCó sản phẩm có giá trên 30.000.000 không:", hasExpensiveProduct);

// 6. Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
const allAccessoriesAvailable = Products.filter(
  (product) => product.category === "Accessories",
).every((product) => product.isAvailable === true);

console.log(
  "\nTất cả sản phẩm Accessories có đang được bán không:",
  allAccessoriesAvailable,
);

// 7. Tính tổng giá trị kho hàng (Giá trị kho = price * quantity)
const totalInventoryValue = Products.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);

console.log(
  "\nTổng giá trị kho hàng:",
  totalInventoryValue.toLocaleString("vi-VN"),
  "VND",
);

// 8. Dùng for...of duyệt mảng products và in ra Tên sản phẩm - Danh mục - Trạng thái
console.log("\nDanh sách sản phẩm (for...of):");
for (const product of Products) {
  const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${product.name} - ${product.category} - ${status}`);
}

// 9. Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
console.log("\nThông tin chi tiết sản phẩm đầu tiên (for...in):");
for (const key in Products[0]) {
  console.log(`${key}: ${Products[0][key]}`);
}

// 10. Lấy danh sách tên các sản phẩm đang bán và còn hàng
const availableProducts = Products.filter(
  (product) => product.isAvailable === true && product.quantity > 0,
).map((product) => product.name);

console.log("\nDanh sách tên sản phẩm đang bán và còn hàng:");
console.log(availableProducts);
