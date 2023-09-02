var dsnv = new danhSachNhanVien();
function layThongTin() {
  var tk = document.querySelector("#tknv").value;
  var ht = document.querySelector("#name").value;
  var e = document.querySelector("#email").value;
  var mk = document.querySelector("#password").value;
  var nl = document.querySelector("#datepicker").value;
  var lcb = document.querySelector("#luongCB").value;
  var cv =
    document.querySelector("#chucvu").options[
      document.querySelector("#chucvu").selectedIndex
    ].value;
  var gltt = document.querySelector("#gioLam").value;
  return new nhanVien(tk, ht, e, mk, nl, lcb, cv, gltt);
}
function hienThiThongTin(DS) {
  var thongTin = "";
  for (let i = 0; i < DS.length; i++) {
    thongTin += `<tr>
        <td>${DS[i].taiKhoan}</td>
        <td>${DS[i].hoTen}</td>
        <td>${DS[i].email}</td>
        <td>${DS[i].ngayLam}</td>
        <td>${DS[i].chucVu}</td>
        <td>${DS[i].tongLuong()}</td>
        <td>${DS[i].loaiNhanVien()}</td>
        <td><button class="btn btn-danger" onclick="xoaThongTin('${
          DS[i].taiKhoan
        }')">Xóa</button></td>
    </tr>`;
  }
  document.querySelector("#tableDanhSach").innerHTML = thongTin;
}
function xoaThongTin(TK) {
  for (let i = 0; i < dsnv.nhanVien.length; i++) {
    if (dsnv.nhanVien[i].taiKhoan === TK) dsnv.nhanVien.splice(i, 1);
  }
  hienThiThongTin(dsnv.nhanVien);
}
function xoaDuLieu() {
  document.querySelector("#tknv").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#datepicker").value = "";
  document.querySelector("#luongCB").value = "";
  document.querySelector("#chucvu").value = "";
  document.querySelector("#gioLam").value = "";
}
document.querySelector("#btnThemNV").addEventListener("click", () => {
  var thongTin = layThongTin();
  var thongTinHopLe = true;
  thongTinHopLe &=
    kiemTraTaiKhoan(thongTin.taiKhoan, "#tbTKNV") &&
    kiemTraHoTen(thongTin.hoTen, "#tbTen") &&
    kiemTraEmail(thongTin.email, "#tbEmail") &&
    kiemTraMatKhau(thongTin.matKhau, "#tbMatKhau") &&
    kiemTraNgayLam(thongTin.ngayLam, "#tbNgay") &&
    kiemTraLuongCoBan(thongTin.luongCoBan, "#tbLuongCB") &&
    kiemTraChucVu(thongTin.chucVu, "#tbChucVu") &&
    kiemTraGioLamTrongThang(thongTin.gioLamTrongThang, "#tbGiolam");
  if (thongTinHopLe) {
    dsnv.themNhanVien(thongTin);
    hienThiThongTin(dsnv.nhanVien);
    xoaDuLieu();
  }
});
document.querySelector("#btnTimNV").addEventListener("click", () => {
  document.querySelector("#tableDanhSach").innerHTML = "";
  hienThiThongTin(
    dsnv.timNhanVienTheoLoai(document.querySelector("#searchName").value)
  );
  document.querySelector("#searchName").value = "";
});
document.querySelector("#btnCapNhat").addEventListener("click", () => {
  var taiKhoanCapNhat = document.querySelector("#tknv").value;
  var kiemTra = false;
  for (let i = 0; i < dsnv.nhanVien.length; i++) {
    if (dsnv.nhanVien[i].taiKhoan === taiKhoanCapNhat) {
      kiemTra = true;
      let thongTinCapNhat = layThongTin();
      let kiemTraHopLe = true;
      kiemTraHopLe &=
        kiemTraHoTen(thongTinCapNhat.hoTen, "#tbTen") &&
        kiemTraEmail(thongTinCapNhat.email, "#tbEmail") &&
        kiemTraMatKhau(thongTinCapNhat.matKhau, "#tbMatKhau") &&
        kiemTraNgayLam(thongTinCapNhat.ngayLam, "#tbNgay") &&
        kiemTraLuongCoBan(thongTinCapNhat.luongCoBan, "#tbLuongCB") &&
        kiemTraChucVu(thongTinCapNhat.chucVu, "#tbChucVu") &&
        kiemTraGioLamTrongThang(thongTinCapNhat.gioLamTrongThang, "#tbGiolam");
      if (kiemTraHopLe) dsnv.capNhatNhanVien(thongTinCapNhat);
    }
  }
  if (!kiemTra)
    document.querySelector("#tbTKNV").innerHTML =
      "Không tìm thấy tài khoản cần cập nhật";
  else {
    hienThiThongTin(dsnv.nhanVien);
    xoaDuLieu();
  }
});
