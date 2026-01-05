
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#014a8a", "#04508f", "#0a5a97", "#1365a0", "#1a70a8", // Deep to Medium Blue
    "#2682c0", "#2e8dcb", "#3699d6", "#3ea4e1", "#47b0ec", // Light Blue to Teal Transition
    "#4fadf0", "#5ab352", "#64b957", "#6bb04b", "#72b651", // Teal to Green Transition
    "#6cb246", "#7fc157", "#86c85a", "#8ecd61", "#95d367", // Light Green
    "#9cd96e", "#a4df74" // Bright Green End
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();
  





// blog page script 
function toggleSearch() {
    const searchSidebar = document.getElementById("searchSidebar");
    searchSidebar.classList.toggle("show");
}

// Dummy Blog Data (Replace this with real API data)
const blogPosts = [
    { title: "How to Rebrand your Business?", date: "2025-02-19", image: "https://centurymedia360.com/wp-content/uploads/2025/02/How-to-rebrand-your-business.jpg", content: "Is your business not performing competitively among the audiences? Are you wondering the underlying reason causing...", link: "https://centurymedia360.com/how-to-rebrand-your-business/" },
    { title: "A guide to free SEO reporting tools", date: "2025-02-12", image: "https://centurymedia360.com/wp-content/uploads/2025/02/A-guide-to-free-SEO-reporting-tools.jpg", content: "A marketer's primary step to optimize your business site...", link: "https://centurymedia360.com/a-guide-to-free-seo-reporting-tools/" },
    { title: "Ways to maximize Your PPC Strategy", date: "2025-02-05", image: "https://centurymedia360.com/wp-content/uploads/2025/02/Ways-to-maximize-your-PPC-strategy-li.jpg", content: "If you are stepping to understand the idea of Digital Marketing you must have heard along the journey the concept of PPC...", link: "https://centurymedia360.com/ways-to-maximize-your-ppc-strategy/" },
    { title: "Upcoming features in Voice Search Optimization", date: "2025-01-23", image: "https://centurymedia360.com/wp-content/uploads/2025/01/Upcoming-features.jpg", content: "The leading search engine i.e. Google has added a mike button to its existing features which has raised curiosity among the users...", link: "https://centurymedia360.com/upcoming-features-in-voice-search-optimization/" },
    { title: "Understanding Google’s E-E-A-T", date: "2025-01-15", image: "https://centurymedia360.com/wp-content/uploads/2025/01/Understanding.jpg", content: "Whatever Google does become a trend. The reason is it’s thorough understanding of the users search intent. This helps them to generate information accordingly...", link: "https://centurymedia360.com/understanding-googles-e-e-a-t/" },
    { title: "SEO Trends to Watch in 2024", date: "2024-12-18", image: "https://centurymedia360.com/wp-content/uploads/2024/12/SEO-Trends.jpg", content: "SEO stands for Search Engine Optimization. By SEO we understand a set of practices that websites harness to improve it’s ranking on the search engine leading...", link: "https://centurymedia360.com/seo-trends-to-watch-in-2024/" },
    { title: "Digital Marketing Challenges You should be Aware of", date: "2024-12-09", image: "https://centurymedia360.com/wp-content/uploads/2024/12/Digital-Marketing-Challenges-you-should-be-aware-of.jpg", content: "Looking back to a time when Digital Marketing wasn’t familiar to today it receiving the highest recognition in the marketing industry...", link: "https://centurymedia360.com/digital-marketing-challenges-you-should-be-aware-of/" },
    { title: "Effective Email Marketing Strategies to Drive Conversions", date: "2024-12-03", image: "https://centurymedia360.com/wp-content/uploads/2024/11/Effective-Email-Marketing-Strategies-to-Drive-Conversions-li.jpg", content: "Driving conversion is the only motive you set yourself for when you decide to start a venture of your own. To drive conversions isn’t as easy as it with pronouncing the word...", link: "https://centurymedia360.com/effective-email-marketing-strategies-to-drive-conversions/" },
    { title: "Fundamentals of Instagram Marketing", date: "2024-11-25", image: "https://centurymedia360.com/wp-content/uploads/2024/11/p1-3.jpg", content: "In the list of the most popular social media platforms across the globe Instagram ranks third. The platform has attained this heightened recognition and...", link: "https://centurymedia360.com/fundamentals-of-instagram-marketing/" },
    { title: "Writing hacks for your LinkedIn posts", date: "2024-11-18", image: "https://centurymedia360.com/wp-content/uploads/2024/11/Writing-hacks-for-your-LinkedIn-posts.jpg", content: "LinkedIn is globally crowned as the best professional network to establish professional relationships and embark on an invincible business journey...", link: "https://centurymedia360.com/writing-hacks-for-your-linkedin-posts/" },
    { title: "How to write the perfect Instagram caption", date: "2024-11-12", image: "https://centurymedia360.com/wp-content/uploads/2024/11/How-to-write-the-perfect-Instagram-caption-li.jpg", content: "Writing a compelling caption equals to informing someone about who you are as a person. By captions we understand catchy, meaningful words...", link: "https://centurymedia360.com/how-to-write-the-perfect-instagram-caption/" },
    { title: "How to optimize an article for SEO?", date: "2024-10-15", image: "https://centurymedia360.com/wp-content/uploads/2024/10/How-to-optimize-an-article-for-SEO-1.jpg", content: "Search Engine Optimization also commonly known as SEO is a set of practices that websites idolize to improve visibility and rankings...", link: "https://centurymedia360.com/how-to-optimize-an-article-for-seo/" },
];

