//check input có để trông hay không
function checkEmtyValue(value, errorId) {
  document.getElementById(errorId).style.display = "block";
  //nếu đi vào được if sẽ là trường hợp người dùng đã nhập dữ liệu vào rồi
  if (value) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //trường hợp khi value rỗng
    document.getElementById(errorId).innerHTML = "Vui lòng nhập không bỏ trống";
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
    document.getElementById(errorId).innerHTML = "Email không đúng định dạng";
    return false;
  }
}
