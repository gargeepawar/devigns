document.addEventListener("DOMContentLoaded", () => {
    // Preloader logic
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.classList.add("hide-preloader");
        }

        // Initialize features only after preloader hides
        initAnimationsAndFeatures();

    }, 2000); // Match this with your loader animation timing
});




function initAnimationsAndFeatures() {
    const menuToggle = document.getElementById("menu-toggle");
    const menuModal = document.getElementById("menu-modal");
    const icon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent click from bubbling up
        if (icon.classList.contains("fa-bars")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }

        menuModal.style.display = menuModal.style.display === "flex" ? "none" : "flex";
    });

    // Prevent modal from closing when clicking inside it
    menuModal.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // Close modal when clicking outside
    document.addEventListener("click", (event) => {
        const isClickInsideModal = menuModal.contains(event.target);
        const isClickToggle = menuToggle.contains(event.target);

        if (!isClickInsideModal && !isClickToggle) {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
            menuModal.style.display = "none";
        }
    });





    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');

                // Check for custom animation classes
                const animationClass = entry.target.getAttribute('data-animation');
                if (animationClass) {
                    entry.target.classList.add(animationClass);
                }
            } else {
                entry.target.classList.remove('show');

                // Remove custom animation classes
                const animationClass = entry.target.getAttribute('data-animation');
                if (animationClass) {
                    entry.target.classList.remove(animationClass);
                }
            }
        });
    });

    // Select elements with `.hidden`
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));




    // Smooth scrollbar library script
    const scrollContainer = document.querySelector('#scroll-container');

    // Initialize Smooth Scrollbar for main entire page
    const scrollbar = Scrollbar.init(scrollContainer, {
        damping: 0.05, // Adjust as needed
    });

    // Make the header behave like sticky inside smooth-scrollbar
    // scrollbar.addListener(({ offset }) => {
    //     document.querySelector("header").style.transform = `translateY(${offset.y}px)`;
    // });
 



    // Sync hash navigation with Smooth Scrollbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the #
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                scrollbar.scrollIntoView(targetElement, {
                    damping: 0.05, // Smooth transition
                    offsetTop: 0, // Adjust offset if needed
                    renderByPixels: true // ✅ Ensures smooth scrolling without fractional pixels
                });
            }
        });
    });






// Prevent Zooming of website (Only on Desktop)
    document.addEventListener("wheel", function(event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });
    
    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && (event.key === "+" || event.key === "-" || event.key === "0")) {
            event.preventDefault();
        }
    });
    






// window.onload = function () {
//     // Keep preloader visible for at least 3 seconds
//     setTimeout(function() {
//         // Hide preloader smoothly
//         document.getElementById("preloader").classList.add("hide-preloader");
//     }, 3000); // 3000 milliseconds = 3 seconds
// };



}

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("year").textContent = new Date().getFullYear();

});