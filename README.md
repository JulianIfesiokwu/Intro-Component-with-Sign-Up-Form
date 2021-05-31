# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://julianifesiokwu.github.io/Intro-Component-with-Sign-Up-Form/)
- Live Site URL: [Add live site URL here](https://julianifesiokwu.github.io/Intro-Component-with-Sign-Up-Form/)

## My process
 I first designed the site on paper using a pencil before writing any code. I am also learning that it is good to define the classes and the divs. It is really helpful and increased my speed in developing the project.

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- JavaScript

### What I learned

To see how you can add code snippets, see below:

```html
<div class="big-container">
  <div class="input-container">
    <input type="password" class="password" placeholder="Password">
    <span class="exclamation"><img src="./images/icon-error.svg"></span>
  </div>
  <p class="error-message">Password cannot be empty</p>
</div>

I restructed my HTML to look like this after I found I hadn't properly prepared for how to display the error message and red background properly

```
```js

I tried to create one function that would be used to validate user inputs. I created 2 functions, one for email and the other for all other inputs. Then i created a final function that runs when the submit button is clicked.

function validateAllFields(e) {
    // remove the default behaviour
    e.preventDefault();

    // validate firstname field
    validatefield(firstName);
    // validate lastname field
    validatefield(lastName)
    // validate password field
    validatefield(password)
    // validate Email
    validateEmail(email);
}

// Checks firstname,lastName and password fields that they have at least 2 letters
function validatefield(field) {
    if (field.value.length <= 1) {
        highlightField(field);
    } 
}
```

### Continued development
I will try to continue my development on preparing my layout before coding, improving my css by using visible & display: none as needed in projects, and also improving my understanding of JavaScript.


### Useful resources

- (https://www.w3schools.com/howto/howto_css_form_icon.asp) - This helped me to place the exclamation mark within the input box. Was very helpful.
- (https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/) - Helped me with understanding already completed fields can be styled by chrome and how to remove them. Sadly i couldnt remove mine. 

I would try to learn how to change browser default styling.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/egbuna09)

## Acknowledgments

Thanks to frontend Mentor for their help in providing such a project.

