const pages = document.getElementsByClassName("portfolio-page");

let activeIndex = 0;

function handleRightClick() {
    // Bump active index
    const nextIndex = activeIndex + 1 <= pages.length - 1 ? activeIndex + 1 : 0;

    const currentPage = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextPage = document.querySelector(`[data-index="${nextIndex}"]`);

    // Active group becomes after
    currentPage.dataset.status = "after-right-click";

    //  Next group becomes active
    nextPage.dataset.status = "becoming-active-from-before-right-click";

    setTimeout(() => {
        nextPage.dataset.status = "active";
        activeIndex = nextIndex;
    }, "1");

    console.log(activeIndex);
}

function handleLeftClick() {
    // Bump active index
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : pages.length - 1;

    const currentPage = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextPage = document.querySelector(`[data-index="${nextIndex}"]`);

    // Active group becomes after
    currentPage.dataset.status = "after-left-click";

    // Next group becomes active
    nextPage.dataset.status = "becoming-active-from-before-left-click";

    setTimeout(() => {
        nextPage.dataset.status = "active";
        activeIndex = nextIndex;
    }, "1")
    
    console.log(activeIndex)
}