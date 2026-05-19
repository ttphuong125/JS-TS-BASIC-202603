// ## Bài 4: Phân tích kết quả chạy test có chạy lại

// ### Bối cảnh thực tế

// Đây là kiểu dữ liệu QA và automation gặp suốt:

// - một test có thể chạy nhiều lần
// - có test fail rồi pass ở lần chạy lại sau
// - có test duration âm do dữ liệu log lỗi
// - có kết quả trả về cho một test không tồn tại trong danh sách master

// ### Đề bài

// Viết hàm:

// ```javascript
// function phanTichKetQuaChay(results, options)
// ```

// ### Bộ data test dùng để làm bài

// ```javascript
const resultOptions = {
    slowThreshold: 2500,
};

const results = [
    {
        id: "TC_LOGIN_001",
        module: "login",
        statuses: ["fail", "pass"],
        durations: [1200, 800],
        owner: "an"
    },
    {
        id: "TC_SEARCH_002",
        module: "search",
        statuses: ["pass"],
        durations: [600],
        owner: "binh"
    },
    {
        id: "TC_CART_003",
        module: "cart",
        statuses: ["fail", "fail", "fail"],
        durations: [1500, 1700, 1600],
        owner: ""
    },
    {
        id: "TC_PAY_004",
        module: "payment",
        statuses: ["pass"],
        durations: [-50],
        owner: "chi"
    },
    {
        id: "TC_PROFILE_005",
        module: "profile",
        statuses: ["pass", "pass"],
        durations: [700, 650],
        owner: "duy"
    },
    {
        id: "",
        module: "report",
        statuses: ["pass"],
        durations: [300],
        owner: "ha"
    },
    {
        id: "TC_API_006",
        module: "api",
        statuses: ["fail", "unknown"],
        durations: [400, 500],
        owner: "linh"
    },
    {
        id: "TC_BILL_007",
        module: "billing",
        statuses: ["fail", "pass", "pass", "pass"],
        durations: [600, 700, 650, 620],
        owner: "minh"
    },
    {
        id: "TC_LOG_008",
        module: "log",
        statuses: ["skip"],
        durations: [100],
        owner: "nam"
    },
    {
        id: "TC_SYNC_009",
        module: "sync",
        statuses: ["fail", "pass"],
        durations: [1500],
        owner: "oanh"
    }
];

function phanTichKetQuaChay(results, resultOptions){
    const { slowThreshold } = resultOptions;
    const analyzed = [];
    const invalid = [];
    for(const result of results){
        const {id, module, statuses, durations, owner} = result;
        // 2. Một test được xem là `flaky` nếu:
        //    - có ít nhất 1 lần `fail`
        //    - và lần cuối là `pass`
        const finalStatus = statuses[statuses.length - 1];
        const retryCount = statuses.length - 1;
        const isFlaky = statuses.includes("fail") && finalStatus ==="pass";
        //Một test là `slow` nếu tổng duration lớn hơn `slowThreshold`
        let totalDuration = 0;
        for (duration of durations){
            totalDuration = totalDuration + duration;
        }
        const isSlow = totalDuration > slowThreshold;
        
        //4. Một test là invalid nếu:
        //- thiếu `id`
        //- `statuses.length !== durations.length`
        //- có duration âm
        let isInvalid = false;
        if (id === ""){
            isInvalid = true;
        }
        if (statuses.length !== durations.length){
            isInvalid = true;
        }
        for (const duration of durations) {
            if (duration < 0) {
            isInvalid = true;
            }
        }
        const testCase = {
        id,
        module,
        finalStatus,
        retryCount,
        totalDuration,
        isFlaky,
        isSlow,
        owner,
        };
        if (isInvalid) {
        invalid.push(testCase);
        } else {
        analyzed.push(testCase);
        }

    }
    let passed = 0;
    let failed = 0;
    let flaky = 0;
    let slow = 0;
    for (const t of analyzed) {
        if (t.finalStatus === "pass") passed++;
        if (t.finalStatus === "fail") failed++;
        if (t.isFlaky) flaky++;
        if (t.isSlow) slow++;
    }
    return {
    analyzed,
    invalid,
    summary: {
      total: results.length,
      passed,
      failed,
      flaky,
      slow,
      invalid: invalid.length,
    },
  };
}
console.log(phanTichKetQuaChay(results, resultOptions));
