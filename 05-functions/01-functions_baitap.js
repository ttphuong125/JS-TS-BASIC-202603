// bài tập có dữ liệu như sau
console.log("--- bài tập nhỏ---");

const configMacDinhBaiTap= {
    baseUrl: "https://staging.neko.vn",
    timeout: 30000,
    headless: true,
    retries: 2,
};
const configGhiDe = {
    timeout: 10000,
    headless: false,
};
const tagMacDinh = [" smoke ", "  login "];
const tagsThem = [" checkout "," smoke ", " regression "];
const tocDoPhanHoi = [1200, 3400, 800, 1500];
const tenSuiteRaw  = " Payment flow ";

// - Dùng object spread để tạo configCuoi từ configMacDinhBaiTap và congfigGhiDe
let tagDaLamSach = []// khai báo sẵn 1 mảng sau khi xử lý
function taoCauHinhChayTest(){
    const configCuoi = {
        ...configMacDinhBaiTap,
        ...configGhiDe};
    const TatCaTags = [
        ...tagMacDinh,
        ...tagsThem];
    for (const tag of TatCaTags){
        let cleanTag = tag.trim().toLowerCase();
        if (tag ===""){
            continue;
        }
        if(!tagDaLamSach.includes(cleanTag))
        {
            tagDaLamSach.push(cleanTag);
        }
    }
    let suiteName = tenSuiteRaw.trim();
    if (suiteName ===""){
        suiteName = "unknown-suite";
    }
    // hoặc có thể gắn gọn theo cách sau
    //const suiteName = tenSuiteRaw.trim() || "unknown-suite";
    //const tocDoPhanHoi = [1200, 3400, 800, 1500];
    const tocDoPhanHoiMax = Math.max(...tocDoPhanHoi); // thời gian phản hồi lớn nhất bằng spread với Math.max
    // cách sử dụng luôn return
    return {
        suiteName: suiteName,
        config: configCuoi,
        tags : tagDaLamSach,
        slowestRespone: tocDoPhanHoiMax,
    };
};
console.log(taoCauHinhChayTest());
// cách khai báo thêm 1 biến resault.
//  const result = {  
//         suiteName: suiteName,
//         config: configCuoi,
//         tags : tagDaLamSach,
//         slowestRespone: tocDoPhanHoiMax,
//     };
//     return result

// };
// const result = taoCauHinhChayTest();
// console.log(result);

// yêu cầu
// viết hàm taoCauHinhChayTest()
// - Dùng object spread để tạo configCuoi từ configMacDinhBaiTap và congfigGhiDe
// - Dùng array spread đề gộp tagsMacDinh và tagsThem thành một mảng mới
// - Sau đó sử lý mảng mới bằng cách loại bỏ tag rỗng và chuyển về chữ thường, 
// //và có thể xử lý tag trùng (dùng include)
// - Làm sạch tenSuiteRaw
// - Nếu TenSuiteRaw rỗng thì dùng giá trị mặc định là "unknown-suite".
// - Tìm thời gian phản hồi lớn nhất bằng spread với Math.max
// - Trả về object có dạng sau
// kết quả mong đợi
// {
//     stuiteName: "Payment flow",
//     config: {
//         bastUrl : "https://staging.neko.vn",// địa chỉ mặc định đang trỏ tới môi trường staging
//         timeout: 10000,// thời gian chờ tối đa là 30 giây
//         headless: false,// chạy trình duyệt ở chế độ không hiển thị giao diện
//         retries: 2,
//     }
//     tags: ["smoke", "login", "checkout", "regression"],
//     slowestRespone: 3400
// }

// CALLBACK
function quayLaiAn(){
    console.log("mình quay lại đây");
}
// bước 2: Bồi bàn nhận callback làm tham số
function choBanTrong(SoDienThoaiCuaKhach){
    console.log("Đang dọn bàn...");
    // Bước 3: xử lý xong -> lôi hàm ra và gọi để chạy
    // đây chính là lúc callback đc gọi lại
    SoDienThoaiCuaKhach();
}
// bước 4: chạy không có ()sau quayLaiAn
console.log(choBanTrong(quayLaiAn));
// Có ngoặc tròn và không có ngoặc tròn ()

