// tài khoản và mật khẩu là tham số (phễu chờ sẵn)
function dangNhap(taiKhoan, matKhau){
    console.log(`Đăng nhập user ${taiKhoan}`);
    console.log(`Đăng nhập user ${matKhau}`);
    console.log(`Click button Login`);
}
console.log("TC01");
//Khởi động hàm và nhét nguyên liệu thật (đối số) vào:
dangNhap("adminNeko", "abc");
console.log("TC02");
dangNhap("adminNeko2", "abc2");

// ví dụ về return
function tinhTongTien(a,b){
    const result = a + b;
    //console.log(result);
    return result;
}
let tienThanhToan = tinhTongTien(100,2);
console.log(tienThanhToan);
// trong function return result -> trả giá trị ra bên ngoài -> tienThanhToan =

function laySoMayMan(){
    return 8;
}
let ketQua = laySoMayMan();

function layTenHienThi(){
    return "neKo";
}

let tenHienThiUI = layTenHienThi();
//console.log(tenHienThiUI);
function laAdult(tuoi){
    return tuoi >= 18;
}
console.log(laAdult(20));
console.log(laAdult(6));
function demoReturn(){
    console.log("bắt đầu");
    return "Xong";// gặp return là sẽ không chạy các dòng kế tiếp dừng luôn
    console.log("không in dòng này");
}
console.log(demoReturn());
// Bài tập nhỏ: 
// Yêu cầu viết 1 hàm là cleanPrice(rawString). Hàm này nhận vào 1 chuỗi giá tiền lấy từ UI
// ví dụ: " Gia: 25.000.000 VND   ". Hàm phải tự động dọn dẹp và return về 1 số number nguyên
// (ví dụ 25000000)
// nếu đầu vào là falsy thì trả về 0 luôn cho an toàn

// test case
//sp1 = "  Giá:  1.500.000   VND ";
//sp2 = "  Giá:  250.000   VND ";
//sp3 = "";
//output
//1500000
//250000
//0
//\D/g -> xóa hết ký tự không phải số, chỉ giữ lại các chữ số 0->9
function cleanPrice(rawString){
    if (!rawString) return 0;// phủ định của chuỗi có nghĩa là không phỉa là chuỗi bình thường thì trả về 0
    //let priceUI = rawString.replace(/\D/g, ""); // thay tất cả những gì không phải là số thành ""
    // cách khá đang học
    let priceUI = rawString.trim().replaceAll("Giá:", "").replaceAll(".","").replace("VND", "").trim();
    return Number(priceUI);
}
let sp1 = "  Giá:  1.500.000   VND ";
let sp2 = "  Giá:  250.000   VND ";
let sp3 = "";

console.log(cleanPrice(sp1));
console.log(cleanPrice(sp2));
console.log(cleanPrice(sp3));

// hoisting hỗ trợ việc sử dụng hàm trước rồi viết hàm sau ở bên dưới

console.log("--------- học về hoisting-----------");
xinChao(); // gọi hàm trước khi có hàm

function xinChao(){
    console.log("xin chào");
}
// hoisting function declaration
let loginStatus = checkLoginStatus();
console.log(loginStatus);

function checkLoginStatus(){
    return true;
}

// Function expression  <- ít dùng
// - Dùng `const` nên an toàn hơn, tránh khai báo lại hàm trùng tên.
// - Có thể gán vào biến và truyền vào hàm khác.
// - Có thể chọn hàm theo điều kiện.
//ví dụ
console.log("--------- vd về function expression");
const moiTruong = "staging";
const layUrl = moiTruong ==="staging" ? function()
{
    return "https://staging.neko.vn";
}
: function(){
    return "https://neko.vn";
};
console.log(layUrl());

// Arrow function (hàm mũi tên)
// - Không có từ khóa `function`, thay bằng dấu `=>`.
// - **Không hỗ trợ hoisting**.

// **Ưu điểm**

// - Cú pháp rất ngắn gọn.
// - Rất hay dùng khi viết callback như `.map()`, `.filter()`, `.forEach()`.
// - Không có `this` riêng, nên an toàn hơn trong các tình huống như `setTimeout()`.

