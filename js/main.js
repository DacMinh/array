 var tblBody = document.getElementById("tblBody")
 console.log(tblBody.rows)
 console.log('cell' ,tblBody.rows[0].cells)

 var dtb_sv0 = tblBody.rows[0].cells[3].innerHTML
 console.log('dtb_sv0',dtb_sv0);
 var dtb_sv1 = tblBody.rows[1].cells[3].innerHTML
 console.log('dtb_sv1',dtb_sv1);
 
 var danhSachDiem = []
 function layDanhSachDiem () {
    for( var i =0 ; i <tblBody.rows.length;i++){
        var diem = tblBody.rows[i].cells[3].innerHTML*1
        danhSachDiem.push(diem)
    }
 }
 layDanhSachDiem ()

 console.log(danhSachDiem)
//  tim sinh vien co diem cao naht61
// 1tao bien max = danhSachDiem[0]
//2 tao biến index =0
// 3duyet mang danhSachDiem[i
// -diem = danhSachDiem[i]
// néu diem >max ==> max == diem & index =i
//4  tenSV= tblBody.rows[i].cells[2].innerHTML
//5. dom tới thể can hien thi = tenSV +max


 document.getElementById ('btnSVCaoDiemNhat').onclick =function () {
    var max = danhSachDiem [0]
 
    var index = 0
      
    for  (var i = 0; i <danhSachDiem.length; i++ ) {
        var diem = danhSachDiem [i]
        if ( diem > max) {
            max = diem
        index = i      }}
    var tenSV = tblBody.rows[index].cells[2].innerHTML
    document.getElementById('svGioiNhat').innerHTML= 'SV: ' + tenSV + ' -' + max
 }
 //  tim sinh vien co diem thap naht61
// 1tao bien min = danhSachDiem[0]
//2 tao biến index =0
// 3duyet mang danhSachDiem[i
// -diem = danhSachDiem[i]
// néu diem < min ==> min == diem & index =i
//4  tenSV= tblBody.rows[i].cells[2].innerHTML
//5. dom tới thể can hien thi = tenSV +max

document.getElementById ('btnSVThapDiemNhat').onclick =function () {
    var min = danhSachDiem [0]
 
    var index = 0
      
    for  (var i = 0; i < danhSachDiem.length; i++ ) {
        var diem = danhSachDiem [i]
        if ( diem < min) {
            min = diem
        index = i      }}
    var tenSV = tblBody.rows[index].cells[2].innerHTML
    document.getElementById('svYeuNhat').innerHTML= 'SV: ' + tenSV + ' -' + min
 }

 // dem số lượng sinh viên giỏi
 // var dem = 0
 // 2 duyet mảng danhSachDiem
 // Nếu diem = danhSachDiem [i] >= 8
 // Tăng biến  Đếm 1 đơn vị : dem += 1 (dem==)
 // dom tới thẻ cần hiển thị = dem
 //
 document.getElementById ("btnSoSVGioi").onclick = function () {
    var dem = 0

    for ( var i = 0; i < danhSachDiem.length; i++ ) {
        var diem =danhSachDiem [i]
    } if ( diem >= 8 ) {
        dem++ 
    }
    document.getElementById ('soSVGioi').innerHTML = dem + " SV"

 }
 // In danh sách co diem trung bình lớn hơn  5
 // 1. var content = ' '
 // 2 tien hanh duyet mảng danhSachDiem
 // - diem  = danhSachDiem [i]
 // if diem >5
 // var tenSv = tblBody.rows[i].cells[2].innerHTML
 // content += tenSV +  ' - ' + diem 
 // Dom tới thể cần hiển thị = content

 document.getElementById ("btnSVDiemHon5").onclick = function () {
    var content = ""

    for ( var i = 0; i < danhSachDiem.length; i++ ) {
        var diem =danhSachDiem [i]
     if ( diem > 5 ) {
        var  tenSv = tblBody.rows[i].cells[2].innerHTML
        content += tenSv + " -" + diem + "<br/>"
    }}
    document.getElementById ('dsDiemHon5').innerHTML = content  

 }

 // sap xep danh sách diem theo thứ tự tăng dần
 // 
// cách 1
// //  function timMin (array) {
// //     var min = array [0]
// //     var index  = 0 
// //     for (var i = 0; i < array.length; i ++) {
// //         if (min > array[i]) {
// //             min = array[i]
// //             index = i
// //         }
// //     }
// // return [ min, index]

// //  }
// // document.getElementById('btnSapXepTang').onclick = function () {
// //     var arrayTangDan = [];
// //     var length= danhSachDiem.length;
// //     for(var i = 0; i <length; i++) {
// //         var arrayMin = timMin(danhSachDiem)
// //         arrayTangDan.push(arrayMin[0])
// //         danhSachDiem.splice(arrayMin[1],1)

// //     }
// //     document.getElementById('dtbTang').innerHTML = arrayTangDan
// }
// cách 2
document.getElementById('btnSapXepTang').onclick = function () {
    for ( var i= 0 ; i < danhSachDiem.length-1;i++) {
        for ( var j = i +1 ;j <  danhSachDiem.length; j++){
            if(danhSachDiem[i] > danhSachDiem[j]){
                var temp = danhSachDiem [j]
                danhSachDiem [i] = danhSachDiem[j]
                danhSachDiem[j] = temp
            }
           
        }
    }
    document.getElementById('dtbTang').innerHTML = arrayTangDan
}