function layDuLieuTest(){
    return "Dữ liệu test";
}
// có ngoặc tròn () -> hàm chạy ngay -> lấy kết quả -> ly sinh tố

const ketQuaChay = layDuLieuTest();
console.log(ketQuaChay);
console.log(typeof ketQuaChay);

// không có dấu ngoặc tròn - giao bản vẽ -> lấy bản thân cái máy
const copyHam = layDuLieuTest;
console.log(copyHam);
console.log(typeof copyHam);

 // callback có tham số
 // hàm nhận callback có thể truyền dữ liệu nguwoacj lại cho callback khi gọi

 function thongBaoKetQua(tenBaiTest, ketQua){
    console.log(`${tenBaiTest} - ${ketQua}`);
 }
 function chayTest (tenTest, callback){
    console.log(`đang chạy ${tenTest}`);
// giả lập: pass nếu test chứa login fail nếu không
    const pass = tenTest.includes("login");
    if (pass){
        callback(tenTest, "Chạy Pass");
    }else{
        callback(tenTest, "chay fail");
    }
    //callback(tenTest, pass? "chạy pass": "chạy fail"); cách viết ngắn hơn if else
 } 
 console.log(chayTest("login thành công", thongBaoKetQua));
 console.log(chayTest("đăng ký thiếu email", thongBaoKetQua));
// ứng dụng thực tế hàm callback thường xảy ra ở các hàm xử lý array
// ### `map()`

// - Dùng để biến đổi mảng cũ thành một mảng mới.
// - Callback thường nhận 3 tham số, nhưng thực tế hay chỉ dùng tham số đầu tiên.
console.log("-----map-----");
const giaSanPhamUI = [100000,250000,500000];
function giaNhanDoi(value){
    return value *2;
}
const giaMoi = giaSanPhamUI.map(giaNhanDoi);
console.log(giaMoi);

// đối với object đặt trong mảng
console.log("#########################");
const users = [
    { ho: "nguyễn", ten: "Neko"},
    { ho: "Trần", ten: "New" },
];
const hoTen = users.map((u) =>{
    return `${u.ho} ${u.ten}`;
});
console.log(hoTen);

const sanPhamUI = [
    { ten: "Chuột", gia: 150000, tonKho: true },
    { ten: "Bàn phím", gia: 500000, tonKho: false },
    { ten: "Màn hình", gia: 3000000, tonKho: true },
    { ten: "Tai nghe", gia: 200000, tonKho: true },
];
// lọc các sản phẩm còn hàng
// dùng for
// đầu ra là 1 mảng mới
// let sanPhamConHang = [];
// for (let sanPham of sanPhamUI){
//     if (sanPham.tonKho === true){
//         sanPhamConHang.push(sanPham);
//     }
    
// }
// console.log(sanPhamConHang);

// viết theo fillter
console.log("---------fillter---------");
 const sanPhamConHangFillter = sanPhamUI.filter((sanPham) => {
   return sanPham.tonKho === true;
});
console.log(sanPhamConHangFillter);
// lọc giá <200000 và còn hàng

 const giaFillter = sanPhamUI.filter((sanPham) => {
   return sanPham.gia <200000 && sanPham.tonKho === true;
});
console.log(giaFillter);

/// Find: tìm phần tử đầu tiên
console.log("---------Find---------");
const users1 = [
    { id: 1, ten: "neko", role: "admin"},
    { id: 2, ten: "mew", role: "tester"},
    { id: 3, ten: "Cat", role: "tester"},
];
// dùng find tìm phần tử có role là admin
const userFrist = users1.find((uf) => uf.role ==="admin");
//const userFrist = users1.find((uf) => uf.role ==="tester");// chỉ chả về 1 giá trị là tester đầu tiên
console.log(userFrist);
