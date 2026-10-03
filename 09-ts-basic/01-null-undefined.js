// null và underfined
// underfined chưa được định nghĩa trạng thái mặc định mà do chính JS gán cho biến của bạn khi bạn bỏ quên
// null(trống rỗng/ vô giá trị) -> trạng thái do con người chủ động gán vào
// tình huống như nào gặp undefined
// khai báo biến nhưng quên chưa gán giá trị
let hoTen;
console.log(hoTen);// chưa gián giá trị -> undefined
// truy cập 1 thuộc tính không tồn tại của object
const user = {name: "Neko"};
console.log(user.age); // cũng ra undefined 
// hàm không return gì cả
function chaoHoi(){
    console.log("xin chào");
}
const ketQua = chaoHoi();// ketQua = undefined
console.log(ketQua); // Error: ketQua is not defined
// tham số hàm không được truyền vào
function tinhTong(a, b){
    console.log("a = ", a);
    console.log("b = ", b);
    return a + b;
}
tinhTong(3);// không truyền tham số thì sẽ được gắn là undefined
// truy cập phần tử mảng vượt quá chỉ số
const danhSach = ["Mèo", "Chó", "Gà"];
console.log(danhSach[0]);
console.log(danhSach[3]); // ngoài mảng sẽ ra undefined
// Quy tắt vàng: Nếu thấy undefined xuất hiện thì 995 là mình quên gì đó Vd:quên gán biến, quên return
// gõ sai tên thuộc tính

// trường hợp null
// ngược lại với undefined, null luôn là hành động có ý thức của lập trình viên
// có thể hiểu là khởi tạo 1 biến sẽ chứa object sau này, nhưng chưa có dữ liệu
// tôi biết là biến này sẽ chứa object, nhưng hiện tại là chưa đăng nhập
let nguoiDungHienTai = null;
nguoiDungHienTai = {name: "Neko"};
console.log(nguoiDungHienTai);
// nói gắn gọn undefined thường mang ý nghĩa chưa được gán bị thiếu có thể quên.
// null là đã kiểm soát rồi nhưng cố tình không có giá trị
// khi sử dụng typeof
console.log(typeof undefined);
console.log(typeof null);// trả về kiểu dữ liệu là object
// để xử lý logic kiểm tra kiểu trả về là gì
// if (typeof nguoiDung ==='object') -> có thể là null
// if (nguoiDung === null) (clg -> chưa đăng nhập)
// if (nguoiDung === undefined) (clg -> biến chưa được khai báo)