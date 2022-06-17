/**
 * Bài 5: Tính ngày tháng năm
 * Mô hình 3 khối:
 * - Input:
 *      + ngay: Number, thang: Number, nam: Number
 * -Xử lý: 
 *      + sử dụng switch case  để xác định từng tháng trong năm
 *      + Trường hợp btnNgayHomQua => đối với tháng 1 vào ngày 1/1/nam => ketQuaBai5 = 31/12/ + (nam -1)
 *      + Các trường hợp còn lại => ngay / thang / nam => (ngay -1) / thang /nam. Và nếu rơi vào ngày 1 hàng tháng => tùy vào tháng sẽ có các ngày 28 || 30 || 31 + thang -1 +nam
 *      + Trường hợp btnNgayMai => đối với tháng 12 vào ngày 31/12/nam => ketQuaBai5 = 1/1 + (nam +1)
 *      + các trường hợp còn lại => ngay / thang / nam => (ngay + 1) / thang / nam. Và nếu rơi vào các ngày cuối tháng như 28 || 30 || 31 => 1 / (thang + 1) /nam
 *      + Các trường hợp nhập sai tháng => alert('vui lòng nhập đúng tháng')
 * - Output:
 *      + ketQuaBai5 = ?
 */
document.getElementById('btnNgayHomQua').onclick = function () {
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);
    var ketQuaBai5 = '';

    switch (thang) {
        case 1: {
            if (ngay > 1 && ngay <= 31) {
                ketQuaBai5 = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (1 == ngay) {
                ketQuaBai5 = '31/12/' + (nam - 1);
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 2: {
            if (ngay > 1 && ngay <= 28) {
                ketQuaBai5 = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay === 1) {
                ketQuaBai5 = '31/' + (thang - 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 3: {
            if (ngay > 1 && ngay <= 31) {
                ketQuaBai5 = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay === 1) {
                ketQuaBai5 = '28/' + (thang - 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 4: {
            if (ngay > 1 && ngay <= 30) {
                ketQuaBai5 = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay === 1) {
                ketQuaBai5 = '31/' + (thang - 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 5: {
            if (ngay > 1 && ngay <= 31) {
                ketQuaBai5 = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay === 1) {
                ketQuaBai5 = '30/' + (thang - 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 6: {
            if (ngay > 1 && ngay <= 30) {
                ketQuaBai5 = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay === 1) {
                ketQuaBai5 = '31/' + (thang - 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 7: {
            if (ngay > 1 && ngay <= 31) {
                ketQuaBai5 = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay === 1) {
                ketQuaBai5 = '30/' + (thang - 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 8: {
            if (ngay > 1 && ngay <= 31) {
                ketQuaBai5 = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay === 1) {
                ketQuaBai5 = '31/' + (thang - 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 9: {
            if (ngay > 1 && ngay <= 30) {
                ketQuaBai5 = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay === 1) {
                ketQuaBai5 = '31/' + (thang - 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 10: {
            if (ngay > 1 && ngay <= 31) {
                ketQuaBai5 = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay === 1) {
                ketQuaBai5 = '30/' + (thang - 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 11: {
            if (ngay > 1 && ngay <= 30) {
                ketQuaBai5 = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay === 1) {
                ketQuaBai5 = '31/' + (thang - 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 12: {
            if (ngay > 1 && ngay <= 31) {
                ketQuaBai5 = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay === 1) {
                ketQuaBai5 = '30/' + (thang - 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        default: {
            ketQuaBai5 = 'Ngày không xác định';
        }
    }
    document.getElementById('ketQuaBai5').innerHTML = ketQuaBai5;
}
document.getElementById('btnNgayMai').onclick = function () {
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);
    var ketQuaBai5 = '';
    switch (thang) {
        case 1: {
            if (ngay >= 1 && ngay < 31) {
                ketQuaBai5 = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay === 31) {
                ketQuaBai5 = '1/' + (thang + 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 2: {
            if (ngay >= 1 && ngay < 28) {
                ketQuaBai5 = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay === 28) {
                ketQuaBai5 = '1/' + (thang + 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 3: {
            if (ngay >= 1 && ngay < 31) {
                ketQuaBai5 = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay === 31) {
                ketQuaBai5 = '1/' + (thang + 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 4: {
            if (ngay >= 1 && ngay < 30) {
                ketQuaBai5 = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay === 30) {
                ketQuaBai5 = '1/' + (thang + 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 5: {
            if (ngay >= 1 && ngay < 31) {
                ketQuaBai5 = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay === 31) {
                ketQuaBai5 = '1/' + (thang + 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 6: {
            if (ngay >= 1 && ngay < 30) {
                ketQuaBai5 = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay === 30) {
                ketQuaBai5 = '1/' + (thang + 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 7: {
            if (ngay >= 1 && ngay < 31) {
                ketQuaBai5 = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay === 31) {
                ketQuaBai5 = '1/' + (thang + 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 8: {
            if (ngay >= 1 && ngay < 31) {
                ketQuaBai5 = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay === 31) {
                ketQuaBai5 = '1/' + (thang + 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 9: {
            if (ngay >= 1 && ngay < 30) {
                ketQuaBai5 = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay === 30) {
                ketQuaBai5 = '1/' + (thang + 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 10: {
            if (ngay >= 1 && ngay < 31) {
                ketQuaBai5 = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay === 31) {
                ketQuaBai5 = '1/' + (thang + 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 11: {
            if (ngay >= 1 && ngay < 30) {
                ketQuaBai5 = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay === 30) {
                ketQuaBai5 = '1/' + (thang + 1) + '/' + nam;
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        case 12: {
            if (ngay >= 1 && ngay < 31) {
                ketQuaBai5 = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay === 31) {
                ketQuaBai5 = '1/1/' + '/' + (nam + 1);
            } else {
                ketQuaBai5 = 'Ngày không xác định';
            }
        } break;
        default: {
            ketQuaBai5 = 'Ngày không xác định';
        }
    }
    document.getElementById('ketQuaBai5').innerHTML = ketQuaBai5;
}

/**
 * Bài 6: Tính ngày
 * Mô hình 3 khối:
 * - Input: 
 *      + inputThang: Number, inputNam: Number
 * - Xử lý:
 *      + Sử dụng switch case để xác định 12 tháng cụ thể   
 *      + các tháng có 31 ngày: 1, 3, 5, 7, 8, 10, 12
 *      + các tháng có 30 ngày: 4, 6, 9, 11
 *      + trường hợp tháng 2 có 28 hoặc 29 ngày tùy năm nhuận:  
 *          . Sử dụng if với điều kiện ((inputNam % 4 == 0 && inputNam % 100 !== 0) || inputNam %400 ==0) để xác định năm có 29 ngày 
 *          . trường hợp còn lại là 28 ngày
 * - Output:    
 *      + ketQuaBai6 = ?
 */

document.getElementById('btnTinhNgay').onclick = function () {
    var inputThang = Number(document.getElementById('inputThang').value);
    var inputNam = Number(document.getElementById('inputNam').value);
    var ketQuaBai6 = '';
    switch (inputThang) {
        case 1: {
            ketQuaBai6 = '31 ngày';
        } break;
        case 2: {
            if ((inputNam % 4 == 0 && inputNam % 100 !== 0) || inputNam % 400 == 0) {
                ketQuaBai6 = '29 ngày';
            } else {
                ketQuaBai6 = '28 ngày';
            }
        } break;
        case 3: {
            ketQuaBai6 = '31 ngày';
        } break;
        case 4: {
            ketQuaBai6 = '30 ngày';
        } break;
        case 5: {
            ketQuaBai6 = '31 ngày';
        } break;
        case 6: {
            ketQuaBai6 = '30 ngày';
        } break;
        case 7: {
            ketQuaBai6 = '31 ngày';
        } break;
        case 8: {
            ketQuaBai6 = '31 ngày';
        } break;
        case 9: {
            ketQuaBai6 = '30 ngày';
        } break;
        case 10: {
            ketQuaBai6 = '31 ngày';
        } break;
        case 11: {
            ketQuaBai6 = '30 ngày';
        } break;
        case 12: {
            ketQuaBai6 = '31 ngày';
        } break;
        default: {
            ketQuaBai6 = '0 ngày';
        }
    }
    document.getElementById('ketQuaBai6').innerHTML = 'Tháng ' + inputThang + ' năm ' + inputNam + ' có ' + ketQuaBai6;

}
/**
 * Bài 7: Đếm số
 * Mô hình 3 khối:
 * - Input:
 *      + nhapSo: Number
 * - Xử lý:
 *      + Tách số nhập vào có 3 chữ số thành 3 phần: hangTram, hangChuc, donVi:
 *          . Công thức:    
 *              1. hangTram = Math.floor(nhapSo / 100)
 *              2. hangChuc = Math.floor(nhapSo % 100 / 10);
 *              3. donVi = nhapSo % 10;
 *      + Sử dụng switch case cho từng thành phần được tách vì mỗi phần chỉ giới hạn 10 đơn vị, riêng hangTram giới hạn 9 đơn vị( trừ số 0)
 * - Output: 
 *      + ketQuaBai7 = hangTram + hangChuc + donVi
 *      
 */


document.getElementById('btnDocSo').onclick = function () {
    var nhapSo = Number(document.getElementById('nhapSo').value);
    var hangTram = Math.floor(nhapSo / 100);
    var hangChuc = Math.floor(nhapSo % 100 / 10);
    var donVi = nhapSo % 10;
    switch (hangTram) {
        case 1: {
            hangTram = 'Một trăm ';
        } break;
        case 2: {
            hangTram = 'Hai trăm ';
        } break;
        case 3: {
            hangTram = 'Ba trăm ';
        } break;
        case 4: {
            hangTram = 'Bốn trăm ';
        } break;
        case 5: {
            hangTram = 'Năm trăm ';
        } break;
        case 6: {
            hangTram = 'Sáu trăm ';
        } break;
        case 7: {
            hangTram = 'Bảy trăm ';
        } break;
        case 8: {
            hangTram = 'Tám trăm ';
        } break;
        case 9: {
            hangTram = 'Chín trăm ';
        } break;
        default: {
            alert('Số hàng trăm không xác định được');
            hangTram = '';
        }
    }
    switch (hangChuc) {
        case 0: {
            hangChuc = '';
        } break;
        case 1: {
            hangChuc = 'mười ';
        } break;
        case 2: {
            hangChuc = 'hai mươi ';
        } break;
        case 3: {
            hangChuc = 'ba mươi ';
        } break;
        case 4: {
            hangChuc = 'bốn mươi ';
        } break;
        case 5: {
            hangChuc = 'năm mươi ';
        } break;
        case 6: {
            hangChuc = 'sáu mươi ';
        } break;
        case 7: {
            hangChuc = 'bảy mươi ';
        } break;
        case 8: {
            hangChuc = 'tám mươi ';
        } break;
        case 9: {
            hangChuc = 'chín mươi ';
        } break;
        default: {
            alert('Số hàng chục không xác định được');
            hangChuc = '';
        }
    }
    switch (donVi) {
        case 0: {
            donVi = '';
        } break;
        case 1: {
            donVi = 'một';
        } break;
        case 2: {
            donVi = 'hai';
        } break;
        case 3: {
            donVi = 'ba';
        } break;
        case 4: {
            donVi = 'bốn';
        } break;
        case 5: {
            donVi = 'năm';
        } break;
        case 6: {
            donVi = 'sáu';
        } break;
        case 7: {
            donVi = 'bảy';
        } break;
        case 8: {
            donVi = 'tám';
        } break;
        case 9: {
            donVi = 'chín';
        } break;
        default: {
            alert('Số hàng đơn vị không xác định được');
            donVi = '';
        }
    }
    document.getElementById('ketQuaBai7').innerHTML = 'Đọc: ' + hangTram + hangChuc + donVi;
}


/**
 * Bài 8: Tìm sinh viên xa trường nhất
 * Mô hình 3 khối:
 * - Input:
 *      + sinhVien1, sinhVien2, sinhVien3: String
 *      + toaDoX1, toaDoX2, toaDoX3, toaDoX4: Number
 *      + toaDoY1, toaDoY2, toaDoY3, toaDoY4: Number
 * - Xử lý:
 *      + Tính độ quãng cách đường đi của từng sinh viên = công thức căn bậc 2 của bình phương tọa độ X trường học - tọa độ X sinh viên cộng cho bình phương tọa độ Y trường học - tọa độ Y sinh viên => sử dụng Math.pow để tính bình phương và Math.sqrt để tính căn bậc 2
 *  => var tinh? = Math.pow((toaDoX4 - toaDoX?),2) + Math.pow((toaDoY4- toaDoY?),2);
 *  => var tinhSinhVien? = Math.sqrt(tinh?)
 *      + Sau đó dùng if để tìm quãng đường nào xa nhất:    
 *  => if(tinhSinhVien1 > tinhSinhVien2 && tinhSinhVien1 >tinhSinhVien3){
        ketQuaBai8 = sinhVien1;
    }else if(tinhSinhVien2 >tinhSinhVien1 && tinhSinhVien2 > tinhSinhVien3){
        ketQuaBai8 = sinhVien2;
    }else{
        ketQuaBai8 = sinhVien3;
    }
    - Output:
            + ketQuaBai8 = ?;
 */

document.getElementById('btnTim').onclick = function(){
    var toaDoX1 = Number(document.getElementById('toaDoX1').value);
    var toaDoY1 = Number(document.getElementById('toaDoY1').value);
    var toaDoX2 = Number(document.getElementById('toaDoX2').value);
    var toaDoY2 = Number(document.getElementById('toaDoY2').value);
    var toaDoX3 = Number(document.getElementById('toaDoX3').value);
    var toaDoY3 = Number(document.getElementById('toaDoY3').value);
    var toaDoX4 = Number(document.getElementById('toaDoX4').value);
    var toaDoY4 = Number(document.getElementById('toaDoY4').value);
    var sinhVien1 = document.getElementById('sinhVien1').value;
    var sinhVien2 = document.getElementById('sinhVien2').value;
    var sinhVien3 = document.getElementById('sinhVien3').value;
    var tinh = Math.pow((toaDoX4 - toaDoX1), 2 ) + Math.pow((toaDoY4 - toaDoY1), 2);
    var tinhSinhVien1 = Math.sqrt(tinh);
    var tinh2 = Math.pow((toaDoX4 - toaDoX2), 2 ) + Math.pow((toaDoY4 - toaDoY2), 2);
    var tinhSinhVien2 = Math.sqrt(tinh2);
    var tinh3 = Math.pow((toaDoX4 - toaDoX3), 2 ) + Math.pow((toaDoY4 - toaDoY3), 2);
    var tinhSinhVien3 = Math.sqrt(tinh3);
    var ketQuaBai8 = '';
    if(tinhSinhVien1 > tinhSinhVien2 && tinhSinhVien1 >tinhSinhVien3){
        ketQuaBai8 = sinhVien1;
    }else if(tinhSinhVien2 >tinhSinhVien1 && tinhSinhVien2 > tinhSinhVien3){
        ketQuaBai8 = sinhVien2;
    }else{
        ketQuaBai8 = sinhVien3;
    }
    document.getElementById('ketQuaBai8').innerHTML = 'Sinh viên xa trường nhất: ' + ketQuaBai8;
}