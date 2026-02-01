---
layout: post
title:  "Supercharge your Image Search with Transfer Learning"
date:   2021-07-27 13:00:34 +0530
categories: general
excerpt:    "Reverse Image Search using Transfer Learning and Approximate Nearest Neighbors (ANNOY)"
---

As you might be aware, the problem of reverse image search is about finding similar images. But how does one define image similarity? Given two sample images, visually we can easily determine if they are similar or not. How do we do so programmatically?

A very naïve approach would be based on metadata associated with the images. In other words, we could associate metadata information such as image size, RGB values, category tags, and so on with every image. This is still being leveraged as a way of reverse image search by a number of web applications. Such applications typically store such metadata in optimised text search platforms such as ElasticSearch¹ or Solr². This approach is simple with a number of pitfalls. The most obvious one being the huge manual effort required to tag each image.

<!--more-->
This article was featured on [Towards DataScience on medium](https://towardsdatascience.com/lstms-for-music-generation-8b65c9671d35).

---
