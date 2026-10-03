function tingTong2(a:number, b:number): number{
    return a + b;
}
console.log(tingTong2(3,4));
// number
let tuoi: number = 25;

// string
let hoTen2 : string = "Neko";

// boolean
let daXoa : boolean = true;
// null
let chiLaNull : null = null;
// biến này luôn luôn là null -> vì vậy hầu như không có tác dụng thực tế
//(chiLaNull = { name: "Neko"});  không thể gán biến
// union type -> | phân chia giữa 2 loại type
let apiResponse: string | null = null; // có thể là null có thể là string nhưng giá trị ban đầu là null
apiResponse = "dữ liệu từ server";
// undefined
let chuaGan : string;

// các cách khai báo undefined ở trong TS
// 1. khai báo union
let phone: string | undefined;
console.log(phone);
phone = "abc123";
// cách 2: optional param tỏng function -> dùng dấu hỏi chấm
function chao (name: string, lop?: string){
    // lúc này lop sẽ tương đương với string | undefined khi dùng dấu hỏi chấm
    console.log (`Xin chào ${name}`);
    if (lop){
        console.log(`Lớp ${lop}`);
    }
}
chao("neko");
chao ("neko", "1234");

// cách 3: optional property trong object
interface HocSinh {
    ten: string;
    email?: string;
    // tương đương string | underfined
}
let hs: HocSinh = {ten : "neko"};
console.log(hs.email);
//console.log(hs.ten2);

let hocSinhDiHoc : HocSinh | null = null;
hocSinhDiHoc = {ten: "Dihoc"};
hocSinhDiHoc = null;
// nếu dữ liệu có sử dụng undefined -> dữ liệu có thể chưa tồn tại hoặc không được truyền, không có key
// nếu dữ liệu có sử dụng null -> tôi biết biến này nhưng hiện tại không có

// type inference - typescript tự suy luận những trường hợp đơn giản
let tuoi3 : number = 30;
let tuoi4 = 40;

//----------------- union type-----------
// khi 1 biến có thể mang nhiều kiểu dữ liệu khác nhau, dùng dấu |
let maSanPham: String | number;
maSanPham = "SP022";
maSanPham = 1;
// ứng dựng api có thể trả về null hoặc data
// null có nghĩa đã gọi api rồi nhưng không có dữ liệu
let apiData : String | null = null;
apiData = "dữ liệu server";
//hàm tìm kiếm có thể thấy hoặc không tìm thấy
type User = {name: String};
// undefined nghĩa là không tìm thấy phần tử phù hợp
let userTimDuoc: User | undefined;
userTimDuoc = {name: "abc"};
userTimDuoc = undefined;

// ứng dụng trong function

function hienThiMaDonHang (orderId: String | number){
    if (typeof orderId === "String"){
        return orderId.toUpperCase();
    }
    return orderId.toString();
}

// Literal String union - chọn trong danh sách cố định
// nghĩa là thay vì string quá rộng ta literal kê chính xác giá trị được phép
type TestStatus = "passed" | "failed" | "skipped" | "pending";
let currentTest: TestStatus = "failed";
currentTest = "skipped";

type UserRole = "admin" | "editor" | "viewer";
function loginAs(role: UserRole){
    console.log("login with", role);
}
loginAs("admin");

//----- any/unkown------------
// any: bỏ qua kiểm tra kiểu
// gọi sai, truyền sai typescript vẫn cho qua 
// hạn chế tối đa, chỉ dùng khi migrate code cũ
let duLieuTuUI: any = "admin";

// unknown không biết kiểu nên phải kiểm tra trước

let giaTriTuFile: unknown = "admin@example.com";
if (typeof giaTriTuFile === "string") {
    console.log(giaTriTuFile.toLocaleUpperCase());
}

// ---------định kiểu cho mảng-------------
const browserName = ["chromium"];
const scores: number[] = [8,9];
//scores.push(y);// báo lỗi luôn vì mảng đang đc khai báo là number
scores.push(4);
console.log(scores);

// --------- mảng hỗn hợp---------
const csvRow: (string | number | null) [] = ["neko", 25, null,"admin"];
// không lạm dụng mảng hổn hợp,mảng chỉ nên chứa cùng 1 kiểu dữ liệu

// ------- tuple----------
// tuple mảng có cấu trúc cố định
// tuple là mảng có số lượng phần tử và kiểu từng vị trí cố định
const coordinate:[number, number] = [10.3, 30.2];
const loginPair: [string, string] = ["admin@em", "123"];
type HeaderPair = [string, string];
const headers: HeaderPair[] = [
    ["Authorization","Bear token123"],
    ["Content-type", "application/json"],
];

// --------- readonly--------
const testRoles: readonly string[] = ["admin", "editor"];
console.log(testRoles[0]);

// các method dùng trong array giống như trong java script

type ApiUser = {
    id: number;
    email: string;
    role: "admin" | "viewer";
    enabled: boolean;
};
const userFromApi: ApiUser[]= [
    {
        id: 1,
        email: "admin@example.com",
        role: "admin",
        enabled: true,

    },
        {
        id: 2,
        email: "viewer@example.com",
        role: "viewer",
        enabled: true,

    },
        {
        id: 3,
        email: "disable@example.com",
        role: "admin",
        enabled: false,

    },
];
const email = userFromApi.map((user)=> user.email);
console.log(email);
const enabledUser = userFromApi.map((user)=> user.enabled);
console.log(enabledUser);

// inline type - kiểu trực tiếp
const user2: {email: string ; password: string } = {
    email: "abc",
    password: "123",
};
// optional properties
type CreateUserInput = {
    email: string;
    phone?: string;
};
const userA1: CreateUserInput = {
    email: "abc",
};
// định kiểu dữ liệu cho hàm
function cong(a: number, b:number): number{ // number cuối cùng là kiểu dữ liệu cho kết quả trả về
    return a + b;
}
function taoLoiChao (ten: string): string{
    return `Xin chao ${ten}`;
}
// void= hàm ko trả về giá trị nào có ý nghĩa, giống cái việc hàm rất nhiều action nhưng không trả ra kết quả
function logStep (message: string): void{
    console.log(`[STEP] ${message}`);
}
// ---- async---------
async function clickButton(selector:string) : Promise<void> {};
async function layTieuDe(): Promise<string> {
    return "trang dashboard";
}
function mocChoDoi (selector: string, timeout?: number): void{
    const ms = timeout ?? 5000;
    console.log(`Cho ${selector} toi da ${ms}`);
}
mocChoDoi("abc");
mocChoDoi("abc", 20000);
 