import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    {
      type: "name",
      name: "url",
      message: "What is your URL? ",
    },
  ])
  .then((answers) => {
   let url = answers.url
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('My QR.png'));
    fs.writeFile("URL.text", url , (err)=>{
      if(err) throw err;
      console.log("QR and link has been saved.")
    })
  })
  .catch((error) => {
    console.log(error);
  });

  

// Generate a QR code as an SVG image with the data "I love QR!" and save it as a stream.


// Pipe the 'qr_svg' stream to a file using the 'fs' (File System) module.


// Generate a QR code as an SVG image synchronously with the data "I love QR!".

