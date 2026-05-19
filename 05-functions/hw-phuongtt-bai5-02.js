// ## Bài 2: Chuẩn hóa dữ liệu test case import từ spreadsheet

// ### Bối cảnh thực tế

// Khi import test case từ Excel hoặc Google Sheet, dữ liệu thường lộn xộn:

// - có dòng thừa khoảng trắng
// - priority lúc là số, lúc là chuỗi
// - status viết sai chính tả
// - cùng một test case id xuất hiện 2 lần

// ### Đề bài

// Viết hàm:

// ```javascript
// function chuanHoaDanhSachTest(rawRows, config = {})
// ```

// ### Bộ data test dùng để làm bài

// ```javascript
// const testCaseConfig = {
//     minPriority: 1,
//     maxPriority: 5
// };

// const rawRows = [
//     [" TC_LOGIN_001 ", "login", "1", " smoke ", "active"],
//     ["TC_LOGIN_001", "login", "2", "regression", "active"],
//     ["TC_SEARCH_002", "search", "0", "smoke", "active"],
//     ["TC_CART_003", "", "3", "checkout", "inactive"],
//     ["TC_PAY_004", "payment", "2", " critical ", "ACTIVE"],
//     ["TC_ORDER_005", "order", "5", "sanity", "inactive"],
//     ["TC_ORDER_006", " order ", "4", " SANITY ", "active"],
//     ["LOGIN_007", "login", "2", "smoke", "active"],
//     ["TC_USER_008", "user", "6", "regression", "active"],
//     ["TC_API_009", "api", "3", "api", "disabled"],
//     ["TC_API_010", "api", "2", " api ", "active"],
//     ["TC_API_010", "api", "2", " api ", "active"],
//     ["TC_REPORT_011", "report", "1", " nightly ", "INACTIVE"],
//     [" TC_EMPTY_012 ", "   ", "2", "misc", "active"]
// ];
// ```

// Khi làm với bộ data test này:

// - `rawRows` nhận mảng `rawRows` ở trên
// - `config` nhận `testCaseConfig`
// - Ví dụ gọi hàm: `chuanHoaDanhSachTest(rawRows, testCaseConfig)`

// ### Quy ước dữ liệu

// Mỗi dòng có cấu trúc:

// ```javascript
// [id, module, priority, tag, status]
// ```

// ### Yêu cầu

// 1. Dùng array destructuring để bóc từng cột.
// 2. Chuẩn hóa:
//    - `id` -> trim, uppercase
//    - `module` -> trim, lowercase
//    - `priority` -> đổi sang number
//    - `tag` -> trim, lowercase
//    - `status` -> trim, lowercase
// 3. Test case hợp lệ khi:
//    - `id` bắt đầu bằng `TC_`
//    - `module` không rỗng
//    - `priority` nằm trong `1` đến `5`
//    - `status` chỉ là `active` hoặc `inactive`
//    - không bị trùng `id`
// 4. Khi gọi `chuanHoaDanhSachTest(rawRows, testCaseConfig)`, hàm phải `return` object có dạng:

// ```javascript
// {
//     validCases: [...],
//     invalidCases: [...],
//     summary: {
//         total: rawRows.length,
//         valid: ...,
//         invalid: ...,
//         duplicateIds: ...
//     }
// }
// ```

// ### Điều bắt buộc

// 1. Dùng `for` để duyệt `rawRows`.
// 2. Không dùng `map`, `filter`, `find` cho phần duyệt chính của bài này.
// 3. Không được sửa trực tiếp `rawRows`.
//    Nghĩa là không gán ngược vào từng dòng cũ trong mảng này, 
// mà chỉ đọc dữ liệu cũ rồi tạo object mới để đưa vào kết quả trả về.
// 4. Mỗi test case hợp lệ phải được build thành object mới:

// ```javascript
// {
//     id: "TC_LOGIN_001",
//     module: "login",
//     priority: 1,
//     tag: "smoke",
//     status: "active"
// }
// ```

const testCaseConfig = {
    minPriority: 1,
    maxPriority: 5
};

const rawRows = [
    [" TC_LOGIN_001 ", "login", "1", " smoke ", "active"],
    ["TC_LOGIN_001", "login", "2", "regression", "active"],
    ["TC_SEARCH_002", "search", "0", "smoke", "active"],
    ["TC_CART_003", "", "3", "checkout", "inactive"],
    ["TC_PAY_004", "payment", "2", " critical ", "ACTIVE"],
    ["TC_ORDER_005", "order", "5", "sanity", "inactive"],
    ["TC_ORDER_006", " order ", "4", " SANITY ", "active"],
    ["LOGIN_007", "login", "2", "smoke", "active"],
    ["TC_USER_008", "user", "6", "regression", "active"],
    ["TC_API_009", "api", "3", "api", "disabled"],
    ["TC_API_010", "api", "2", " api ", "active"],
    ["TC_API_010", "api", "2", " api ", "active"],
    ["TC_REPORT_011", "report", "1", " nightly ", "INACTIVE"],
    [" TC_EMPTY_012 ", "   ", "2", "misc", "active"]
];
function chuanHoaDanhSachTest(rawRows, config = {}){
        //1. Dùng array destructuring để bóc từng cột
    const { minPriority = 1, maxPriority = 5 } = config;
    const validCases = [];
    const invalidCaes = [];
    const seenIds = [];
    const duplicateIds = [];
    for (const row of rawRows){
        const errors = [];
   //Dùng array destructuring để bóc từng dòng  
        const [rawId, rawModule, rawPriority, rawTag, rawStatus] = row;
    //2. Chuẩn hóa:
//    - `id` -> trim, uppercase
//    - `module` -> trim, lowercase
//    - `priority` -> đổi sang number
//    - `tag` -> trim, lowercase
//    - `status` -> trim, lowercase
        const id = rawId.trim().toUpperCase();
        const module = rawModule.trim().toLowerCase();
        const priority = Number(rawPriority);
        const tag = rawTag.trim().toLowerCase();
        const status = rawStatus.trim().toLowerCase();
            //3. Test case hợp lệ khi:
//    - `id` bắt đầu bằng `TC_`
//    - `module` không rỗng
//    - `priority` nằm trong `1` đến `5`
//    - `status` chỉ là `active` hoặc `inactive`
//    - không bị trùng `id`
        if (id.slice(0,3)!= "TC_"){
            errors.push(`${id} không đúng định dạng bắt đầu bằng TC_`);
        }
        if (module ===""){
            errors.push(`module của bạn đang rỗng`);
        }
        if (priority < minPriority || priority > maxPriority){
            errors.push (` priority của bạn đang nằm ngoài khoảng ${minPriority} -${maxPriority} `);

        }
        if (status !== "active" && status !== "inactive" ){
            errors.push (`status của bạn đang sai định dạng `);
        }
        if (seenIds.includes(id)) {
            if (duplicateIds.includes(id) === false) {
                duplicateIds.push(id);
            }
            errors.push(`id "${id}" bị trùng`);
        } else {
            seenIds.push(id);
        }
    const testcase = { id, module, priority, tag, status };
    if (errors.length === 0) {
      validCases.push(testcase);
    } else {
      invalidCaes.push({...testcase,errors});
        }
    }
    //Mỗi test case hợp lệ phải được build thành object mới:
    return {
        validCases,
        invalidCaes,
        summary: {
        total: rawRows.length,
        valid: validCases.length,
        invalid: invalidCaes.length,
        duplicateIds: duplicateIds.length,
        }
    
    }
}
console.log(chuanHoaDanhSachTest(rawRows, testCaseConfig));