// **Nhược điểm**

// - Không có hoisting.
// - Không có `this` riêng, cần lưu ý khi dùng trong object.
// - Khi debug, stack trace thường không rõ tên hàm bằng function declaration.

//VD về errow function
console.log("-------------- vd về errow function");

// const tinhTongExpression= function(a,b){
//     return a+b;
// }// Viết theo kiểu Expression function
// Viết lại theo kiểu errow function
//console.log(tinhTong(2,3));

const tinhTongErrow = (a,b) => {
    return a+b;
};
// viết ngắn gọn hơn
const tinhTongNganNhat = (a,b) => a+b;

console.log(tinhTongErrow(2,3));
console.log(tinhTongNganNhat(2,3));
// Ứng dụng các loại hàm
// cách dùng thực tế
// Method bên trong object
// VD:
const SanPham ={
    ten: "iphone 17",
    gia: 2000000,
    // cách 1: function expression kiểu cổ điển
    hienHienExpression: function(){
        console.log(`${this.ten} - ${this.gia} VND`);
    },
    // cách 2: để viết 1 hàm .method shorthand -> nên dùng cách này
    hienThiShortHand(){
        console.log(`${this.ten} - ${this.gia} VND`);
    },
    // cách 3:
    hienThiArrow : () =>{
        console.log(`${this.ten} - ${this.gia} VND`);
    },
};
SanPham.hienHienExpression();
SanPham.hienThiShortHand();
SanPham.hienThiArrow();

//Method trong object hay được sử dụng trong các TH
// 1 object có cả data lẫn hành vi. ví dụ 1 tên card có dữ liệu item và method getmemory() để miêu tả chi tiết

const cart = {
    item:3,
    getSummary(){
        return `Có ${this.item} sản phẩm`;
    },
};
console.log(cart.getSummary());
//B: Truyền hàm làm callback -> callback là truyền 1 hàm vào chỗ khác để nó được gọi sau
//-> arrow function là lựa chọn ưu tiên hàng dầu
const giaSanPham = [15000, 20000, 40000];
// declaration
function locGiaCao(gia) {
    return gia > 20000;
}
const ketQua1 = giaSanPham.filter(locGiaCao);
// expression
const ketqua2 = giaSanPham.filter(function (gia){
    return gia > 20000;
});
const ketQua3 = giaSanPham.filter((gia) => gia >20000);

// arrow hoàn toàn thay thế function expression ở rất nhiều code base
// cả hai đều dùng const và không có hoisting nhưng arrow thì ngắn hơn gấp bội
// nếu khai 2 hàm trùng tên, hàm khai báo sau sẽ ghi đè hàm trước
// VD
function guiThongBao(message)
{
    console.log(`${message}`);

}
function guiThongBao (message, userID){
    console.log(`${message}, ${userID}`);
}
guiThongBao("deploy xong");
guiThongBao("deploy xong", 101) 

// để giải quyết vấn đề này thì ta cần chỉnh lại như sau
function guiThongBao(message, target)
{
    if (typeof target === "number" ){
        console.log(`${message}, ${target}`);
        return;
    }
    console.log(`target không hợp lệ`);
}
guiThongBao("deploy xong");
guiThongBao("deploy xong", 101);
// đây là phong cách viết có nhiều cách gọi
// return ở đây giống như xử lý xong TH này rồi thì thoát hàm luôn
function timSo (arr){
    for(i = 0; i < arr.length; i++){
        if (arr[i] ===5){
            break;
        }
        console.log(arr[i]);
    }
    console.log("đã xong");
}

// break chỉ dừng for không kết thúc function ngay

function timSo2 (arr){
    for(i = 0; i < arr.length; i++){
        if (arr[i] ===5){
            return;
        }
        console.log(arr[i]);
    }
     console.log("đã xong");
}
// gặp 5 là kết thúc luôn cả hàm
timSo([1,2,3,4,5,6,7]);
timSo2([1,2,3,4,5,6,7]);

