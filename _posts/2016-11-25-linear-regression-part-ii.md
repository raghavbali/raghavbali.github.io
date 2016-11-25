---
layout: post
title:  "Linear Regression Part II"
date:   2016-11-25 17:49:34 +0530
categories: statistics
---
## Regression Analysis
In the previous post we had a quick sneak peak into Regression and Ordinary Least Squares Regression in particular. In this post we will build onto those concepts and understand how a linear regression model is built and evaluated. We will use some ```python``` to get the job done!

### Quick Refresh
Simple linear regression is an analysis of relationship between two variables, say _x_ and _y_, which are linearly dependent (_linear regression you see_) they can be mathematically denoted as-

> Y = a + b.X

where,


 - Y: dependent variable
 - X: independent variable
 - a: intercept of the line
 - b: slope of the line

 Note: Going forward we will utilize the same _Height-Weight_ data set from the previous post.


### Sample Verses Population
While building the regression line from our _Height-Weight_ data set we made use of the complete data set and also termed out regression line as the _population regression line_. But in a real world scenario, we might never have the complete population (all data points) to play with. How do we go about building a regression line in such a case?

Statistics and Data Science per say is the art of making best possible use of what you have. In most cases we have only a small subset of the complete data. This may be due to limitations in data collection processes, erroneous data or simply the data might not exist at all. So to form a regression line, we use this subset of data and follow the complete process. This process would give us some values for the slope and intercept on the regression line. But if we think carefully, the values might change if the sample itself changes. Thus we would use the values of slope and intercept from the sample to learn the parameters of the actual population. To ensure that the regression parameters of slope and intercept from the sample are good estimates of the population parameters, we make and observe the following assumptions:


  - The mean of dependent variable (```Y```) is a **linear function** of each value of independent variable ```X```.
  The regression line emulates the mean behavior of data. This is evident from the formulae derived to compute slope and intercept (see previous post). Thus, the above assumption seems reasonable.
  - The error between the computed _weight_ for a given _height_ and the actual _weight_ for each data point is **independent** of the other.
  It is obvious that there will be error in the observed and the actual value of dependent variable. But the point that these errors are independent is important.
  - The probability distribution of sample errors is a **normal distribution**
  - The errors for independent variable X have **equal variance**.

### Regression Evaluation : R-Squared
<Add more on this>

[sample_scatter]: {{site.url}}/public/img/ols_sample_scatter.PNG "Sample Scatter plot of Height Vs Weight"
[sample_ols]: {{site.url}}/public/img/ols_sample_ols.PNG "The best fit for our sample Height Vs Weight data set"
