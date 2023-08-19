// Lấy các phần tử DOM
let inputItem=document.getElementById("inputItem");
let addItemButton=document.getElementById("addItemButton");
let itemList=document.getElementById("itemList");

//Lắng nghe sự kiện click vào nút "Add"
addItemButton.addEventListener("click",function(){
    // lấy nội dung văn bản nhập vào ô input và 
    //loại bỏ các khoảng trắng ở đầu và cuối chuỗi.
    let newItemText=inputItem.value.trim();

    //a. Nếu có nội dung (newItemText)thì thêm nội dung vào danh sách và xóa trắng item
    if(newItemText!==""){
       //tạo phần tử li trong html bằng js
       let newItem=document.createElement("li");
       //gan noi dung li = newItemText: noi dung  moi ma nguoi dung nhap
       newItem.innerText=newItemText;
       //add li vao ul
       itemList.appendChild(newItem);
       //xoa khoang trang
       inputItem.value="";
       //Đặt lại màu nền của ô input thành màu trắng (mặc định)
       // để chuẩn bị cho lần nhập liệu tiếp theo.
       inputItem.style.backgroundColor="white";

    }else{
        //Nếu không có nội dung, chuyển background của item sang màu vàng
        inputItem.style.backgroundColor="yellow";
    }
});

// khi nhap vao input thi se doi lai mau white
inputItem.addEventListener("input",function(){
    inputItem.style.backgroundColor="white";
});
