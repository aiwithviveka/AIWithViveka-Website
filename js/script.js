document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("top-search-input");
    const searchButton = document.getElementById("top-search-button");
    const searchResults = document.getElementById("search-results");

    // Site content to search
    const siteContent = [
        { title: "About AIWithViveka", content: "AIWithViveka explores autonomous AI agents, agentic AI, LLMs, and DevOps.", link: "about.html" },
        { title: "DevOps Practices", content: "Learn about CI/CD, Jenkins, Git, Kubernetes, and modern DevOps workflows.", link: "experience.html" },
        { title: "Agentic AI Explained", content: "Understand agentic AI: autonomous AI agents, decision-making, and task execution.", link: "topics/agentic-ai.html" },
        { title: "LLMs and AI Models", content: "Large Language Models (LLMs) are transforming AI applications and automation.", link: "topics/llm.html" },
        { title: "Autonomous Agents in AI", content: "Explore autonomous AI agents that can perform tasks independently using LLMs.", link: "topics/autonomous-agents.html" },
        { title: "AI News & Trends", content: "Daily and weekly updates on AI breakthroughs, agentic AI, LLMs, and innovations.", link: "blogs.html" },
        { title: "Tools & Product Reviews", content: "Hands-on reviews of AI tools including LLM-based applications and autonomous agents.", link: "blogs.html" },
        { title: "How-To Guides", content: "Step-by-step guides for AI tools like ChatGPT, Gemini, LLMs, and agentic AI workflows.", link: "blogs.html" },
        { title: "Startup & Research Spotlights", content: "See how AI, LLMs, and agentic AI are transforming startups and research.", link: "blogs.html" },
        { title: "Opinions That Matter", content: "Honest perspectives on agentic AI, autonomous agents, and modern DevOps.", link: "blogs.html" },
        { title: "Contact Us", content: "Get in touch with AIWithViveka regarding AI, LLMs, and agentic AI.", link: "contact.html" }
    ];

    function searchSite() {
        const query = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = ""; // Clear previous results

        if (!query) {
            searchResults.innerHTML = "<p>Type a keyword to search (e.g., agentic AI, LLMs, autonomous agents).</p>";
            return;
        }

        const results = siteContent.filter(item =>
            item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            searchResults.innerHTML = "<p>No results found.</p>";
            return;
        }

        results.forEach(item => {
            const link = document.createElement("a");
            link.href = item.link;
            link.textContent = item.title;
            searchResults.appendChild(link);
        });
    }

    searchButton.addEventListener("click", searchSite);
    searchInput.addEventListener("keypress", (e) => { if(e.key==="Enter") searchSite(); });
});
