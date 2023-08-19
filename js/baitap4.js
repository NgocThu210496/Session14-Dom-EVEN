// Tạo các phần tử DOM
let labelStudentId = document.createElement("label");
labelStudentId.innerText = "Student Id";

let inputStudentId = document.createElement("input");
inputStudentId.setAttribute("id", "inputStudentId");
inputStudentId.setAttribute("type", "text");


let br1 = document.createElement("br");

let labelStudentName = document.createElement("label");
labelStudentName.innerText = "Student Name";

let inputStudentName = document.createElement("input");
inputStudentName.setAttribute("id", "inputStudentName");
inputStudentName.setAttribute("type", "text");

let br2 = document.createElement("br");

let labelStudentAge = document.createElement("label");
labelStudentAge.innerText = "Age";

let inputStudentAge = document.createElement("input");
inputStudentAge.setAttribute("id", "inputStudentAge");
inputStudentAge.setAttribute("type", "text");

let br3 = document.createElement("br");

let labelStudentPhone = document.createElement("label");
labelStudentPhone.innerText = "Phone";

let inputStudentPhone = document.createElement("input");
inputStudentPhone.setAttribute("id", "inputStudentPhone");
inputStudentPhone.setAttribute("type", "text");

let br4 = document.createElement("br");

let labelStudentEmail = document.createElement("label");
labelStudentEmail.innerText = "Email";

let inputStudentEmail = document.createElement("input");
inputStudentEmail.setAttribute("id", "inputStudentEmail");
inputStudentEmail.setAttribute("type", "text");

let br5 = document.createElement("br");

//nut button
let createButton = document.createElement("button");
createButton.innerText = "Create";

//gan vao trang
let form = document.getElementById("form");

form.appendChild(labelStudentId);
form.appendChild(inputStudentId);
form.appendChild(br1);

form.appendChild(labelStudentName);
form.appendChild(inputStudentName);
form.appendChild(br2);

form.appendChild(labelStudentAge);
form.appendChild(inputStudentAge);
form.appendChild(br3);

form.appendChild(labelStudentPhone);
form.appendChild(inputStudentPhone);
form.appendChild(br4);

form.appendChild(labelStudentEmail);
form.appendChild(inputStudentEmail);
form.appendChild(br5);

form.appendChild(createButton);

//Khi click vào button Create thực hiện kiểm tra dữ liệu:
//lắng nghe sự kiện trên nút create
createButton.addEventListener("click", function () {
    // Lấy giá trị người dùng đã nhập
    let inputStudentId = document.getElementById("inputStudentId").value.trim();
    let inputStudentName = document.getElementById("inputStudentName").value.trim();
    let inputStudentAge = Number(document.getElementById("inputStudentAge").value);
    let inputStudentPhone = document.getElementById("inputStudentPhone").value.trim();
    let inputStudentEmail = document.getElementById("inputStudentEmail").value.trim();


    let isValid = true; //giả sử nhập vào hợp lệ là true
    let showError = ""; //chuỗi thông báo lỗi

    //a. StudentId phải gồm 6 ký tự
    //lấy độ dài của chuỗi với Cú Pháp: string.length;
    if (inputStudentId.length !== 6) {
        isValid = false;
        showError += "StudentId phải gồm 6 ký tự ";
    }
    //b.StudentName không được để trống
    if (inputStudentName === "") {
        isValid = false;
        showError += "StudentName không được để trống";
    }
    //c. Age phải có giá trị lớn hơn hoặc bằng 18
    if (inputStudentAge<18){
        isValid = false;
        showError += "Age phải có giá trị lớn hơn hoặc bằng 18";
    }
    //d. Phone phải có định dạng là số điện thoại ở VN
     let reg = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
    // .test():để kiểm tra xem một chuỗi có phù hợp với biểu thức hay không
    if(!reg.test(inputStudentPhone)){
        isValid = false;
        showError += "Phone phải có định dạng là số điện thoại ở VN";
    }

    //e. Email phải có định dạng email
    let email= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!email.test(inputStudentEmail)){
        isValid = false;
        showError += "Email phải có định dạng email hợp lệ";
    }
    //Nếu thoãi mãn all yêu cầu thì sẽ hiển thị thông tin 
    if(isValid){
        let studentInfo=document.getElementById("studentInfo");
        studentInfo.innerHTML=
        "StudentId : " + inputStudentId + "<br>" + 
        "Name: " + inputStudentName +  "<br>" + 
        "Age: " + inputStudentAge + "<br>" +
        "Phone: " + inputStudentPhone + "<br>" +
        "Email: " + inputStudentEmail     
    }
    else if (!isValid) {
        alert(showError); // Hiển thị thông báo lỗi
    }


});


