---
layout: post
title:  "Linear Regression"
date:   2016-11-13 10:22:34 +0530
categories: stats regression
---
## Regression Analysis
In simple words, the process of investigating the relationship between dependent and independent variables is termed as ___Regression Analysis___. It includes various techniques for modeling and analyzing these relationships. Regression Analysis has roots in statistics but is widely used in the machine learning space. It is used for predictive analysis, forecasting, time series analysis. Another use case for regression analysis is _causal-effect relationship_, though this should be considered as a use case with a pinch of salt.

I might post in future about this, meanwhile here's a [wikipedia link](https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation) for the same.


## Simple Linear Regression
Starting off with simple things, Simple Linear Regression is analysis of two continuous variables of which the one is termed as dependent (or response) while the other is called independent (or predictor). Some examples of _statistical relationship_ between two variables could be
+ Relationship between height and weight- The weight of a person increases with height, though not perfectly or always.
+ Relationship between vehicular speed and number of accidents- The number of accidents are higher at higher speeds, though not always necessary.

Since simple linear regression is an analysis of relationship between two variables, say _x_ and _y_, which are linearly dependent (_linear regression you see_) can be mathematically denoted as:

```y = A + Bx```


where,
+ y: dependent variable
+ x: independent variable
+ A: intercept of the line
+ B: slope of the line
