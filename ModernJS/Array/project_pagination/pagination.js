import countriesWithCodes from "./jsContent.js";
const btn_next = document.querySelector(".btn_next");
const btn_prev = document.querySelector(".btn_prev");
const show_perpage = document.querySelector("#show_perpage");
const paginate_numbers_container = document.querySelector(".paginate_numbers_container");
// initaial value 
let perPage = 5;
let start = 0;


show_perpage && show_perpage.addEventListener("input",(e)=>{
    perPage = parseFloat(e.target.value);
    renderCountryListOnUI();
})

//next event
if (btn_next) {
    btn_next.addEventListener("click", () => {
        if (start + perPage < countriesWithCodes.length) {
            start += perPage;
            renderCountryListOnUI();
        }
    })
}

//prev event
if (btn_prev) {
    btn_prev.addEventListener("click", () => {
        if (start > 0) {
            start -= perPage;
            renderCountryListOnUI();
        }
    })
}

// reder list on ui
const wrap_table_row = document.querySelector(".wrap_table_row");
function renderCountryListOnUI() {
    let end = start + perPage;
    const table_content = countriesWithCodes.slice(start, end);
    if (table_content.length) {
        wrap_table_row.innerHTML = table_content.map(item => `
            <div class="table-row">
                        <div class="table-cell" data-label="Column 1">${item.name}</div>
                        <div class="table-cell" data-label="Column 2">${item.code}</div>
                </div>
            `).join("");

            renderPaginationkeys();

        if (btn_next && btn_prev) {
            btn_prev.disabled = start === 0;
            btn_next.disabled = end >= countriesWithCodes.length;
        }
    } else {
        wrap_table_row.innerHTML = "data not found"
    }
}

renderCountryListOnUI();


function renderPaginationkeys(){
    paginate_numbers_container.innerHTML = "";

    console.log(start, perPage)
    const currentPage = Math.floor(start / perPage);
    console.log(currentPage);
    const total_page = Math.ceil(countriesWithCodes.length / perPage);
    console.log(total_page);
    // 3 button window 
    let startPage = Math.max(0, currentPage - 1);
    let endPage = Math.min(total_page - 1, startPage + 1);

    if(endPage - startPage < 2){
        startPage = Math.max(0, endPage -2)
    }
    for(let i = startPage; i <= endPage; i++){
        const btn = document.createElement("button")
        btn.innerHTML = i + 1;
        paginate_numbers_container.appendChild(btn)

        if(i === currentPage){
            btn.classList.add("active");
        }
        btn.addEventListener("click",()=>{
            start = i ;
            renderCountryListOnUI();
            renderPaginationkeys();
        })
    }


    // for(let i=0; i<countriesWithCodes.length; i+=perPage){
    //     const btn = document.createElement("button");
    //     btn.setAttribute("type","button");
    //     paginate_numbers_container.appendChild(btn);
    //     const btn_paginate = paginate_numbers_container.querySelectorAll("button");
    //     btn.innerHTML = btn_paginate.length;
    //     if(i === start){
    //         btn.classList.add("active");
    //     }
    //     btn.addEventListener("click",()=>{
    //        start = i
    //         renderCountryListOnUI();
    //         renderPaginationkeys();
    //     })
    // }
}
