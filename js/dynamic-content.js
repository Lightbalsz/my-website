document.addEventListener('DOMContentLoaded', function() {

    // --- Dynamic Services Section ---
    const servicesData = [
        {
            icon: 'icon_genius',
            title: 'Branding',
            description: 'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.'
        },
        {
            icon: 'icon_tools',
            title: 'Development',
            description: 'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.'
        },
        {
            icon: 'icon_camera_alt',
            title: 'Photography',
            description: 'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.'
        }
        // Add more services here as needed
    ];

    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer) {
        servicesData.forEach((service, index) => {
            const delay = (index * 0.2) + 0.2; // Calculate delay for wow animation
            const serviceHtml = `
                <div class="col-lg-4 wow fadeIn" data-wow-delay=".${Math.round(delay * 10)}s">
                    <div class="de_3d-box">
                        <div class="d-inner">
                            <i class="${service.icon} id-color"></i>
                            <div class="text">
                                <h3>${service.title}</h3>
                                <p>${service.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            servicesContainer.insertAdjacentHTML('beforeend', serviceHtml);
        });
    }

    // --- Dynamic Portfolio Section ---
    const portfolioData = [
        {
            title: 'Single Image',
            tag: 'website',
            image: 'images/gallery/1.jpg',
            modalUrl: 'single-project.html'
        },
        {
            title: 'Multiple Images',
            tag: 'website',
            image: 'images/gallery/2.jpg',
            modalUrl: 'single-project-2.html'
        },
        {
            title: 'Self Hosted Video',
            tag: 'website',
            image: 'images/gallery/3.jpg',
            modalUrl: 'single-project-3.html'
        },
        {
            title: 'Bluetec App',
            tag: 'website',
            image: 'images/gallery/4.jpg',
            modalUrl: 'single-project.html'
        },
        {
            title: 'Uhost Hosting',
            tag: 'website',
            image: 'images/gallery/5.jpg',
            modalUrl: 'single-project.html'
        },
        {
            title: 'Bolo Creative',
            tag: 'website',
            image: 'images/gallery/6.jpg',
            modalUrl: 'single-project.html'
        }
        // Add more portfolio items here as needed
    ];

    const galleryContainer = document.getElementById('gallery');
    if (galleryContainer) {
        portfolioData.forEach((item, index) => {
            const portfolioHtml = `
                <div class="col-md-4 item">
                    <div class="de_modal wow" data-url="${item.modalUrl}">
                        <div class="card-image-1 mod-c" data-tilt>
                            <div class="d-text">
                                <h3>${item.title}</h3>
                                <h5 class="d-tag">${item.tag}</h5>
                            </div>
                            <img src="${item.image}" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            `;
            galleryContainer.insertAdjacentHTML('beforeend', portfolioHtml);
        });
    }

    // --- Dynamic Resume Section (Experiences) ---
    const experiencesData = [
        {
            years: '2014 - now',
            title: 'Founder & Creative Director',
            company: 'Kyros Studio',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'
        },
        {
            years: '2010 - 2014',
            title: 'Senior UI / UX Designer',
            company: 'Google Inc',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'
        },
        {
            years: '2008 - 2010',
            title: 'Graphic Designer',
            company: 'Kyros Studio',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'
        }
        // Add more experiences as needed
    ];

    const experiencesList = document.getElementById('experiences-list');
    if (experiencesList) {
        experiencesData.forEach(item => {
            const experienceHtml = `
                <li class="d_timeline-item">
                    <h3 class="d_timeline-title">${item.years}</h3>
                    <p class="d_timeline-text">
                        <span class="d_title">${item.title}</span>
                        <span class="d_company">${item.company}</span>
                        ${item.description}
                    </p>
                </li>
            `;
            experiencesList.insertAdjacentHTML('beforeend', experienceHtml);
        });
    }

    // --- Dynamic Resume Section (Education) ---
    const educationData = [
        {
            years: '2004 - 2008',
            title: 'Master in Design',
            company: 'New York University',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'
        },
        {
            years: '2004 - 2008',
            title: 'Bachelor of Arts',
            company: 'University of London',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'
        },
        {
            years: '2006 - 2004',
            title: 'Artist of College',
            company: 'University of Sydney',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'
        }
        // Add more education as needed
    ];

    const educationList = document.getElementById('education-list');
    if (educationList) {
        educationData.forEach(item => {
            const educationHtml = `
                <li class="d_timeline-item">
                    <h3 class="d_timeline-title">${item.years}</h3>
                    <p class="d_timeline-text">
                        <span class="d_title">${item.title}</span>
                        <span class="d_company">${item.company}</span>
                        ${item.description}
                    </p>
                </li>
            `;
            educationList.insertAdjacentHTML('beforeend', educationHtml);
        });
    }

    // --- Dynamic Fun Facts Section ---
    const funFactsData = [
        { id: 'hours-of-works', target: 8240, speed: 2500 },
        { id: 'projects-done', target: 315, speed: 2500 },
        { id: 'satisfied-customers', target: 250, speed: 2500 },
        { id: 'awards-winning', target: 32, speed: 2500 }
    ];

    // Function to animate counter (basic implementation)
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 10); // Adjust 10 for smoother animation
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 10);
    }

    // Intersection Observer to trigger animation when element is in view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const funFactsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fact = funFactsData.find(f => f.id === entry.target.id);
                if (fact) {
                    animateCounter(entry.target, fact.target, fact.speed);
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            }
        });
    }, observerOptions);

    funFactsData.forEach(fact => {
        const element = document.getElementById(fact.id);
        if (element) {
            funFactsObserver.observe(element);
        }
    });

    // --- Dynamic Blog Section ---
    const blogData = [
        {
            title: 'How to Make Better User Interface',
            image: 'images/blog/1.jpg',
            description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
            modalUrl: 'single-blog.html'
        },
        {
            title: '10 Web Design Tips From Experts',
            image: 'images/blog/2.jpg',
            description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
            modalUrl: 'single-blog.html'
        },
        {
            title: 'The Importance of Web Design',
            image: 'images/blog/3.jpg',
            description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
            modalUrl: 'single-blog.html'
        },
        {
            title: '10 Web Design Tips From Experts',
            image: 'images/blog/4.jpg',
            description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
            modalUrl: 'single-blog.html'
        },
        {
            title: 'The Importance of Web Design',
            image: 'images/blog/5.jpg',
            description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
            modalUrl: 'single-blog.html'
        },
        {
            title: 'Tips for Healthy Teeth',
            image: 'images/blog/6.jpg',
            description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
            modalUrl: 'single-blog.html'
        }
        // Add more blog posts here as needed
    ];

    const blogCarousel = document.getElementById('carousel-blog');
    if (blogCarousel) {
        blogData.forEach(post => {
            const blogHtml = `
                <div class="bloglist item">
                    <div class="post-content">
                        <div class="post-image">
                            <div class="de_modal" data-url="${post.modalUrl}">
                                <img alt="" src="${post.image}" class="lazy grayscale">
                            </div>
                        </div>
                        <div class="post-text">
                            <h4 class="de_modal" data-url="${post.modalUrl}">${post.title}</h4>
                            <p>${post.description}</p>
                        </div>
                    </div>
                </div>
            `;
            blogCarousel.insertAdjacentHTML('beforeend', blogHtml);
        });

        // Re-initialize Owl Carousel after content is loaded
        // This part is crucial for the carousel to work with dynamically added content.
        // Ensure jQuery and Owl Carousel are loaded before this script.
        if (typeof jQuery !== 'undefined' && jQuery().owlCarousel) {
            // A small delay might be needed sometimes to ensure all images are loaded
            // or if other scripts are still manipulating the DOM.
            setTimeout(() => {
                jQuery(blogCarousel).owlCarousel({
                    items: 3, // Adjust as needed
                    margin: 30,
                    loop: true,
                    dots: false,
                    nav: true,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        0: { items: 1 },
                        768: { items: 2 },
                        992: { items: 3 }
                    }
                });
            }, 100); // 100ms delay
        }
    }
});
