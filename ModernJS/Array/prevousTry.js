import countriesWithCodes from "./jsContent.js";
const btn_next = document.querySelector(".btn_next");
const btn_prev = document.querySelector(".btn_prev");
//initial value
const perPage = 5;
let start = 0;
let y = perPage;

//next event
btn_next.addEventListener("click", () => {
    if (y < countriesWithCodes.length) {
        start += perPage;
        y = start + perPage;
        renderCountryListOnUI();
        console.log("plus", start, y)
    }
})

//prev event
btn_prev.addEventListener("click", () => {
    if (start >= 5) {
        start -= perPage;
        y -= perPage;
        console.log("minus", start, y)
        renderCountryListOnUI();
    }
})

// reder list on ui
const wrap_table_row = document.querySelector(".wrap_table_row");
function renderCountryListOnUI() {
    const table_content = countriesWithCodes.slice(start, y);
    let html = "";
    table_content.forEach(item => {
        html += `
          <div class="table-row">
                    <div class="table-cell" data-label="Column 1">${item.name}</div>
                    <div class="table-cell" data-label="Column 2">${item.code}</div>
            </div>
        `;
    })
    wrap_table_row.innerHTML = html;
    y >= countriesWithCodes.length ? btn_next.classList.add("btn_disabled") : btn_next.classList.remove("btn_disabled");
    start <= 0 ? btn_prev.classList.add("btn_disabled") : btn_prev.classList.remove("btn_disabled")
}
renderCountryListOnUI();