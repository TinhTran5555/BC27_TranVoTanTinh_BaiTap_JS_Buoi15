function hienKetQua() {
  // B1: DOM tới các inputs/select để lấy giá trị
  var monThu1 = +document.getElementById("monSo1").value;
  var monThu2 = +document.getElementById("monSo2").value;
  var monThu3 = +document.getElementById("monSo3").value;
  var diemChuan = +document.getElementById("diemChuan").value;
  // B2: Tính toán và viết các hàm để xử lý
  var diemKhuVuc = timDiemKhuVuc(khuVuc);
  var diemDoiTuong = timDiemDoiTuong(doiTuong);
  var tongDiem = diemDoiTuong + diemKhuVuc + monThu1 + monThu2 + monThu3;
  // B3: Xuất các kết quả ra màn hình
  document.getElementById("thongBaoDiem").style.display = "block";
  //  Lưu ý: Trường hợp có một môn điểm bằng 0
  if (!monThu1 || !monThu2 || !monThu3) {
    document.getElementById("xuatDiem").style.display = "none";
    document.getElementById("ketQua").innerHTML =
      "Đã rớt do có một môn điểm không!";
  } else {
    // Chia ra hai trường hợp đậu và rớt khi có được điểm chuẩn và tổng điểm thi
    if (tongDiem < diemChuan) {
      document.getElementById("xuatDiem").innerHTML =
        "Tổng điểm: " + tongDiem + " < " + diemChuan;
      document.getElementById("ketQua").innerHTML =
        "Đã rớt do không đủ điểm chuẩn!";
    } else {
      document.getElementById("xuatDiem").innerHTML =
        "Tổng điểm: " + tongDiem + " > " + diemChuan;

      document.getElementById("ketQua").innerHTML = "Chúc mừng bạn đã đậu";
    }
  }
}
// Viết hàm cho phép nhập vào khu vực để tìm được số điểm công theo tuỳ khu vực
function timDiemKhuVuc(khuVuc) {
  var value = khuVuc.value;
  var diemKhuVuc = 0;
  if (value === "A") {
    diemKhuVuc = 2;
  } else if (value === "B") {
    diemKhuVuc = 1;
  } else if (value === "C") {
    diemKhuVuc = 0.5;
  } else {
    diemKhuVuc = 0;
  }
  return diemKhuVuc;
}
// Viết hàm cho phép nhập vào đối tượng để tìm được số điểm công theo tuỳ đối tượng
function timDiemDoiTuong(doiTuong) {
  var value = doiTuong.value;
  var diemDoiTuong = 0;
  if (value === "1") {
    diemDoiTuong = 2.5;
  } else if (value === "2") {
    diemDoiTuong = 1.5;
  } else if (value === "3") {
    ddiemDoiTuong = 1;
  } else {
    diemDoiTuong = 0;
  }
  return diemDoiTuong;
}
