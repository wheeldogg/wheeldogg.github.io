---
title: "Django Unleashed ! Part 1: Core features."
layout: post
categories: Full-Stack
tags:
  - python
  - django
---

<img src="https://images-na.ssl-images-amazon.com/images/I/51Psq9haJWL._SX371_BO1,204,203,200_.jpg" alt="drawing" width="150px"/>

Using this page to keep track of progress and notes while reading the Django Unlimited book.
Pinkham, Andrew. Django Unleashed (p. 3). Pearson Education. Kindle Edition.

I've kept some of my key notes from this book in this page.

The book is dedicated entirely to back-end programming and generating dynamic webpages with Django.

## **Chapter 1. Starting a New Django Project: Building a Startup Categorizer with Blog**

Ref Note. As a developer using a framework, you are simply adding to or directing the behavior provided by other developers.

Our immediate interest with django-admin is the startproject subcommand, which automatically generates correct project scaffolding with many, but not all, of the expected Django conventions.

Run this command to start your project.

```
$ django-admin startproject suorganizer
```

Create a database to run django.

```
$ ./manage.py migrate
```

Run server.

```
./manage.py runserver
```

Success. Visit http://127.0.0.1:8000/ and you will see Django installed and running fine !

Next within your django project you can start an app.
Manage.py creates the app, whereas django-admin is used to create the project.
A project is made up of more than one apps.

create apps

```
$ ./manage.py startapp blog
$ ./manage.py startapp organizer
```

Next you can use suorganizer directory and the settings file to tell the project about the created applications.

**Chapter 1. Review and takeaways**

- Concept of "inversion of control"
- django-admin for creating the project scaffolding
- manage.py tool to create apps and run the test server

## **Chapter 2. Hello world. Building a basic webpage in Django**

Create new app

```
$ ./manage.py startapp helloworld
```

Next we create the greeting() function.
We then define a URL in the suorganizer urls.py

Documentation.
Function views 1. Add an import: from my_app import views 2. Add a URL to urlpatterns: path('', views.home, name='home')

Thus, as we set the URL to empty. When we run

```
$ ./manage.py runserver.
```

we are directed straight to our helloworld app !
Great, this webpage just uses the controller functionality of the MVC architecture.

**Chapter 2. Review and takeaways**

- A webpage is a python callable called a view (i.e. from helloworld.views import greeting) is added to /suorganizer/urls.py.
- Views and URL represent the controller part of Django.
- Again inversion of control we directed django to our functions and it handled everything else.

## **Chapter 3. Programming Django Models and Creating a SQLite Database**

This chapter is all about database modelling in django. Database rows in Django are called model instances.

In an object oriented python program, you can restrict access to methods and variables. This can prevent the data from being modified by accident and is known as encapsulation.

We start by creating a Post model for our blog post data. To create a model, we can simply create a Python class that inherits from models.Model, as shown below.

```
from django.db import models


# Model Field Reference
# https://docs.djangoproject.com/en/1.8/ref/models/fields/


class Post(models.Model):
    title = models.CharField(max_length=63)
    slug = models.SlugField()
    text = models.TextField()
    pub_date = models.DateField()
```

With our Post model firmly defined in our blog app, we can now write the models necessary to run the startup organizer section. We define these fields for our databases in the classes within organizer/models.py.

Next we create relationships between models that were carefully destined.
These can be one to many, many to many relationships etc.

#### One to many relationship.

ie. add a foreign key model to our Newslink model.
startup = models.ForeignKey(Startup)
ie.

```
class NewsLink(models.Model):
    title = models.CharField(max_length=63)
    pub_date = models.DateField()
    link = models.URLField()
    startup = models.ForeignKey(Startup)
```

#### Many to many relationship.

Same as a above. There is no direction in many to many relationships.
tags = models.ManyToManyField(Tag)

#### Next part is about defining the model behaviour.

For instance field uniuqeness (ie. 'slugs').

#### Adding methods to django models.

