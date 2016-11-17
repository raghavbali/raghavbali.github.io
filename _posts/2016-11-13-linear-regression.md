---
layout: post
title:  "Linear Regression"
date:   2016-11-13 10:22:34 +0530
categories: statistics
---
## Regression Analysis
In simple words, the process of investigating the relationship between dependent and independent variables is termed as ___Regression Analysis___. It includes various techniques for modeling and analyzing these relationships. Regression Analysis has roots in statistics but is widely used in the machine learning space. It is used for predictive analysis, forecasting, time series analysis. Another use case for regression analysis is _causal-effect relationship_, though this should be considered as a use case with a pinch of salt.

I might post in future about this, meanwhile here's a [wikipedia link](https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation) for the same.


## Simple Linear Regression
Starting off with simple things, Simple Linear Regression is analysis of two continuous variables of which the one is termed as dependent (or response) while the other is called independent (or predictor). Some examples of _statistical relationship_ between two variables could be
+ Relationship between height and weight- The weight of a person increases with height, though not perfectly or always.
+ Relationship between vehicular speed and number of accidents- The number of accidents are higher at higher speeds, though not always necessary.

**Sample Height Vs Weight scatter plot:**

![alt text][sample_ols]

Since simple linear regression is an analysis of relationship between two variables, say _x_ and _y_, which are linearly dependent (_linear regression you see_) they can be mathematically denoted as-

> y = A + Bx

where,
  + y: dependent variable
  + x: independent variable
  + A: intercept of the line
  + B: slope of the line


Continuing with our _Height-Weight_ sample data set, let us apply some linear regression concepts. The sample data set contains the weight and height measurements of a sample population (these values have been generated randomly for demo purposes).

As mentioned earlier, Regression is the analysis of independent and dependent variables, in our current example, we have the variable _weight_ which depends on _height_ of a person. Thus, weight is the dependent while height is independent.

From the above plot, we can roughly say that the weight of a person increases with his/her height. We could use this information to predict/guess the weight of a person whose height we know. To formalize this behavior, we can draw a line through the data points to depict this relationship. The relationship can be depicted as:

> weight = A + B.height

We can obtain different lines for different settings of _A and B_. But now the question arises, which line represents the relationship most correctly and what values of these variables help us predict an unknown person's weight given his/her height? Luckily, we have a few data points which we can utilize to get as close a prediction as possible.



Fitting a line would give us a average/central behavior. But how do we fit the best line?
Then talk about errors- error, squared error.
Then talk about calculating the best intercept and slope which is called least squares or OLS
Mention the equations
Show the final plot

Mention the significance of intercept and slope
Talk about different evaluations- error, Rsquared,etc



[sample_ols]: {{site.url}}/assets/img/ols_sample.PNG "Sample Scatter plot of Height Vs Weight"
