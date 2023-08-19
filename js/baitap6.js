// 6. Viết chương trình gồm 3 ô input cho phép tính tổng giá trị nhập vào ở
//2 ô input và in ra tổng ở ô input thứ 3 bằng 3 cách khác nhau

let inputNumber1=document.getElementById("inputNumber1");
let inputNumber2=document.getElementById("inputNumber2");
let resurlt=document.getElementById("resurlt");

 // Cách 1: addEvenListenner
 inputNumber1.addEventListener("keyup",sumFuction)

 inputNumber2.addEventListener("keyup",sumFuction)

 //hàm tính tổng
 function sumFuction(){
    let num1= Number(inputNumber1.value);
    let num2= Number(inputNumber2.value);
    let sum=num1+num2;
    console.log(sum);
    resurlt.value=sum;
 }
