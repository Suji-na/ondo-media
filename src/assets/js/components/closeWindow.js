// function closeWindow() {
//     var x = document.getElementsByClass(".hero-info-img");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

function closeWindow() {

    document.addEventListener("DOMContentLoaded", () => {
        let heroInfo = document.getElementById("hero-info");
        let heroInfoClose = document.getElementById("hero-info-close");

        if (heroInfo != null) {
            // document.getElementById("hero-info").classList.remove("open");

            heroInfoClose.addEventListener("click", function (e) {
                e.preventDefault();
                heroInfo.classList.add("hide");
            });
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        let dropdown = document.getElementById("dropdown");
        let dropdownList = document.getElementById("dropdown-list");
        let headerLink = document.getElementsByClassName("header__link");
        // let headerLink = document.getElementsById("close-tag");

        if (headerLink.length > 0) {
            for (let i = 0; i < headerLink.length; i++) {
                headerLink[i].addEventListener("click", function () {
                    dropdownList.classList.remove("open");
                    dropdown.classList.remove("close");
                });
            }
        }

        if (dropdown != null) {
            dropdown.addEventListener("click", function () {
                dropdownList.classList.toggle("open");
                dropdown.classList.toggle("close");
            });
        }
    });

}

export { closeWindow };