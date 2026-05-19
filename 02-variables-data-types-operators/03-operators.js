// Toán tử (operator)
// phép cộng: (+)
// đây là phép toán nguy hiểm nhất vì có tính chất lưỡng cực
// nếu cả 2 là số => làm phép toán (10+5 = 15);
// nếu 1 trong 2 là chuỗi => keo dán ("10" + 5 => 105)
console.log(10 + 5);
console.log (Number("10")+ 5);
// phép trừ: (-)
// javascript luon co gang ep kieu chuoi thanh so khi gap dau trừ
// tương tự cho phép nhân và chia
console.log("10" - 5); // tu dong hieu 10 la só
console.log('10'/5);
console.log('10'*5);
// phép chia lấy dư
// trả về phần dư của phép chia Vd: 10 %3 = 1 (vì 10 chia 3 dư 1)
// 10 % 2 = 0 (vì 10 chia 2 dư 0)
// dùng để check các số là chẵn  hay lẻ

// Toán tử gán
// dùng dấu =
// quy tắc từ phải sang trái
// let diemSo = 10 // gán 10 vào biến số diemSo
// diemSo = diemSo + 5
// // B1: Tính bên phải trước (10+5 = 15)
// // B2: gán 15 ngược lại vào biến diemSo

// toan tu rut gon
// 1: x = 1
// 2: x+= 1 => x= x+1
// 3: x-= 1 => x= x-1
// 4: x*= 1 => x= x*1

let tongTien = 0;
const giaAo = 250000;
// tongTien = 0+250000
tongTien += giaAo;
const giaQuan = 300000;
tongTien += giaQuan;
console.log(`Tổng hoa đơn : ${tongTien}`);

// Toán tử so sánh
// >,<, >=, <=
let passwordLength = 5;
let isPassworldValid1 = passwordLength >=8;
console.log(isPassworldValid1);

// Bằng nhau == vs bằng nhau tuyệt đối ===
//ĐỒNG NHẤT về cùng 1 kểu dữ liệu
//1: toán tử ==: so sánh lỏng lẻo
// Nó chỉ quan tâm đến giá trị, không quan tâm đến kiểu dữ liệu
//nên nếu kiểu dữ liệu khác nhau, nó sẽ tự ép kiểu cố gắng cho chúng bằng nhau
// 100% sư dụng
// Toán tử === so sánh nghiêm ngặt : Nó kiểm tra cả giá trị lẫn kiểu dữ liệu
console.log(10 == "10");
console.log(0 == false);

console.log(10 === "10");
console.log(0 === false);

// Toán từ logic
//  **Phép VÀ (`&&` - logical AND)**
//   - **Quy tắc:** chỉ trả về `true` khi **tất cả** điều kiện đều là `true`.
//   - Chỉ cần có **1** điều kiện là `false` thì kết quả là `false`.

// - **Phép HOẶC (`||` - logical OR)**
//   - **Quy tắc:** trả về `true` nếu có **ít nhất 1** điều kiện là `true`.
//   - Chỉ trả về `false` khi **tất cả** điều kiện đều là `false`.

// - **Phép PHỦ ĐỊNH (`!` - logical NOT)**
//   - **Quy tắc:** đảo ngược giá trị boolean.
//   - `true` thành `false`, và `false` thành `true`.
let isEmailCorrect = true;
let isPassworldEmailCorrect = false;
let CanLogin = isEmailCorrect && isPassworldEmailCorrect
console.log(CanLogin);

// nhap sai ten
let searchByName = false;
let searchBySKU = true;
let isProductFound = searchByName || searchBySKU
console.log(`tim thay san pham ${isProductFound}`);

