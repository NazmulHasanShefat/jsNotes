let reg_btn = document.querySelector("#registration");
let scaliton_pay_tab = document.querySelector(".scaliton-pay-tab");

function regstration(){
    let payment_tab = document.querySelector(".payment-tab");
    let enroll_content = document.querySelector(".enroll-content");
    let scaliton_pay_tab = document.querySelector(".scaliton-pay-tab");
    let main_pay_tab = document.querySelector(".main-pay_tab");
    enroll_content.classList.add("d-none");
    payment_tab.classList.remove("d-none");
    // scaliton_pay_tab.classList.remove("d-none");
    main_pay_tab.classList.add("d-none");
    setTimeout(()=>{
        scaliton_pay_tab.classList.add("d-none");
        main_pay_tab.classList.remove("d-none");
    },2000)
}
function paymentSubmit(){
     
}

reg_btn.addEventListener("click",regstration);