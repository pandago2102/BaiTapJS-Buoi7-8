var arrNumber = [];
function addNumber() {
    var number = document.getElementById("number").value * 1;
    arrNumber.push(number);
    document.getElementById("number").innerHTML = "";
    document.getElementById("ketQua").innerHTML = arrNumber;
}
// b1: tổng các số dương trong mảng: 
function tongSoDuong() {
    var tongCacSoDuong = 0;
    arrNumber.forEach(function (item, index) {
        if (item > 0) {
            tongCacSoDuong += item;
        }
    });
    document.getElementById("tongSoDuong").innerHTML = tongCacSoDuong;
}
document.getElementById("soDuong").onclick = tongSoDuong;
// b2: đếm có bao nhiêu số dương trong mảng
function demSoDuong() {
    var demCacSoDuong = 0;
    arrNumber.forEach(function (item, index) {
        if (item > 0) {
            demCacSoDuong++;
        }
    });
    document.getElementById("demSoDuong").innerHTML = demCacSoDuong;
}
document.getElementById("demTongSoDuong").onclick = demSoDuong;
// b3: tìm số nhỏ nhất trong mảng
function soNhoNhatArr() {
    var soNhoNhat = arrNumber[0];
    var index = 0;
    arrNumber.forEach(function (item, index) {
        if (item < soNhoNhat) {
            soNhoNhat = item;
        }
    });
    document.getElementById("soNhoNhat").innerHTML = soNhoNhat;
}
document.getElementById("timSoNhoNhat").onclick = soNhoNhatArr;
// b4: tìm số dương nhỏ nhất trong mảng
function soDuongNhoNhat() {
    var soDuongMin = arrNumber[0];
    var index = 0;
    arrNumber.forEach(function (item, index) {
        if (item > 0 && item < soDuongMin) {
            soDuongMin = item;
        }
    });
    document.getElementById("soDuongNhoNhat").innerHTML = soDuongMin;
}
document.getElementById("duongMin").onclick = soDuongNhoNhat;
// b5: tìm số chẵn cuối cùng trong mảng. nếu mảng không có giá trị chẵn thì trả về -1
function soChanCuoiCungArr() {
    var soChanArr = 0;
    arrNumber.forEach(function (item, index) {
        for (var i = 0; i > arrNumber.length - 1; i--) {
            if (arrNumber[i] % 2 == 0) {
                soChanArr += arrNumber[i];
            } else {
                soChanArr = -1;
            }
        }
        if (item % 2 == 0) {
            soChanArr += item;
        }
    })
    document.getElementById("soChanCuoiCung").innerHTML = soChanArr;
}
document.getElementById("soChan").onclick = soChanCuoiCungArr;
// b6: đổi chỗ 2 giá trị trong mảng theo vị trí (cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function doiGiaTri() {
    var viTri1 = Number(document.getElementById("numberOne").value);
    console.log(viTri1)
    var viTri2 = Number(document.getElementById("numberTwo").value);
    var bienTam = arrNumber[viTri1 - 1];
    arrNumber[viTri1 - 1] = arrNumber[viTri2 - 1];
    arrNumber[viTri2 - 1] = bienTam;
    document.getElementById("doiChoArr").innerHTML = arrNumber;
}
document.getElementById("doiCho").onclick = doiGiaTri;
// b7: sắp xếp mảng theo thứ tự tăng dần
function tangGiaTri() {
    arrNumber.sort(function (a, b) { return a - b });
    document.getElementById("viTriTangDan").innerHTML = arrNumber;
}
document.getElementById("sapXep").onclick = tangGiaTri;
// b8: tìm số nguyên đầu tiên trong mảng. nếu mảng không có số nguyên tố thì trả về -1

function timSoNguyen() {
    function soNguyenDau(x) {
        if (x < 2) {
            return -1;
        }
        for (var i = 2; i <= Math.sqrt(x); i++) {
            if (x % i == 0) {
                return -1;
            }
        }
        return x;
    }
    var soNguyen = -1;
    for (var i = 0; i < addNumber.length; i++) {
        var countNumber = soNguyenDau(addNumber[i]);
        if (countNumber != -1) {
            soNguyen = countNumber;
            break;
        }
    }

    document.getElementById("soNguyenDauTien").innerHTML = soNguyen;
}
document.getElementById("soNguyen").onclick = timSoNguyen;

// b9: nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var arrTwo = [];
function themMoi() {
    var numberSecond = document.getElementById("addNumber").value * 1;
    arrTwo.push(numberSecond);
    document.getElementById("addNumber").innerHTML = "";
    document.getElementById("themSoNguyen").innerHTML = arrTwo;

}
document.getElementById("themSo").onclick = themMoi;
function kquaSoNguyen() {
    var num = 0;
    if (arrTwo.length > 0) {
        num = arrTwo.filter(num => num > 0 && num % 2 !== 0);
    }
    document.getElementById("demSoNguyen").innerHTML = num.length;
}
document.getElementById("demSo").onclick = kquaSoNguyen;
// b10: so sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function soSanh() {
    // var ktsoDuong = 0;
    // if (arrNumber.length > 0) {
    //     ktsoDuong = arrNumber.filter(ktsoDuong => ktsoDuong > 0);
    //     bienDuong = +1;
    //     ktsoAm = arrNumber.filter(ktsoAm => ktsoAm < 0);
    //     bienAm = + 1;
    // }
    // var bienDuong = 0;
    // var bienAm = 0;
    // for (var i = 0; i > arrNumber.length; i++) {
    //     if (arrNumber[i] > 0) {
    //         bienDuong++;
    //     } else {
    //         bienAm++;
    //     };
    // };
    var bienDuong = 0;
    arrNumber.forEach(function (item) {
        if (item > 0) {
            bienDuong++;
        }
    });

    var bienAm = 0;
    arrNumber.forEach(function (item) {
        if (item < 0) {
            bienAm++;
        }
    });
    if (bienDuong > bienAm) {
        document.getElementById("soSanhAmDuong").innerHTML = "Dương lớn hơn Âm";
    } else {
        document.getElementById("soSanhAmDuong").innerHTML = "Dương bé hơn Âm";
    }
}
document.getElementById("soSanh").onclick = soSanh;