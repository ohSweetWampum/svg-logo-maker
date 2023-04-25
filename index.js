const inquirer = require('inquirer');
const fs = require('fs');
// import shape classes from shapes.js


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
    const filename = `${data.characters.toLowerCase().split(" ").join("")}.json`;
    
    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("successful")
    );
  
    const svgImage = generateTheSVGImage(data.textColor, data.shapeColor, data.characters, data.shapes);
    console.log(svgImage);
  
    fs.writeFile(`${data.characters.toLowerCase().split(" ").join("")}.svg`, svgImage, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg! File was successfully created!")
    );
  });
  

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
    
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        <text x="${textX}" y="${textY}" dy="${textDY}" font-size="60" text-anchor="middle" fill="${textColor}">
          ${characters}
        </text>
      </svg>
    `;
    
  }
  
