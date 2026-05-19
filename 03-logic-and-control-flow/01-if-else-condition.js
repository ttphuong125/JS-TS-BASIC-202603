
 let passworld = '123'
 if(passworld.length >=6 ){
    console.log("passworld hợp lệ");
}
else{
    console.log('passworld không hợp lệ');
}

// Ví dụ khác
// let age = 20;
// let hasTicket = true;
// if(age > 18 && hasTicket) {
//     console.log('được vào xem phim');
// }

// cách viết tách ra thành 1 biến
let age = 20;
let hasTicket = true;
let canEnterCinema = age >= 18 && hasTicket; // khai báo 1 biến nên làm khi có nhiều điều kiện
if(canEnterCinema){
    console.log('đủ điều kiện vào cổng');
    
}
let score = 95;
if(score >= 50){
    console.log('đậu');
}
else if (score>= 90){
    console.log("bạn là học sinh xuất sắc");
}
else if (score >= 80 && score < 90 ){
    console.log('bạn là học sinh gioi');
}
//Úng dụng cho AT
let statusCode = 500;
if(statusCode === 200){
    console.log('API hoạt động OK');
}
else if(statusCode === 400){
    console.log('lỗi dữ liệu gửi lên bad request');
}
else if (statusCode === 404){
    console.log('Không tìm thầy đường dẫn, not found');
}
// khi tất cả các TH trên đều sai
else{
    console.log('server đang gặp lỗi');
}
    
// Bài tập nhỏ
let loginStatus = "locked";
// 1: Nếu loginStatus ==='sucess' -> in 'test pass: login thành công'
// 2: Nếu loginStatus ==='locked' -> in 'tài khoản bị khóa'
// 3: Các TH còn lại -> 'test fail : login thất bại'
if (loginStatus === "sucess"){
    console.log('test pass: Login thành công');
}
else if (loginStatus ==="locked"){
    console.log('tài khoản bị khóa');
}
else{
    console.log('Login thất bại');
}
 // Ví dụ về toán tử 3 ngôi


 let diem = 8;
//  let trangThai;
//  if(diem>= 5){
//     trangThai= "PASS";
//     console.log(trangThai);
    
//  }
//  else{
//     trangThai = "FAIL";
//     console.log(trangThai);
//  }
 // Viết tắt theo kiểu toán tử 3 ngôi theo syc tax sau
//let bien = dieuKien ? giaTriNeuDung : giaTriNeuSai;
let trangThai = diem >= 5 ? "PASS" : "FAIL";
console.log(trangThai);

// các trường hợp sử dụng toán tử 3 ngôi

// TH1: gán text
let isSaving = true;
let buttonText = isSaving ? "Đang lưu" : "Lưu";

// TH2: chọn config
let isCI = false;
let reportMode = isCI ? "html" : "list";

// hiển thị nhãn

let hasBug = true;
let statusLable = hasBug ? "Có Bug" : "Ổn" ;

// Bài tập nhỏ: 

console.log("kết quả bài tập nhỏ");
let failedTests = 2;
let suiteStatus;
//let suiteStatus === 0 ? "PASS" : failedTests <= 2 ? "WARRNING" : "FAIL";
// YÊU CẦU: Viết lại đoạn code trên bằng if / eles if/ else
if(failedTests === 0){
    suiteStatus = "PASS";
    //console.log(suiteStatus);
}
else if(failedTests >= 2){
    suiteStatus = "WARRNING";
    //console.log(suiteStatus);
}
else {
    suiteStatus = "FAIL";
    //console.log(suiteStatus);
}
console.log(suiteStatus)

// tìm hiểu về truthy và falthy
// VD: dữ liệu lấy từ web ("", hoặc "http://github.com...")
// VD này để xử lý test khi user không truyền vào dữ liệu texbox
// let githhublink = "";
// if (githhublink !== "" && githhublink !== null && githhublink !== undefined ){
//     console.log("user đã upload lên githublink");
// }
// else{
//     console.log("user chưa upload");
// }


//cách 2 viết bằng truthy và fasthy
// 6 giá trị falsy trong JavaScript
// - `false`
// - `0`
// - `""` (chuỗi rỗng)
// - `null`
// - `undefined`
// - `NaN`
// rơi vào 6 case này thì sẽ không bao giờ nhảy vào if 
console.log("sử dụng truthy và fasthy");
let githhublink = "";
if(githhublink){
    console.log("user đã upload lên githublink");
}
else{
    console.log("user chưa upload");
}

let rawUserName = "   ";

// cần check xem là rawUserName có hợp lệ hay không nếu rỗng là không hợp lệ và ngược lại
// viết câu điều kiện để check xem
//let userName = rawUserName.trim();
if (rawUserName.trim()){
    console.log("bạn đã điền username hợp lệ");
}
else{
    console.log("username không hợp lệ");
}

// Học switch, case
// lưu ý nếu không có break thì sẽ chạy tất cả các case mà ko cần kiểm tra điều kiện

let role = "editor";
switch(role){
    case "admin":
    console.log("Cấp quyền truy cập vào toàn bộ hệ thống");
    break;
    case "editor":
    console.log("Cấp quyền chỉnh sửa");
    break;
    case "viewer":
    console.log("chỉ được xem, không được chỉnh sửa");
    break;
default:
    console.log("lỗi role không hợp lệ");
} 

// VD về gom nhóm trong switch case
let browserName = "chrome";
switch(browserName){
    case "chrome":
    case "edge":
        // gom nhóm
        console.log("khởi động driver");
        break;
default:
    console.log(browserName);
}
