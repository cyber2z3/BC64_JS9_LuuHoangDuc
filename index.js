var arrNV = [];
function getValueUser() {
  var arrInput = document.querySelectorAll("form input, form select");
  console.log(arrInput);
  var nhanVien = new NhanVien();
  for (var i = 0; i < arrInput.length; i++) {
    var id = arrInput[i].id;
    nhanVien[id] = arrInput[i].value;
  }
  console.log(nhanVien);
  return nhanVien;
}
document.getElementById("btnThemNV").onclick = function (event) {
  console.log("submit checked");
  event.preventDefault();

  var nhanVien = getValueUser();
  arrNV.push(nhanVien);

  document.getElementById("formQLNV").reset();
  luuDuLieuLocalStorage("arrNV", arrNV);
  hienThiDuLieu();
  console.log(arrNV);
};
function hienThiDuLieu(arr) {
  //checked arr is undefinded or not
  if (arr == undefined) {
    arr = arrNV;
  }
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nhanVien = arr[i];
    var newNhanVien = new NhanVien();
    nhanVien = Object.assign(newNhanVien, nhanVien);
    content += `
    <tr>
        <td>${nhanVien.tknv}</td>
        <td>${nhanVien.name}</td>
        <td>${nhanVien.email}</td>
        <td>${nhanVien.datepicker}</td>
        <td>${nhanVien.chucvu}</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    `;
    document.getElementById("tableDanhSach").innerHTML = content;
  }
}
function luuDuLieuLocalStorage(key, value) {
  var stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}

function layDuLieuLocalStorage(key) {
  var dataLocal = localStorage.getItem("arrSinhVien");
  // kiểm tra xem dữ liệu lấy về có hay không
  if (dataLocal) {
    // xử lí hành động khi lấy được dữ liệu
    var convertData = JSON.parse(dataLocal);
    arrNV = convertData;
    hienThiDuLieu();
  } else {
    // xử lí hành động khi không có dữ liệu để lấy
  }
}
layDuLieuLocalStorage();
