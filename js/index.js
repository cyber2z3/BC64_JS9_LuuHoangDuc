var arrNV = [];

function getValueUser() {
  //lấy dữ liệu 9 input bên ngoài khi người dùng nhập xong và bấm thêm sinh viên
  var arrInput = document.querySelectorAll("form input, form select");

  //gọi tới tất cả cá thẻ span thông báo lỗi thông qua class text-danger
  var arrError = document.querySelectorAll("form .sp-thongbao");
  var nhanVien = new NhanVien();
  var isValid = true; //validation variable

  // chạy vòng lặp dữ liệu
  for (var i = 0; i < arrInput.length; i++) {
    //arrInput => lấy dữ liệu
    //arrError => lấy id
    var inputId = arrInput[i].id;
    var inputValue = arrInput[i].value;
    var errorId = arrError[i].id;

    // check input
    // console.log("inputId: " + inputId + " length: " + inputId.length);
    // console.log("inputValue: " + inputValue + " length: " + inputValue.length);
    // console.log("errorId: " + errorId + " length: " + errorId.length);
    // console.log(" ");

    //check validation -------------------------------------
    document.getElementById(errorId).style.display = "block";
    //1. check tài khoảng nhân viên
    if (inputId == "tknv") {
      isValid &=
        checkEmtyValue(inputValue, errorId) &&
        checkMinMaxValue(inputValue, errorId, 4, 6) &&
        checkOnlyNums(inputValue, errorId);
    }
    //2. check tên nhân viên
    else if (inputId == "name") {
      isValid &=
        checkEmtyValue(inputValue, errorId) &&
        checkNameValue(inputValue, errorId);
    }
    //3. check email
    else if (inputId == "email") {
      isValid &=
        checkEmtyValue(inputValue, errorId) &&
        checkEmailValue(inputValue, errorId);
    }
    //4. check passord
    else if (inputId == "password") {
      isValid &=
        checkEmtyValue(inputValue, errorId) &&
        checkPasswordValue(inputValue, errorId) &&
        checkMinMaxValue(inputValue, errorId, 6, 10);
    }
    //5. check datepicker
    else if (inputId == "datepicker") {
      isValid &=
        checkEmtyValue(inputValue, errorId) &&
        checkDayValue(inputValue, errorId);
    }
    //6. check lương cơ bản
    else if (inputId == "luongCB") {
      var intInputValue = parseInt(inputValue);
      isValid &=
        checkEmtyValue(inputValue, errorId) &&
        checkMinMaxInt(inputValue, errorId, 1000000, 20000000) &&
        checkOnlyNums(inputValue, errorId);
    }
    //7. check số giờ làm
    else if (inputId == "gioLam") {
      isValid &=
        checkEmtyValue(inputValue, errorId) &&
        checkMinMaxInt(inputValue, errorId, 80, 200);
    } else {
      checkEmtyValue(inputValue, errorId);
    }

    // lấy dữ liệu
    nhanVien[inputId] = arrInput[i].value;
  }
  return nhanVien;
}
document.getElementById("btnThemNV").onclick = function (event) {
  event.preventDefault();

  var nhanVien = getValueUser();
  arrNV.push(nhanVien);

  document.getElementById("formQLNV").reset();
  luuDuLieuLocalStorage("arrNV", arrNV);
  hienThiDuLieu();
};

