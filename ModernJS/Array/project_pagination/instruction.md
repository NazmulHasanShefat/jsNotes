তোমার pagination context অনুযায়ী তুমি চাও—

👉 একসাথে শুধু ৩টা pagination button দেখাবে
👉 বাকি button গুলো hide থাকবে
👉 current page অনুযায়ী button change হবে

এটাই real-world pagination logic 👍
চল ধাপে ধাপে simple + cleanভাবে করি।

🎯 Example

ধরা যাক pagination keys:
```js
1  6  11  16  21  26
```

যদি current page = 11 হয়, তাহলে দেখাবে:
```js
6  11  16
```
✅ Step 1: current page index বের করি

তোমার কাছে আছে:
```js
start
perPage
const currentPageIndex = Math.floor(start / perPage);

// ✅ Step 2: pagination render (only 3 buttons)

function renderPagination() {
    paginationWrap.innerHTML = "";

    const totalPages = Math.ceil(countriesWithCodes.length / perPage);
    const currentPage = Math.floor(start / perPage);

    // 3 button window
    let startPage = Math.max(0, currentPage - 1);
    let endPage = Math.min(totalPages - 1, startPage + 2);

    // fix when at last pages
    if (endPage - startPage < 2) {
        startPage = Math.max(0, endPage - 2);
    }

    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement("button");

        btn.innerText = i * perPage + 1; // 1, 6, 11 ...
        
        if (i === currentPage) {
            btn.classList.add("active");
        }

        btn.addEventListener("click", () => {
            start = i * perPage;
            renderCountryListOnUI();
            renderPagination();
        });

        paginationWrap.appendChild(btn);
    }
}
```

🔍 কীভাবে কাজ করছে (simple language)

currentPage → এখন কোন page এ আছো

currentPage - 1 → আগের page

currentPage + 1 → পরের page

তাই সবসময় 3টা button দেখায়

🧠 Edge cases handle করা হয়েছে
Situation	Buttons
First page	1 6 11
Middle page	6 11 16
Last page	11 16 21
✨ Optional UX improvements

চাও তো আমি যোগ করতে পারি:

... dots

First / Last button

Smooth animation

Disable state