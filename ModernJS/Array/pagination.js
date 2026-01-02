import countriesWithCodes from "./jsContent.js";
const btn_next = document.querySelector(".btn_next");
const btn_prev = document.querySelector(".btn_prev");
// initaial value 
const perPage = 5;
let start = 0;

//next event
if(btn_next){
    btn_next.addEventListener("click", () => {
        if (start + perPage < countriesWithCodes.length) {
            start += perPage;
            renderCountryListOnUI();
        }
    })
}

//prev event
if(btn_prev){
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
    console.log(start, end)
    if(table_content.length){
        wrap_table_row.innerHTML = table_content.map(item => `
            <div class="table-row">
                        <div class="table-cell" data-label="Column 1">${item.name}</div>
                        <div class="table-cell" data-label="Column 2">${item.code}</div>
                </div>
            `).join("");
            if(btn_next && btn_prev){
                btn_prev.disabled = start === 0;
            btn_next.disabled = end >= countriesWithCodes.length;
            }
    }else{
        wrap_table_row.innerHTML = "data not found"
    }
}
renderCountryListOnUI();