// khai bao kieu du lieu string
let loiChao = "xin chao"
let loiChao2 = "xin chao 2"
// TH chuoi bao gom ky tu '' thi ngoai phai la ""
let myName = "I'm Phuong"

const tenHocVien = "Phuong"
console.log(loiChao);

console.log(loiChao);
console.log(loiChao2);
// dung backstick de nhung 1 bien vao giua cau hoac 1 chuoi khac
const loiGioiThieu = `Ten toi la ${tenHocVien}`;
//const loiGioiThieu = `Ten toi la ${tenHocVien}`;

console.log(loiGioiThieu);
const productName = "iphone 15"
const productSelector = `h2:has-text("${productName}")`;
console.log(productSelector);
// number
let tuoi = 30;
const PI = 3.14
let ketQua = (tuoi -5)*2;
console.log(ketQua);
// boolean
 let denDangBat = true; // den sang
 let daTotNghiep = false;// chua tot nghiep
 
 // length: dung de dem xem chuoi co bao nhieu ky tu (tinh ca dau cach)
 // cu phap tenbien.length khong co dau ngoac vi no ko phai la method

 let matKhau = '1234567';
 console.log(matKhau.length);

 // trim () lam sach khoang trang 2 dau
 // tenbien.trim() // la method vi no la hanh dong 
 let email = "    user01   ";
 let emailChuan = email.trim();
 console.log(emailChuan);
 console.log(emailChuan.length);

 // toUpperCase() va toLowerCase dung de bien chu hoa thanh chu thuong va nguoc lai
// Vd: IPHoNE 15 - data test lai la iphone 15
// giai phap dua ve 1 kieu du lieu roi so sanh
let tenSanPham = 'iPhoNE 15';
console.log(tenSanPham.toLowerCase());
// includes: kiem tra chuoi con co nam trong chuoi cha hay khong 
// ket qua tra ve true, false
// co phan biet chu hoa va chu thuong
let thongBao = "Dang nhap that bai - sai mat khau";
console.log(thongBao.includes("thanh cong"));
console.log(thongBao.includes("mat khau"));

let msg = "login error : invalid passworld";
console.log(msg.includes("error"));
console.log(msg.includes("Error"));
// neu khong can kiem tra chinh xac thi dua ve het 1 kieu roi kiem tra
let a = msg.toLocaleLowerCase();
//msg.toLocaleLowerCase()
console.log(msg.toLocaleLowerCase());
console.log(a.includes("Errow"));
 //so sanh 2 chuoi bang nhau
 let aa = "hello";
 let bb = "Hello";
 console.log(aa.toLocaleLowerCase()===bb.toLocaleLowerCase());

 // replace - xoa va sua loi
 // mac dinh la chi thay the cho dau tien tim thay
 // cu phap tenbien.replace("cu", "moi")

 let giaTien = "100$";
 let giaTienSo = giaTien.replace("$", "");
 console.log(giaTienSo);
// chi thay the gia tri dau tien
 let tien = "1.000.000";
 //console.log(tien.replace(".", ""));
 console.log(tien.replaceAll(".", ""));
 let tenUI = "Nguyen Van A";
 console.log(tenUI.replaceAll(" ", ""));
 // indexOf() tim vi tri index dau tien cua 1 chuoi con ben trong chuoi me. neu khong thay tra ve -1
 // cu phap: chuoime.indexof("chuoicon")
 // ket qua tra so (vi tri bat dau tinh tu 0)

 let urlUI = "https://shopee.vn/product/12345";
 console.log(urlUI.indexOf("product"));

 //substring()- slice()
 // cat lay 1 phan cua chuoi dua tren vi tri bat dau va vi tri ket thuc
 //quan trong : start: duoc tinh vao, end khong dc tinh vao
 // neu khong truyen vao end() thi no lay vi tri do cho den het chuoi
 // cu phap: chuoi.substring(batdau, ket thuc)
 // rieng slice() ho tro ca so am 
 // nen dung slice khi lay tu cuoi len dau (duoi chuoi duoi file thi dung slice)
let fileName ='report_2026.pdf';
console.log(fileName.slice(-4));

// ket hop substring() de cat lay 1 phan chuoi tu vi tri tim dc
let errorMsg = "Error 404: Page not found";
let pos = errorMsg.indexOf(":");
console.log(errorMsg.slice(pos+2));
console.log(errorMsg.substring(errorMsg.indexOf(":")+2));

// tu duy ket hop nhieu string method
// hay doi sang tu duy theo quy trinh
// du lieu co ban hay khong dung trim(), replace, replaceAll (), toLowerCase()
// minh co can biet su ton tai nao hay khong -> dung includes()
// moc bat dau nam o dau: indexOf()
// sau khi biet vi tri roi can cat doan nao: slice, substring()
// ket qua cuoi cung co can chuan hoa nua hay khong : trim(), toLowerCase(), split()
// cong thuc tu duy : lach sach-> tim moc -> cat/ tach -> chuan hoa -> kiem tra

