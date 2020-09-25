---
layout: post
title: Getting started with React
categories: web-development
tags:
  - React
---

In this post I'm going to be outlining the steps I've taken to learn React.js.

React is a javascript library mostly that enables the front end developer to
manipulate in real time the virtual DOM..

Most of the resources below are free, however the udemy ones look good also

### Resources

React hands on
[The react handbook](https://medium.com/free-code-camp/the-react-handbook-b71c27b0a795)
[React crash course youtube](https://www.youtube.com/watch?v=Ke90Tje7VS0&t=413s)
[thereactcourse](https://thereactcourse.com/)

Udemy
[Modern React with Redux](https://bit.ly/2Plgkwi)
[JavaScript: Understanding the Weird Parts](https://bit.ly/2RSnbik)
[Advanced Javascript](https://bit.ly/2PqpyaF)

Django and react as front end
[Django and react](https://www.valentinog.com/blog/drf/)
[Django and react video tutorial](https://www.youtube.com/watch?v=uZgRbnIsgrA)

### Books

Learning React from Alex Banks and Eve Porcello

### Getting Setup for react. Installing npm/npx

For setup you will need node and npm installed locall.

To setup react it is worth reading this.
[react-setup-on-local-computer](https://medium.com/@vikasharry03/react-setup-on-local-computer-912f9a551af3)

Below I am following the React course from flaviocopes.

##### Introduction to create-react-app

However, you can use create-react-app below which will take care of this work (i.e. babel etc.)
more info on below available [npm-vs-npx-whats-the-difference/](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/)

- create react app.
  npx create-react-app my-app
  cd my-app
  npm start

![react_image_running](/public/img/react/react_locally.png)

More information on create-react-app
[https://flaviocopes.com/react-create-react-app/](https://flaviocopes.com/react-create-react-app/)

#### Introduction to React components

Everything in react is a component.
React.createElement

These two lines are the same.
'''
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('app'))

ReactDOM.render(
React.createElement('h1', null, 'Hello World!'),
document.getElementById('app')
)
'''

##### Introduction to JSX

JSX compiles into react components.

##### Introduction to Props

Properties exist of the class in react classes.
So they can be accessed as variables such as state outside of the class

##### Introduction to React Events

These are for instance interactions form the user such as button clicks.
[Full list](https://flaviocopes.com/react-events/)

#### 1. Run example app online for Django + React

The example below involes using Django,
DRF and React.
[build-a-to-do-application-using-django-and-react](https://scotch.io/tutorials/build-a-to-do-application-using-django-and-react)

Wohoo, succes for this app!
![react_image_running](/public/img/react/todo_app_running.png)

#### 1. Creating the first app.

Following crash course video below firstly !!
https://www.youtube.com/watch?v=Ke90Tje7VS0&t=413s

#### 2. Read te React handbook

#### 3. The React course

- 3.1 counter-app.

nice button counter !

[react hooks](https://flaviocopes.com/react-hooks/)

> You can add as many useState() calls you want, to create as many state variables as you want.
> Just make sure you call it in the top level of a component (not in an if or in any other block).

Using the useState() API, we have a way of accessing variables, that can be changed.

```
const [count, setCount] = useState(0)
```

---

challenges [https://github.com/wheeldogg/react_counter](https://github.com/wheeldogg/react_counter)

- Add a “reset” button to restore the count to zero [DONE]
- Add a set of buttons to decrement the count [DONE]
- Add another button that saves the result of the count to a list of results. This way the page can serve as a sort of calculator that memorizes the previous calculations. [MMMMM]

---

[React functions component](https://www.robinwieruch.de/react-function-component)

- 3.2 Github users app.
