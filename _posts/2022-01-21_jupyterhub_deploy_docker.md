---
layout: post
title: JupyterHub Deployment with Docker
categories: Data Science
tags:
  - Jupyterhub
---

Check out the fork of the repository discussed @ [wheeldogg/jupyterhub-deploy-docker](https://github.com/wheeldogg/jupyterhub-deploy-docker)

### Jupyterhub introduction

<a href="https://miro.medium.com/max/2000/1*m87_Htb_9Pstq0UcvNJ49w.png" rel="jupyterhub">![Foo](https://miro.medium.com/max/2000/1*m87_Htb_9Pstq0UcvNJ49w.png)</a>


### What are notebooks ?

In the context of jupyterhub when we refer to notebooks we are referring to documents that showcase particular analysis and outputs including visualizations and outputs from data science workflows. It is also an envionment (i.e. Julia, Python or R (Jupyter) that can be run and shared. They are also essentially web applications available via browser.


### What is a notebook server ?

Notebooks servers are designed to be used by a single user primarily.

 ![Jupyterhub](/public/img/jupyterhub/notebook_server.png)

Having a notebooks that you can login there are two main options from Jupyterhub. Jupyter notebook itself as a single notebook and also Jupyterlab that allows you to to organize all the different notebooks.

Nonetheless, they are designed to be used primarily from your local machine. You can export the notebook as html (or the notebook itself as a .pynb file can be shared providing you have the environement shared also).

The next evolution of jupyternotebooks is JupyterHub.

### Introducing Jupyterhub 

Jupyterhub is a service to allow many users run thre own personal jupyter lab server and organize many notebooks and environments simultaneously on a single (or shared servers which is not covered in this post but see [jzero-to-jupyterhub](https://zero-to-jupyterhub.readthedocs.io/en/latest/). 

![Jupyterhub](/public/img/jupyterhub/hub_persons.png)

![Jupyterhub configuration](/public/img/jupyterhub/hub_config.png)

[jupyterhub-pydata-2016​](https://github.com/minrk/jupyterhub-pydata-2016​)

### How jupyterhub manages the user workflow.

- Initial request is handled by Hub
- User authenticates with login form
- Spawner starts single user server
- Hub notifies Proxy
- Redirects user to /user/[name]
- Single user server verifies auth with hub


### Jupyterhub-deploy-docker

In the reference deployment Github auth is used.

[jupyterhub/jupyterhub-deploy-docker](https://github.com/jupyterhub/jupyterhub-deploy-docker)


### Adaptation/Fork of Jupyterhub-deploy-docker.

I've created a fork of the original repository and setup with docker and nativeauthenticator. For a small data science team this works really well.


## Further resources

[jupyterhub/jupyterhub-deploy-docker](https://github.com/jupyterhub/jupyterhub-deploy-docker)

[native-authenticator](https://native-authenticator.readthedocs.io/en/latest/)

[nativeauthenticator](https://blog.jupyter.org/simpler-authentication-for-small-scale-jupyterhubs-with-nativeauthenticator-999534c77a09)

[jupyterhub-docker](https://opendreamkit.org/2018/10/17/jupyterhub-docker/)











