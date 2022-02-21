const openSidebar = document.querySelector(".open-sidebar");
const sidebar = document.querySelector(".side-bar");
const closeSideBar = document.querySelector(".close-sidebar");

openSidebar.addEventListener("click", openSideNav);
closeSideBar.addEventListener("click", closeSideNav);

/**
 * Shows side bar with options for small screens on hamburger icon click
 * @param none
 * @return none
 */
function openSideNav() {
    sidebar.style.display = "flex";
    closeSideBar.style.display = "block";
    sidebar.style.left = "0";
}

/**
 * Hides side bar with options on close icon click
 * @param none
 * @return none
 */
function closeSideNav() {
    sidebar.style.left = "-100%";
}

/** Hides close icon whenever window size exceeds 800px */
window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        closeSideBar.style.display = "none";
    }
})