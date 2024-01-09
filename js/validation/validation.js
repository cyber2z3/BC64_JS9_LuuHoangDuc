//check input có để trông hay không
function checkEmtyValue(value, errorId) {
  //nếu đi vào được if sẽ là trường hợp người dùng đã nhập dữ liệu vào rồi
  if (value) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //trường hợp khi value rỗng
    document.getElementById(errorId).innerHTML = "Vui lòng không bỏ trống";
    return false;
  }
}

//1.Tài khoản tối đa 4-6 số, không để trống
function checkMinMaxValue(value, errorId, min, max) {
  //Hàm trim => loại bỏ khoảng trắng ở đầu và cuối
  //Hàm length => trả về độ dài của chuỗi
  var doDaiKyTu = value.trim().length;
  if (min <= doDaiKyTu && doDaiKyTu <= max) {
    //dữ liệu chuẩn phù hợp với độ dài yêu cầu
    //xử lý khi value đúng định dạng
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //xử lý khi sdt không đúng độ dài yêu cầu
    document.getElementById(errorId).innerHTML = `Nhập từ ${min} - ${max}`;
    return false;
  }
}
function checkOnlyNums(value, errorId) {
  var regexOnlyNums = /^[0-9]*$/;
  var checkOnlyNums = regexOnlyNums.test(value);
  if (checkOnlyNums) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML = "Chỉ nhập số";
    return false;
  }
}
function checkNameValue(value, errorId) {
  var regexName = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
  var chekcNameValue = regexName.test(value);
  //nếu đi vào được if sẽ là trường hợp người dùng đã nhập dữ liệu vào rồi
  if (chekcNameValue) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //trường hợp khi value rỗng
    document.getElementById(errorId).innerHTML =
      "Không nhập số hoặc kí tự đặc biệt";
    return false;
  }
}
function checkEmailValue(value, errorId) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var checkEmail = regexEmail.test(value);
  if (checkEmail) {
    //xử lý khi email đúng định dạng
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //xử lý khi email không đúng định dạng
    document.getElementById(errorId).innerHTML = "Email không đúng định dạng";
    return false;
  }
}

function checkPasswordValue(value, errorId) {
  var checkSpecial = /[*@!#%&()^~{}]+/.test(value),
    checkUpper = /[A-Z]+/.test(value),
    checkNumber = /[0-9]+/.test(value);
  //nếu đi vào được if sẽ là trường hợp người dùng đã nhập dữ liệu vào rồi
  console.log(checkSpecial);
  console.log(checkUpper);
  console.log(checkNumber);
  if (checkSpecial && checkUpper && checkNumber) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //trường hợp khi value rỗng
    document.getElementById(errorId).innerHTML = "Sai định dạng mật khẩu";
    return false;
  }
}
function checkDayValue(value, errorId) {
  var regexDay = /(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}/;
  var checkDayValue = regexDay.test(value);
  //nếu đi vào được if sẽ là trường hợp người dùng đã nhập dữ liệu vào rồi
  if (checkDayValue) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //trường hợp khi value rỗng
    document.getElementById(errorId).innerHTML =
      "Vui lòng đúng định dạng mm/dd/yy";
    return false;
  }
}
function checkMinMaxInt(value, errorId, min, max) {
  if (min <= value && value <= max) {
    //dữ liệu chuẩn phù hợp với độ dài yêu cầu
    //xử lý khi value đúng định dạng
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //xử lý khi sdt không đúng độ dài yêu cầu
    document.getElementById(errorId).innerHTML = `Nhập từ ${min} - ${max}`;
    return false;
  }
}
