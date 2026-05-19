// // bai 1
// // Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// // Dữ liệu đầu vào:

// // Giá gốc (Lấy từ UI - String): " 1.000.000 đ "
// // Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// // Giá sau giảm (Lấy từ UI - String): " 800.000 đ "
// // Yêu cầu: Viết code để:

// // Làm sạch và chuyển đổi Giá gốc về Number.
// // Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100.

let giaGocUI = " 1.000.000 đ ";
// let giaGocStr = giaGoc.trim().replace("đ", "").trim();// lam sach dua ve chuoi 1.000.000
// let giaGocNumber = giaGocStr.replaceAll(".", "");
// let giaGocFinal = Number(giaGocNumber);

// Viết lại cho gọn hơn
let giaGoc = Number(giaGocUI.trim().replaceAll(".","").replace("đ", "").trim());
let giaSauGiam = giaGoc*(100-20)/100;
//console.log(giaSauGiam);
//Nếu muốn sát hơn với bối cảnh test automation, có thể làm sạch thêm giá sau giảm từ UI 
// rồi so sánh actual với expected.
let giaSauGiamUI = Number(" 800.000 đ ".replace(".", "").replace("đ", "").trim());
console.log(giaSauGiam === giaSauGiamUI); // kiểm tra giá tính đúng với giá ghi trên UI

// bài 2
// Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web,
//  nhưng dữ liệu trả về rất “bẩn” (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).

// Nhiệm vụ của bạn là làm sạch chúng, tính toán tổng tiền, và in ra một cái Hóa đơn (Receipt) chuẩn chỉnh.

// Dữ liệu đầu vào
// let tenSanPham = "   macbook pro m3   ";
// let giaGoc = "Price: 30,000,000 vnđ";
// let soLuong = "Sl: 2 máy";
// let maGiamGia = "DISCOUNT CODE: 10% OFF";
// Bạn phải viết code xử lý để khi chạy console.log, màn hình hiện ra y hệt như sau:
//
// HÓA ĐƠN THANH TOÁN - ID:#0002		
// Sản phẩm: MACBOOK PRO M3		
// Đơn giá: 30000000		
// Số lượng: 2		
// Tổng tiền (Gốc): 60000000		
// Giảm giá: 10%		
// THÀNH TIỀN: 54.000.000 VNĐ

let tenSanPham = "   macbook pro m3   ";
let giaGoc1 = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

// let TenSanPhamStr =tenSanPham.trim();
// let TenSanPhamFinal = TenSanPhamStr.toUpperCase();
// sửa lại cho gọn hơn
let TenSanPhamFinal = tenSanPham.trim().toUpperCase().trim();
//Góp ý: Cách cắt chuỗi này ra đúng với data hiện tại, nhưng đang phụ thuộc vị trí cứng `18`.
// Gợi ý: Nên dùng replace + trim hoặc indexOf để linh hoạt hơn khi dữ liệu thay đổi. 
//let donGiaSo = giaGoc1.substring(giaGoc1.indexOf(":")+2, 18);
//let donGiaFinal = donGiaSo.replaceAll(",", "");
// Viết lại theo như hướng dẫn:
let giaGocFinal = Number(giaGoc1.toLowerCase().replaceAll(",","").replace("vnđ","").replace("price:", "").trim());
let soLuongFinal = Number(soLuong.toLowerCase().replace("sl:", "").replace("máy", "").trim());
//let soLuongFinal = soLuong.substring(soLuong.indexOf(":")+2,5)
//let maGiamGiaFinal = maGiamGia.substring(maGiamGia.indexOf(":")+2,18);
// cach khac de lay ma giam gia 10% bang cach replace
//let maGiamGiaFinal = Number(maGiamGia.replace("DISCOUNT CODE:", "").replace("% OFF", ""));
// cach khac dung indexOF

let phanTramGiamGia = Number(maGiamGia.slice(maGiamGia.indexOf(":")+ 2, maGiamGia.indexOf("%")));
// console.log(maGiamGia.indexOf(":"));
// console.log(maGiamGia.indexOf("%"));
// console.log(maGiamGiaFinal);


//let donGiaNumber = Number(donGiaFinal);
//let soLuongNumber = Number(soLuongFinal);
let tongTienGoc = giaGocFinal * soLuongFinal;
// tinh thanh tien
//let thanhTien = tongTien*(100-10)/100;
//54000000
let thanhTien = tongTienGoc*(100- phanTramGiamGia)/100;
let display = thanhTien.toLocaleString("vi-VN");// đổi đơn vị tiền tệ VN

console.log("HÓA ĐƠN THANH TOÁN - ID:#0002");
console.log(`Sản phẩm: ${TenSanPhamFinal}`);
console.log(`Đơn giá: ${giaGocFinal}`);
console.log(`Số lượng: ${soLuongFinal}`);
console.log(`Tổng tiền (Gốc): ${tongTienGoc}`);
console.log(`Giảm giá: ${phanTramGiamGia}%`);
console.log(`THÀNH TIỀN:${display} VNĐ`);

