function onClick() {
    document.addEventListener("DOMContentLoaded", () => {
        let search = document.querySelector(".search-icon");
        let open = document.querySelector(".open");

        search.addEventListener("click", function () {
            if (!open.classList.contains("close")) {
                open.classList.add("close");
            } else {
                open.classList.remove("close");
            }
        });

        const searchInput = document.querySelector(".header__item.search .open");

        window.addEventListener("click", (e) => {
            let targetEl = e.target.closest(".open");
            let searcIcon = e.target.closest(".search-icon");
            
            if(targetEl != searchInput && searcIcon != search) {
                searchInput.classList.remove("close");
            }
        });
    });
}

export { onClick };

