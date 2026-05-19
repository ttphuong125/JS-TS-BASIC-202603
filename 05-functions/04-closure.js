// hình thái 1: return ra 1 hàm khác -> cổ điển
function taoMayChao(ten){
    function loiChao(){
        console.log(`xin chao, ${ten}`);
    }
    return loiChao;
}
const chaoNeko = taoMayChao("Neko");
console.log(chaoNeko());
// giải thích
// taoMayChao ("Neko")
// + Tạo biến Neko
// + tạo hàm lời chào
// + return loiChao ra ngoài

// chaoNeko()
// loiChao van nho ten = Neko
// Hình thái 2: callback chạy trễ sua đó - không cần return
// kiểu này hay gặp trong settimeout, setinterval
function demoHenGio(){
    let message = "tôi vẫn còn sống";

    setTimeout(function(){
        console.log(message);
    }, 100);
}
//demoHenGio();
// hình thái 3: Dùng object có sẵn cope bên ngoài
const testContext = {
    env: "staging",
    retry: 0,
};
function taoLoggerKetQua(){
    return function(testName){
        console.log(`${testName}-${testContext.env} - retry ${testContext.retry}`);
    };
}
const logResult = taoLoggerKetQua();
logResult("Login");
//console.log(logResult("Login")); //không cần console.log vì trong hàm đã có rồi
testContext.retry = 2;
//console.log(logResult("Login")); // không cần console.log vì trong hàm đã có rồi
logResult("Login");
// Vì sao đây vẫn là closure?
// hàm vẫn được return nằm trong bên ngoài
// khi chạy nó vẫn truy cập được testContext
// Điểm lưu ý: closure không sao chép nguyên object -> nó giữ nguyên truy cập tới biến tham chiếu 
// đang trỏ tới object

// hình thái 4: trả về object có method dùng chung biến ngoài
console.log("----- hình thái 4------");
function taoBoDem(){
    let count = 0
    return {
        tang(){
            count ++;
            console.log(`Count = ${count}`);
        },
        reset(){
            count= 0;
            console.log("reset xong");
        },
    };
}
const boDem = taoBoDem();
boDem.tang();
boDem.tang();
boDem.reset();
boDem.tang();



function mayTaoID(){
    let soThuTu = 0;
    function tangID(){
        soThuTu ++;
        return `USER_TEST ${soThuTu}`;
    }
    return tangID;
}
const layIdMoi = mayTaoID();
console.log(layIdMoi());
console.log(layIdMoi());
console.log(layIdMoi());
console.log(layIdMoi());
// khi mayTaoId chạy xong -> theo quy tắc scope biến soThuTu sẽ chết.
// Nhưng vì chúng ta đã tạo ra return tangID và hàm tangID đang closure (bao đóng)
// biến soThuTu vào bao kí ức, do đó biến soThuTu bất tử và tiếp tục tăng lên mỗi lần gọi layIdMoi()
// ứng dụng data factory
function taoNhaMaySinhEmail(domain){
    let dem = 0;
    return function(){
        dem ++;
        return `tester_${dem}@${domain}`;
    };
}
const sinhEmailStaging = taoNhaMaySinhEmail("Staging.neko.com");
const sinhEmailProd = taoNhaMaySinhEmail("neko.com");
console.log((sinhEmailStaging()));
console.log((sinhEmailStaging()));
console.log((sinhEmailProd()));
console.log((sinhEmailProd()));

// bài tập 
// viết 1 hàm TaoBoDem (tenNut) trả về 1 object với 2 method
// click() - tăng số lần click lên 1 và in ra "tên nút số click clicks"
// reset() - đặt lại click - đặt lại click - 0 và in ra "tên nút reset"
// Ví dụ kết quả mong muốn
// const nutLogin = taoBoDem("Login button");
// nutLogin.click() -> login button: 1 clicks
// nutLogin.click() -> login button: 2 clicks
// nutLogin.reset()
// nutLogin.click() -> login button: 1 clicks

console.log("----- bai tap nhỏ------");
function taoBoDem2(tenNut){
    let count = 0
    return {
        click(){
            count ++;
            console.log(`${tenNut} ${count} clicks`);
        },
        reset(){
            count= 0;
            console.log(`reset xong`);
        },
    };
}
const boDemClick = taoBoDem2("login button:");
boDemClick.click();
boDemClick.click();
boDemClick.reset(); 
boDemClick.click();
