"use strict";
// loiktpc 05314
// xử lí x , y và views màn hình và srcool
// Modal window

// 5.1

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnscroll = document.querySelector(".btn--scroll-to");
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

//  5.2
//⁡⁣⁣⁢getBoundingClientRect()⁡
// để lấy kích thước và vị trí tương đối của một phần tử trong khung nhìn (viewport) của trình duyệt.
btnscroll.addEventListener("click", function (e) {
    e.preventDefault();
    let DOMRect = e.target.getBoundingClientRect();

    // console.log(DOMRect.top);
    // top: Khoảng cách từ đỉnh của phần tử đến đỉnh của viewport.
    // right: Khoảng cách từ phải của phần tử đến phải của viewport.
    // bottom: Khoảng cách từ đáy của phần tử đến đáy của viewport.
    // left: Khoảng cách từ trái của phần tử đến trái của viewport.
    // width: Chiều rộng của phần tử.
    // height: Chiều cao của phần tử.

    // ⁡⁣⁣⁢window.pageYOffset⁡  web từ trên xuống, tính bằng đơn vị pixel.
    const yOffset = window.pageYOffset;

    // Kiểm tra xem người dùng đã cuộn đến một vị trí nhất định hay không
    if (yOffset > 200) {
        console.log("Người dùng đã cuộn xuống đến vị trí 200 pixels.");
    } else {
        console.log("Người dùng chưa cuộn đến vị trí 200 pixels.");
    }

    //⁡⁣⁣⁢window.pageXOffset⁡
    //giá trị cuộn ngang (scroll) của trang web từ trái sang phải,
    window.addEventListener("scroll", function () {
        const xOffset = window.pageXOffset;

        // Kiểm tra xem người dùng đã cuộn đến một vị trí nhất định theo chiều ngang hay không
        if (xOffset > 200) {
            console.log("Người dùng đã cuộn sang phải đến vị trí 200 pixels.");
        } else {
            console.log(
                "Người dùng chưa cuộn đến vị trí 200 pixels theo chiều ngang."
            );
        }
    });

    //
    const viewportHeight = document.documentElement.clientHeight; ///để lấy chiều cao của viewport:
    const viewportWidth = document.documentElement.clientWidth; //để lấy chiều ngang của viewport:
    console.log("Chiều cao của viewport là:", viewportHeight, "pixels");
    console.log("Chiều Ngang của viewport là:", viewportWidth, "pixels");

    console.log();
    // Cuộn trang web đến vị trí có hoành độ left = 0, tung độ top = 500 pixels
    // window.scrollTo(); đến một vị trí cụ thể
    // để 2 trục x y  để kéo xuống vị trí mong muốn
    // window.scrollTo(
    //     section__description.getBoundingClientRect().left + window.pageXOffset,
    //     section__description.getBoundingClientRect().top + window.pageYOffset
    // );
    let section__description = document.querySelector(".section__description");
    window.scrollTo({
        left:
            section__description.getBoundingClientRect().left +
            window.pageXOffset,
        top:
            section__description.getBoundingClientRect().top +
            window.pageYOffset,
        behavior: "smooth",
    });

    // scrollIntoView ngắn gọn hơn hàm trên truyền 2 tham số +> không cần truyền
    section__description.scrollIntoView({ behavior: "smooth" });
});

// 5.3 hượng tượng bong bóng có thể gọi là sủi bọt

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener(
    "click",
    function (e) {
        this.style.backgroundColor = randomColor();
        console.log("LINK", e.target, e.currentTarget);
        console.log(e.currentTarget === this);
        // truyền true  đối số thứ ba của addEventListener:
        // chạy từ  cha trước r mới vào phần con , mặc định là false thì ngược lại
        // Stop propagation
        // ngăn chặn hượng tượng sủi bọt
        // e.stopPropagation();
    },
    true
);

document.querySelector(".nav__links").addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();
    console.log("CONTAINER", e.target, e.currentTarget);
    // e.target: Là phần tử mà sự kiện đã xảy ra trên.
    // e.currentTarget:sẽ là phần tử cha mà sự kiện đang được gắn vào.
});

document.querySelector(".nav").addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();
    console.log("NAV", e.target, e.currentTarget);
});

// 5.4
// cách 1
// không tối ưu hiệu suất
// const navlinks =document.querySelectorAll('.nav__link');
// navlinks.forEach((navlink)=>{
//     navlink.addEventListener('click',(e)=>{
//         e.preventDefault()
//         let id = e.target.getAttribute('href');
//         console.log(e.target.href);    // đường dẫn tuyệt đối
//         console.log(e.target.getAttribute('href')); // đường dẫn tương đối
//         document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//     })
// })

// cách 2
// lắng nghe từ phần tử mẹ click vào phần tử con
document.querySelector(".nav__links").addEventListener("click", (e) => {
    console.log(e.target);
});

// 5.4 +
// DOM Traversing
const h1 = document.querySelector("h1"); // phần tử cha

// DOM children
console.log(h1.querySelectorAll(".highlight")); // get all children element (class : highlight)
console.log(h1.childNodes); // get all detail parent nodes
console.log(h1.children); // get all children element
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// closest(select) tìm kiếm từ phần tử hiện tại lên đến phần tử cha,
h1.closest(".header").style.background = "var(--gradient-secondary)";

h1.closest("h1").style.background = "var(--gradient-primary)";

// Going sideways: siblings
console.log(h1.previousElementSibling); // phía sau phần tử  này cũ r
console.log(h1.nextElementSibling); // phần tử kế tiếp

console.log(h1.previousSibling); // nên dùng dưới vì trả  object text
console.log(h1.nextSibling); // nên dùng dưới vì trả  object text

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
    if (el !== h1) el.style.transform = "scale(0.5)";
});

// phần active tab
const tabContainer = document.querySelector(".operations__tab-container");

tabContainer.addEventListener("click", (e) => {
    let clickcurrent = e.target.closest(".operations__tab");

    // remove active tab
    document.querySelectorAll(".operations__tab").forEach((e) => {
        e.classList.remove("operations__tab--active");
    });
    document.querySelectorAll(".operations__content").forEach((e) => {
        e.classList.remove("operations__content--active");
    });

    // add active tab
    clickcurrent.classList.add("operations__tab--active");
    console.log(
        document.querySelector(
            `.operations__content--${clickcurrent.dataset.tab}`
        )
    );
    document
        .querySelector(`.operations__content--${clickcurrent.dataset.tab}`)
        .classList.add("operations__content--active");
});
