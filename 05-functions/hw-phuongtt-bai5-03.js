// ## Bài 3: Merge config chạy test và bắt lỗi cấu hình

// ### Bối cảnh thực tế

// Dự án thường có nhiều lớp config:

// - `defaultConfig`
// - `envConfig`
// - `overrideConfig` do người chạy test truyền vào

// Bug rất hay gặp:

// - gộp sai thứ tự nên config bị ghi đè ngược
// - dùng spread với object rồi tưởng là sao chép sâu
// - timeout âm hoặc quá bé
// - CI mà vẫn bật `headed: true`
// - danh sách browser bị trùng tên

// ### Đề bài

// Viết 2 hàm:

// ```javascript
// function taoCauHinhCuoi(defaultConfig, envConfig, overrideConfig)
// function kiemTraCauHinh(config)
// ```

const configCase1 = {
    defaultConfig: {
        env: "local",
        baseUrl: "http://localhost:3000",
        timeout: 30000,
        retries: 0,
        headed: true,
        browsers: ["chromium"],
        reporter: {
            type: "html",
            output: "reports/default"
        }
    },
    envConfig: {
        env: "staging",
        baseUrl: "https://staging.neko.dev",
        retries: 1,
        browsers: ["chromium", "firefox"]
    },
    overrideConfig: {
        timeout: 500,
        headed: true,
        browsers: [" Chromium ", "chromium", "webkit"],
        reporter: {
            type: "html",
            output: "reports/custom"
        }
    }
};

const configCase2 = {
    defaultConfig: {
        env: "ci",
        baseUrl: "https://ci.neko.dev",
        timeout: 10000,
        retries: 2,
        headed: true,
        browsers: ["chromium"],
        reporter: {
            type: "html",
            output: "reports/ci"
        }
    },
    envConfig: {},
    overrideConfig: {}
};

const configCase3 = {
    defaultConfig: {
        env: "staging",
        baseUrl: "ftp://bad-url",
        timeout: 2000,
        retries: 1,
        headed: false,
        browsers: ["firefox"],
        reporter: {
            type: "json",
            output: "reports/json"
        }
    },
    envConfig: {},
    overrideConfig: {}
};

const configCase4 = {
    defaultConfig: {
        env: "test",
        baseUrl: "https://prod.neko.dev",
        timeout: 5000,
        retries: 1,
        headed: false,
        browsers: ["webkit"],
        reporter: {
            type: "html",
            output: "reports/test"
        }
    },
    envConfig: {},
    overrideConfig: {}
};

const configCase5 = {
    defaultConfig: {
        env: "local",
        baseUrl: "http://localhost:3000",
        timeout: 30000,
        retries: -1,
        headed: false,
        browsers: [],
        reporter: {
            type: "",
            output: ""
        }
    },
    envConfig: {},
    overrideConfig: {}
};
function taoCauHinhCuoi(defaultConfig, envConfig, overrideConfig){
    // 1. Dùng spread để merge config.
    const mergeConfig = {...defaultConfig,...envConfig,...overrideConfig}
    return mergeConfig;
}
//console.log(taoCauHinhCuoi(configCase1.defaultConfig, configCase1.envConfig, configCase1.overrideConfig));
function kiemTraCauHinh(finalConfig){
    const {env, baseUrl, timeout, retries, headed, browsers, reporter} = finalConfig;
    const errors = [];
    const warnings = [];

// ### Luật kiểm tra

// - `baseUrl` phải bắt đầu bằng `http://` hoặc `https://`
    if(!baseUrl.startsWith("http://") || !baseUrl.startsWith("https://")){
        errors.push(`${baseUrl} phải bắt đầu bằng "http://" hoặc "https://"`);
    }
    // - `timeout` phải từ `1000` trở lên
    if(timeout < 1000){
        errors.push(`time out: ${timeout} phải >1000`);
    }
    // - `retries` không được âm
    if (retries < 0){
        errors.push(`retries:${retries} phải > 0`);
    }
    // - xử lý brower :không được có browser trùng sau khi đã `trim` và đưa về lowercase
    //    - dùng `map` để `trim` và đưa từng browser về lowercase
//    - dùng `filter` để lấy ra browser bị trùng
//    - dùng `find` để lấy browser trùng đầu tiên nếu có
    if(browsers === ""){
        errors.push("browsers không được để trống");
    }
    const cleanBrowsers = browsers.map((browser) => browser.trim().toLowerCase()) ;
    const duplicateBrowsers = cleanBrowsers.filter((browser, index) => cleanBrowsers.indexOf(browser) !== index);
    const firstDuplicate = cleanBrowsers.find((browser, index) => cleanBrowsers.indexOf(browser) !== index);
    if (firstDuplicate) {
      errors.push(`browsers bị trùng : "${firstDuplicate}"`);
    }
    if(browsers === "ci" && headed === true){
        warnings.push("env = ci nhưng headed = true ");
    }
    if(baseUrl.includes("prod") && headed !== "production"){
        warnings.push("baseUrl chứa prod nhưng env khác production ");
    }
    return { errors, warnings };
}

const allCases = [
  configCase1,
  configCase2,
  configCase3,
  configCase4,
  configCase5,
];

for (i = 0; i < allCases.length; i++){
    const { defaultConfig, envConfig, overrideConfig } = allCases[i];
    const finalConfig = taoCauHinhCuoi(defaultConfig, envConfig, overrideConfig);
    const result = kiemTraCauHinh(finalConfig);
    console.log(`testcase ${i+1} `,result);
}










