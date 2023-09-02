function nhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLamTrongThang
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLamTrongThang = _gioLamTrongThang;
  this.tongLuong = function () {
    if (this.chucVu === "Sếp") return 3 * +this.luongCoBan;
    else if (this.chucVu === "Trưởng Phòng") return 2 * +this.luongCoBan;
    else return +this.luongCoBan;
  };
  this.loaiNhanVien = function () {
    if (+this.gioLamTrongThang >= 192) return "Xuất Sắc";
    else if (+this.gioLamTrongThang >= 176) return "Giỏi";
    else if (+this.gioLamTrongThang >= 160) return "Khá";
    else return "Trung Bình";
  };
}
function danhSachNhanVien() {
  this.nhanVien = [];
  this.themNhanVien = function (_nhanVien) {
    this.nhanVien.push(_nhanVien);
  };
  this.xoaNhanVien = function (_nhanVien) {
    for (let i = 0; i < this.nhanVien.length; i++) {
      if (this.nhanVien[i] === _nhanVien) this.nhanVien.splice(i, 1);
    }
  };
  this.capNhatNhanVien = function (_nhanVien) {
    for (let i = 0; i < this.nhanVien.length; i++) {
      if (this.nhanVien[i].taiKhoan === _nhanVien.taiKhoan)
        this.nhanVien[i] = _nhanVien;
    }
  };
  this.timNhanVienTheoLoai = function (_loaiNhanVien) {
    var loaiNhanVien = [];
    for (let i = 0; i < this.nhanVien.length; i++) {
      if (this.nhanVien[i].loaiNhanVien() === _loaiNhanVien)
        loaiNhanVien.push(this.nhanVien[i]);
    }
    return loaiNhanVien;
  };
}
