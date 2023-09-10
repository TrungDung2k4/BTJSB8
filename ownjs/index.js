var dsnv = new danhSachNhanVien();
if (localStorage.getItem("DSNV")) {
  dsnv.nhanVien = JSON.parse(localStorage.getItem("DSNV")).map(
    (DL) =>
      new nhanVien(
        DL.taiKhoan,
        DL.hoTen,
        DL.email,
        DL.matKhau,
        DL.ngayLam,
        DL.luongCoBan,
        DL.chucVu,
        DL.gioLamTrongThang
      )
  );
  hienThiThongTin(dsnv.nhanVien);
}
function kiemTraThongTin(TT) {
  var kiemTraHopLe = true;
  kiemTraHopLe &=
    kiemTraTaiKhoan(TT.taiKhoan, "#tbTKNV") &&
    kiemTraHoTen(TT.hoTen, "#tbTen") &&
    kiemTraEmail(TT.email, "#tbEmail") &&
    kiemTraMatKhau(TT.matKhau, "#tbMatKhau") &&
    kiemTraNgayLam(TT.ngayLam, "#tbNgay") &&
    kiemTraLuongCoBan(TT.luongCoBan, "#tbLuongCB") &&
    kiemTraChucVu(TT.chucVu, "#tbChucVu") &&
    kiemTraGioLamTrongThang(TT.gioLamTrongThang, "#tbGiolam");
  return kiemTraHopLe;
}
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
        }')">Xóa</button>
        <button class="btn btn-warning" data-toggle="modal" data-target="#myModal" onclick="suaThongTin('${
          DS[i].taiKhoan
        }')">Cập Nhật</button>
        </td>
    </tr>`;
  }
  document.querySelector("#tableDanhSach").innerHTML = thongTin;
}
function xoaThongTin(TK) {
  for (let i = 0; i < dsnv.nhanVien.length; i++) {
    if (dsnv.nhanVien[i].taiKhoan === TK) dsnv.nhanVien.splice(i, 1);
  }
  hienThiThongTin(dsnv.nhanVien);
  localStorage.setItem("DSNV", JSON.stringify(dsnv.nhanVien));
}
function suaThongTin(TK) {
  for (let i = 0; i < dsnv.nhanVien.length; i++) {
    if (dsnv.nhanVien[i].taiKhoan === TK) {
      document.querySelector("#tknv").disabled = true;
      document.querySelector("#tknv").value = dsnv.nhanVien[i].taiKhoan;
      document.querySelector("#name").value = dsnv.nhanVien[i].hoTen;
      document.querySelector("#email").value = dsnv.nhanVien[i].email;
      document.querySelector("#password").value = dsnv.nhanVien[i].matKhau;
      document.querySelector("#datepicker").value = dsnv.nhanVien[i].ngayLam;
      document.querySelector("#luongCB").value = dsnv.nhanVien[i].luongCoBan;
      document.querySelector("#chucvu").value = dsnv.nhanVien[i].chucVu;
      document.querySelector("#gioLam").value =
        dsnv.nhanVien[i].gioLamTrongThang;
    }
  }
}
function xoaDuLieu() {
  document.querySelector("#tknv").disabled = false;
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
  if (kiemTraThongTin(thongTin)) {
    dsnv.themNhanVien(thongTin);
    hienThiThongTin(dsnv.nhanVien);
    xoaDuLieu();
    localStorage.setItem("DSNV", JSON.stringify(dsnv.nhanVien));
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
  var thongTinCapNhat = layThongTin();
  if (kiemTraThongTin(thongTinCapNhat)) {
    for (let i = 0; i < dsnv.nhanVien.length; i++) {
      if (dsnv.nhanVien[i].taiKhoan === thongTinCapNhat.taiKhoan)
        dsnv.nhanVien[i] = thongTinCapNhat;
    }
    hienThiThongTin(dsnv.nhanVien);
    localStorage.setItem("DSNV", JSON.stringify(dsnv.nhanVien));
  }
});
document.querySelector("#btnDong").addEventListener("click", () => xoaDuLieu());
