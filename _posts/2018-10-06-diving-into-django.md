---
layout: post
title: Hosting RShiny apps within Django framework.
categories: web-development
tags:
- django
- python
- heroku
- AWS
---

<img src="https://cdn-images-1.medium.com/max/1200/1*nC94XZXcbKJQVF1vhj30nQ.png" alt="drawing" width="200px"/> | <img src="https://image.freepik.com/free-icon/plus-sign_318-32580.jpg" alt="drawing" width="25px"/> | <img src="https://cdn.auth0.com/blog/shiny-server-2/logo.png" alt="drawing" width="200px"/>

## Section 1. Introduction.

Excited to learn Django as a web framework.

I really would like to include some of the prowess of shiny applications and implement them in the Django framework.

Main draws for using Django for hosting Shiny applications is that we have a central web framework for all of the applications and we can authorize differen user privileges on login. 

**Excellent resources.**
* https://djangobook.com/tutorials/django-overview/
* Django unleashed.

**Objective**. 
* Build a webapp to host a simple shiny application with authentication.
* Host our Django application on Heroku.

## Section 2. Methods.
- Getting started : Conda environment setup django and run server.
- Start building and playing with Django.
- Setup Django to show Shiny app.
- Deployment and docker, also deployed on Heroku.
- 
### 2.1. Getting started. Conda environment setup django and run server.

