function hienKetQua() {
  // B1: DOM tới inputs/radios để lấy giá trị

  var grabType = getCustomerType();
  var maKh = document.getElementById("maKh").value;
  var soK = +document.getElementById("soK").value;

  // B2: Kiểm tra xem user là khách hàng nào để áp dụng đúng công thức tính tiền
  var price = 0;

  switch (grabType) {
    case "Personal":
      price = 7.5 * soK + 25;
      break;
    case "Business":
      price = tinhPhiCapDoanhNghiep(soKn, soK);
      break;

    default:
      alert("Vui lòng chọn loại xe");
      break;
  }
//   B3: Xuất kết quả ra màn hình 
  document.getElementById("thongBaoTienCap").style.display = "block";
  document.getElementById("xuatTien").innerHTML = "Giá tiền cáp của khách hàng " + maKh + " là: " + price.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  );
}
// Viết hàm Dom tới các radio các loại khách hàng và trả về cho phép input số kết nối hiện lên hay không
function anHien() {
  var isBusiness = document.getElementById("business").checked;
  var isPersonal = document.getElementById("personal").checked;
  if (isBusiness) {
    document.getElementById("anHien").style.display = "block";
  }
  if (isPersonal) {
    document.getElementById("anHien").style.display = "none";
  }
}
// Viết hàm Dom tới các radio các loại khách hàng và trả về loại khách hàng đang được chọn
function getCustomerType() {
  var isBusiness = document.getElementById("personal").checked;
  var isPersonal = document.getElementById("business").checked;

  if (isBusiness) {
    return "Personal";
  }

  if (isPersonal) {
    return "Business";
  }
}
// Viết hàm tính phí kết nối cho cho khách hàng doanh nghiệp
function tinhPhiCapDoanhNghiep(soKn, soK) {
  var price = 0;
  var soKn = +document.getElementById("soKn").value;
  var soK = +document.getElementById("soK").value;
  if (soKn <= 10) {
    price = soK * 50 + 90;
  } else {
    price = 75 + (soKn - 10) * 5 + 15 + soK * 50;
  }
  return price;
}
