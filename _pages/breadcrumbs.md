---
layout:     page
title:      Breadcrumbs
permalink:  /breadcrumbs/
---

<style type="text/css">
    /* Subtle Filters Styling */
    .filter-section {
        margin-bottom: 25px;
        font-family: var(--font-family);
        font-size: 0.9em;
        color: var(--text-muted);
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 15px;
    }
    
    .filter-group {
        margin-bottom: 8px;
    }
    
    .filter-group:last-child {
        margin-bottom: 0;
    }
    
    .filter-group-title {
        font-weight: 600;
        margin-right: 8px;
        text-transform: uppercase;
        font-size: 0.82em;
        letter-spacing: 0.05em;
        color: var(--text-color);
    }
    
    .filter-links {
        display: inline;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .filter-links li {
        display: inline;
        margin-right: 12px;
    }
    
    .filter-link-item {
        color: var(--text-muted);
        text-decoration: none;
        cursor: pointer;
        transition: color 0.15s ease;
    }
    
    .filter-link-item:hover {
        color: var(--text-color);
    }
    
    .filter-link-item.active {
        color: var(--link-color);
        border-bottom: 1px solid var(--link-color);
    }

    /* Subtle Breadcrumbs Feed */
    .breadcrumbs-list {
        margin-top: 20px;
        font-family: var(--font-family);
    }
    
    .day-block {
        margin-bottom: 35px;
    }
    
    .day-label {
        font-size: 0.85em;
        text-transform: uppercase;
        color: var(--text-muted);
        letter-spacing: 0.08em;
        margin-bottom: 12px;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 3px;
        font-weight: 600; /* Bold/medium weight matching site headers */
    }
    
    .crumb-row {
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px dashed var(--border-color);
    }
    
    .crumb-row:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    
    .crumb-main-text {
        font-size: 1rem; /* Match site body font size */
        line-height: 1.6; /* Match site body line height */
        color: var(--text-color);
        font-weight: normal; /* Match site body font weight */
    }
    
    .crumb-category-prefix {
        font-weight: 600; /* Semi-bold to stand out slightly from body text */
        margin-right: 6px;
        color: var(--accent-red); /* Subtle red matching navigation "/" symbol */
        font-size: 0.95em;
    }
    
    .crumb-body-inline {
        display: inline;
    }
    
    .crumb-body-inline p {
        display: inline;
        margin: 0;
    }
    
    .crumb-sub-meta {
        margin-top: 6px;
        font-size: 0.82em;
        color: var(--text-muted);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    }
    
    .crumb-sub-meta a, .crumb-sub-meta span {
        display: inline-flex;
        align-items: center;
        gap: 3px;
    }
    
    .tag-badge {
        color: var(--text-muted);
        cursor: pointer;
        transition: color 0.15s ease;
    }
    
    .tag-badge:hover {
        color: var(--link-color);
    }
    
    .tag-separator {
        color: var(--border-color);
        margin: 0 1px;
    }
    
    .social-link-icon {
        color: var(--border-color);
        text-decoration: none !important;
        font-size: 1.05em;
        transition: color 0.15s ease;
    }
    
    .social-link-icon.active {
        color: var(--text-muted);
    }
    
    .social-link-icon.active:hover {
        color: var(--link-color);
    }
    
    /* Inspired Footer */
    .breadcrumbs-credit {
        margin-top: 50px;
        padding-top: 15px;
        border-top: 1px solid var(--border-color);
        font-size: 0.8em;
        color: var(--text-muted);
        text-align: center;
        font-weight: 300;
        font-family: var(--font-family);
    }
    
    .breadcrumbs-credit a {
        color: var(--text-muted);
        text-decoration: underline;
    }
    
    .breadcrumbs-credit a:hover {
        color: var(--text-color);
    }
</style>

<div class="breadcrumbs-container">
    
    <!-- Filter Section -->
    <div class="filter-section">
        <div class="filter-group">
            <span class="filter-group-title">Category:</span>
            <ul class="filter-links">
                <li><span class="filter-link-item active" data-filter="all">All</span></li>
                <li><span class="filter-link-item" data-filter="learning">Learning</span></li>
                <li><span class="filter-link-item" data-filter="reflection">Reflections</span></li>
                <li><span class="filter-link-item" data-filter="idea">Ideas</span></li>
                <li><span class="filter-link-item" data-filter="log">Logs</span></li>
            </ul>
        </div>
        
        <div class="filter-group" id="tags-filter-group">
            <span class="filter-group-title">Tags:</span>
            <ul class="filter-links" id="tags-filter-container">
                <!-- Dynamically populated tags -->
            </ul>
        </div>
    </div>
    
    <!-- Breadcrumbs Feed -->
    <div class="breadcrumbs-list" id="breadcrumbs-feed">
        {% assign current_date = "" %}
        {% for entry in site.data.breadcrumbs %}
            {% if entry.date != current_date %}
                {% if current_date != "" %}
                    </div> <!-- close previous day-block -->
                {% endif %}
                {% assign current_date = entry.date %}
                <div class="day-block" data-date="{{ current_date }}">
                    <div class="day-label">{{ current_date | date: "%d %B %Y" }}</div>
            {% endif %}
            
            <div class="crumb-row" 
                 data-category="{{ entry.category | downcase }}" 
                 data-post="{{ entry.is_post }}" 
                 data-tags="{% if entry.tags %}{{ entry.tags | join: ',' | downcase }}{% endif %}">
                <div class="crumb-main-text">
                    <span class="crumb-category-prefix">[{{ entry.category }}]</span>
                    <div class="crumb-body-inline">{{ entry.content | markdownify }}</div>
                </div>
                <div class="crumb-sub-meta">
                    {% if entry.time %}
                        <span><i class="bi bi-clock"></i> {{ entry.time }}</span>
                    {% endif %}
                    
                    {% if entry.tags.size > 0 %}
                        {% if entry.time %}<span>&bull;</span>{% endif %}
                        <span class="meta-tags-list">
                            {% for tag in entry.tags %}
                                <span class="tag-badge" data-tag-name="{{ tag | downcase }}">#{{ tag }}</span>{% unless forloop.last %}<span class="tag-separator">,</span>{% endunless %}
                            {% endfor %}
                        </span>
                    {% endif %}
                    
                    {% if entry.is_post %}
                        <span>&bull;</span>
                        <span>Shared:</span>
                        {% if entry.bluesky_url %}
                            <a href="{{ entry.bluesky_url }}" target="_blank" class="social-link-icon active" title="View on BlueSky"><i class="bi bi-cloud-fill"></i></a>
                        {% else %}
                            <span class="social-link-icon" title="Published to BlueSky (No link)"><i class="bi bi-cloud"></i></span>
                        {% endif %}
                        
                        {% if entry.mastodon_url %}
                            <a href="{{ entry.mastodon_url }}" target="_blank" class="social-link-icon active" title="View on Mastodon"><i class="bi bi-mastodon"></i></a>
                        {% else %}
                            <span class="social-link-icon" title="Published to Mastodon (No link)"><i class="bi bi-mastodon"></i></span>
                        {% endif %}
                    {% endif %}
                </div>
            </div>
        {% endfor %}
        {% if current_date != "" %}
            </div> <!-- close final day-block -->
        {% endif %}
    </div>
    
    <!-- Credit Footer -->
    <div class="breadcrumbs-credit">
        Inspired by Björn Andersson's <a href="https://bjorn.now/series/building-breadcrumb/" target="_blank">Breadcrumbs</a>.
    </div>
</div>

<script type="text/javascript">
document.addEventListener("DOMContentLoaded", function() {
    var rows = document.querySelectorAll(".crumb-row");
    var dayBlocks = document.querySelectorAll(".day-block");
    var catButtons = document.querySelectorAll(".filter-link-item");
    var tagsContainer = document.getElementById("tags-filter-container");
    
    var activeCategory = "all";
    var activeTag = "all";
    
    // 1. Dynamically collect all tags on the page to build the tag filter
    var allTags = new Set();
    document.querySelectorAll(".tag-badge").forEach(function(badge) {
        var tagName = badge.getAttribute("data-tag-name");
        if (tagName) {
            allTags.add(tagName);
        }
    });
    
    // Sort and render tags as text filters
    var sortedTags = Array.from(allTags).sort();
    if (sortedTags.length > 0) {
        // Add "All" option
        var allTagsLi = document.createElement("li");
        var allTagsBtn = document.createElement("span");
        allTagsBtn.className = "filter-link-item active";
        allTagsBtn.textContent = "All";
        allTagsBtn.setAttribute("data-tag", "all");
        allTagsLi.appendChild(allTagsBtn);
        tagsContainer.appendChild(allTagsLi);
        
        sortedTags.forEach(function(tag) {
            var li = document.createElement("li");
            var btn = document.createElement("span");
            btn.className = "filter-link-item";
            btn.textContent = "#" + tag;
            btn.setAttribute("data-tag", tag);
            li.appendChild(btn);
            tagsContainer.appendChild(li);
        });
    } else {
        // Hide tag filter group if no tags are present
        var tagGroup = document.getElementById("tags-filter-group");
        if (tagGroup) tagGroup.style.display = "none";
    }
    
    var tagButtons = tagsContainer.querySelectorAll(".filter-link-item");
    
    // Apply combined filters
    function applyFilters() {
        dayBlocks.forEach(function(block) {
            var visibleRowsInBlock = 0;
            var blockRows = block.querySelectorAll(".crumb-row");
            
            blockRows.forEach(function(row) {
                var catMatch = (activeCategory === "all") || (row.getAttribute("data-category") === activeCategory);
                
                var tagMatch = false;
                if (activeTag === "all") {
                    tagMatch = true;
                } else {
                    var cardTags = row.getAttribute("data-tags") || "";
                    var tagsArray = cardTags.split(",");
                    tagMatch = tagsArray.indexOf(activeTag) !== -1;
                }
                
                if (catMatch && tagMatch) {
                    row.style.display = "block";
                    visibleRowsInBlock++;
                } else {
                    row.style.display = "none";
                }
            });
            
            // If no visible rows, hide the day block entirely
            if (visibleRowsInBlock > 0) {
                block.style.display = "block";
            } else {
                block.style.display = "none";
            }
        });
    }
    
    // Category click handler
    catButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            catButtons.forEach(function(b) { b.classList.remove("active"); });
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-filter");
            applyFilters();
        });
    });
    
    // Tag click handler
    function bindTagClickHandlers() {
        var btns = tagsContainer.querySelectorAll(".filter-link-item");
        btns.forEach(function(btn) {
            btn.addEventListener("click", function() {
                btns.forEach(function(b) { b.classList.remove("active"); });
                btn.classList.add("active");
                activeTag = btn.getAttribute("data-tag");
                applyFilters();
            });
        });
    }
    
    bindTagClickHandlers();
    
    // Support clicking tag badges inside cards directly to filter
    document.querySelectorAll(".tag-badge").forEach(function(badge) {
        badge.addEventListener("click", function(e) {
            e.stopPropagation();
            var tagName = badge.getAttribute("data-tag-name");
            
            var btns = tagsContainer.querySelectorAll(".filter-link-item");
            var targetBtn = null;
            btns.forEach(function(b) {
                if (b.getAttribute("data-tag") === tagName) {
                    targetBtn = b;
                }
            });
            
            if (targetBtn) {
                btns.forEach(function(b) { b.classList.remove("active"); });
                targetBtn.classList.add("active");
                activeTag = tagName;
                applyFilters();
                
                // Scroll to top of list smoothly
                document.querySelector('.filter-section').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
</script>
