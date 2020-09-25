---
title: Reticulate package! Ability to read python objects/functions in R.
layout: post
categories: programming
tags:
- R
- python
---

<img src="https://rstudio.github.io/reticulate/images/reticulated_python.png" alt="drawing" width="200"/>

## Documentation for reticulate package.
official
https://rstudio.github.io/reticulate/index.html

nice run-through
https://cran.r-project.org/web/packages/reticulate/vignettes/package.html

## Overview.

As a Python and R programmer it is a great asset to be able to transfer and utilize both these tools for data analytics. A great article for learning more about the differences between Python and R, and the utility for using both is outlined on [Rbloggers](https://www.r-bloggers.com/r-and-python-how-to-integrate-the-best-of-both-into-your-data-science-workflow/).

![Rbloggers post on R and python](https://i0.wp.com/www.business-science.io/assets/2018-10-08-python-and-r/python_r_strengths.png?zoom=2.5&w=456)

Firstly there are instance where we want to mess around with data in R make use of the tidyverse paradigm and save this data that it's available than for python. An example of this is when we have wrote our manipulations/statistics in R and prefer to use Python for interacting with the web and APIS. I will write about this in a future blog how I implemented R and Python to extract transform and load directly to Tableau server.

In this blog post however I want to talk about something that I feel will be really useful in terms of being the inverse of what is mentioned above. In this case we want to be able to take data/objects/classes/modules from our python environments and make this data available in R for data manipulation and visualization.

I started messing around with the reticulate package and feel this is an excellent solution to accomplish this task.

## Methods.

Code available on [Githbub](https://github.com/wheeldogg/reticulate_django)

- The Python file shows how we can access our model from django unleashed. The django project in this case is suorganizer.

- The R script than points to a directory of this R script and is able to load the objects within.

## Next steps.

Here we only have a very basic example working. 
The idea of this work will be to build an Rshiny app that we can intergrate in Django utilizing the django models and queryset objects.
This means that primarily our manipulations and data extraction layer will be done in python, while visualizations and statistical analysis can be done in R.
I feel this will be a great way to utilize the power of both tools in analytics.