// bài tập ví dụ về this
const user = {
    hoTen: "neko",
    tuoi: 18,
    gioiThieu(){
        console.log(`Tôi là ${this.hoTen}, ${this.tuoi} tuổi`);
    },
};
// khi gọi user.gioiThieu() -> kẻ đứng trc dấu . là user -> this là user
user.gioiThieu();
// Vd 2
const sanPham = {
    ten: "iphone 15",
    gia: 2500000,
    soLuong: 10,
    inThongTin(){
        console.log((this));
        console.log((this.ten));
        console.log((this.gia));
    },
    giamGia(phanTram){
    this.gia = this.gia * (1- phanTram / 100);
    console.log(`${this.ten} sau giảm giá: ${this.gia.toLocaleString()}đ`);
    },
};
sanPham.inThongTin();
sanPham.giamGia(20);

//// Vd về gọi làm khơi khơi -> trả về undefinded
// function inRaThis(){
//     console.log(this);
// }
// inRaThis(); //-> undefined
// arrow function không có this
const sanPham2 = {
    ten: "iphone 19",
    inten: ()=>{
        console.log(`tên là ${this.ten}`);
    },
    inTenDung()
    {
        console.log(`sp ${this.ten}`);
    }
};
sanPham2.inten();
sanPham2.inTenDung();
