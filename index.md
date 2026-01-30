---
layout:     page
title:
permalink:  /
---


<style>
        /* custom CSS for the Back to Top button */
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: none; /* Hidden by default */
            background-color: #a9a9a9;
            color: black; 
            padding: 10px 15px;
            font-size: 16px;
            border-radius: 10px;
            text-align: center;
            text-decoration: none;
            transition: opacity 0.3s;
            z-index: 1000; /* Make sure it stays on top */
        }

        .back-to-top:hover {
            background-color: #c07c76; /* Darker blue on hover */
        }

        .back-to-top.show {
            display: block;
            opacity: 1;
        }
</style>


<div class="row">
    <div class="col-sm-6 col-xs-12">
        <img src="/img/cover2.jpg" class="img-full circle mb-4 imgstyle-1">
    </div>
    <div class="col-sm-6 col-xs-12" style="margin-bottom: 0;">
        <span class="conf">Principal Data Scientist,&nbsp;Delivery Hero SE</span><br>
        <i class="bi bi-google"></i>&nbsp;<a target="_blank" href="https://scholar.google.com/citations?hl=en&user=3oLGqC0AAAAJ">Google Scholar</a><br>
        <i class="bi bi-github"></i>&nbsp;<a target="_blank" href="https://github.com/raghavbali">GitHub</a><br>
        <i class="bi bi-medium"></i>&nbsp;<a target="_blank" href="https://medium.com/@Rghv_Bali">Medium</a><br>
        <a target="_blank" href="https://www.linkedin.com/in/baliraghav/"><i class="bi bi-linkedin"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://twitter.com/rghv_bali"><i class="bi bi-twitter"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.instagram.com/raghavbali/"><i class="bi bi-instagram"></i></a><br>
    </div>
</div>
<hr>

<a name="/news"></a>
# News

{% for item in site.data.news %}
- [{{ item.year }}] {{ item.content }}
{% endfor %}

<!-- <div id="read-more-button"> <a nohref>Read more</a> </div> -->

<!-- Back to Top Button -->
<a href="#" class="back-to-top">↑ Back to Top</a>

<hr>

<a name="/bio"></a>

# Bio

Raghav Bali is a Principal Data Scientist at Delivery Hero, one of the world’s leading food delivery platforms, based in Berlin, Germany. With over 15 years of experience, he focuses on researching and building enterprise-grade solutions using Machine Learning, Deep Learning, and Natural Language Processing for real-world challenges. Raghav has published several peer-reviewed papers, authored more than seven books, and co-invented multiple patents in the fields of machine learning, deep learning, and NLP.

Before joining Delivery Hero, he worked at United Health Group (Optum) where he researched and developed a number of cutting edge solutions for the US healthcare sector. At Intel, he helped drive data-first IT initiatives using NLP, deep learning, and traditional statistical techniques. Earlier, at American Express, he tackled customer retention and digital engagement problems in the finance domain.

<div class="row" id="timeline-logos">
    <div class="col-xs-3">
        <div class="logo-wrap">
            <span class="helper"></span>
            <a target="_blank" href="https://www.deliveryhero.com/"><img src="/img/logos/dh_logo.png"></a>
        </div>
        <div class="logo-desc">
            Delivery Hero<br>
            2022 - Present
        </div>
    </div>
    <div class="col-xs-3">
        <div class="logo-wrap">
            <span class="helper"></span>
            <a target="_blank" href="https://www.optum.com/"><img src="/img/logos/optum_logo.png"></a>
        </div>
        <div class="logo-desc">
            Optum<br>
            2017 - 2022
        </div>
    </div>
    <div class="col-xs-3">
        <div class="logo-wrap">
            <span class="helper"></span>
            <a target="_blank" href="https://intel.in"><img src="/img/logos/intel_logo.png"></a>
        </div>
        <div class="logo-desc">
            Intel<br>
            2015 - 2017
        </div>
    </div>
    <div class="col-xs-3">
        <div class="logo-wrap">
            <span class="helper"></span>
            <a target="_blank" href="https://www.americanexpress.com/en-in/"><img src="/img/logos/amex_logo.jpg"></a>
        </div>
        <div class="logo-desc">
            American Express<br>
            2014 - 2015
        </div>
    </div>
    <!-- <div class="col-xs-3">
        <div class="logo-wrap">
            <span class="helper"></span>
            <a target="_blank" href="//iiitb.ac.in"><img src="/img/logos/iiitb_logo.jpg"></a>
        </div>
        <div class="logo-desc">
            IIIT Bangalore<br>
            2012 - 2014
        </div>
    </div> -->
</div>

During his Master’s, Raghav took on exciting courses like Machine Learning, Software Architecture, Advanced Algorithms, and Operating Systems. He also worked on large-scale projects such as a <i>Language Recognizer for Indian Languages</i>, <i> Hierarchical Document Clustering System</i>, <i>Bitcoin-based Cloud Provisioning Platform</i> and more.

