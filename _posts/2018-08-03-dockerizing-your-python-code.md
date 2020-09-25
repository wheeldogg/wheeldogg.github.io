---
title: Dockerizing your python code
layout: post
categories: data-science
tags: docker
---

New to me but on the the to do list for a while was to start using docker for my code.
Here is how I got on.

#### containerization is key for keeping your projects aligned and organized.

I want to combine Docker and Conda.

#### links.
I followed this great tutorial.
https://runnable.com/docker/python/dockerize-your-python-application

Once I got the command 
```
docker build -t python-barcode .
```
I instead had to run docker build -t test . which worked fine.
( I think the first reason it din't work was maybe docker was running).
Then when I tried again it worked.

Congrats if you get 
```
Successfully tagged python-barcode:latest
```
Than you have your first image created and available.


#### docker images

```
docker images
```
will bring up what you have available.
than
```
docker run python-barcode
```
Yes boi !


#### docker images


Example.

mkdir webdev.
mkdir first_django