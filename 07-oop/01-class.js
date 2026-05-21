class HocVien {
    //B1: khai báo tất cả thuộc tính ở class field
    // 2 thuộc tinhsnayf sẽ được gắn lại trong constructor
    hoTen = "";
    tuoi = 0;
    truongHoc = "Neko playwright";
    trangThai = "Đang học";
    // B2: constructor chỉ gán lại cho thuộc tính cần giá trị động
    //mọi thuộc tính đều nằm trong constructor
    constructor (ten, tuoi){
        this.hoTen = ten;
        this.tuoi = tuoi;
    }
    // phương thức (method)
    gioiThieu(){
        console.log(`${this.hoTen}, ${this.tuoi} tuoi, truong ${this.truongHoc}`);
    }
}
// cách 1: constructor có tham số
let hv1 = new HocVien("Neko", 20);
console.log(hv1.gioiThieu());
let hv2 = new HocVien("Neko2", 40);
console.log(hv2.gioiThieu());
// cách 2: constructor có giá trị mặc định (default parameter)
class TestConfig {
    browser = "Chromium";
    timeout = 5000;
    constructor(browser = "Chromium", timeout = 5000){
        this.browser = browser;
        this.timeout = timeout;
    }
}
let config1 = new TestConfig();
let config2 = new TestConfig("firefox");
let config3 = new TestConfig("webkit", 10000)
// constructor không tham số - dùng class fields thuần
// khi mọi object đều có chung thuộc tính cố định, không cần constructor luôn, 
// chỉ cần class field là đủ
class LoginPage {
    url = "http://nekosensei.com/login";
    textEmail = "#email";
    btnSubmit = "button[type = submit]";
}
let trang = new LoginPage();
console.log(trang.url);
console.log(trang.textEmail);
// từ khóa this trong class
// TH1: this ở trong constructor => chính là object đang được tạo
console.log("--------------");
class HocVien3 {
    constructor(ten){
        this.hoTen = ten;
        console.log(this);
    }
}
let hv3 = new HocVien3("Neko2");
console.log(hv3);
// TH2: this ở trong method -> object đang gọi method đó
class LoginPage2 {
    url = "/login";
    moTrang(){
        console.log(`Mở trang ${this.url}`);

    }
}
let trang2 = new LoginPage2();
trang2.moTrang();

class GioHangDemo {
    tenCuaHang = "Neko shop";
    sanPham = ["Trà sữa ", "Cà phê"];
    inHoaDon(){
        this.sanPham.forEach((sp)=> {
            console.log(`${this.tenCuaHang}: ${sp}`);
        });
    }
}
let gioHang1 = new GioHangDemo();
gioHang1.inHoaDon();
// tách method
class CheckoutPage {
    url = "checkout";

}
// bài tập nhỏ: 
// Tạo 1 class tên là ProductPage cho trang sản phẩm với thuộc tính:
//txtTenSP = '#productName'
//txtGia = '#price'
//btnGioHang = 'btnCart'
//modalThongBao = '.notification'
// method ThemSanPham (ten, gia) -> in ra gõ tên, gõ giá, click thêm giỏ hàng
//Method kiemTraThongBao(): in ra modal thông báo 
// flowMethod thucHienThemVaKiemTra(ten, Gia): gọi 2 hàm bên trên
class ProductPage {
    txtTenSP = "#productName";
    txtGia = "price";
    btnGioHang = "btnCart";
    modalThongBao = ".notification";
    themSanPham (ten, gia){
        console.log(`Gõ tên sản phẩm ${this.txtTenSP} : ${ten}`);
        console.log(`Gõ giá sản phẩm ${this.txtGia} : ${gia}`);
        console.log(`Click button thêm giỏ hàng: ${this.btnGioHang}`);
    }
    kiemTraThongBao(){
        console.log(`Kiểm tra hiển thị thông báo tại :${this.modalThongBao}`);
    }
    thucHienThemVaKiemTra(ten, gia){
        this.themSanPham(ten, gia);
        this.kiemTraThongBao()
    }
}
let product1 = new ProductPage();
product1.themSanPham("Trà sữa", 50000);
product1.kiemTraThongBao();
console.log("------------");
product1.thucHienThemVaKiemTra("Ca phe", 45000);
