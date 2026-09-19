document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    const menuIcon = menuButton?.querySelector("i");

    if (menuButton && nav) {
        const closeMenu = () => {
            nav.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "メニューを開く");
            menuIcon?.classList.remove("fa-xmark");
            menuIcon?.classList.add("fa-bars");
        };

        const toggleMenu = () => {
            const isOpen = nav.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
            menuIcon?.classList.toggle("fa-bars", !isOpen);
            menuIcon?.classList.toggle("fa-xmark", isOpen);
        };

        menuButton.addEventListener("click", toggleMenu);

        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", event => {
            if (!nav.classList.contains("open")) return;
            if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 760) closeMenu();
        });
    }

    const modal = document.querySelector(".modal");
    const modalImage = document.querySelector(".modal-image");
    const modalClose = document.querySelector(".modal-close");

    const closeModal = () => {
        modal?.classList.remove("open");
        modal?.setAttribute("aria-hidden", "true");
        if (modalImage) modalImage.src = "";
    };

    document.querySelectorAll(".image-button").forEach(button => {
        button.addEventListener("click", () => {
            if (!modal || !modalImage) return;
            modalImage.src = button.dataset.image || "";
            modalImage.alt = button.dataset.title || "";
            modal.classList.add("open");
            modal.setAttribute("aria-hidden", "false");
        });
    });

    modalClose?.addEventListener("click", closeModal);
    modal?.addEventListener("click", event => {
        if (event.target === modal) closeModal();
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeModal();
    });
});
