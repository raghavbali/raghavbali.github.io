---
layout: post
title:  "LSTMs for Music Generation"
date:   2021-07-01 13:00:34 +0530
categories: general
excerpt:    "Let’s Dance to Some AI Generated Tunes"
---

Audio is a domain where the cross-pollination of ideas from computer vision and NLP domains has broadened the perspective. Audio generation is not a new field, but thanks to research in the deep learning space, this domain has seen some tremendous improvements in recent years as well. Audio generation has several applications. The most prominent and popular ones nowadays are a series of smart assistants (Google Assistant, Apple Siri, Amazon Alexa, and so on). These virtual assistants not only try to understand natural language queries but also respond in a very human-like voice.

Music is a continuous signal, which is a combination of sounds from various instruments and voices. Another characteristic is the presence of structural recurrent patterns which we pay attention to while listening. In other words, each musical piece has its own characteristic coherence, rhythm, and flow.

In this article, we will approach the task of music generation in a very simplified manner. We will leverage and extend a stacked LSTM network for the task of music generation. Such a setup is similar to the case of text generation (this is a topic for another upcoming article). To keep things simple and easy to implement, we will focus on a single instrument/monophonic music generation task.

The following is an outline of our workflow for this walk-through:
- Getting to know the dataset
- Prepare dataset for music generation
- LSTMs based music generation model (did we say attention!)
- Model Training
- Listen to the beat! Let’s hear out a few samples our model generates

<!--more-->
This article was featured on [Towards DataScience on medium](https://towardsdatascience.com/lstms-for-music-generation-8b65c9671d35). Read the full article on the [medium website](https://towardsdatascience.com/lstms-for-music-generation-8b65c9671d35)

---
