function kiemTraTaiKhoan(TK, IDE) {
  document.querySelector(IDE).style.display = "block";
  var kiemTra;
  if (TK.trim()) {
    if (TK.length >= 4 && TK.length <= 6) {
      document.querySelector(IDE).innerHTML = "";
      kiemTra = true;
    } else {
      document.querySelector(IDE).innerHTML = "Tài khoản phải từ 4 đến 6 ký tự";
      kiemTra = false;
    }
  } else {
    document.querySelector(IDE).innerHTML = "Tài khoản không được để trống";
    kiemTra = false;
  }
  return kiemTra;
}
function kiemTraHoTen(HT, IDE) {
  document.querySelector(IDE).style.display = "block";
  var dieuKien = new RegExp("^[A-Za-z]+$");
  var kiemTra;
  if (HT.trim()) {
    if (dieuKien.test(HT)) {
      document.querySelector(IDE).innerHTML = "";
      kiemTra = true;
    } else {
      document.querySelector(IDE).innerHTML = "Họ tên phải là chữ";
      kiemTra = false;
    }
  } else {
    document.querySelector(IDE).innerHTML = "Họ tên không được để trống";
    kiemTra = false;
  }
  return kiemTra;
}
function kiemTraEmail(E, IDE) {
  document.querySelector(IDE).style.display = "block";
  var dieuKien = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var kiemTra;
  if (E.trim()) {
    if (E.match(dieuKien)) {
      document.querySelector(IDE).innerHTML = "";
      kiemTra = true;
    } else {
      document.querySelector(IDE).innerHTML = "Email chưa đúng định dạng";
      kiemTra = false;
    }
  } else {
    document.querySelector(IDE).innerHTML = "Email không được để trống";
    kiemTra = false;
  }
  return kiemTra;
}
function kiemTraMatKhau(MK, IDE) {
  document.querySelector(IDE).style.display = "block";
  var dieuKien =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
  var kiemTra;
  if (MK.trim()) {
    if (MK.match(dieuKien)) {
      document.querySelector(IDE).innerHTML = "";
      kiemTra = true;
    } else {
      document.querySelector(IDE).innerHTML =
        "Mật khẩu phải từ 6 đến 10 ký tự, bao gồm 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
      kiemTra = false;
    }
  } else {
    document.querySelector(IDE).innerHTML = "Mật khẩu không được để trống";
    kiemTra = false;
  }
  return kiemTra;
}
function kiemTraNgayLam(NL, IDE) {
  document.querySelector(IDE).style.display = "block";
  var kiemTra;
  if (NL.trim()) {
    if (
      NL.charAt(2) === "/" &&
      NL.charAt(5) === "/" &&
      NL.substring(6, NL.length).length === 4
    ) {
      document.querySelector(IDE).innerHTML = "";
      kiemTra = true;
    } else {
      document.querySelector(IDE).innerHTML =
        "Ngày làm phải có định dạng dd/mm/yyyy";
      kiemTra = false;
    }
  } else {
    document.querySelector(IDE).innerHTML = "Ngày làm không được để trống";
    kiemTra = false;
  }
  return kiemTra;
}
function kiemTraLuongCoBan(LCB, IDE) {
  document.querySelector(IDE).style.display = "block";
  var kiemTra;
  if (LCB.trim()) {
    if (+LCB >= 1000000 && +LCB <= 20000000) {
      document.querySelector(IDE).innerHTML = "";
      kiemTra = true;
    } else {
      document.querySelector(IDE).innerHTML =
        "Lương cơ bản phải từ 1.000.000 đến 20.000.000";
      kiemTra = false;
    }
  } else {
    document.querySelector(IDE).innerHTML = "Lương cơ bản không được để trống";
    kiemTra = false;
  }
  return kiemTra;
}
function kiemTraChucVu(CV, IDE) {
  document.querySelector(IDE).style.display = "block";
  var kiemTra;
  if (CV) {
    document.querySelector(IDE).innerHTML = "";
    kiemTra = true;
  } else {
    document.querySelector(IDE).innerHTML = "Phải chọn chức vụ hợp lệ";
    kiemTra = false;
  }
  return kiemTra;
}
function kiemTraGioLamTrongThang(GLTT, IDE) {
  document.querySelector(IDE).style.display = "block";
  var kiemTra;
  if (GLTT.trim()) {
    if (+GLTT >= 80 && +GLTT <= 200) {
      document.querySelector(IDE).innerHTML = "";
      kiemTra = true;
    } else {
      document.querySelector(IDE).innerHTML =
        "Giờ làm trong tháng phải từ 80 đến 200 giờ";
      kiemTra = false;
    }
  } else {
    document.querySelector(IDE).innerHTML =
      "Giờ làm trong tháng không được để trống";
    kiemTra = false;
  }
  return kiemTra;
}
