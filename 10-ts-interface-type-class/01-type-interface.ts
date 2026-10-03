// khai báo interface
interface UserTest{
    id: number;
    name: string;
    email: string;
    // optional - có hay không đều ok
    age?: number;
    // readonly - gán 1 lần, không được sửa
    readonly createdAt: Date;
}
// sử dụng interface
const user1: UserTest = {
    id: 1,
    name: "neko",
    email: "123@gmail.com",
    createdAt: new Date(),
};
function greet (user: UserTest): string{
    return `xin chào ${user.name}, email: ${user.email}`;
}
// khai báo method ở trong interface
interface Calculator{
    // C1: method short hand (pho bien nhat nen dung)
    add (a: number, b: number) : number;
    subtract (a: number, b: number): number;
    //C2: arrow function không nên dùng
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
}
// sử dụng
const calc: Calculator = {
    add(a,b){
        return a + b;
    },
    subtract(a,b){
        return a - b;
    },
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b,
};
// khai báo async trong interface, không có chữ async mà chỉ cần Promise
interface UserService{
    baseUrl: string;
    // methods
    getUser(id: number): Promise<{name:string;email:string}>;
}
const userService: UserService ={
    baseUrl: "http",
    async getUser(id) {
        return{
            name: "222",
            email: "123"
        };
    },
};
// Extends
// tạo interface con từ cha, kế thừa toàn bộ thuộc tính và thêm cái mới
// kế thừa đơn
interface User2{
    id: number;
    name: string;
}
interface Admin extends User2{
    role: "admin";
    permission: string[];
}
const admin: Admin= {
    id: 1,
    name: "abc",
    role: "admin",
    permission: ["ab", "c"],
};
// khi interface con khai báo lại 1 key đã có ở cha, TS bắt buộc kiểu mới phải tương thích (gán được) với kiểu cha
// Hay là bạn chỉ được thu hẹp kiểu, không được đổi sang kiểu khác
interface Base{
    id: number;
    status: string;
}
// -----trường hợp này sẽ báo lỗi ngay vì id đang kiểu là number nhưng con lại là string
// interface Broken extends Base{
//     id: string;
// } 
interface Narrowed extends Base{
    id: 1|2|3;
    status: "active" | "off";
}
//cách sử dụng interface extends thực thế sẽ sử dụng nhiều tỏng mô tả data - api entities kế thừa nhau
interface BaseEntity {
    id: number;
    createdAt: string;
    updateAt: string;
}
interface User4 extends BaseEntity{
    name: string;
    email: string;
}
interface Product extends BaseEntity{
    title: string;
    price: number;
}
async function fakeGetUser(id:number): Promise<User4> {
    return{
        id,
        createdAt: "abc",
        updateAt: "abc",
        name: "1",
        email: "faceuseremail",
    };  
}
async function runTest() {
    const user = await fakeGetUser(1);
    console.log(user.email);
}
runTest();
//best practice kết hợp interface làm hợp đồng, class implement
interface PageObject {
    url: string;
    goTo(): Promise<void>;
    isLoaded(): Promise<boolean>;
}
// Page()
class FakeBrowser{
    async open (url: string){
        console.log(`Mở ${url}`);
    }
}
class BasePage implements PageObject{
    url = "/";
    constructor(protected browser: FakeBrowser){}
    async goTo(){
        await this.browser.open(this.url);
    }
    async isLoaded(){
        return true;
    }
}
//page kế thừa code từ basePage (class extends) và gián tiếp tuân theo pageObject interface
class LoginPageObj extends BasePage{
    url = "/login";
    async this.isLoaded(){
        console.log("kiểm tra form login");
        return true;
    }
}
// pattern này kết họp 3 vai trò, mỗi cái giải quyết 1 vấn đề khác nhau
// interface PageObject -> vai trò hợp đồng -> bắt buộc mỗi page phải có url, goto, isload
// class BasePage -> code dùng chung -. viết 1 lần logic lập lại go to
// class extends từ basepage -> page cụ thể -> dùng lại code chung + overide hành vi
///class ProductPage extends BasePage (thieu isload)
// -> nhờ hợp đồng này, cả team chắc chắn page nào cũng có đủ method chuẩn
//Bỏ code lặp.  mọi page ko cần viết lại hàm goto và isloaded
/// khi hợp đồng thay đổi, TS sẽ báo hết chỗ cần sửa, ví dụ thêm method
// QUY TẮC: intetface lo phần "phải có gì" (an toàn kiểu, thồng nhất team) . còn class extends lo phần (làm như thế nào ) -> tái sử dụng code

//Declaration mergin - gộp khai báo (ĐỘC QUYỀN CHỈ CÓ Ỏ INTERFACE)
//khi khai báo 2 interface cùng tên, TS sẽ tự động gộp lại thành 1

interface TestContext{
    baseUrl: string;
}
interface TestContext{
    authToken: string;
}
const ctx: TestContext = {
    baseUrl: "http://",
    authToken: "bv",
};
//1 class có thể implement nhiều interface
interface Loggable {
  log(): void;
}

interface Serializable {
  toJSON(): string;
}
class ApiService implements Loggable, Serializable {
  log() {
    console.log("abc");
  }
  toJSON() {
    return "abc";
  }
}
const api = new ApiService();
api.log();

// type alias
type Email = string;
type Age = number;
type User5 = {name:string; email: Email; age: Age};

let UserId : User5 = {
    name: "Abc",
    email: "abc1",
    age: 12,
};
// độc quyền của type: Alias cho function đơn lẻ
type MathFn = (a: number, b: number) => number;
const add: MathFn = (a, b) => a + b;
console.log(add(3,5));

// union type
// đây là kiểu mà interface không thể làm được
type Status = "active" | "inactive";
type ID = string | number;
type TestStatusResult = "passed" | "failed" | "skipped";

function getStatusResult (status: TestStatusResult): string{
    switch (status){
        case "passed":
            return "passsss";
        case "failed":
            return "failed";
        case "skipped":
            return "skippedddd";

    }
}
// gộp kiểu (intersection type &)
// dùng gộp nhiều type thành 1
// ví dụ
type User6 = {
    id: number;
    name: string;
};

type HasTimeStamp2 = {
    createdAt: string;
};
type AdminUser = User6 &
    HasTimeStamp2 & {
        role: "admin";
        permission: string[];
    };
//    const admin = AdminUser = {}
// khác key cùng kiểu
type A1 = {id: number};
type B1 = {email: string};
type C1 = A1 & B1;

// trùng key + cùng kiểu
type A2 = {id:number};
type B2 = {id: number};
type C2 = A2 & B2;

//Tránh trường hợp cùng key khác kiểu. typescript không báo lỗi 
type A3 = {id: string};
type B3 = {id: number};
type C3 = A3 & B3;
