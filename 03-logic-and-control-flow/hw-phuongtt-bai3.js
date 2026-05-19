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
let projectName = rawProjectName.trim();
//let envName = rawEnvName.trim();
let passRate = Number(rawPassRate);
let hasReport = rawHasReport === "true";// phải so sánh
//let hasReport = Boolean(rawHasReport);// Giải thích: `Boolean("false")` vẫn ra `true` vì mọi chuỗi khác rỗng đều là truthy.
// Viết lại thành sử dụng toán tử 3 ngôi như sau
//let environment = envName ==="" ? "Development" : envName ;
// cách viết gọn hơn không cần biến trung gian
let environment = rawEnvName.trim() ==="" ? "Development" : rawEnvName.trim();
// console.log("---------",environment);

// if (envName){
   
//     envName = envName;
// }
// else{
//      envName = "Development";
// }
//console.log(envName);


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
// let hasCriticalBug = rawCriticalMessage.trim();

// if (hasCriticalBug){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// bài sửa lại
let hasCriticalBug;
if (rawCriticalMessage === "null" || rawCriticalMessage ==="undefined" ){
    hasCriticalBug = false;
}else if (rawCriticalMessage.trim() === ""){
    hasCriticalBug = false;
}
else {
    hasCriticalBug = true;
}

// Góp ý: Nên lưu grade vào biến để cuối bài in báo cáo rõ ràng hơn.
let grade;
if (passRate >=95){
    //console.log("EXCELLENT");
    grade = "EXCELLENT";
}else if(passRate >=80){
    //console.log("GOOD");
    grade = "EXCELLENT";
}else if(passRate >=60){
    //console.log("NEEDS IMPROVEMENT");
    grade = "EXCELLENT";
}
else{
    //console.log("CRITICAL");
    grade = "CRITICAL";
}

// Dùng switch/case để gán tên engine cho browserUsed:
// chrome -> "Chromium"
// edge -> "Chromium"
// firefox -> "Gecko"
// safari -> "WebKit"
// Nếu không khớp -> "Unknown"

//Góp ý: Nên tạo biến `engine` riêng thay vì ghi đè lên `browserUsed`, như vậy cuối bài sẽ giữ được cả Browser và Engine.
let engine;
switch(browserUsed){
    case "chrome":
    case "edge":
        engine = "Chromium";
        //console.log(browserUsed);
        break;
    case "firefox":
        engine = "Gecko"; 
    break;  
    case "safari":
        engine = "WebKit";
        //console.log(browserUsed);
    break;
default:
    engine = "default";
    //console.log("lỗi role không hợp lệ");
}

// Dùng toán tử 3 ngôi để tạo message cho report:		
// nếu hasReport là true -> "Có report"		
// ngược lại -> "Chưa có report"
// Đúng: Có dùng ternary đúng nhóm kiến thức đề bài.
// SAI: Nhưng sau dòng này `hasReport` không còn là Boolean nữa, mà đã thành chuỗi.
// Giải thích: Phía dưới nếu còn dùng `hasReport` để check điều kiện release thì sẽ sai kiểu dữ liệu.
// Nên phải gán vào 1 biến
let reportMessage = hasReport ? "Có report" : "Chưa có report" ;

//hasReport = hasReport ? "Có report" : "Chưa có report" ;
//console.log(hasReport);

// Tạo isReadyToRelease theo quy tắc:	
// nếu pass rate dưới 80 -> false	
// nếu có critical bug -> false	
// nếu chưa có report -> false	
// còn lại -> true	
// In báo cáo ra console.

//let isReadyToRelease = passRate < 80 && hasCriticalBug === false && hasReport === false;
console.log("in ra kết quả cuối cùng");

let isReadyToRelease;
let criticalBugText = hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng";
isReadyToRelease = passRate >= 80 && !hasCriticalBug && hasReport;
if (passRate < 80){
    isReadyToRelease = false;

    //console.log("không đủ điều kiện release");
}else if (hasCriticalBug === true){
    //console.log("không đủ điều kiện release");
    isReadyToRelease = true;
}else if (!hasReport){
    isReadyToRelease = false;
    //console.log("không đủ điều kiện release");
}
else{
   console.log(
    `Project: ${projectName}\nEnvironment: ${environment}\nBrowser: ${browserUsed}\nEngine: ${engine}\nPass Rate: ${passRate.toFixed(2)}%\nGrade: ${grade}\nReport: ${reportMessage}\nCritical Bug: ${criticalBugText}\nReady: ${isReadyToRelease ? "YES" : "NO"}`,
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