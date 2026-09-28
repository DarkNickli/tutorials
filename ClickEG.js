
function changeLanguagePosition(id) {
    const target = document.getElementById(id);

    if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
    }
}

