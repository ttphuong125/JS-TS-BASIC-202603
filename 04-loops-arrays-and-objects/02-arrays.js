// Ví dụ về mảng
let sanPham = ["ÁoThun", "AoSoMi","MuLuoiTrai"];
console.log(sanPham[1]);
console.log(sanPham[2]);
console.log(sanPham[0]);

// length trả ra tổng số phần tử trong 1 mảng
// **A. `length`** - Đếm số lượng phần tử
//     - Cú pháp:
//       ```js
//       tenMang.length;
//       ```
//     - Trả ra `number` là tổng số phần tử trong mảng.
//     - Vì `index` bắt đầu từ `0`, nên phần tử cuối cùng luôn ở vị trí `length - 1`.
let ketQuaTimKiem = ["iphone 13", "iphone 20"];
console.log(ketQuaTimKiem.length);

//  push()`** - Thêm phần tử vào cuối mảng
//     - Cú pháp:
//       ```js
//       tenMang.push(giaTri);
//       ```
//     - Đầu ra: số lượng phần tử mới của mảng sau khi thêm
//     - Tác dụng phụ: mảng gốc bị thay đổi

let danhSachLoi = [];
danhSachLoi.push("Nút đăng nhập này không bấm được");// hêm phần tử vào cuối mảng
danhSachLoi.push("sai màu chữ ở footer");// thêm phần tử vào cuối mảng
console.log(danhSachLoi);

// `includes()`** - Kiểm tra phần tử có tồn tại hay không
//     - Cú pháp:
//       ```js
//       tenMang.includes(giaTri);
//       ```

let cacTrangThaiChoChoPhep = ["pending", "approved", "shipped"];
let trangThaiChoThucTe = "approved";
if(cacTrangThaiChoChoPhep.includes(trangThaiChoThucTe)){
    console.log("TEST PASS: Trạng thái hiện thị đúng logic");
}else{
    console.log("test fail");
}

// **D. `pop()`** - Rút phần tử cuối cùng ra ngoài
//     - Đầu ra: phần tử cuối cùng vừa bị rút ra
//     - Tác dụng phụ: mảng gốc bị thay đổi

let lichSuDuyetWeb = ["trang chủ", "sản phẩm", "giỏ hàng"]
let trangVuaThoat  = lichSuDuyetWeb.pop();
console.log(lichSuDuyetWeb);
console.log(trangVuaThoat);
//  - **E. `shift()`** - Rút phần tử đầu tiên ra ngoài

//   - **F. `unshift()`** - Thêm phần tử vào đầu mảng

//   - **G. `join()`** - Gộp tất cả phần tử thành một chuỗi
//     - Cú pháp:
//       ```js
//       tenMang.join(kiTuNoi);
//       ```
// - **H. `indexOf()`** - Trả ra `index` nếu tìm thấy, trả `-1` nếu không có

let hangChoHoTro = ["khách A", "Khách B", "Khách C"];
let khachHangDuocXuLy = hangChoHoTro.shift(); // rút ra phần từ đầu tiên
console.log(khachHangDuocXuLy);
console.log(hangChoHoTro);

let danhSachUuTien = ["Bug thường", "Bug giao diện"];
danhSachUuTien.unshift("bug siêu to khổng lồ"); // chèn vào đầu tiên mảng
console.log(danhSachUuTien);

let tags = ["automation", "playwrite", "javascript"];
let tagsString = tags.join(","); // gộp thành 1 chuỗi
console.log(tagsString);

let danhSachMenu = ["Home", "About", "Service"];
console.log(danhSachMenu.indexOf("About")); // lấy vị trí 1 phần tử trong mảng

// bài tập nhỏ
let gioHang = ["bàn phím cơ", "chuột gamin", "màn hình 27 inch", "tai nghe bluetooth"];
// yêu cầu: in ra tổng hố sản phẩm
console.log(`Tổng số sản phẩm : ${gioHang.length}`);
// in ra sản phẩm đầu tiên
console.log(`sản phẩm đầu tiên : ${gioHang.shift()}`);
// in ra sản phẩm cuối cùng
console.log(`Sản phẩm cuối cùng: ${gioHang.pop()}`);
// thêm 1 cái lót chuột vào cuối giỏ hàng
gioHang.push("lót chuột");
console.log(gioHang);

