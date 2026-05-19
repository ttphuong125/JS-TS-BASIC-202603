let rawProjectName = "   Neko CRM   ";
let rawEnvName = "    ";
let rawPassRate = "82";
let rawHasReport = "true";
let rawCriticalMessage = "   ";
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"

//Yêu cầu
// Dùng .trim() để làm sạch rawProjectName và rawEnvName.
// Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng
// -> dùng chính giá trị đã làm sạch.
// Ép rawPassRate sang Number.
// Ép rawHasReport sang Boolean đúng cách.

// Đúng: trim() cho project name là chuẩn, ra "Neko CRM".
let projectName = rawProjectName.trim();

// Đúng: trim() env trước khi kiểm tra là đúng hướng.
let envName = rawEnvName.trim();

// Đúng: Ép `rawPassRate` sang Number đúng yêu cầu.
let passRate = Number(rawPassRate);

// SAI: `Boolean(rawHasReport)` không phải cách ép đúng trong bài này.
// Giải thích: `Boolean("false")` vẫn ra `true` vì mọi chuỗi khác rỗng đều là truthy.
// Gợi ý:
// let hasReport = rawHasReport === "true";
let hasReport = Boolean(rawHasReport);

// Đúng: Với dữ liệu env đang rỗng, nhánh else gán "Development" ra đúng kết quả.
// Góp ý: Có thể viết gọn hơn bằng 1 dòng để dễ đọc.
// Gợi ý:
// let environment = rawEnvName.trim() === "" ? "Development" : rawEnvName.trim();
if (envName) {
  envName = envName;
} else {
  envName = "Development";
}

// Góp ý: Đây là dòng debug giữa bài, không phải lỗi nhưng không cần thiết nếu cuối bài đã in báo cáo đầy đủ.
// Gợi ý:
// Xóa dòng console.log(envName); và chỉ in envName trong báo cáo cuối.
console.log(envName);

// Tạo hasCriticalBug theo quy tắc:
// nếu message là null hoặc undefined -> false
// nếu sau trim() là rỗng -> false
// ngược lại -> true
// Dùng if / else if để xếp hạng:
// >= 95 -> "EXCELLENT"
// >= 80 -> "GOOD"
// >= 60 -> "NEEDS IMPROVEMENT"
// còn lại -> "CRITICAL"

// SAI: Biến này đang nhận `rawCriticalMessage.trim()` nên kết quả là chuỗi, chưa phải Boolean.
// SAI: Đồng thời chưa check `null/undefined` trước khi gọi `.trim()`, nên nếu input là null sẽ lỗi ngay.
// Gợi ý:
// let hasCriticalBug;
// if (rawCriticalMessage === null || rawCriticalMessage === undefined) {
//   hasCriticalBug = false;
// } else if (rawCriticalMessage.trim() === "") {
//   hasCriticalBug = false;
// } else {
//   hasCriticalBug = true;
// }
let hasCriticalBug = rawCriticalMessage.trim();

// Góp ý: Đoạn này chỉ đang in "true"/"false" ra màn hình, nhưng chưa biến `hasCriticalBug` thành Boolean thật.
// Gợi ý:
// Sau khi tạo hasCriticalBug đúng kiểu Boolean, in message cuối bài bằng:
// console.log(hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng");
if (hasCriticalBug) {
  console.log("true");
} else {
  console.log("false");
}

// Đúng: Thứ tự if / else if để xếp hạng theo ngưỡng là đúng.
// Góp ý: Nên lưu grade vào biến để cuối bài in báo cáo rõ ràng hơn.
// Gợi ý:
// let grade;
// if (passRate >= 95) {
//   grade = "EXCELLENT";
// } else if (passRate >= 80) {
//   grade = "GOOD";
// } else if (passRate >= 60) {
//   grade = "NEEDS IMPROVEMENT";
// } else {
//   grade = "CRITICAL";
// }
if (passRate >= 95) {
  console.log("EXCELLENT");
} else if (passRate >= 80) {
  console.log("GOOD");
} else if (passRate >= 60) {
  console.log("NEEDS IMPROVEMENT");
} else {
  console.log("CRITICAL");
}

// Dùng switch/case để gán tên engine cho browserUsed:
// chrome -> "Chromium"
// edge -> "Chromium"
// firefox -> "Gecko"
// safari -> "WebKit"
// Nếu không khớp -> "Unknown"

// Đúng: Mapping trong switch/case là đúng với đề.
// Góp ý: Nên tạo biến `engine` riêng thay vì ghi đè lên `browserUsed`, như vậy cuối bài sẽ giữ được cả Browser và Engine.
// Gợi ý:
// let engine;
// switch (browserUsed) {
//   case "chrome":
//   case "edge":
//     engine = "Chromium";
//     break;
//   case "firefox":
//     engine = "Gecko";
//     break;
//   case "safari":
//     engine = "WebKit";
//     break;
//   default:
//     engine = "Unknown";
// }
switch (browserUsed) {
  case "chrome":
  case "edge":
    browserUsed = "Chromium";
    //console.log(browserUsed);
    break;
  case "firefox":
    browserUsed = "Gecko";
    break;
  case "safari":
    browserUsed = "WebKit";
    console.log(browserUsed);
    break;
  default:
    console.log("lỗi role không hợp lệ");
}

