// Object
// - **Cú pháp:**
//     - Dùng dấu ngoặc nhọn `{}`.
//     - Bên trong là các cặp **key - value** và ngăn cách nhau bằng dấu phẩy.
let userTest ={
    hoTen: "Neko Nguyễn",
    tuoi: 30,
    isVip: true,
    quyenHan: ["read", "write"],
};
console.log(userTest);

// trường hợp bắt buộc có dấu cách
let apiData = {
    "first-name" : "neko",
    "content-type": "text/html",
    "so dien thoai": "0987654578",
};
//  - **A. Dùng dấu chấm `.`** - cách dùng phổ biến nhất
//       - Cú pháp:
//         ```js
//         tenObject.key;
//         ```
//       - Dùng khi key là tên hợp lệ.

console.log(userTest.hoTen); // khi key không có dấu ngoặc kép
console.log(apiData["first-name"]); // khi có -, cách 
// trường hợp rất hay dùng trong AT: khi key được lưu trong 1 biến khác (dynamic key)

let userTest2 = {
    hoTen: "Neko Nguyen",
    email: "neko@gmail.com"
};
let thongTinCanLay = "email"; // key gán vào biến
console.log(userTest2.thongTinCanLay);// này là undefinded
console.log(userTest2[thongTinCanLay]);

// thêm sửa xóa
// - **Thêm, sửa, xóa (CRUD) dữ liệu trong object**
//     - Có thể thêm, cập nhật, hoặc xóa thuộc tính bằng dấu chấm hoặc dấu ngoặc vuông.

//   - **Các phương thức thường dùng của object:**
//     - **A. `Object.keys()`** - Lấy tất cả key thành một mảng
//     - **B. `Object.values()`** - Lấy tất cả value thành một mảng
//     - **C. `Object.entries()`** - Lấy cả key và value thành từng cặp
//     - **D. `Object.hasOwn()`** - Kiểm tra key có phải là thuộc tính của chính object đó hay không

//   - **Cú pháp `Object.hasOwn()`:**
//     ```js
//     Object.hasOwn(tenObject, "tenKey");
//     ```

let config = {browser:"Chrome", timeout: 5000};
console.log(`Ban đầu ${config}`);// không in ra được khi sử dụng backstick bắt buộc dùng dấu,
console.log("Ban đầu", config);
config.timeout = 10000;
console.log("sau khi đã sữa timeout", config);

// thêm dữ liệu  (gọi tên key chưa tồn tại + giá trị)
config.isHeadless = true;
console.log("sau khi thêm isHeadless",config); 
// xóa dữ liệu
delete config.browser;
console.log("sau khi xóa browser",config );

// khi khai báo object là const vẫn thêm sửa xóa được ruột bên trong, 
// const chỉ cấm gán lại cả object bằng dấu bằng
const user3 = {ten: "neko"};
user3.ten = "meo";
console.log(user3);

//user3 = {ten: "meo"}; không gán bằng dấu =
//console.log(user3);
let spTiki = {id: "SP01", ten: "Bàn phím", gia: 50000};
let danhSachKey = Object.keys(spTiki); // gôm tất cả các key thành 1 mảng
console.log(danhSachKey);
console.log(danhSachKey.includes("gia"));

let danhSachValue = Object.values(spTiki); // gôm value thành 1 mảng
console.log(danhSachValue);
console.log(danhSachValue.includes("Bàn phím"));

let danhSachCap = Object.entries(spTiki); // Lấy cả key và value thành từng cặp
console.log(danhSachCap);
// [ [ 'id', 'SP01' ], [ 'ten', 'Bàn phím' ], [ 'gia', 50000 ] ]
console.log(danhSachCap[0]);
//[ 'id', 'SP01' ]
console.log(danhSachCap[0][1]);
//SP01

// kiểm tra key có phải của chính nó không
console.log(Object.hasOwn(spTiki,"id2"));

// 
// ## Array of Object

// - Cấu trúc này được bao bên ngoài bằng ngoặc vuông `[]`.
// - Bên trong mảng chứa các object, mỗi object được bao bằng ngoặc nhọn `{}`.

// Cách khai báo object trong mảng
let danhSachUser = [
    { ten: "Phuong", role: "admin"},
    { ten: "Tu", role: "guest"},
    { ten: "My", role: "user"},
];

let apiResponse = {
    userId: 9999,
    userName: "neko_auto",
    role: "admin",
    isActive: "yes",
};
// yêu cầu: dùng object.key để đếm xem API trả về bao nhiêu trường
// Dùng object.hasOWn() để kiểm tra 3 trường, userId,  mail, role
// kiểm tra giá trị isActive có đúng kiểu boolean hay không (dùng typeof) nếu sai kiểu in ra cảnh báo
// dùng object.values + includes để kiểm tra xem có giá trị nào admin hay không

console.log("Bài tập nhỏ..........");
let soTruong = Object.keys(apiResponse).length;
console.log(`Số trường API trả về ${soTruong}`);
console.log(`có userID, ${Object.hasOwn(apiResponse,"userId")}`);
console.log(`có mail, ${Object.hasOwn(apiResponse,"mail")}`);
console.log(`có role, ${Object.hasOwn(apiResponse,"role")}`);

//let isActive = "yes";
let isActiveCheck = typeof apiResponse.isActive;
if (isActiveCheck !=='boolean'){
    console.log("không đúng boolean kiểm tra lại nha");
}
else{
    console.log("đúng là boolean rồi nha ");
}
// if(typeof apiResponse.isActive !=='boolean'){
//     console.log("không đúng boolean kiểm tra lại nha");
// }
let hasAdmin = Object.values(apiResponse).includes("admin");
console.log("có chứa admin hay không",hasAdmin);


