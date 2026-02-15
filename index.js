document.addEventListener("DOMContentLoaded", () => {

    // Blogs Slider
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.blogs-slide');


    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideInterval = 7000; // 7 seconds

    function updateSlider() {
        const offset = -currentIndex * 100; // Move the slider left based on current index
        slider.style.transform = `translateX(${offset}vw)`;
    }


    // Function for automatic slide transition  
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Loop back to first slide after last  
        updateSlider();
    }

    // Automatic sliding functionality
    let autoSlideInterval = setInterval(nextSlide, slideInterval);








    // Show 6 latest blogs from the json file hosted on GitHub
    fetch('/Cdn/blogs.json')
        .then(response => response.json())
        .then(data => {
            const recentBlogs = data.slice(-6).reverse();
            const blogDivs = document.querySelectorAll(".blog");

            function generateSlug(title) {
                return title.toLowerCase().trim()
                    .replace(/[^a-z0-9\s-]/g, "")
                    .replace(/\s+/g, "-");
            }

            blogDivs.forEach((blogDiv, index) => {
                let blogImage = blogDiv.querySelector("img");
                let blogTitle = blogDiv.querySelector("p#blogName");
                let blogLink = blogDiv.querySelector("a");

                if (recentBlogs[index]) {
                    let blogData = recentBlogs[index];
                    blogImage.src = blogData.image;
                    blogImage.alt = blogData.title;
                    blogTitle.title = blogData.title;

                    blogTitle.textContent = blogData.title.length > 34
                        ? blogData.title.substring(0, 31) + "..."
                        : blogData.title;

                    blogLink.href = `blogs.html?slug=${generateSlug(blogData.title)}`;
                } else {
                    // Default content in case of missing data
                    blogImage.src = "/Assets/placeholder.jpg"; // Add a placeholder image
                    blogImage.alt = "No blog available";
                    blogTitle.textContent = "No blogs available at the moment.";
                    blogLink.href = "#"; // Keep the link inactive
                }
            });
        })
        .catch(error => {
            console.error("Error fetching blogs:", error);
            document.querySelectorAll(".blog").forEach(blogDiv => {
                let blogImage = blogDiv.querySelector("img");
                let blogTitle = blogDiv.querySelector("p#blogName");
                let blogLink = blogDiv.querySelector("a");

                // Set placeholders
                blogImage.src = "/Assets/placeholder.webp";
                blogImage.alt = "No blog available";
                blogTitle.textContent = "No blogs available at the moment.";
                blogLink.href = "#";
            });
        });







    // FAQS section collapsive
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        for (let i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }

        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));






    const emailLink = document.getElementById("emailLink");

    emailLink.addEventListener("click", function (event) {
        if (window.innerWidth > 768) { // Target desktops
            event.preventDefault();
            window.open("https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=devignsofficial@gmail.com", "_blank");
        }
    });




});



