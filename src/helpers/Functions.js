window.scrollToElement = (elementID) => {
    try {
        window?.scroll({
            top: document.querySelector(elementID).offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    } catch (e) {
        console.log(e)
    }
};