let rawText = "    Oder ID: ORD-2026-123 | Status: Success   ";
// yeu cai lay ra dc ORD-2026-123
let tempRawText = rawText.trim();
//console.log(tempRawText.indexOf(":"));
console.log(tempRawText.substring(tempRawText.indexOf(":")+ 2, 21));

// number
 //A.number
 // ep kieu ve nubmer, neu gap ky tu trong chuoi thi bao loi
 //B.parseInt() doc tu trai sang phai gap so thi lay, gap chu thi ngung, bo qua so thap phan
 // C.parsefloat loc so thap phan giu lai phan thap phan

 let s1 = "100"
 console.log(Number(s1));
 let s2 = "100px"
 console.log(Number(s2));
 console.log(parseInt(s2));
 console.log(parseInt("10.999"));
 console.log(parseFloat("10.5kg"));
 // truong hop conver thanh 0
 //console.log(Number(""));
 //=> if (str.trim()==="")// xu ly logic

// 1 so phuong thuc lam viec voi number
// toFixed() - chot so thap phan() va gi lai n so sau dau phay
// cu phap: so.toFixed(so le muon lay) -> tu dong lam tron so neu thieu thi tu dong them so 0

console.log((19.956).toFixed(2));
console.log((19.9).toFixed(2));

// doi tuong toan hoc
// tao so ngau nhien
// lam tron nguyen
// Math.round() lam tron theo quy tac toan hoc
// Math.celi() lam tron len tran luon tang VD 4.1-> 5
// Math.floor() lam tron xuong 4.9 -> 4

// tao so ngau nhien
//Math.random() tra ve 1 so le tu 0 -> sat 1 (VD: 0.1123, 0.99999)

// tao so ngau nhien tu min -> max
// Math.floor(Math.random() * (max - min +1)) + min
// vi du ta muon random tu 50-55 (50,51,52,53,54, 55)

let min = 50;
let max = 55;
let soLuong = Math.floor(Math.random()*(max - min +1)) + min;
console.log(soLuong);

let diem = 4.5
console.log(Math.ceil(diem));
console.log(Math.floor(diem));

// min, max
console.log(Math.min(10,4,6,5));
console.log(Math.max(5,6,7,8,1));
// abs
console.log(Math.abs(-15));

// padStart() lap day cho trong phia truoc, dung de them ky tu vao dau chuoi do dat do dai mong muon
//luu y padStart la phuong thuc cua string khong phai number nen muon dung phai ep kieu so sang chuoi trc
// cu phap: chuoi.padstart(do dai mong muon, ky tu chen)
// padEnd()
//
 let ngay = 5;
 let chuoiNgay= String(ngay);
 let ngayDep = chuoiNgay.padStart(2,0);
 console.log(ngayDep);

let orderNumber = 5;
// su dung padStart bien thanh SP-00005
//const productSelector = `h2:has-text("${productName}")`;
let ChuoiNumberDep = String (orderNumber);
let maSanPham = ChuoiNumberDep.padStart(5,0);
console.log(`SP-${maSanPham}`);
// padEnd
 let sanPham = "iphone 18";
 let gia = "1000$"
 console.log(sanPham.padEnd(20,".") + gia);

 // ghi nho
 // Đầu vào hiện tại là text hay number: nếu là text thì phải nghĩ đến ghép kiểu
 // cần ép kiểu nghiêm khắc hay linh hoạt -> number. parseInt, parseFloat()
 // sau khi thành số rồi cần làm gì: cộng trừ nhân chia min max
 // có cần làm tròn không
 // có cần hiển thị đẹp không -> tofixed. padStart, padEnd

 // in ra màn hình console.log
 // nối chuỗi bàng dấu +
 let userName = 'Neko';
 let age = 18;
console.log("Tên: " + userName + "- Tuoi: "+ age);

// nối chuỗi ngăn cách bằng dấu ,
console.log("Tên:",userName, "Tuoi -", age);

// dung backtick hay goi la template literal
console.log(`Tên: ${userName} - Tuổi: ${age}`);
console.log(`Tên: ${userName} - Tuổi: ${age+ 1}`);

// Method chaning là gì : goi nhiều method trên cùng 1 giá trị, và bước sau lấy chính kết quả đó làm đầu vào
// có 1 chuỗi như sau slug = "Playwrite Basic Frist test"
//-> đầu ra là playwrite basic frist test
let slug = "Playwrite Basic Frist test";
// let slugFinal = slug.replaceAll(" ", "-");
// console.log(slugFinal.toLocaleLowerCase());

console.log(slug.trim().toLocaleLowerCase().replaceAll(" ", "-"));

 // let amount = 9.5
 // -> "009.50"
 let amount = 9.5
 //let amountStr = String(amount); // phải ép kiểu trc vì padStart là thao tác trên chuỗi trả về chuỗi
 //console.log(amountStr.padStart(5,0));
 //console.log(amountStr.padStart(5,0).padEnd(6,"0"));
 // cách 2: sử dụng toFixed(2) để lấy sau dấu phẩy 2 số thập phân. nếu thiếu thì tự thêm 0 và trả về đã sẵn string
 let display = amount.toFixed(2).padStart(6,0);
 console.log(display);




 




 

 







 
 
 
 
 

 

 






 
 





