function NhanVien() {
  this.tknv = "";
  this.name = "";
  this.email = "";
  this.password = "";
  this.datepicker = "";
  this.luongCB = 0;
  this.chucvu = "";
  this.gioLam = 0;

  this.tongLuong = function () {
    var tongLuong;
    switch (this.chucvu) {
      case "Sếp":
        tongLuong = this.luongCB * 3;
        break;
      case "Trưởng phòng":
        tongLuong = this.luongCB * 2;
        break;
      case "Nhân viên":
        tongLuong = this.luongCB;
        break;
    }
    return tongLuong;
  };

  this.xepLoai = function () {
    var work = this.gioLam;
    if (work >= 192) {
      return "Nhân viên xuất sắc";
    } else if (work >= 176) {
      return "Nhân viên giỏi";
    } else if (work >= 160) {
      return "Nhân viên khá";
    } else {
      return "Nhân viên trung bình";
    }
  };
}
