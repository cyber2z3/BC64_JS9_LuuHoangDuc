//check input có để trông hay không
function checkEmtyValue(value, errorId) {
  //nếu đi vào được if sẽ là trường hợp người dùng đã nhập dữ liệu vào rồi
  if (value) {
    document.getElementById(errorId).innerHTML = "";
    return true;
    k;
  } else {
    //trường hợp khi value rỗng
    document.getElementById(errorId).innerHTML = "Vui lòng nhập không bỏ trống";
    return false;
  }
}

//1.Tài khoản tối đa 4-6 số, không để trống
