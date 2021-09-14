---
title: Visualization of google timeline data in R.
layout: post
categories: Programming
tags:
  - R
  - Visualization
  - AWS
  - MongoDB
---

![Google is watching you](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGx3Vv3gi4lRaQfTosgxeCFFaAfoz9S9u9Zz11q2l30IJhwys5EQ)

## Introduction to visualizing google timeline data.

This page will take you through an analysis of google location timeline data.
The aim is not only to preform some analysis but setup Mongodb, Rstudio and Rshiny (for visualization) on AWS.
Instead as there were a few parts to getting a Shiny app setup I moved the post about AWS and setting up Rstudio, Rshiny and MongoDB to this page [Getting setup on AWS with MongoDB, Rshiny and Rstudio.](http://localhost:4000/post/2018/07/23/getting-setup-on-aws-with-mongodb-rshiny-and-rstudio/)

## Why this post was created:

Major inspiration taken from this page shiring.github.io/maps/2016/12/30/Standortverlauf_post.
The purpose for me doing this post is because I wanted to do the analysis also and provide my customized Rscript.
Eventually I aim to use this in a part 3 if you will (part 1 is getting [setup](http://localhost:4000/post/2018/07/23/getting-setup-on-aws-with-mongodb-rshiny-and-rstudio/)).
This will be the actual Shiny app itself and will add this code to the "google-timeline-vis" github repository.

## What can we find out ?:

Firstly we can conduct an analysis directly on the Json data.
Please refer to script "**local_analaysis.r**".
Firstly some basic stats from the data. Note. below is outpu of R code.

# How many data points did Google record over what period of time?

# how many rows are in the data frame?

```
## [1] "2013-07-15 22:48:34 GMT"
max(loc$time)
```

```
## [1] "2018-07-23 16:03:06 GMT"
loc$date <- as.Date(loc$time, '%Y/%m/%d')
loc$year <- year(loc$date)
loc$month_year <- as.yearmon(loc$date)
```

```
points_p_day <- data.frame(table(loc$date), group = "day")
points_p_month <- data.frame(table(loc$month_year), group = "month")
points_p_year <- data.frame(table(loc$year), group = "year")
```

# How many days were recorded?

nrow(points_p_day)

```


## [1] 1383
nrow(points_p_month)
```

```
## [1] 49
```

# And how many years?

nrow(points_p_year)
[1] 6

#### Next, we can plot the above data to observe frequency.

![Hosted](/public/img/google-timeline-vis/datapoints.png)

#### Now for an image of places visited in Ireland.

<!-- <img src="/public/img/google-timeline-vis/IREgraph.png" alt="drawing" width="600px"/> -->

![Hosted](/public/img/google-timeline-vis/IREgraph.png)

#### I was in New Zealand in 2017-2018 ?

![Hosted](/public/img/google-timeline-vis/NZgraph.png)

#### Accuracy within Cork region.

![Hosted](/public/img/google-timeline-vis/cork_accuracy.png)

#### Velocity within Cork region.

![Hosted](/public/img/google-timeline-vis/cork.png)

#### Distance travelled per day since June 1st 2018

![Hosted](/public/img/google-timeline-vis/distance_per_day.png)

#### Furhtermore, Google provides an activity field which we can use in my case to analyse my most active travel types in 2018

![Hosted](/public/img/google-timeline-vis/activities.png".png)

## Future and conclusions.

Okay, so the Shiny thing has been done before as I came across this [app](https://cultureofinsight.shinyapps.io/location_mapper/).

![Hosted](/public/img/google-timeline-vis/rshiny_vis.png)
and associated blog here https://www.cultureofinsight.com/blog/2018/01/31/2018-01-31-map-your-google-location-data-with-r-shiny/

In particular I would like to allow us to visualize the activities also engaged in most frequently as well as some of the measures above.
It was great through this project to get some exposure to AWS and EC2 instances and getting these setup (it's also really satisfying when you load the json data directly into mongodb and can index it for faster queries). I found that querying the raw json data was a bit slow in some cases and will follow up with how we can do this in R and querying mongodb.

Future work will involve automating the abouts of the graphs based on selections made in Rshiny.

Any questions please get in touch !!
Shane

#### Appendices and further reference.

Please refer to some other blogs similarly looking at this question.
https://shiring.github.io/maps/2016/12/30/Standortverlauf_post
https://medium.com/@tejasrr19/visualize-your-google-location-history-a2343b14a6fe)
https://www.r-bloggers.com/how-to-map-your-google-location-history-with-r/ )