// Pagination Variables
const postsPerPage = 6;
let currentPage = 1;
let currentFilter = null;

// Function to display posts
function displayPosts(filterDate = null) {
    const blogList = document.getElementById("blog-list");
    blogList.innerHTML = "";

    let filteredPosts = blogPosts;
    if (filterDate) {
        filteredPosts = blogPosts.filter(post => post.date.startsWith(filterDate));
    }

    let start = (currentPage - 1) * postsPerPage;
    let end = start + postsPerPage;
    let paginatedPosts = filteredPosts.slice(start, end);

    paginatedPosts.forEach(post => {
        const postHTML = `
        <div class="col">
            <div class="card h-100 p-3">
                <img src="${post.image}" class="card-img-top" alt="${post.title}">
                <div class="card-body d-flex flex-column">
                    <span class="posted-on">
                        <time class="entry-date published">${post.date}</time>
                    </span>
                    <h5 class="card-title mt-3">${post.title}</h5>
                    <p class="card-text flex-grow-1">${post.content}</p>
                </div>
                <a href="${post.link}" target="_blank" class="plus-icon-link">
                    <i class="bi bi-plus-circle" style="position: absolute; bottom: 10px; right: 10px; font-size: 30px; color: #6cb246;"></i>
                </a>
            </div>
        </div>
    `;
        blogList.innerHTML += postHTML;
    });

    document.getElementById("pageNumber").innerText = `Page ${currentPage}`;
    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = end >= filteredPosts.length;
}


// Pagination Event Listeners
document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayPosts(currentFilter);
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage * postsPerPage < blogPosts.length) {
        currentPage++;
        displayPosts(currentFilter);
    }
});

// Timeline Filtering
document.querySelectorAll(".filter-timeline").forEach(item => {
    item.addEventListener("click", function () {
        let selectedDate = this.getAttribute("data-date");
        currentPage = 1;
        currentFilter = selectedDate;
        displayPosts(selectedDate);
    });
});

// Refresh page when clicking "All"
document.querySelector("[data-date='2025-02']").addEventListener("click", function () {
    location.reload();
});


document.addEventListener("DOMContentLoaded", function () {
    const adminEmail = "admin@example.com";
    const adminPassword = "Admin@123";

    // Retrieve stored blog posts from localStorage
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts"));
    if (storedPosts) {
        blogPosts.length = 0; // Clear the current blogPosts array
        blogPosts.push(...storedPosts);  // Add posts from localStorage to the blogPosts array
    }

    // Function to save blogPosts to localStorage
    function savePostsToLocalStorage() {
        localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    }

    // Function to add a new post
    function addNewPost() {
        let image = prompt("Enter post image URL:");
        let title = prompt("Enter post title:");
        let date = prompt("Enter post date (YYYY-MM-DD):");
        let content = prompt("Enter post content:");
        let link = prompt("Enter post link:");

        if (image && title && date && content && link) {
            // Check if the post already exists
            const postExists = blogPosts.some(post => post.title === title && post.date === date);
            if (postExists) {
                alert("This post already exists!");
            } else {
                const newPost = { title, date, image, content, link };
                blogPosts.push(newPost); // Add new post to blogPosts
                blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (latest first)
                savePostsToLocalStorage(); // Save the updated blogPosts array to localStorage
                displayPosts(currentFilter); // Refresh the blog display
            }
        } else {
            alert("All fields are required!");
        }
    }

    // Admin authentication
    function authenticateAdmin(callback) {
        let email = prompt("Enter Admin Email:");
        let password = prompt("Enter Admin Password:");

        if (email === adminEmail && password === adminPassword) {
            callback();
        } else {
            alert("Invalid credentials! Access denied.");
        }
    }

    // Event listener for adding posts
    document.querySelector(".addpost").addEventListener("click", function () {
        authenticateAdmin(addNewPost);
    });

    // Function to delete posts
    function deletePost() {
        let postTitles = blogPosts.map((post, index) => `${index + 1}: ${post.title}`).join("\n");
        let postSelection = prompt(`Select the posts to delete by entering their numbers separated by commas (up to 5 posts):\n\n${postTitles}`);

        if (postSelection !== null) {
            // Parse the input and convert it to an array of selected indices
            let postIndices = postSelection.split(',').map(num => parseInt(num.trim()) - 1);

            // Ensure that the selected indices are valid and no duplicates
            postIndices = postIndices.filter((value, index, self) => self.indexOf(value) === index && value >= 0 && value < blogPosts.length);

            if (postIndices.length > 0 && postIndices.length <= 5) {
                let postTitlesToDelete = postIndices.map(index => blogPosts[index].title).join(", ");
                let confirmDelete = confirm(`Are you sure you want to delete the following posts: ${postTitlesToDelete}?`);

                if (confirmDelete) {
                    // Sort indices in descending order so we delete the posts from the end of the array first
                    postIndices.sort((a, b) => b - a);

                    // Delete the selected posts
                    postIndices.forEach(index => blogPosts.splice(index, 1));

                    savePostsToLocalStorage(); // Save updated posts to localStorage
                    displayPosts(currentFilter); // Refresh the blog display
                    alert("Posts deleted successfully!");
                }
            } else {
                alert("Invalid selection. You can only delete up to 5 posts at a time.");
            }
        }
    }


    // Event listener for deleting posts
    document.querySelector(".deletepost").addEventListener("click", function () {
        authenticateAdmin(deletePost);
    });

    displayPosts(); // Initially display posts
});
