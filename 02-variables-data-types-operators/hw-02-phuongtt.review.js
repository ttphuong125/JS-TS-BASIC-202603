// // bai 1
// // Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// // Dữ liệu đầu vào:

// // Giá gốc (Lấy từ UI - String): " 1.000.000 đ "
// // Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// // Giá sau giảm (Lấy từ UI - String): " 800.000 đ "
// // Yêu cầu: Viết code để:

// // Làm sạch và chuyển đổi Giá gốc về Number.
// // Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100.

// Lưu ý: Dữ liệu này đang thiếu khoảng trắng đầu/cuối so với đề gốc, nhưng không ảnh hưởng kết quả.
let giaGoc = " 1.000.000 đ ";

// Đúng: Tách từng bước làm sạch chuỗi rồi mới ép Number là cách dễ đọc cho người mới.
// Góp ý: Nếu muốn bám sát đề hơn, nên thêm `.trim()` để vẫn an toàn khi input có khoảng trắng đầu/cuối.
// Gợi ý:
// let giaGocStr = giaGoc.trim().replace("đ", "").trim();
let giaGocStr = giaGoc.replace(" đ", ""); // lam sach dua ve chuoi 1.000.000

// Đúng: replaceAll(".", "") để bỏ dấu phân cách nghìn là chuẩn.
let giaGocNumber = giaGocStr.replaceAll(".", "");

// Đúng: Ép kiểu sang Number đúng yêu cầu bài.
let giaGocFinal = Number(giaGocNumber);

// Đúng: Công thức tính giá sau giảm đúng, ra 800000 với dữ liệu hiện tại.
let giaSauGiam = (giaGocFinal * (100 - 20)) / 100;

// Đúng: Output hiện tại ra đúng kết quả mong đợi là 800000.
// Góp ý: Nếu muốn sát hơn với bối cảnh test automation, có thể làm sạch thêm giá sau giảm từ UI rồi so sánh actual với expected.
// Gợi ý:
// let giaSauGiamUI = Number("800.000 đ".replace("đ", "").replaceAll(".", "").trim());
// console.log(giaSauGiam === giaSauGiamUI);
console.log(giaSauGiam);

// ===================================================
// TỔNG HỢP REVIEW — BÀI 1
// ===================================================
// Kết quả: Đạt — Đã làm sạch giá gốc đúng và tính ra đúng kết quả 800000.
//
// Điểm tốt:
//   - Chia rõ các bước xử lý chuỗi rồi mới ép kiểu, rất dễ theo dõi.
//   - Công thức giảm giá đúng với yêu cầu đề bài.
//
// Cần cải thiện:
//   - Nên thêm `.trim()` để bám sát dữ liệu đề gốc có khoảng trắng đầu/cuối.
//   - Nếu muốn sát bối cảnh test automation hơn, có thể xử lý thêm giá UI sau giảm để so sánh expected và actual.
// ===================================================

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

// Đúng: Khai báo đủ 4 biến đầu vào của đề.
let tenSanPham = "   macbook pro m3   ";
let giaGoc1 = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

// Đúng: trim() + toUpperCase() xử lý tên sản phẩm ra đúng "MACBOOK PRO M3".
let TenSanPhamStr = tenSanPham.trim();
let TenSanPhamFinal = TenSanPhamStr.toUpperCase();

// Góp ý: Cách cắt chuỗi này ra đúng với data hiện tại, nhưng đang phụ thuộc vị trí cứng `18`.
// Gợi ý: Nên dùng replace + trim hoặc indexOf để linh hoạt hơn khi dữ liệu thay đổi.
// Gợi ý:
// let donGiaFinal = giaGoc1
//   .toLowerCase()
//   .replace("price:", "")
//   .replace("vnđ", "")
//   .replaceAll(",", "")
//   .trim();
let donGiaSo = giaGoc1.substring(giaGoc1.indexOf(":") + 2, 18);

// Góp ý: Sau replaceAll vẫn còn khoảng trắng cuối, nên `.trim()` thêm để output sạch hơn.
// Gợi ý:
// let donGiaFinal = donGiaSo.replaceAll(",", "").trim();
let donGiaFinal = donGiaSo.replaceAll(",", "");