Outside of work, he’s a tech enthusiast who enjoys exploring new gadgets and ideas. He’s also a passionate photographer—check out his work on [Instagram](https://www.instagram.com/raghavbali/) and [VSCO](https://vsco.co/raghavbali/gallery).

[Occassional Blog Posts](/blog)

---

<a name="/papers"></a>

# Papers
{% for paper in site.data.papers %}
<a name="{{ paper.id }}"></a>
<h2 class="pubt">{{ paper.title }}</h2>
<p class="pubd">
{% if paper.conference %}
<span class="conf">{{ paper.conference }}</span><br>
{% endif %}
{% if paper.authors %}
    <span class="authors">{{ paper.authors }}</span><br>
{% endif %}
{% if paper.links %}
    <span class="links">
        {% for link in paper.links %}
        <a target="_blank" href="{{ link.url }}">{{ link.text }}</a>
        {% endfor %}
    </span>
{% endif %}
</p>
{% if paper.image %}
<img src="{{ paper.image }}">
{% endif %}
<hr>
{% endfor %}


<a name="/books"></a>
# Books
{% for book in site.data.authored_books %}
  {% assign remainder = forloop.index0 | modulo: 2 %}
  {% if remainder == 0 %}
<div class="row">
  {% endif %}
    <div class="col-sm-6">
        <h2 class="talkt" style="font-weight:300;"><a target="_blank" href="{{ book.url }}">{{ book.title }}</a></h2>
        {% if book.github %}
        <span class="conf"><a href="{{ book.github }}">Github</a></span>
        {% endif %}
        <p class="talkd">
            <a target="_blank" href="{{ book.url }}"><img style="margin-top: 10px;" src="{{ book.image }}"></a>
        </p>
    </div>
  {% if remainder == 1 or forloop.last %}
</div>
  {% endif %}
{% endfor %}

# Books Reviewed
<div class="row">
    <div class="col-xs-12">
        {% for book in site.data.reviewed_books %}
        <div class="talkt">
                <a target="_blank" href="{{ book.url }}">
                    {{ book.title }}
                </a>
        </div>
        {% endfor %}
    </div>
</div>
<hr>

<a name="/patents"></a>

# Patents
{% for patent in site.data.patents %}
<a name="{{ patent.id }}"></a>
<h2 class="pubt">{{ patent.title }}</h2>
<p class="pubd">
{% if patent.patent_id %}
<span class="conf">{{ patent.patent_id }}</span><br>
{% endif %}
    <span class="authors">{{ patent.authors }}</span><br>
    <span class="links">
        <a target="_blank" href="{{ patent.url }}">{{ patent.status }}</a>
    </span>
</p>
<hr>
{% endfor %}

<a name="/talks"></a>

# Talks
<div class="row">
    <div class="col-xs-6">
        <p class="talkd">
            <img src="/img/talks/talk_2023.jpg">
        </p>
    </div>
    <div class="col-xs-6">
        <p class="talkd">
            <img src="/img/talks/talk_2019.jpeg">
        </p>
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
    {% assign talks_by_year = site.data.talks | group_by: "year" | sort: "name" | reverse %}
    {% for year_group in talks_by_year %}
        <span class="conf">{{ year_group.name }}</span><br>
        <ul>
            {% for talk in year_group.items %}
            <li>
                <div class="talkt">
                        <a target="_blank" href="{{ talk.url }}">
                            {{ talk.title }}
                        </a>
                        {% for link in talk.links %}
                        |
                        <a target="_blank" href="{{ link.url }}">
                        {{ link.text }}
                        </a>
                        {% endfor %}
                </div>
            </li>
            {% endfor %}
        </ul>
    {% endfor %}
    </div>
<!-- <div id="read-more-button">
    <a nohref>Read more</a>
</div> -->
</div>

<hr>

# Articles
{% for article in site.data.articles %}
  - [{{ article.title }}]({{ article.url }})
{% endfor %}
  <!-- Dead Links -->
  <!-- - [CourseBricks: Introduction to Natural Language Processing](https://coursebricks.com/blog-introduction-to-natural-language-processing/) -->
  <!-- - [Top 25 Python Libraries for Machine Learning](https://www.zeolearn.com/magazine/python-libraries-for-machine-learning)
  - [How to Become a Data Scientist](https://www.zeolearn.com/magazine/how-to-become-a-data-scientist) -->
  

<!-- <div id="read-more-button">
    <a nohref>Read more</a>
</div> -->
<hr>

<script src="/js/jquery.min.js"></script>
<!-- <script type="text/javascript">
    $('ul:gt(0) li:gt(50)').hide();
    $('#read-more-button > a').click(function() {
        $('ul:gt(0) li:gt(6)').show();
        $('#read-more-button').hide();
    });
</script> -->

<script>
        // Show the "Back to Top" button when the user scrolls down 100px
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            const backToTopButton = document.querySelector(".back-to-top");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        }

        // Smooth scroll back to top when the button is clicked
        document.querySelector(".back-to-top").addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    </script>
