function hienKetQua() {
  // B1: DOM tới các inputs để lấy giá trị
  var chuHo = document.getElementById("chuHo").value;
  var soKw = +document.getElementById("soKw").value;
  // B2: viết hàm để xử lý và tính toán tiền điện
  var tienDien = tinhTienDien(soKw, 1300, 1100, 850, 650, 500);
  // B3 Xuất kết quả ra màn hình
  document.getElementById("thongBaoTienDien").style.display = "block";
  document.getElementById("xuatTien").innerHTML =
    "Số tiền điện phải trả của chủ hộ " +
    chuHo +
    " là: " +
    tienDien.toLocaleString() +
    " VND";
}
// Viết hàm nhận vào số kw và  giá tiền của các mốc kw  sau đó tính toán ra tổng số tiền điện cần trả

function tinhTienDien(soKw, kw_350, kw_350_200, kw_200_100, kw_100_50, kw_50) {
  var soKw = +document.getElementById("soKw").value;
  var tienDien = 0;
  if (soKw > 350) {
    tienDien =
      50 * kw_50 +
      50 * kw_100_50 +
      100 * kw_200_100 +
      200 * kw_350_200 +
      (soKw - 350) * kw_350;
  } else if (soKw > 200) {
    tienDien =
      50 * kw_50 +
      50 * kw_100_50 +
      100 * kw_200_100 +
      (soKw - 200) * kw_350_200;
  } else if (soKw > 100) {
    tienDien = 50 * kw_50 + 50 * kw_100_50 + (soKw - 100) * kw_200_100;
  } else if (soKw > 50) {
    tienDien = 50 * kw_50 + (soKw - 50) * kw_100_50;
  } else {
    tienDien = soKw * kw_50;
  }
  return tienDien;
}
