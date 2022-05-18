var sections = document.querySelectorAll(`.section`)
var sectBtns = document.querySelectorAll(`.controlls`)
var sectBtn = document.querySelectorAll(`.control`)
var allSections = document.querySelector(`.main-content`)

sectBtn.forEach(function (addColor) {
    addColor.addEventListener(`click`, function (o) {
      var change =  o.currentTarget;
      change.classList.add(`active-btn` );
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

const themeBtn=document.querySelector(`.theme-btn`);

themeBtn.addEventListener(`click`, function () {
    const changeTheme=document.body;
    changeTheme.classList.toggle(`light-mode`)
})