For new development work we can use [Conda](https://conda.io/) to manage out python environment.
Environment. Source activate py3
(py3) bash-3.2$ conda install django

Django [docs](https://www.djangoproject.com/start/overview/)
verify django install.
> import django
> print(django.get_version())
2.1.1
Next we want to run a simple application using django

### 2.2. Start building and playing with Django.

At the moment I'm learning all about Django and using Django unleashed as my bible for this project. I'm finding this book an excellent resource so far.
Please refer to blog posts on Django on this blog.

### 2.3. Deploying Django app on Heruko

Check out this blog which is an excellent resource for what we are trying to achive.
http://pawamoy.github.io/2018/03/15/django-auth-server-for-shiny/#overview

Code related to this blog post available [here](https://github.com/Pawamoy/docker-nginx-auth-request-django-shiny-example) on github.

I then forked the repository and made some changes to the shiny docker file.
This is available on my  [github](https://github.com/wheeldogg/docker-django-auth-shiny).
This contains the code and instructions as provided to run the docker images and get the Django app up and running.

Visiting http://localhost:8000/, will look like below.
<img src="/public/img/django-shiny/django-example.jpg" alt="drawing" width="450px"/>

I included the code for a simple example shiny application in the file shinyapp/app.R

<img src="/public/img/django-shiny/shinyapp-django-example.jpg" alt="drawing" width="450px"/>

This is great because we can now see that we have to login using our credentials that we created when we ran "sudo make all" to visualize and use the application.

Next step is to deploy this on the web itself, and for this we can use Heroku.

### 2.4. Deploying containerized Django app on AWS.

The docker application in the previous step is containerized.
The next step is to deploy this docker app with multiple docker images on Heroku.

You can do this simply by having an EC2 instance on AWS, downloading the 

When you run "make up" after "sudo make all" for creating the docker images you should get the following output. Browse to the correct

```
ubuntu@ip-172-31-5-114:~/docker-django-auth-shiny$ make up
Starting docker-django-auth-shiny_database_1  ... done
Starting docker-django-auth-shiny_shinyapp_1  ... done
Starting docker-django-auth-shiny_memcached_1 ... done
Starting docker-django-auth-shiny_djangoapp_1 ... done
Starting docker-django-auth-shiny_nginx_1     ... done
Attaching to docker-django-auth-shiny_memcached_1, docker-django-auth-shiny_database_1, docker-django-auth-shiny_shinyapp_1, docker-django-auth-shiny_djangoapp_1, docker-django-auth-shiny_nginx_1
database_1   | 2018-10-05 12:54:02.138 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
database_1   | 2018-10-05 12:54:02.138 UTC [1] LOG:  listening on IPv6 address "::", port 5432
database_1   | 2018-10-05 12:54:02.146 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
database_1   | 2018-10-05 12:54:02.172 UTC [21] LOG:  database system was shut down at 2018-10-05 12:45:08 UTC
database_1   | 2018-10-05 12:54:02.179 UTC [1] LOG:  database system is ready to accept connections
shinyapp_1   | 
shinyapp_1   | R version 3.4.4 (2018-03-15) -- "Someone to Lean On"
shinyapp_1   | Copyright (C) 2018 The R Foundation for Statistical Computing
shinyapp_1   | Platform: x86_64-pc-linux-gnu (64-bit)
shinyapp_1   | 
shinyapp_1   | R is free software and comes with ABSOLUTELY NO WARRANTY.
shinyapp_1   | You are welcome to redistribute it under certain conditions.
shinyapp_1   | Type 'license()' or 'licence()' for distribution details.
shinyapp_1   | 
shinyapp_1   |   Natural language support but running in an English locale
shinyapp_1   | 
shinyapp_1   | R is a collaborative project with many contributors.
shinyapp_1   | Type 'contributors()' for more information and
shinyapp_1   | 'citation()' on how to cite R or R packages in publications.
shinyapp_1   | 
shinyapp_1   | Type 'demo()' for some demos, 'help()' for on-line help, or
shinyapp_1   | 'help.start()' for an HTML browser interface to help.
shinyapp_1   | Type 'q()' to quit R.
shinyapp_1   | 
shinyapp_1   | > shiny::runApp('/root/shinyapp', port=8100, host='0.0.0.0')
shinyapp_1   | Loading required package: shiny
shinyapp_1   | 
shinyapp_1   | Listening on http://0.0.0.0:8100
djangoapp_1  | [2018-10-05 12:54:02 +0000] [1] [INFO] Starting gunicorn 19.7.1
djangoapp_1  | [2018-10-05 12:54:02 +0000] [1] [INFO] Listening at: http://0.0.0.0:8000 (1)
djangoapp_1  | [2018-10-05 12:54:02 +0000] [1] [INFO] Using worker: sync
djangoapp_1  | [2018-10-05 12:54:02 +0000] [7] [INFO] Booting worker with pid: 7
djangoapp_1  | [2018-10-05 12:54:02 +0000] [8] [INFO] Booting worker with pid: 8

```

This will look like this.
<img src="/public/img/django-shiny/django-login.jpg" alt="drawing" width="450px"/>

**Please note:**
In order to install and run shiny applications I believe you require more than 1gb of Ram. Thus, it's neccessary to ensure your instance state on AWS is over this threshold, otherwise it was taking a pretty long time create the docker images.

That's the great thing about AWS that you can ramp up the RAM and disk space how you see fit !!!

### 2.5. Alternative deploying containerized Django app on Heroku.

Note. I might revisit this to deploy on Heroku directly as it should be possible to deploy directly here 
<img src="https://image.slidesharecdn.com/heroku-appsaretransformative-150317152010-conversion-gate01/95/heroku-apps-are-transformative-5-638.jpg?cb=1426605918" alt="drawing" width="450px"/>

Following this to push a multiple images dockerfile to Heroku.
https://devcenter.heroku.com/articles/container-registry-and-runtime

Should be relatively straightforward as per below.
https://devcenter.heroku.com/articles/django-app-configuration

Note. I was getting 404 issues when getting to release the deployed images but I will look at this again. For not it is good news that we can host these on AWS in the meantime.



#### Section 3.  Alternative way to use the Django CMS

Django and Rshiny together 
http://pawamoy.github.io/2018/03/15/django-auth-server-for-shiny/#overview


#### 3.1 Django CMS

Video on CMS in Django [here](https://www.youtube.com/watch?v=NbsRVfLCE1U)
https://github.com/mfcovington/djangocms-shiny-app
http://pawamoy.github.io/2018/03/15/django-auth-server-for-shiny/


##### 3.2 Install Django CMS.
http://docs.django-cms.org/en/latest/introduction/install.html

```
source activate py3
pip install --upgrade pip
pip install djangocms-installer
```

#### 3.3 Create project.

```
cd ... (allows you to use the djangocms command)
mkdir djangoshinycms-project
cd djangoshinycms-project
djangocms -f -p . mysite (alternatively should I follow djangocms -p . $PROJECT_NAME ???)
```

#### 3.4 Start up and run the server.

```
python manage.py runserver
```

Now you will see this content management system on local host on 
<img src="/public/img/django/success.jpg" alt="drawing" width="800px"/>

##### 3.5 Add CMS_shiny to settings.

Go to settings and unders installed apps add CMS_shiny.
Than run 
```
pip install djangocms-shiny-app
manage.py check.
```

##### E. Start up and run the server.
edit the djangocms to be able to attach shiny applications.

mkdir 
example of iframe below.
<iframe src="https://shiny.rstudio.com/gallery/genome-browser.html" style="border:none;width:1000px;height:500px;"></iframe>


#### 3.6 Alternatively including Shiny applications in iframes.

################
If you want to skip and go straight to running the docker image.
Creating the docker image.
Clone the directory and build first
```
sudo make all .
```
This will probably take about 5 minutes to run and create all dependencies.

Then run the docker image.
```
sudo make up .
```

################
Alternatively test running of the shiny applications themselves.
sudo R -e "shiny::runApp(appDir='shinyapp', port=8100)"
Test running of the Django app.
python djangoapp/manage.py runserver localhost:8000
################


## Section 4. Results

* We now have a solution to build shiny applications and a foundation of creating nginx credentials for creating different users with access permissions.
* This was a good demonstration of getting up and running docker images that we can create these locally and run on AWS.
* Shiny and Django will be an awesome combination for producing interactive visualization applications.

## Section 5. Discussion

* We build and deployed an AWS service using the django framework with an Rshiny app embedded and credentials via nginx.
* Next steps will involve continuing with Django unleashed and CMS features and seeing how to house and build out multiple Rshiny applications.

## Appendices and additional resources.
Docker.
https://docs.docker.com/compose/django/#define-the-project-components
