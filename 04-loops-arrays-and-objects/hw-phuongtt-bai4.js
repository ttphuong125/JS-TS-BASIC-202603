// Bài 1
// Tình huống: Bạn viết script test tự động kiểm tra API /users/1. Server trả về response, bạn cần kiểm tra toàn bộ dữ liệu: tìm field rỗng, kiểm tra kiểu dữ liệu sai.

// Dữ liệu đầu vào:

// let apiResponse = {
//     userId: 101,
//     username: "neko_tester",
//     email: null,
//     isActive: "true",  // Bug: phải là boolean, không phải string
//     phone: "",
//     role: "admin"
// };

// Yêu cầu:

// Với mỗi key, kiểm tra:
// Giá trị có phải null hoặc "" (chuỗi rỗng) không? → In cảnh báo trường rỗng.
// Nếu key là "isActive", kiểm tra typeof có phải "boolean" không? → In cảnh báo sai kiểu.
// Đếm tổng số lỗi tìm được.
// Trong bài này, 1 lỗi = 1 lần vi phạm 1 quy tắc kiểm tra.

let apiResponse = {
    userId: 101,
    username: "neko_tester",
    email: null,
    isActive: "true",  // Bug: phải là boolean, không phải string
    phone: "",
    role: "admin"
};
let keys = Object.keys(apiResponse);
let bugCount = 0;
for (i = 0; i< keys.length; i++){
    let key = keys[i];
    let value = apiResponse[key];
    if(value === null || value === ""){
        console.log(`giá trị của ${key} đang là rỗng`);
        bugCount ++ ;
    }
    //if (key ==="isActive" && typeof value !== "boolean"){
    if (key === "isActive" && typeof apiResponse[key] !== "boolean"){
        console.log( `isActive phải là boolean, không phải string`);
        bugCount ++ ;
    }
}
console.log(`tổng số lượng bug ${bugCount}`);

// Bài 2
// Tình huống: Bạn có danh sách URL cần test. Một số URL bị rỗng (bỏ qua), 
// một số trả về status bình thường, nhưng nếu gặp URL trả về lỗi 500 thì dừng ngay vì server đã sập,
// test tiếp vô nghĩa.

// Dữ liệu đầu vào:

// let testUrls = [
//     { url: "/api/users", status: 200 },
//     { url: "", status: null },
//     { url: "/api/products", status: 200 },
//     { url: "/api/orders", status: 500 },
//     { url: "/api/reviews", status: 200 }
// ];
// Yêu cầu:

// Nếu url rỗng ("") → dùng continue bỏ qua, in cảnh báo “URL rỗng”.
// Nếu status === 500 → in lỗi nghiêm trọng, dùng break dừng ngay.
// Nếu bình thường → in kết quả PASS.
// Đếm tổng URL đã test được (không tính URL bị bỏ qua). 

let testUrls = [
    { url: "/api/users", status: 200 },
    { url: "", status: null },
    { url: "/api/products", status: 200 },
    { url: "/api/orders", status: 500 },
    { url: "/countUrlapi/reviews", status: 200 }
];
let countUrl = 0;
for (let urlItem of testUrls){
    if(urlItem.url === ""){
        console.log(`Url rỗng`);
        continue;
    }
    countUrl++;
    if(urlItem.status === 500){
        console.log("Lỗi nghiêm trọng");
        break;
    }
    if (urlItem.url !== "" && urlItem.status !== 500 ){
        console.log("PASS");
    }
}
console.log(`Tổng số url test được: ${countUrl}`);
