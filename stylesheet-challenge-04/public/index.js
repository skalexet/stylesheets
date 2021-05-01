const imgs = document.querySelectorAll('IMG');
for (const img of imgs) {
    img.addEventListener('mouseover', () => {
        img.style.padding = `0em 0em`;
    });

    img.addEventListener('mouseout', () => {
        img.style.padding = `1em 1em`;
    });
}