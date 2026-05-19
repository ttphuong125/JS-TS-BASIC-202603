// for loop
for(let i = 1; i <= 5; i++){
    console.log("đang chạy dòng thứ: ", i);
}
// VD
let soLuongAccount = 3;
for (let i = 1; i <= soLuongAccount; i++){
    console.log(`Đã tạo tài khoản_${i}@gmail.com`);
}
// duyệt array bằng index
// có mảng sau: in ra theo format  sản phẩm 1: quần đùi, sản phẩm 2: Áo cộc, sản phẩm 3: váy
let sanPham2= ["Quần đùi", "Áo cộc", "Váy"];
for (let i = 0; i<sanPham2.length; i++){
    console.log(`Sản phẩm ${i+1}: ${sanPham2[i]}`);
}
// duyệt object 
// Object không dùng được for cổ điển 
// Tạo 1 object config2 với 3 thuộc tính sau
// - browser = firefox
// - timeout = 2000
// - headLess = true 
// yêu cầu in ra các giá trị trong object

let config2 = {
    browser: "firefox",
    timeout: 2000,
    headLess: true,
};
let keys = Object.keys(config2);// lấy ra danh sách mảng key ["browser", "timeout", "headLess"]

for (let i = 0; i < keys.length; i++){
    let key = keys[i];
    let value = config2[key];
    console.log(`in ra giá trị bên trong của object ${key}: ${value}`);

}
// giải thích chi tiết
// vòng lặp bắt đầu với 1 = 0 , kiểm tra i< 3(3 là số lượng phần tử trong object), sau đó tăng i lên 1
// lần 1: 1 = 0, lúc này key 'browser', value = giá trị của key là browser lấy ra được firefox
// lúc này in ra được 1 cặp key: values là browser: firefox
// tương tự i tăng lên 1: lúc này key là timeout, và giá trị của timeout là 2000;

let arr = ["A", "B", "C"];
for (let i = 0; i< arr.length; i++){
    console.log(`các phần tử ${i+1} là ${arr[i]} `);
}
// bài tập nhỏ:
// Tạo nhanh 5 mã đơn hàng để test màn hình quản lý đơn hàng
let soLuongDon = 5;
// yêu cầu: dùng for cổ điển từ 1-> 5 mỗi vòng tạo biến maDonHang theo mẫu ORDER-1, ORDER-2...
// in từng mã đơn hàng ra màn hình
// cách này sai để vì không tạo biến bằng 1 chuỗi
// for (let i = 0; i < soLuongDon; i++){
//     let maDonHang = i+1;
//     console.log(`ORDER-${maDonHang}`);
// }
// cách 2 khai báo biến bằng 1 chuôi

console.log("----------bài tập nhỏ 1");
for (let i = 0; i < soLuongDon; i++){
    let maDonHang = `ORDER-${i+1}`;// khai báo biến bằng 1 chuỗi
    console.log(maDonHang);
}

//   B. Vòng lặp `for...of` (dùng cho array và string)

// - Dùng để duyệt qua từng phần tử trong `array` hoặc từng ký tự trong `string`.

// - **Cú pháp:**

// ```js
// for (let phanTu of danhSach) {
//   // phanTu tự động nhận giá trị của từng phần tử
// }
// ```

// - `danhSach`: một `array` hoặc `string` muốn duyệt qua.
// - `phanTu`: biến tạm, tự động nhận **giá trị** của từng phần tử trong mỗi vòng lặp.
// - `of`: từ khóa.

// - **Lưu ý:** Không dùng `for...of` để duyệt `object`.

// duyệt array
// VD thực tế:  lấy ra các phần tử của mảng

let fruits = ["táo", "cam", "ổi"];
// for cổ điển
console.log("----------- in ra theo cách for co dien");
for (i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
}
console.log("----------- in ra theo cách for of");

for (let fruit of fruits){
    console.log(fruit);
}
// duyệt string
let matKhau = "Neko@123";
for (let kyTu of matKhau){
    console.log(`Ký tự ${kyTu}`);
}
// duyệt array of object
console.log("VD array of object ");
let danhSachUsers = [
    { ten: "Neko", role: "admin" },
    { ten: "Neko2", role: "guest" },
    { ten: "Neko3", role: "user" },
];
for (let user of danhSachUsers){
    console.log(`${user.ten}- co quyen ${user.role}`); // user đóng vai trò là 1 phần từ của object
}
let config = { browser: "Chrome", timeout: 5000 };

console.log(Object.entries(config));// object.entries là lấy từng phần tử trong object tạo thành 1 mảng
// [ [ 'browser', 'Chrome' ], [ 'timeout', 5000 ] ]
for(let cap of Object.entries(config)){
    console.log(`${cap[0]} - ${cap[1]}`);
}
// cách sử dụng key không sử dụng entries
console.log("cách sử dụng key");
for(let key of Object.keys(config)){
    console.log(`${key} - ${config[key]}`);
}

// bài tập nhỏ 4
let danhSachUrl = ["/login", "/dashboard", "/profile"];
//dùng for of mỗi vòng lập lấy ra 1 url và in ra câu đang kiểm tra: url

for (let url of danhSachUrl){
    console.log(`đang kiểm tra: ${url}`);
}

// C. Vòng lặp `for...in` (dành cho object)

// - Dùng để duyệt qua từng tên thuộc tính (`key`) của `object`.

// - **Cú pháp:**

// ```js
// for (let key in tenObject) {
//   // key tự động nhận tên thuộc tính
// }
// ```

// - `tenObject`: `object` muốn duyệt qua.
// - `key`: biến tạm, tự động nhận tên thuộc tính (`key`) trong mỗi vòng lặp.
// - `in`: từ khóa.

// - **Lưu ý:** Không nên dùng `for...in` cho `array`.
console.log("sử dụng for in ---");
for( let key in config){
    console.log(`${key} - ${config[key]}`);
}
// Dùng vòng lặp nào cho array và object
// while : không biết trước số lần lập -> lập đến khi điều kiện sai
// for cổ điển: biết chính xác số lần lập -> cần kiểm soát tuyệt đói biến đêm
// có array, chỉ cần giá trị -> for ... of
// có array, cần cả index... for cổ điển
// duyệt object... -> dùng for of + biến hình hoặc for in
// ví dụ
let products = [
    { ten: "iphone", gia: 200000},
    { ten: "airpods", gia: 300000 },
    { ten: "markbook", gia: 100000 },
];
// yêu cầu: sử dụng for of và for in để in ta tên và giá của products
// mỗi lần lặp cần có dấu ---- phân cách giữa các sản phẩm ở đầu ra
// ten: iphone
// gia: 200000
// ----
// tên: airpods
// gia: 200000
//---
for (let product of products){// lúc này product là 1 phần tử VD { ten: "iphone", gia: 200000}
    for (key in product){
        console.log(`${key}: ${product[key]}`);
    }
    console.log("-----");
}