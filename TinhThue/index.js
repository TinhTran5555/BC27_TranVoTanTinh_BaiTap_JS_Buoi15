function hienKetQua() {
  // B1: DOM tới các inputs để lấy giá trị
  var hoTen = document.getElementById("name").value;
  // B2: viết hàm phía dưới để xử lý tính toán
  var tienChiuThue = tinhTienChiuThue();
  var thueSuat = tinhThueSuat(tienChiuThue, 5, 10, 15, 20, 25, 30, 35);
  var tienNop = 0;
  // B3 Xuất kết quả ra màn hình
  document.getElementById("thongBaoTienThue").style.display = "block";
  //  Lưu ý: vì số thu nhập chịu thuế sẽ có trường hợp âm khi thu nhập qua thấp nên ta sẽ cho những nhóm người này không phải nộp thuế
  if (tienChiuThue > 0) {
    tienNop = tienChiuThue * (thueSuat / 100) * 1000000;
    // Chia nhỏ thêm hai trường hợp khi người dùng nhập và không nhập thông tin họ và tên
    if (hoTen === "") {
      document.getElementById("xuatTien").innerHTML =
        "Số tiền thuế phải nộp của bạn là: " +
        tienNop.toLocaleString() +
        " VND";
    } else {
      document.getElementById("xuatTien").innerHTML =
        "Số tiền thuế phải nộp của " +
        hoTen +
        " là: " +
        tienNoptoLocaleString() +
        " VND";
    }
  } else {
    alert("Số tiền thu nhập quá thấp");
    document.getElementById("xuatTien").innerHTML = "Bạn không phải đóng thuể";
  }
}
// Viết hàm tính thu nhập phải chịu thuế khi nhập vào số người phụ thuộc và thu nhập
function tinhTienChiuThue() {
  var thuNhap = +document.getElementById("thuNhap").value;
  var soNguoi = +document.getElementById("soNguoi").value;
  var tienChiuThue = thuNhap - 4 - soNguoi * 1.6;
  return tienChiuThue;
}
// Viết hàm nhận kết quả số thu nhập phải chịu thuế ở trên để dựa vào các mốc thuế suất tìm được thuế suất phải chịu
function tinhThueSuat(
  tienChiuThue,
  phantram_60,
  phantram_61_120,
  phantram_121_210,
  phantram_210_384,
  phantram_385_624,
  phantram_624_960,
  phantram_960
) {
  var tienChiuThue = tinhTienChiuThue();
  var thueSuat = 0;
  if (tienChiuThue > 960) {
    thueSuat = phantram_960;
  } else if (tienChiuThue > 624) {
    thueSuat = phantram_624_960;
  } else if (tienChiuThue > 385) {
    thueSuat = phantram_385_624;
  } else if (tienChiuThue > 210) {
    thueSuat = phantram_210_384;
  } else if (tienChiuThue > 120) {
    thueSuat = phantram_121_210;
  } else if (tienChiuThue > 60) {
    thueSuat = phantram_61_120;
  } else {
    thueSuat = phantram_60;
  }
  return thueSuat;
}