// default parameter
function dangNhap(user, pass, moiTruong = "staging"){
    console.log(`${moiTruong} đăng nhặp : ${user} - ${pass}` );
}
dangNhap("admin", "123456");
dangNhap("admin", "123456", "dev"); 
// lưu ý khi dùng default parameter chỉ sử dụng tốt khi tham số mặc định ở cuối, nếu tham số giữa bị thiếu
// bạn bắt buộc truyền undefine, null để giữ chỗ
// quy tắc nên đặt tham số default của cuối, nếu có nhiều hơn 3 tham số thì sẽ dùng option object (học sau)

// - **Rest parameter (`...args`)**
//   - Dùng khi muốn nhận bao nhiêu tham số cũng được.
//   - Dấu `...` sẽ gom tất cả tham số còn lại vào một mảng.

console.log("------------- rest parameter----------");
function tinhTongTien(...danhSachGia){
    // danh sách giá là một mảng
    let tong = 0;
    for (const gia of danhSachGia){
        tong += gia;
    }
    return tong;
}
console.log(tinhTongTien(100000));
console.log(tinhTongTien(1000, 2000, 3000, 4000));

console.log("------------- option object----------");
// nếu 1 hàm có nhiều hơn 3 tham số thì thay vì truyền các tham số lẻ tẻ dễ nhầm thứ tự
// -> gói tất cả vào 1 object 
// đây là pattern nâng cao hay sử dụng
// Hàm nhận vào duy nhất 1 object là options
// cach 1
function taoUser(options){
    // bóc tách ra từng biến riêng biệt
    const{ten, tuoi = 25, email, vaiTro = "Test"}= options;
    console.log(`${ten},${tuoi}, ${email}, ${vaiTro}`);
}
// cách 2
function taoUser2({ten, tuoi = 25, email, vaiTro = "Test"}) {
    // bóc tách ra từng biến riêng biệt
    console.log(`${ten},${tuoi}, ${email}, ${vaiTro}`);
}
// gọi hàm
taoUser2({
    ten: "neko",
    email: "neko@vn.com",
});
taoUser2({
    ten: "neko",
    tuoi: 100,
    email: "neko@vn.com",
});

//destruct: phân rã ra thành từng phần tử
const danhSach = ["admin", "123456", "staging"];
const [user, pass, moiTruong2] = ["admin", "123456", "staging"];
console.log(user);
console.log(pass);
console.log(moiTruong2);
// bỏ qua phần tử không cần
const[firstName, , city] = ["neko",25,"hanoi"];
console.log(firstName);
console.log(city);
// giá trị mặc định
const [a,b,c = "n/a"] = ["hello", "world"];
console.log(c);

// object destruct
//=> cú pháp gặp nhiều nhất  -> bóc tách thuộc tính object ra biến riêng bietj theo tên thuộc tính
// (không theo thứ tự như array)
const {status, body} = {status: 200, body: "ok", headers: {}};
console.log(status);
console.log(body);

// đổi tên biến
const {status: statusCode, body: noiDung } = {status: 200, body: "ok", headers: {}};
console.log(statusCode);
console.log(noiDung);

// giá trị mặc định + đổi tên
const {ten, tuoi = 18, vaiTro: role = "viewer"} = {ten:"neko"};

console.log(ten);
console.log(tuoi);
console.log(role);
// destruct trong tham số hàm
function hienThiUser ({ten, email, tuoi = 18}){
    console.log(`${ten}, ${email}, ${tuoi}`);
}
hienThiUser({ten: "Neko", emial: "a"});
const{ten: ten2, emial, tuoi: tuoi2 = 18} = {ten: "Neko", email: "a"};

// destruct lồng (nested)
const apiResponse = {
    data:{
        user: { name: "neko", mail: "neko@123"},
        token: "123",
    },
    status: 200,
};

