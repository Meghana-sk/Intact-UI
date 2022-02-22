const openModalBtn = document.querySelector(".open-modal-btn");
const demoWrapper = document.querySelector(".modal-demo");
const modalCancelBtn = document.querySelector(".cancel-btn");
const modalClose = document.querySelector("#close-modal-icon")
const modalEl = document.querySelector(".modal");

openModalBtn.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
modalCancelBtn.addEventListener("click", closeModal);

/**
 * function to open modal
 * @param: none
 * @return: none
 */
function openModal() {
    demoWrapper.style.display = "flex";
}


/**
 * function to close modal
 * @param: none
 * @return: none
 */
function closeModal() {
    demoWrapper.style.display = "none";
    document.querySelector("body").style.background = "none"
}