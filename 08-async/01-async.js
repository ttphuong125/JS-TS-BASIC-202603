// console.log("khách s: Cho 1 ly matcha siêu phức tạp");
// console.log("Nhân viên: Ok anh vui lòng đợi tại quầy");
// // tác vụ nặng chạy đồng bộ đóng băng hệ thống
// let thoiGianBatDau = Date.now();
// while (Date.now()-thoiGianBatDau <3000){
//     // blocking - cpu bị nhốt trong vòng lập này
//     // trong suốt 3 giây
//     // 1.js sẽ bị mù và điếc ới thế giới bên ngoài
//     // 2. Không mốt dòng code nào được chạy
// }
// // phải chờ 3s sau khi vòng lặp kết thúc, các dòng lệnh bên dưới mới được chạy
// console.log("Nhân viên: matcha xong rồi");
// console.log("Khách B: phù... giờ mới tới lượt mình");
// // vì vòng lặp while -> 1 lệnh đồng bộ Main thread (nhân viên) bị nhốt vào trong vòng lập 
// // và phỉa vắt kiệt sức lực của CPU để kiểm tra điều kiện liên tục trong 3s

// //---------promise------------
// console.log("-------------- promise---------");
// function taoBienLai(thanhCong){
//     return new Promise ((resolve, reject) => {
//         if (thanhCong){
//             resolve ("đã pha xong")
//         } else{
//             reject (new Error("Hế mát cha"));
//         }
//     });
// }
// taoBienLai(true).then((ketQua)=> {
//     console.log(".then nhận", ketQua);
// });
// taoBienLai(false).catch((loi) => {
//     console.log(".catch nhan", loi);
// });

// function datHangOnline(maDon, conHang){
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             if(conHang){
//                 resolve ({
//                     maDon: maDon,
//                     sanPham: "matCha",
//                     tongTien: 40000,
//                 });
//             } else {
//                 reject (new Error(`Đơn${maDon}: san pham da het hang`));
//             }
//         },5000);
//     });
// }
// console.log("1. Gửi yêu cầu đặt hàng");
// datHangOnline("SP001", true).then((donHang) =>{
//     console.log("3.then() nhận đơn hàng", donHang);
//     return donHang.maDon;
// }).then((maDon) => {
//     console.log("4. chuyến sang bước thanh toán cho mã đơn", maDon);
// }).catch((loi)=>{
//     console.log("không chạy vào đây vì SP001 thành công",loi.message);
// });
// console.log("2. code dưới này vẫn chạy ngon, không chờ promise xong");
// datHangOnline("SP002", false)
// .then((donHang) =>{
//     console.log("không chạy vào đây vì SP002 thất bại", donHang);
// })
// .catch((loi) => {
//     console.log("5. Catch bắt lỗi",loi.message);
// })
// console.log("3. đơi SP002");
// function traVeDuLieu(kieu){
//     return new Promise((resolve, reject) =>{
//         if (kieu === "string") {
//             resolve ("đăng nhập thành công");
//         }
//         else if (kieu === "number"){
//             resolve (200);
//         }
//         else if (kieu === "boolean"){
//             return true;
//         }
//         else if (kieu === "object"){
//             resolve ({
//                 maDon: 123,
//                 sanPham: "Matcha",
//                 tongTien: 40000,
//             });
//         }
//         else if (kieu ==="array"){
//             resolve(["san pham A"]);
//         }
//         else if (kieu === 'function'){
//             resolve(()=> {
//                 return "tôi là function được resolve";
//             });
//         }
//         else {
//             reject (new Error("không hỗ trợ kiểu dữ liệu", + kieu));
//         }

//     });
// }
// traVeDuLieu("string").then((msg)=> console.log("string", msg));
// traVeDuLieu("object").then((data)=> console.log("object", data));
// traVeDuLieu("unknown").catch((loi)=> console.log("reject", loi.message));

// // chaining (xâu chuỗi)
// function moTrangWeb(url){
//     return new Promise((resolve)=>{
//         setTimeout(()=> {
//             resolve ("Trang +" +url + "đã tải xong");
//         },1000);
//     });
// }
// moTrangWeb ("neko.com").then((trang)=> {
//     console.log(trang);
//     return "TOKEN_BC_123";
// })
// .then ((token)=> {
//     console.log("lay token",token);
//     return {sp: "ao thun", soluong: 3};
// })
// .then((gioHang) => {
//     console.log("Gio hang", gioHang);
// }).catch((loi) => {
//     console.log(loi);
// });


function moTrangWeb(url){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            if (url === "nhapsai.com"){
                reject ("loi 404 không tìm thấy trang")
            }
            resolve ("Trang +" +url + "đã tải xong");
        },1000);
    });
}
// cách 1
// moTrangWeb ("nhapsai.com").then((trang)=> {
//     console.log(trang);
//     return "TOKEN_BC_123";
// })
// .then ((token)=> {
//     console.log("lay token",token);
//     return {sp: "ao thun", soluong: 3};
// })
// .then((gioHang) => {
//     console.log("Gio hang", gioHang);
// }).catch((loi) => {
//     // vì url sai -> reject -> nhảy thẳng vào đây không thông qua 2 bước then()
//     console.log(loi);
// });
// cách 2 (khôn khuyên dùng)
moTrangWeb ("nhapsai.com").then(
    (data) => {
        console.log("thành công", data);
    },
    (loi)=> {
        console.log("that bai", loi);
    },
);