// mình cần test 1 chức năng đăng ký tài khoản, nút đăng ký chỉ sáng lên (enable) khi thỏa mãn đồng thời 3 điều kiện
//1. tuổi người dùng phải từ 18 tuổi trở lên
//2. mật khẩu phải có đúng 8 ký tự
// checkbox đồng ý phải được tích
let userAge = 20;
let passwordInput = "Neko1234"
let isTermAccept = true;
/// yêu cầu
//1 tạo biến isAgeValid để kiểm tra tuổi >= 18 hay không
//2 tạo biến isPasswordValid kiểm tra mk có đúng 8 ký tự hay không
// Kết hợp toàn bộ điều kiện để tạo biến isSubmitButtonEnabled
// in ra console log
let isAgeValid = userAge >= 18; //kiem tra tuoi co >= 18 khong TH này trả về false
let isPasswordValid = passwordInput.length === 8;
let isSubmitButtonEnabled = isAgeValid && isPasswordValid && isTermAccept
console.log(`Button Submit is enable: ${isSubmitButtonEnabled}`); 

// **Toán tử tăng/giảm (`prefix` và `postfix`)**
//   - `i++` (`postfix`): trả về giá trị cũ của `i`, rồi **sau đó** mới tăng `i` lên `1`.
//   - `++i` (`prefix`): tăng `i` lên `1` trước, rồi mới trả về giá trị mới.
//   - `i--`
//   - `--i`

// - **Luôn tự đặt ra 2 câu hỏi**
//   - Giá trị của **cả biểu thức** `i++` hoặc `++i` là gì?
//   - Giá trị cuối cùng của biến `i` sau khi dòng code chạy là gì?

// - **Những nơi toán tử này có thể được nhét vào**
//   - Phép gán: `let y = i++`
//   - Phép tính: `let total = ++i * 2`
//   - Hàm: `console.log(i++)`
//   - Điều kiện: `if (i++ > 5)`

//postfix
let a = 5;
let ketQua = a++;
// ketQua = 5 vì trả về kết quả cũ là 5 sau đó a mới tăng 1
console.log(ketQua);
// a = 6 vì lúc này đã tăng 1
console.log(a);

//prefix
let b = 5;
let ketQua2 = ++b;
console.log(ketQua2);// ket qua = 6 vi tang b trc roi moi tra ve gia tri mới
console.log(b); // = 6 vi gia tri nay da tang 

let i = 3;
let resultPostFix = i*2;
++i;
console.log(resultPostFix);
console.log(i);

// ví dụ : mình đang test logic retry của nút submit
// 1 bạn mới trong team viêt đoạn code sau để vừa log và giảm / tăng số lần thử

// let reTries = 2;
// let firstLog = reTries++;
// let sencondLog = ++reTries;
// let canRetry = reTries-- >3;
// đoán kết quả firstLog = 2 vì là postfix gán giá trị cũ rồi tăng lúc này = 2 và retries = 3
//secondlog = 4 vì đang là 3 tăng trc rồi mới trả về giá trị
// canRetry = true vì lúc này là posfix gán trước mới trừ nên gán = 4 rồi trừ nên là 4 > 3 => true
// retries = 3

// Viết lại minh bạch hơn
let reTries = 2
let firstLog = reTries;
reTries++;
++ reTries;
let secondLog = reTries;

let canRetry  = reTries > 3 ; 
reTries--

console.log('ket qua cuoi ');

console.log(firstLog);
console.log(secondLog);
console.log(canRetry);
console.log(reTries);

// bai tập: 
// mình có 1 promotion -> rule: KH >18 tuổi và là thành viên VIP, thì được giảm 30% giá vé, ngược lại giũ nguyên

let rawAge = "25 tuổi";
let rawIsVip = "true";
let rawTicketPrice = "   500.000 đ";
// 1. yêu cầu làm sạch và ép kiểu
// 2: kiểm tra điều kiện. Nếu đủ tính giá sau giảm 30% -> nếu không giữ nguyên
//3. in kết quả

console.log('lam bai tap 3');

console.log('cách tự làm');

//let age = Number(rawAge.substring(0,2));
let age = Number(rawAge.trim().replace("tuổi",""));
let ticketPrice = Number(rawTicketPrice.replace(".","").replace("đ","").trim());
let priceOfVip = ticketPrice * (100 - 30 )/100;
let isVip = rawIsVip.trim() ==="true";

if (age > 18 && isVip) {
    console.log(`gia sau giảm của VIP: ${priceOfVip}`);
} else {
    console.log(ticketPrice);
}
















