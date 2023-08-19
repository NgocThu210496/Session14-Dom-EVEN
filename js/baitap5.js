//Bai5.Viết chương trình gồm một ô input và một thẻ div dùng để hiển thị nội
//dung nhập vào ô input với ít nhất 3 cách khác nhau

// Tạo các phần tử DOM
let inputText=document.getElementById("inputText");
let showResult1=document.getElementById("showResult");

 // Cách 1: addEvenListenner
 // sử dụng cách này thì không cần gán trực tiếp vào html
//  inputText.addEventListener("keyup",function() {
//     showResult1.innerText = inputText.value;
// });

//cach 2: inline event: gan truc tiep vao the html
// function showResult(){
//     showResult1.innerText=inputText.value;
// }

//cach 3:element object
//function này sẽ đè lên thuộc tính bên html
inputText.onkeyup = function(){
    showResult1.innerText=inputText.value;
}