// // khi chạy AT nhận được 1 danh sách KQ như sau
const testRuns =[
    [
        "login smoke",
        { browser: "    chromium    ", env: "  staging  "},
        "  PASS  ",
    ],
    [
        "checkout payment",
        { browser: "    firefox    ", env: "  prod  "},
        "  FAIL  ",
    ],
    [
        "login smoke",
        { browser: "    webkit    ", env: "  staging  "},
        "  PASS  ",
    ],
    [" ", { browser: "    chromfun   ", env: "    dev   "}, "   PASS "],
];
// // Viết 1 hàm taoBaoCaoTestRun(testRun) để dùng destruct để bóc tách array: gợi ý: const 
// // yêu cầu
// // dùng destructuring để bóc tách từng phần tử trong mảng
// // Gợi ý:
// // const [rawTestName, { browser, env}], rawStatus] = item
// // tương ứng:
// rawTesstName: tên test thô
// {browser, env } thông tin môi trường chạy
// rawStatus: Trạng thái test thô
// // Rule xử lý
// - Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó
// - nếu status không phải PASS hoặc FAIL tì tăng invalid và bỏ qua
// - nếu dữ liệu hợp lệ:
// + tạo chỗi theo định dạng: t -env
// + ví dụ: login smoke - chromium - staging
// + Nếu PASS thì đưa vào mảng passed
// + Nếu FAIL thì đưa vào mảng failed
// kết quả mong đợi
// Hàm cần trả về dữ liệu theo dạng:
// {
//     totalValid: 3,
//     invalid: 1,
//     passed: [
//         "login smoke - chromium - staging",
//         "search product - webkit - staging"
//     ],
//     failed: [
//         "checkout payment - firefox - prod"
//     ]
// }

function taoBaoCaoTestRun(testRuns){
    const passed = [];
    const failed = [];
    let invalid = 0;
    for (const item of testRuns){
        const[rawTesstName, {browser, env}, rawStatus] = item; // destructer
        const testName = rawTesstName.trim();
        const browserName = browser.trim();
        const evnName = env.trim();
        const status = rawStatus.trim().toUpperCase();
        if (testName === ""){
            invalid++
            continue;
        }
        if (status !== "PASS" && status !== "FAIL"){
            invalid ++;
            continue;
        }
        const reportItem =  `${testName} - ${browserName} - ${evnName}`;
        if (status === "PASS"){
            passed.push(reportItem);
        }else {
            failed.push(reportItem)
        }
    }
    return{
        totalValif: passed.length + failed.length,
        invalid: invalid,
        passed: passed,
        failed: failed,

    };
    
}
console.log(taoBaoCaoTestRun(testRuns));

// spread operator - sao chép và gộp mảng
const mangGoc = [1,2,3];
const mangSaoChep = [...mangGoc];//thực hiện sao chép từ mảng gốc
mangSaoChep.push(9999);
console.log(mangSaoChep);
// gộp 2 mảng thành 1 mảng
const mang1 = ["A", "B"];
const mang2 = ["C", "D"];
const mangGop = [...mang1,...mang2];
console.log(mangGop);
// chèn phần tử vào giữa
// [0,...4,5]
const mangMoi = [0,...mangGoc,4,5]; // chèn thêm mảng gốc là 1,2,3 vào mản mới để được 0,1,2,3,4,5
console.log(mangMoi);
// spread với object - sao chép và ghi đè
const configMacDinh = {
    baseUrl: "https://staging.neko.vn",
    timeout: 30000,
    headless: true,
    retries: 2,
};
const configProd = {
    ...configMacDinh, // thực hiện coppy configMac Dinh và thay đổi 2 giá trị trong mảng
    baseUrl: "https://neko.vn",
    retries: 0,
};
console.log(configProd);
const configDebug = {...configMacDinh, headless:false}; // coppy và thay đổi giá trị headless

//Toán tử spread trong tham số hàm
const danhSachGia = [10000, 20000, 30000];
//const giaMax = Math.max(danhSachGia); nếu viết như vậy thì hàm max sẽ không hiểu thì max chỉ nhận giá trị đơn
// nên phải sử dụng spread để giả phẳng(tách từng phần tử) các phần tử trong màng thành các đối số riêng lẻ
// rồi truyền vào hàm Math.max()
const giaMax = Math.max(...danhSachGia);  // tương tự như viết như sau const giaMax = Math.max(10000,200000,30000)
console.log(giaMax);

