---
title: Getting setup on AWS with MongoDB, Rshiny and Rstudio.
layout: post
categories: Programming
tags:
  - AWS
  - R
  - MongoDB
---

## In this blog post I will take you through my experimentation in getting setup with AWS services and EC2.

![EC2](https://mobisoftinfotech.com/resources/wp-content/uploads/2016/11/How-to-launch-an-AWS-EC2-server-and-set-up-Ubuntu-16.04-on-it.jpg)

As an example for MongoDB I used the google location data which you can read about [visualizing google location data in R](http://localhost:4000/programming/2018/07/21/visualising-google-location-history-in-r/)

## Introduction:

1. Access your data and load into MongoDB.
2. Parse data in R and produce basic explaratory visualizations.
3. Create interactive visualization app.
   Note. once an API is made available we will be able to replace the manual process of downloading the data directly from [Google takeaway](https://takeout.google.com/settings/takeout/downloads)

## Methods.

##### Access your data from google.

Firstly download your data from Google directly as a json file [here](https://takeout.google.com/settings/takeout/downloads).
For MongoDB I setup an EC2 instance.
Documentation and step by step approach [available anseo](https://aws.amazon.com/getting-started/tutorials/launch-a-virtual-machine/) (some Irish for ya).
Now you can login to your new machine !

```
$ssh -i "mykeyvalue.pem" ubuntu@publicdns.compute.amazon.com
```

I added public ssh key to github and pulled the repo to th EC2 instance.
I then SCP'd and transferred my Json location data to the server.

```
$scp -i ~/Desktop/amazon.pem ~/Desktop/MS115.fa  ubuntu@ec2-54-166-128-20.compute-1.amazonaws.com:~/data/
```

##### Populate MongoDB with the new data.

Below I populated a DB called "google" with a collection of Json documents I called "full"

```
mongoimport --db google --collection full --file location.json --jsonArray
connected to: 127.0.0.1
2018-07-22T23:56:06.164+0000 		Progress: 648649/204931111	0%
2018-07-22T23:56:06.165+0000 			1200	200/second
......
```

**Note**. You may need to remove the top line " { Locations [" and the bottom parenthesis ]} at the end of the file.
Once this is done the command above works. I had approx 200mb of data so preferred to store in mongo than reading into memory in R.
Out of curiousity I imported 641,605 objects, each one representing a unique location.

##### Setup Rstudio and Rshiny on the AWS.

Setting up relevant Rstudio and Rshiny on AWS.
https://aws.amazon.com/blogs/big-data/running-r-on-aws/
**Note**. follow the ssh and http settings here.

Now we will setup R.
Firstly make sure you install R on ubuntu.

```
sudo apt-get install r-base
```

Follow these commands below to install and run RStudio.
Update the software catalog and install a few things:

```
sudo apt-get update && sudo apt-get -y install gdebi-core r-base
wget https://download2.rstudio.org/rstudio-server-0.99.891-amd64.deb
sudo gdebi -n rstudio-server-0.99.891-amd64.deb
```

**Note**. Be sure to change your password on the ubuntu server and use 'ubuntu' and 'pw' to login to the front end. Use the following "sudo passwd ubuntu".

Now you may visit your Rstudio
http://ec2-YOUR-IP.compute-1.amazonaws.com:8787/

Please refer to [Rstudio](https://www.rstudio.com/products/shiny/download-server/) website to install. Simply copy and paste those commands when inside of your EC2 instance.
Run these commands to install.

```
sudo su - \
-c "R -e \"install.packages('shiny', repos='https://cran.rstudio.com/')\""
$ sudo apt-get install gdebi-core
$ wget https://download3.rstudio.org/ubuntu-14.04/x86_64/shiny-server-1.5.7.907-amd64.deb
$ sudo gdebi shiny-server-1.5.7.907-amd64.deb
```

Visualize Rshiny by visiting the same
http://ec2-YOUR-IP.compute-1.amazonaws.com:3838
![shiny-running](/public/img/google-timeline-vis/shiny_example.png)

Note. had small issue with shiny here as the shiny user was created but for some reason there is an issue installing shiny (particularly the httpuv library for this user). As a quick fix I edited the /etc/shiny-server/shiny-server.conf file to say run as <my-username> which solved this. Might re-use the shiny user at later date but for now I prefer to keep my shiny and actual users R the same so I don't have any packages missing (it does happen believe me :) ).

I used the following to install shiny package.

```
if (!require("devtools"))
  install.packages("devtools")
devtools::install_github("shiny", "rstudio")
```

Firstly, Rmongo which will be using relies on Rjava.
Please refer to this [site](<https://github.com/hannarud/r-best-practices/wiki/Installing-RJava-(Ubuntu)>) to set this up

Can't wait to mess around some more with Rstudio as hosted on AWS. Really powerful stuff I'm sure.
Shane
