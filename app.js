var sections = document.querySelectorAll(`.section`)
var sectBtns = document.querySelectorAll(`.controlls`)
var sectBtn = document.querySelectorAll(`.control`)
var allSections = document.querySelector(`.main-content`)

sectBtn.forEach(function (addColor) {
    addColor.addEventListener(`click`, function (o) {
        var change = o.currentTarget;
        change.classList.add(`active-btn`);
        sectBtn.forEach(function (color) {
            if (color !== addColor) {
                color.classList.remove(`active-btn`);
            }
        })
    })
});





allSections.addEventListener(`click`, function (e) {
    const id = e.target.dataset.id;
    if (id) {
        sectBtns.forEach(function (btn) {
            btn.classList.remove(`active`)
        })
        e.target.classList.add(`active`)

        sections.forEach(function (sect) {
            sect.classList.remove(`active`)
        })
        const element = document.getElementById(id);
        element.classList.add(`active`)
    }
})

// theme change

const themeBtn = document.querySelector(`.theme-btn`);

themeBtn.addEventListener(`click`, function () {
    const changeTheme = document.body;
    changeTheme.classList.toggle(`light-mode`)
})

// porfolio display

const menu = [
    {
        id: 1,
        category: "full websites",
        img: "images/port1.jpg",
        link1: "https://github.com/Ogshabzy23101/my-portfolio.git",
        link2: "https://ogshabzy23101.github.io/my-portfolio/",
    },
    {
        id: 2,
        category: "css",
        img: "images/port2.jpg",
        link1: "https://github.com/Ogshabzy23101/social-proof.git",
        link2: "https://ogshabzy23101.github.io/social-proof/",
    },
    {
        id: 3,
        category: "css",
        img: "images/port3.jpg",
        link1: "https://github.com/Ogshabzy23101/profile-card.git",
        link2: "https://ogshabzy23101.github.io/profile-card/",
    },
    {
        id: 4,
        category: "css",
        img: "images/port4.jpg",
        link1: "https://github.com/Ogshabzy23101/3-column-challenge.git",
        link2: "https://ogshabzy23101.github.io/3-column-challenge/",
    },
    {
        id: 5,
        category: "css",
        img: "images/port5.jpg",
        link1: "https://github.com/Ogshabzy23101/nft-challenge.git",
        link2: "https://ogshabzy23101.github.io/nft-challenge/",
    },
    {
        id: 6,
        category: "css",
        img: "images/port6.jpg",
        link1: "https://github.com/Ogshabzy23101/qrcard-atempt.git",
        link2: "https://ogshabzy23101.github.io/qrcard-atempt/",
    },
    {
        id: 7,
        category: "css",
        img: "images/port7.jpg",
        link1: "https://github.com/Ogshabzy23101/orderchallenge.git",
        link2: "https://ogshabzy23101.github.io/orderchallenge/",
    },
    {
        id: 8,
        category: "javascript",
        img: "images/port3.jpg",
        link1: "https://github.com/Ogshabzy23101/codeflipper.git",
        link2: "https://ogshabzy23101.github.io/codeflipper/",
    },
    {
        id: 9,
        category: "javascript",
        img: "images/port1.jpg",
        link1: "https://github.com/Ogshabzy23101/reviews.git",
        link2: "https://ogshabzy23101.github.io/reviews/",
    },
    
    {
        id: 10,
        category: "javascript",
        img: "images/blog1.jpg",
        link1: "https://github.com/Ogshabzy23101/modal.git",
        link2: "https://ogshabzy23101.github.io/modal/",
    },
    {
        id: 11,
        category: "javascript",
        img: "images/blog2.jpg",
        link1: "https://github.com/Ogshabzy23101/question-page.git",
        link2: "https://ogshabzy23101.github.io/question-page/",
    },
    {
        id: 12,
        category: "javascript",
        img: "images/blog3.jpg",
        link1: "https://github.com/Ogshabzy23101/menu.git",
        link2: "https://ogshabzy23101.github.io/menu/",
    },
    {
        id: 12,
        category: "node.js",
        img: "images/blog3.jpg",
        link1: "https://github.com/Ogshabzy23101/menu.git",
        link2: "https://ogshabzy23101.github.io/menu/",
    },
    {
        id: 12,
        category: "jquerry",
        img: "images/blog3.jpg",
        link1: "https://github.com/Ogshabzy23101/menu.git",
        link2: "https://ogshabzy23101.github.io/menu/",
    },
    {
        id: 12,
        category: "react",
        img: "images/blog3.jpg",
        link1: "https://github.com/Ogshabzy23101/menu.git",
        link2: "https://ogshabzy23101.github.io/menu/",
    },
    {
        id: 12,
        category: "react",
        img: "images/blog3.jpg",
        link1: "https://github.com/Ogshabzy23101/menu.git",
        link2: "https://ogshabzy23101.github.io/menu/",
    },
    


];

const portfolio = document.querySelector(".portfolio-container")
const buttonCon = document.querySelector(".btn-container")


function displayMenuItems(menuItems) {
    let port = menuItems.map(function (item) {
        return `<div class="portfolio-content">
            <div class="image-box">
              <img src=${item.img} alt="" />
            </div>
            <div class="background-box">
              <h2>project source</h2>
              <div class="portfolio-icons">
                <div class="portfolio-icon">
                  <a href=${item.link1} target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
                <div class="portfolio-icon">
                  <a href=${item.link2} target="_blank">
                   <i class="fa-brands fa-chrome"></i>
                  </a>
                </div>
               
              </div>
            </div>
          </div>`
    });
    port = port.join("");
    portfolio.innerHTML = port;
};

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);

    // this code below is to automatically create arrays of buttons when the page loads

    const buttonCategories = menu.reduce(function (values, btnitems) {
        if (!values.includes(btnitems.category)) {
            values.push(btnitems.category);
        }
        return values;

    }, ["all"]);

    let button = buttonCategories.map(function (btnitems) {
        return `<button class="filter-btn" data-dip="${btnitems}">${btnitems}</button>`
    })

    button = button.join("");
    buttonCon.innerHTML = button;

    // next is to create filter button and make then filter automatically

    const filterBtn = document.querySelectorAll(".filter-btn")

    filterBtn.forEach(function (filter) {
        filter.addEventListener("click", function (e) {
            const BtnCategory = e.currentTarget.dataset.dip;
            const eachBtn = menu.filter(function (menuItem) {
                if (menuItem.category === BtnCategory) {
                    return menuItem;
                }
            })

            if (BtnCategory === "all") {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(eachBtn);
            }
        })
    })

});