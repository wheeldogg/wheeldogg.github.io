---
layout: post
title: Dash in python for creating easy and flexible dashboards
categories: dash
---

![Dash](https://cdn.rawgit.com/plotly/dash-docs/b1178b4e/images/dash-logo-stripe.svg)

First thing is to create an environment for expermenting with Dash.
conda activate django_dash

### **Part 1: Dash tutorials and resources**

#### great tutorial for getting started with dash and python.

Dash tutorial by Semdex.
https://pythonprogramming.net/data-visualization-application-dash-python-tutorial-introduction/

- I've created a folder /projects/web-development/dash/semdex_tutorial
- environment is django_dash

```source activate django_dash

```

##### video 1.

#### to be finished off later :)

---

#### Reactive dash, update one thing everything else updates.

This would be pretty crucial for having data.tables and graphs that can be updated side by side, typically how filters affect graphs in Tableau.
Good page for example applications for Dash.
https://github.com/amyoshino/Dash_Tutorial_Series
check out the videos here.
https://www.youtube.com/watch?v=lu0PtsMor4E

More on plotly.
http://nbviewer.jupyter.org/github/plotly/python-user-guide/blob/master/Index.ipynb

---

### **Part 2: Getting Dash apps to work within django.**

I found this useful thread that discussess this challenge in good detail.
https://community.plot.ly/t/django-and-dash-eads-method/7717/23

#### Option 1. Wiring Flask apps through Django.

Example to get dash running
Cool example of dash app. Simple django site with embedded app.
https://bitbucket.org/m_c_/sample-dash

![edd-oj](/public/img/webdev/sample_dash_flask.png)

However, doesn't look an ideal solution right now as we want to keep the authentication the same in Django

#### Option 2. eddy-oj / Dash_within_Django_app

https://github.com/eddy-oj/Dash_within_Django_app

1. Example working ?
   ![edd-oj](/public/img/webdev/eddy-oj.png)

2. Does it work in Django 1 also ?
   I feel it should only to change the URLS part.

3. Is the Dash app fully functioning (ie. updates automatically and changes things) ?
   Yes. Example working with Callbacks now.

4. Can we add more than one Dash app into the page ?
   Example of two layouts on one page, one updates the other.

5. Are the two Dash apps talking to each other ?
   Yes, as above.

Example here could be the reactive tables stuff from **part 1.**

#### Option2. GibbsConsulting / django-plotly-dash

repo :https://github.com/GibbsConsulting/django-plotly-dash
docs : https://django-plotly-dash.readthedocs.io/en/latest/

1. Example working ?
   ![gibbs](/public/img/webdev/gibbs-consulting.png)

2. Will it work in django 1 also
   Nope, :(
   Reason is you would have to start refactoring the package itself and easier to upgrade to django 2 before than.

However, using GibbsConsulting looks like the best solution in the end when django is upgraded
