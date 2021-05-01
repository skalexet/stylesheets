const containers = document.querySelectorAll('.mini_container_2');

for (let container of containers) {
    container.addEventListener('mouseover', () => {
        container.style.backgroundColor = "rgba(82, 119, 145, 0.852)";
    });

    container.addEventListener('mouseleave', () => {
        container.style.backgroundColor = "rgba(82, 119, 145, 0.452)";
    });
}