// Góp ý: `substring(..., 5)` đang hardcode lấy 1 ký tự số lượng, chỉ ổn khi số lượng là 1 chữ số.
// Gợi ý:
// let soLuongFinal = soLuong
//   .toLowerCase()
//   .replace("sl:", "")
//   .replace("máy", "")
//   .trim();
let soLuongFinal = soLuong.substring(soLuong.indexOf(":") + 2, 5);

// Góp ý: Dòng này đang lấy đúng "10%" với data hiện tại, nhưng vẫn là cắt cứng vị trí `18`.
// Gợi ý:
// let maGiamGiaFinal = maGiamGia.slice(maGiamGia.indexOf(":") + 2, maGiamGia.indexOf("%") + 1);
let maGiamGiaFinal = maGiamGia.substring(maGiamGia.indexOf(":") + 2, 18);

//let donGiaNumber = Number(donGiaFinal);
//let soLuongNumber = Number(soLuongFinal);

// Đúng: Tổng tiền gốc tính đúng 30000000 * 2 = 60000000.
let tongTien = Number(donGiaFinal) * Number(soLuongFinal);

// tinh thanh tien
//let thanhTien = tongTien*(100-10)/100;
//54000000

// SAI: `thanhTien` đang bị hardcode thành chuỗi "54000000".
// Giải thích: Với bộ data hiện tại vẫn in đúng, nhưng chỉ cần đổi số lượng hoặc % giảm là sai ngay.
// Gợi ý:
// let phanTramGiam = parseInt(maGiamGiaFinal);
// let thanhTien = tongTien * (100 - phanTramGiam) / 100;
const thanhTien = "54000000";

// Góp ý: Cách format bằng slice hoạt động với số 54000000 hiện tại, nhưng nên format từ biến tính toán thật ở trên.
// Gợi ý:
// let display = thanhTien.toLocaleString("vi-VN");
let display = `${thanhTien.slice(0, -6)}.${thanhTien.slice(-6, -3)}.${thanhTien.slice(-3)}`;

// Đúng: Dòng tiêu đề hóa đơn khớp đề.
console.log("HÓA ĐƠN THANH TOÁN - ID:#0002");

// Đúng: Tên sản phẩm in đúng.
console.log(`Sản phẩm: ${TenSanPhamFinal}`);

// SAI: Dòng này đang lệch format đề ở 2 chỗ:
//   - "Đơn Giá" nên là "Đơn giá"
//   - thiếu dấu `:`
// Gợi ý:
// console.log(`Đơn giá: ${Number(donGiaFinal.trim())}`);
console.log(`Đơn Giá ${donGiaFinal}`);

// Đúng: Số lượng in ra đúng là 2.
console.log(`Số lượng: ${soLuongFinal}`);

// Đúng: Tổng tiền gốc in đúng.
console.log(`Tổng tiền (Gốc): ${tongTien}`);

// Đúng: Dòng giảm giá đang ra "10%" đúng với dữ liệu hiện tại.
console.log(`Giảm giá: ${maGiamGiaFinal}`);

// SAI: Cuối dòng đang in `VND` thay vì `VNĐ`.
// Gợi ý:
// console.log(`THÀNH TIỀN: ${display} VNĐ`);
console.log(`THÀNH TIỀN: ${display} VND`);

// ===================================================
// TỔNG HỢP REVIEW — BÀI 2
// ===================================================
// Kết quả: Cần sửa — Đã làm đúng hướng phần làm sạch dữ liệu và tính tổng gốc, nhưng `thanhTien` đang hardcode và output còn lệch format đề.
//
// Điểm tốt:
//   - Xử lý đúng tên sản phẩm sang chữ hoa.
//   - Tính đúng tổng tiền gốc 60000000 với dữ liệu hiện tại.
//   - Dòng giảm giá hiện ra đúng `10%`.
//
// Cần cải thiện:
//   - Cần tính `thanhTien` từ dữ liệu đã xử lý, không hardcode `"54000000"`.
//   - Cần sửa output `Đơn giá:` cho đúng chữ và đúng dấu `:`.
//   - Cần đổi `VND` thành `VNĐ`.
//   - Nên tránh `substring(..., 18)` và `substring(..., 5)` vì đây là cắt cứng theo vị trí, dễ sai khi dữ liệu đổi.
// ===================================================
