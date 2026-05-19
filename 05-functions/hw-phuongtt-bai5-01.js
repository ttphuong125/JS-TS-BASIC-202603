// ## Bài 1: Refactor hàm `taoPayloadDangNhap()`

// ### Bối cảnh thực tế

// Form đăng nhập ngoài đời thường rất bẩn:

// - người dùng gõ thừa khoảng trắng
// - role viết hoa viết thường lung tung
// - checkbox `remember me` lúc thì là `true`, lúc là `"yes"`, lúc là `"on"`
// - dev truyền object input vào nhiều nơi, chỉ cần sửa trực tiếp nhầm một lần là bug dây chuyền

// ### Đề bài

// Viết hàm:

// ```javascript
// function taoPayloadDangNhap(formInput, options = {})
// ```

// ### Yêu cầu

// 1. Dùng object destructuring để lấy dữ liệu từ `formInput`.
// 2. Dùng object destructuring + default value để lấy dữ liệu từ `options`.
//    - Nếu `options.defaultRole` không có thì biến `defaultRole` nhận `"guest"`.
//    - Nếu `options.minPasswordLength` không có thì biến `minPasswordLength` nhận `8`.
//    - `"guest"` và `8` lấy theo `loginOptions` đã cho ở đầu bài, không phải tự nghĩ thêm.
//    - `allowedRoles` lấy thẳng từ `options.allowedRoles`, không tự thêm giá trị khác.
//    - Trong bộ data test hiện tại, `options` đã có đủ field nên 2 giá trị mặc định này có thể không chạy; 
// chúng được giữ lại để bám đúng YC2.
// 3. Chuẩn hóa dữ liệu:
//    - `username` -> trim, chuyển về lowercase
//    - `password` -> trim
//    - `role` -> trim, lowercase
//    - `device` -> trim
//    - `rememberMe` -> chuyển về boolean
// 4. Kiểm tra hợp lệ:
//    - `username` không được rỗng
//    - `username` không được chứa khoảng trắng ở giữa
//    - `password` phải dài ít nhất `minPasswordLength`
//    - `role` phải nằm trong `allowedRoles`
// 5. Không được sửa trực tiếp `formInput` hoặc `options`.
// 6. Phải trả về object theo dạng:

// ```javascript
// {
//     isValid: true,
//     payload: {
//         username: "neko_admin",
//         password: "12345678",
//         role: "tester",
//         rememberMe: true,
//         device: "chrome-win11"
//     },
//     errors: []
// }
// ```
// ### Bộ data test dùng để làm bài

// ```javascript
const loginOptions = {
    defaultRole: "guest",
    allowedRoles: ["admin", "tester", "viewer", "guest"],
    minPasswordLength: 8
};

const loginTestData = [
    {
        name: "Case 1 - Hợp lệ cơ bản",
        formInput: {
            username: "  Neko_Admin  ",
            password: "  12345678  ",
            role: " tester ",
            rememberMe: "yes",
            device: "  chrome-win11  "
        }
    },
    {
        name: "Case 2 - Role rỗng, phải dùng defaultRole",
        formInput: {
            username: "  guest_user  ",
            password: "  abcdefgh  ",
            role: "   ",
            rememberMe: "no",
            device: " firefox "
        }
    },
    {
        name: "Case 3 - Username rỗng",
        formInput: {
            username: "    ",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome"
        }
    },
    {
        name: "Case 4 - Username có khoảng trắng ở giữa",
        formInput: {
            username: "neko admin",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome"
        }
    },
    {
        name: "Case 5 - Password quá ngắn",
        formInput: {
            username: "valid_user",
            password: "123",
            role: "tester",
            rememberMe: true,
            device: "chrome"
        }
    },
    {
        name: "Case 6 - Role không hợp lệ",
        formInput: {
            username: "valid_user",
            password: "12345678",
            role: "manager",
            rememberMe: "on",
            device: "chrome"
        }
    },
    {
        name: "Case 7 - rememberMe là boolean true",
        formInput: {
            username: "admin01",
            password: "abcdefgh",
            role: "admin",
            rememberMe: true,
            device: "edge"
        }
    },
    {
        name: "Case 8 - rememberMe là chuỗi lạ",
        formInput: {
            username: "viewer01",
            password: "abcdefgh",
            role: "viewer",
            rememberMe: "maybe",
            device: "safari"
        }
    }
];
// ```

// Khi làm với bộ data test này:

// - `formInput` nhận `loginTestData[i].formInput`
// - `options` nhận `loginOptions`
// - Ví dụ gọi hàm: `taoPayloadDangNhap(loginTestData[0].formInput, loginOptions)`

function taoPayloadDangNhap(formInput, options = {}){
   // Dùng object destructuring để lấy dữ liệu từ `formInput`.
   const {username, password, role, rememberMe, device} = formInput;
// Dùng object destructuring + default value để lấy dữ liệu từ `options`.
//    - Nếu `options.defaultRole` không có thì biến `defaultRole` nhận `"guest"`.
//    - Nếu `options.minPasswordLength` không có thì biến `minPasswordLength` nhận `8`.
//    - `"guest"` và `8` lấy theo `loginOptions` đã cho ở đầu bài, không phải tự nghĩ thêm.
//    - `allowedRoles` lấy thẳng từ `options.allowedRoles`, không tự thêm giá trị khác.
//    - Trong bộ data test hiện tại, `options` đã có đủ field nên 2 giá trị mặc định này có thể không chạy; 
// chúng được giữ lại để bám đúng YC2.
    const { defaultRole = "guest", allowedRoles, minPasswordLength = 8 } = options;
// 3. Chuẩn hóa dữ liệu:
//    - `username` -> trim, chuyển về lowercase
//    - `password` -> trim
//    - `role` -> trim, lowercase
//    - `device` -> trim
//    - `rememberMe` -> chuyển về boolean
    const cleanUsername = username.trim().toLowerCase();
    const cleanPassword = password.trim();
    let cleanRole = role.trim();
     if (cleanRole === "") {
    cleanRole = defaultRole;
  }
    let cleanDevice = device.trim();
   let cleanRememberMe = false;

    if (rememberMe === true ||rememberMe === "yes" || rememberMe === "on")
    {
    cleanRememberMe = true;
    }
//    4. Kiểm tra hợp lệ:
//    - `username` không được rỗng
//    - `username` không được chứa khoảng trắng ở giữa
//    - `password` phải dài ít nhất `minPasswordLength`
//    - `role` phải nằm trong `allowedRoles`
    const errors = [];
    if(cleanUsername === ""){
        errors.push("username không được rỗng");
    }else if(cleanUsername.includes(" ")){
        errors.push("username không được chứa khoảng trắng");
    }
    if (cleanPassword.length < minPasswordLength){
        errors.push(`password phải lớn hơn ${minPasswordLength} ký tự`);
    }
    if (!allowedRoles.includes(cleanRole)){
              errors.push("role không hợp lệ");
    }
    const isValid = errors.length === 0;

    return {
        isValid,
        payload:{
            username: cleanUsername,
            password: cleanPassword,
            role: cleanRole,
            rememberMe: cleanRememberMe,
            device: cleanDevice,
        },
        errors,
    }
}
for (const testCase of loginTestData) {
  console.log(testCase.name);
  console.log(taoPayloadDangNhap(testCase.formInput, loginOptions));
  console.log("---");
}