Because Django models are Python classes, developers can add behavior to the model by writing class methods. Doing so is as straightforward as writing any Python method because fields act like class attributes within Python.

While the string representation method is quite helpful, as we shall rapidly discover, the true takeaway here is that all fields are easily manipulated because Django is python.

##### Controlling Model Behavior with Nested Meta Classes

Django will look for the Meta class in the Tag class and then search for known options, affecting the behavior of Tag instances or groups of Tag instances.

##### Using Django to Automatically Create a SQLite Database with manage.py

Now that we have the data structured we can use Django to build our database.

Note. You should always use Django to build your database. One of the biggest mistakes beginners make is to try to create the database separately from Django, either before or after creating their Django models. This is a very clear instance of developers “fighting the framework.” Not only is it an unproductive use of time, it is actually counter-productive. You will always want to define models in Django and then make Django generate the database for you.

In Django, models and the database schema are reflections of one other.

performing a well controlled migration. Migration files act almost like version control of the database.

1. Create or change a model in Django,
2. 2. Generate a migration file,
3. 3. Use the migration file to create/alter the database.

#### How to perform a migration.

```
(py3) bash-3.2$ ./manage.py  check

(py3) bash-3.2$ ./manage.py makemigrations
Migrations for 'organizer':
  organizer/migrations/0001_initial.py
    - Create model NewsLink
    - Create model Startup
    - Create model Tag
    - Add field tags to startup
    - Add field startup to newslink
Migrations for 'blog':
  blog/migrations/0001_initial.py
    - Create model Post

(py3) bash-3.2$ ./manage.py  migrate
```

Alternatively run the migrations one at a time for each of the apps

The key takeaway from all of this is that models allow Django to automatically create and modify databases thanks to migrations. Django is quite intelligent about this process and focuses on shortening code. Django automatically supplies a primary key to models and sets up indexes for these keys. Furthermore, Django allows us to avoid the tedious and repetitive process of defining many-to-many relations as full tables and instead provides a field to shorten our code and the process.

#### Manipulating Data in the Database: Managers and QuerySets

Django Object-Relational Mapper
The Django web framework includes a default object-relational mapping layer (ORM) that can be used to interact with application data from various relational databases such as SQLite, PostgreSQL and MySQL.

Get up and running with the jupyter notebook (Note. Please insure you have Jupyter installed using pip for your current dev environment).
Change directory into the code repository for Django unleashed than run.

```
jupyter notebook
```

Greeted by the following.
<img src="/public/img/django/django_jupyter_notebook.jpg" alt="jupytert" width="500" height="280">

However, in our case it is better to put the jupyter notebook into the /suorganizer folder that we are currently working on. This allows us to test directly our own build.

Note. to install pylibmc which is required for this demo on MAC. please run brew install libmemcached beforehand or the install will not work.

#####

**Chapter 4. Review and takeaways**

- This chapter was all about templates, this represents the View portion of the MVC architecture.
- Two parts: the templates themselves and the renderer.
- In the template we were introduced to the **django template language.** This allows us to perform loop logic, if statements, operators and filters.
- A variable may have data attributes accessed just as in Python via a period: {{ variable.attribute }}.
- Additionally, filters, which are functions dedicated to formatting or modifying variables, may be applied with a vertical bar (with no spaces in between): {{ variable|filter }}.
- Some filters allow or expect a single argument, which may be passed in with a colon and enclosed in quotations if the argument is not an integer: {{ variable|filter:"arg" }}.
- Filters may also be chained: {{ variable|filter1|filter2 }}.
- ** Template tags ** in the django template language.
- The extends tag, which allows templates to inherit markup from another template.
- Template tag conditions and loops typically create scope, meaning they must be closed.
- **For loops in templates,** Both work the same way they do in Python, but they must be closed, a tag that imitates the **else condition of a for loop** in Python, in that it allows for the condition of an empty list passed to for.
- The template documents may be loaded and rendered in Django through the use of the template package.
- We can use the Django console to prototype our code and import the tamplate package and rendered. the rendered string from the context can be rendered into a view using HttpResponse.
