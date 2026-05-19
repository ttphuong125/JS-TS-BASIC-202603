 // Ví dụ về vòng lặp while
 // Quy tắc khi sử dụng là không biết số lần gặp chỉ biết điều kiện dừng
 // VD: chưa buồn ngủ thì sẽ xem phim, chừng nào buồn ngủ thì tắt.
 let miengThit = 5;
 while (miengThit > 0){
    console.log(`đang ăn ... ${miengThit}`);
    miengThit--;
 }
 console.log("Đã ăn hết no bụng rồi");

 // Trong AT có cơ chết retry - thử lại tối da n lần
 // Viết code tìm nút thanh toán, có 1 giây tìm 1 lần, tìm tối đa 5 lần, nếu thấy thì dừng nếu quá 5 lần thì báo lỗi
 let maxRetry = 5;// số lần tối đa retry
 let currentRetry = 1; // lần thử hiện tại
 let isFound = false;// trạng thái tìm thấy nut
 while(isFound === false && currentRetry <= maxRetry){
    console.log("đang tìm nút thanh toán trên màn hình");
    let toolGiaLap = Math.random();
    let searchResult = toolGiaLap > 0.7;
    console.log(`Search result : ${toolGiaLap}`);
    if (searchResult === true){
        isFound = true;
        console.log("Đã tìm thấy nút thanh toán");
    }
    else{
        console.log("không tìm thấy nút thanh toán");
        currentRetry++;
    }
 }
// Bài tập nhỏ:
// có 1 hệ thống đăng nhập, sẽ có rule là hệ thống cho phép nhập sai mật khẩu tối đa 3 lần, 
// nếu nhập đúng trước khi hết lượt thì hiển thị đăng nhập thành công, nếu sai thì khóa tài khoản
let matKhauDung = "1234";
let maxLanThu = 3;
// yêu cầu 
// 1: dùng while để mô phỏng quá trình nhập mật khẩu (tối đa 3 lần)
//2: ở mỗi lần nhập giải lập người dùng nhập mật khẩu bằng cách gán cứng giá trị cho biến
// matKhauNhap = "0000",matKhauNhap = "9999"(dùng if else)
// nếu nhập đúng in ra "đăng nhập thành công"
// nếu nhập sai in ra "sai mật khẩu"
// check sau khi thoát vòng lập kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra tài khoản bị khóa

let matKhauNhap;
let lanThuHienTai;
let isCorrectPassworld  = false;
while(maxLanThu < 3) {
    if(lanThuHienTai ===1){
    matKhauNhap = "0000";
    }
    else if (lanThuHienTai ===2){
        matKhauNhap = "9999";
    }
    else if (lanThuHienTai ===3){
        matKhauNhap = "1234";
    }
}

