const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "characters",
      message: "Enter up to 3 characters that you want for your logo",
      validate: function (input) { 
        return input.length <= 3
      }
    },
    {
      type: "list",
      message: "Choose the shape you want your logo to be",
      name: "shapes",
      choices: ["circle", "triangle", "square"],
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword (or a hexadecimal number) for your text color:',
     
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword (or a hexadecimal number) for your shape color:',
     
      },
  ])
  .then((data) => {
    console.log(data);
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;
    //Farley Wittles 
    //farleywittles.json
    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

  //function to generate the SVG image
  function generateTheSVGImage (textColor, shapeColor, characters){
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg"></svg>
  }