// Dùng toán tử 3 ngôi để tạo message cho report:
// nếu hasReport là true -> "Có report"
// ngược lại -> "Chưa có report"

// Đúng: Có dùng ternary đúng nhóm kiến thức đề bài.
// SAI: Nhưng sau dòng này `hasReport` không còn là Boolean nữa, mà đã thành chuỗi.
// Giải thích: Phía dưới nếu còn dùng `hasReport` để check điều kiện release thì sẽ sai kiểu dữ liệu.
// Gợi ý:
// let reportMessage = hasReport ? "Có report" : "Chưa có report";
hasReport = hasReport ? "Có report" : "Chưa có report";
console.log(hasReport);

// Tạo isReadyToRelease theo quy tắc:
// nếu pass rate dưới 80 -> false
// nếu có critical bug -> false
// nếu chưa có report -> false
// còn lại -> true
// In báo cáo ra console.

//let isReadyToRelease = passRate < 80 && hasCriticalBug === false && hasReport === false;
console.log("in ra kết quả cuối cùng");

let isReadyToRelease;

// Đúng: Điều kiện đầu tiên `passRate < 80` là đúng.
if (passRate < 80) {
  isReadyToRelease = false;
  console.log("không đủ điều kiện release");

// SAI: Điều kiện này đang ngược logic.
// Giải thích: Nếu `hasCriticalBug === false` thì đây lại là trạng thái tốt, không phải lý do để chặn release.
// Đồng thời ở bài làm hiện tại `hasCriticalBug` còn là chuỗi, nên phép so sánh này cũng không bao giờ đúng như mong muốn.
} else if (hasCriticalBug === false) {
  console.log("không đủ điều kiện release");

// SAI: Chỗ này cũng không đúng vì `hasReport` ban đầu bị ép sai, sau đó còn bị đổi thành chuỗi message.
// Gợi ý:
// } else if (!hasReport) {
//   isReadyToRelease = false;
//   console.log("không đủ điều kiện release");
} else if (hasReport === false) {
  console.log("không đủ điều kiện release");
} else {

  // SAI: Dòng báo cáo cuối đang hardcode nhiều giá trị:
  //   - Browser: chrome
  //   - Grade : GOOD
  //   - Report: Có report
  //   - Critical Bug: Không có bug nghiêm trọng
  //   - Ready: YES
  // Giải thích: Với bộ data hiện tại nhìn có vẻ đúng, nhưng đổi input là sai ngay vì báo cáo không lấy từ biến đã xử lý.
  // Gợi ý:
  // let grade = passRate >= 95 ? "EXCELLENT" : passRate >= 80 ? "GOOD" : passRate >= 60 ? "NEEDS IMPROVEMENT" : "CRITICAL";
  // let criticalBugText = hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng";
  // isReadyToRelease = passRate >= 80 && !hasCriticalBug && hasReport;
  // console.log(
  //   `Project: ${projectName}\nEnvironment: ${envName}\nBrowser: ${browserUsed}\nEngine: ${engine}\nPass Rate: ${passRate.toFixed(2)}%\nGrade: ${grade}\nReport: ${reportMessage}\nCritical Bug: ${criticalBugText}\nReady: ${isReadyToRelease ? "YES" : "NO"}`,
  // );
  console.log(
    `Project: ${projectName}\nEnviroment: ${envName}\nBrowser: chrome\nEngine: ${browserUsed}\nPass Rate: ${passRate}.00%\nGrade : GOOD\nReport: Có report\nCritical Bug:Không có bug nghiêm trọng\nReady: YES`,
  );
}

// Expected output
// Project:         Neko CRM
// Environment:     Development
// Browser:         chrome
// Engine:          Chromium

// Pass Rate:       82.00%
// Grade:           GOOD
// Report:          Có report
// Critical Bug:    Không có bug nghiêm trọng

// Ready:           YES

// ===================================================
// TỔNG HỢP REVIEW — BÀI 3
// ===================================================
// Kết quả: Cần sửa — Output hiện tại nhìn gần đúng với dữ liệu đang có, nhưng logic Boolean và điều kiện release chưa đúng nên bài chưa bám chuẩn đề.
//
// Điểm tốt:
//   - Biết dùng trim() cho project name và env.
//   - Ép `rawPassRate` sang Number đúng.
//   - Dùng đúng các nhóm kiến thức đề yêu cầu: if/else if, switch/case, ternary.
//   - Mapping browser sang engine đang đúng hướng.
//
// Cần cải thiện:
//   - Cần ép `rawHasReport` bằng so sánh chuỗi `rawHasReport === "true"` thay vì `Boolean(rawHasReport)`.
//   - Cần tạo `hasCriticalBug` theo đúng 3 bước null/undefined -> trim rỗng -> còn lại true, không gán trực tiếp bằng chuỗi.
//   - Cần giữ riêng Boolean `hasReport`, message `reportMessage`, biến `engine`, biến `grade` để tránh mất dữ liệu giữa chừng.
//   - Cần tính `isReadyToRelease` từ các biến đã xử lý thay vì để báo cáo cuối hardcode.
//   - Nên sửa typo `Enviroment` thành `Environment`.
// ===================================================