//hiển thị dữ liệu
//in ra màn hình vào tag có id 'tableDanhSach'
// assign để lấy cả hàm và giá trị
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
        <td>${nhanVien.tongLuong()}</td>
        <td>${nhanVien.xepLoai()}</td>
        <td>
        <button onclick="xoaDuLieuUser(${
          nhanVien.tknv
        })" class="btn btn-danger">Xoá</button>
        <button onclick="getInforUser(${
          nhanVien.tknv
        })" class="btn btn-warning ml-3">Sửa</button>
        </td>
    </tr>
    `;
    document.getElementById("tableDanhSach").innerHTML = content;
  }
}

//lưu dữ liệu local storage
//lưu ý trên local không lưu được object/ array => chuyển thành string
function luuDuLieuLocalStorage(key, value) {
  var stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}

//lấy dữ liệu từ từ local storage
//input (key) => lấy tên của arr/object
//chuyển dữ liệu từ string => object / arr như ban đầu
function layDuLieuLocalStorage(key) {
  var dataLocal = localStorage.getItem("arrNV");
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

//xóa dữ liệu USER (tknv)
function xoaDuLieuUser(tknv) {
  console.log("xoa du lieu check");
  console.log("check tknv: " + tknv);
  var index = -1;
  for (var i = 0; i < arrNV.length; i++) {
    console.log(arrNV[i].tknv);
    console.log(tknv);
    if (arrNV[i].tknv == tknv || tknv == "" || tknv == undefined) {
      //chắc chắn mã sinh viên này là sinh viên cần xóa
      console.log("xoa du lieu tai: " + i);
      index = i;
    }
    console.log("check vong lap");
  }
  //cấu trúc điều
  if (index != -1) {
    arrNV.splice(index, 1);
    luuDuLieuLocalStorage("arrNV", arrNV);
    hienThiDuLieu();
  }
}
//khi người dùng click vào nút chính sửa, sẽ lấy thông tin người dùng và đưa lên các input
//Thực hiện ngăn chặn người dùng chỉnh sửa mã sinh viên
//Sau khi người dùng chỉnh sửa thành công, sẽ thực hiện việc lấy thông tin người dùng sau chỉnh sửa và thay đổi dữ liệu
function getInforUser(tknv) {
  console.log("hello: " + tknv);
  // document.querySelector(".modal.fade").classList.add("show");
  // document.getElementById("myModal").style.display = "block";
  document.getElementById("btnThem").click();
  var nhanVienIndex = {};
  for (var i = 0; i < arrNV.length; i++) {
    var nhanVien = arrNV[i];
    console.log(nhanVien.tknv);
    console.log(tknv);
    if (nhanVien.tknv == tknv) nhanVienIndex = nhanVien;
  }
  var arrInput = document.querySelectorAll("form input, form select");
  console.log(arrInput);
  for (var i = 0; i < arrInput.length; i++) {
    console.log(arrInput[i]);
    console.log("nhanVienIndex: " + nhanVienIndex[i]);
    var htmlDom = arrInput[i];
    var id = htmlDom.id;
    htmlDom.value = nhanVienIndex[id];
  }
}

//update informatio
document.getElementById("btnCapNhat").onclick = updateValueUser;
function updateValueUser() {
  console.log("updateValueUser checked");
  var nhanVien = getValueUser();

  //tìm vị trí của dữ liệu đang nằm trong mảng
  //var index = -1
  for (var i = 0; i < arrNV.length; i++) {
    if (nhanVien.tknv == arrNV[i].tknv) {
      arrNV[i] = nhanVien;
    }
  }
  luuDuLieuLocalStorage("arrNV", arrNV);
  hienThiDuLieu();
}

//lọc nhân viên
document.getElementById("btnTimNV").onclick = function () {
  console.log("tim nv");
  var loaiNV = document.getElementById("searchName").value;
  console.log(loaiNV);

  hienThiDuLieuDaLoc(arrNV, loaiNV);
};
function hienThiDuLieuDaLoc(arr, loaiNV) {
  if (arr == undefined) {
    arr = arrNV;
  }
  loaiNV = loaiNV.charAt(0).toUpperCase() + loaiNV.slice(1);
  if (loaiNV == "" || loaiNV == undefined) {
    return hienThiDuLieu();
  }
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nhanVien = arr[i];
    var newNhanVien = new NhanVien();

    nhanVien = Object.assign(newNhanVien, nhanVien);

    if (nhanVien.xepLoai() == loaiNV) {
      content += `
          <tr>
              <td>${nhanVien.tknv}</td>
              <td>${nhanVien.name}</td>
              <td>${nhanVien.email}</td>
              <td>${nhanVien.datepicker}</td>
              <td>${nhanVien.chucvu}</td>
              <td>${nhanVien.tongLuong()}</td>
              <td>${nhanVien.xepLoai()}</td>
              <td>
              <button onclick="xoaDuLieuUser(${
                nhanVien.tknv
              })" class="btn btn-danger">Xoá</button>
              <button onclick="getInforUser(${
                nhanVien.tknv
              })" class="btn btn-warning ml-3">Sửa</button>
              </td>
          </tr>
          `;
    }
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

//clear form when click btn
document.getElementById("btnThem").onclick = function () {
  document.getElementById("formQLNV").reset();
};
