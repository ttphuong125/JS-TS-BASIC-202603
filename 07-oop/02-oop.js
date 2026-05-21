// class cha
class BasePage {
    header = '#thanhMenuTrenCung';
    bamNutTrangChu(){
        console.log(`đã click nút home trên thanh ${this.header}`);
    }
    chupManHinh(tenFile){
        console.log(`Đã chụp màn hình và lưu thành ${tenFile}.png`);
    }
}
// class con 
class LoginPage extends BasePage{
    NutDangNhap = "#LoginButton";
    dienMatKhau(){
        console.log("Đã điền mật khẩu");
        this.chupManHinh("Sau khi điền pass");
    }
}
let trangDangNhap = new LoginPage();
trangDangNhap.bamNutTrangChu();
trangDangNhap.dienMatKhau();

// super
// TH1: không cần chuyền gì cũng không cần viết constructor ở con
// khi cha không cần gữ liệu bên ngoài hoạc cha có constructor()nhưng không nhận tham số
// con thường ko cần viết gì nữa
//TH2 con truyền giá trị cố định lên cho cha
class BasePage2 {
    url = "";
    constructor(url){
        this.url = url;
    }
    moTrang(){
        console.log(`mở trang ${this.url}`);
    }
    
}
// class con 
class LoginPage2 extends BasePage2{
    constructor(){
        super("/login");// con phải truyền biến cho cha biết
    }
}
let login = new LoginPage2();
login.moTrang();

// TH3: Con nhận tham số và truyền tham số lên cho cha
class BasePage3 {
    url = "";
    constructor(url){
        this.url = url;
    }
    moTrang(){
        console.log(`mở trang ${this.url}`);
    }
    
}
// class con 
class LoginPage3 extends BasePage3{
  
    constructor(url){
        super(url);// con phải truyền biến cho cha biết
    }
}
let login3 = new LoginPage3("/login");
login3.moTrang();

class BasePage4 {
    chupManHinh(url) {
        console.log(`chụp màn hình ${url}`);
    }
}
class MobilePage extends BasePage4 {
    // ghi đè hoàn toàn lên cha override
    chupManHinh(tenfile){
        console.log(`chụp nguyên trang mobile ${tenfile}`);
    }
}
let mobile = new MobilePage();
mobile.chupManHinh("123");
// extend : giữ nguyên hàm cha thêm logic gọi supper.tenham()
class SreenPage extends BasePage4{
    // gọi hàm gốc của cha trước
    chupManHinh(tenFile){
    super.chupManHinh(tenFile);
    //thêm logic riêng của con
        console.log(`Chụp nguyên trang Screen ${tenFile}`);
    }
}
let screenTest = new SreenPage();
screenTest.chupManHinh("lỗi đăng nhập");
// Bai tập; gom báo cáo test bằng kế thừa
// tạo class baseSuite nhận tenSuite làm tham số
// baseSuite có method inTieuDe() in ra trên suite
// baseSuite có method inKetQua(danhsachCase) dùng for of và destructoring
// tạo LoginSuite extends BaseSuite.
// LoginSuite extends inTieuDe() rồi in thêm "trang kiểm thử/login"
// Data test
console.log("------ Bài tập nhỏ---");
let LoginCase = [
    {ten: "Đăng nhập đúng tài khoản", trangThai: "passed", thoiGian:12000},
    {ten: "Sai mật khẩu", trangThai: "failed", thoiGian:5000},
    {ten: "Email rỗng", trangThai: "passed", thoiGian:8000},
];
class BaseSuite {
  tenSuite = "";
    constructor(tenSuite){
        this.tenSuite = tenSuite;
    }
    inTieuDe(){
        console.log(`tên Suite: ${this.tenSuite}`);
    } 
    inKetQua(danhSachCase){
        for (const testcacse of danhSachCase) {
            const {ten, trangThai, thoiGian} = testcacse;
            console.log(`Test: ${ten} status : ${trangThai} time : ${thoiGian}`);
            
        }
    }
}
class loginSuite extends BaseSuite{
    constructor(tenSuite){
        super(tenSuite);
    }
    inTieuDe(){
        super.inTieuDe();// giữ nguyên của cha và in them
        console.log("Trang kiểm thử : / login");
    }

}
let loginSuite2 = new loginSuite("Login test suite");
loginSuite2.inTieuDe();
loginSuite2.inKetQua(LoginCase);

// Private field

class ApiClient {
    // Private field trc tên biến là dấu #
    #screctToken = "abc_123_tuyetmat";
    #baseUrl = "abc";
    publicField = "123";
    goiApi(endpoint){
        console.log(
            `goi ${this.#baseUrl} ${endpoint} vói token ${this.#screctToken}`
        );
    }
}
let api = new ApiClient();
// api.goiApi("/user");
// console.log(api.#screctToken); // báo lỗi vì là biến private nên không thể gọi được
// console.log(api.screctToken); // báo lỗi vì là biến private nên không thể gọi được
// api.#screctToken = "hack"; // báo lỗi vì là biến private nên không thể gán được bằng 1 giá trị mới

console.log(api.publicField); // hoàn toàn có thể gọi và thay đổi đc vì là publich field
api.publicField = "123 - hack";
console.log(api.publicField);

class TestConfig{
    #timeout = 5000;
    #browser = "chromium";
    // getter - đọc giá trị (dùng như thuộc tính)
    get timeout(){
        return this.#timeout;
    }
    // trường hợp không muốn viết getter, setter thì có thể viết như hàm thường
   getTimeOut(){
    return this.#timeout;
   }
    set timeout(giaTriMoi){
        if(typeof giaTriMoi !=="number" || giaTriMoi < 0){
            console.log("Timeout phải là số dương");
            return;
        }
        this.#timeout = giaTriMoi;
        console.log(`Timeout -> ${giaTriMoi}`);
    }
    get browser(){
        return this.#browser;
    }
    set browser(ten){
        let hopLe = ["chromium", "firefox", "webkit"];
        if (!hopLe.includes(ten)){
            console.log(`browser phải là ${hopLe.join(", ")}`);
            return;
        }
        this.#browser = ten;
        console.log(`browser -> ${ten}`);
    }
}
let config = new TestConfig();
console.log(config.timeout);
config.timeout = 10000;
console.log(config.timeout);
config.timeout = '123';
console.log(config.timeout);
config.browser = "firefox";
console.log(config.browser);
// gọi hàm thường
console.log(config.getTimeOut());

