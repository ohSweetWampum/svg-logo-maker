# svg-logo-maker

A SVG logo generator

## Walkthrough Video

[Click Here to see the walkthrough video](https://drive.google.com/file/d/1d9tBwOLJr8M2beIsQbjigrH4tjpVbZdI/view?usp=share_link)

## Description

This command-line logo generator is a Node.js application that allows the user to create a custom SVG logo by providing input through the command line interface. The user can enter up to three characters for the text, choose a color for the text and a color for the shape by entering a keyword or by providing a hexadecimal number. The user can also choose a shape from a list of available shapes (circle, triangle, or square). Once the user has entered all the necessary information, an SVG file created in the examples folder.

## Technology Used

- OpenWeatherAPIs
  [Learn about Node.js](https://nodejs.org/en/docs)

- Bootstrap
  [Learn about Jest](https://jestjs.io/docs/getting-started)

- Day.js
  [Learn about Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4)

- JavaScript
  [Learn about JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- Git
  [Learn about Git](https://git-scm.com/)

## Usage

1. Open Command-Line Interface
2. Navigate to correct directory. Enter node index.js
3. Mkae your selctions

## Code Highlight

This code defines a function that generates an SVG image with a shape and color specified by the shape and shapeColor arguments. The textColor and characters arguments are used to add text to the image, which is positioned using the textX, textY, and textDY variables. The textY value varies depending on the shape to position the text appropriately. The function uses a switch statement to determine the shape and generate the corresponding SVG code.

```JavaScript

  //function to generate the SVG image
  function generateTheSVGImage(textColor, shapeColor, characters, shape) {
    let shapeSVG = '';
    let textX, textY, textDY;

    switch (shape) {
      case 'circle':
        shapeSVG = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
        textX = "50%";
        textY = "50%";
        textDY = ".3em";
        break;
      case 'triangle':
        shapeSVG = `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
        textX = "50%";
        textY = "75%";
        textDY = ".3em";
        break;
      case 'square':
        shapeSVG = `<rect x="50" y="0" width="200" height="200" fill="${shapeColor}" />`;
        textX = "50%";
        textY = "50%";
        textDY = ".3em";
        break;
    }
```

## Learning Points

- Jest and Inquirer
- Learned about SVGs
- Inheritance
- Classes
- Test suites

## Author Info

Matthew Gibson

- [Portfolio](https://github.com/ohSweetWampum)
- [LinkedIn](https://www.linkedin.com/in/matthew-gibson-6b9b12237/)
- [Github](https://github.com/ohSweetWampum)

## Credits

[mdnwebdocs.org](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
(SVG)

[mdnwebdocs.org](https://www.w3schools.com/js/js_class_inheritance.asp)
(Inheritance)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

```

```
