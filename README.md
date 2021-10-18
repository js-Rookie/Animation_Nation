                                                                       **Animation Nation**
                                                                       
Hello and welcome to Animation Nation, a  project for Hacktoberfest 2020! This site aims to showcase your talent :)

Rules
The rules are simple. You have to:

Use HTML <divs> and CSS only! No JS, and no SVGs!
Have at least one animation in your work
Please make sure that the code is indeed your own, and not copied from someone else
That's it!

How to contribute

Now, once you've forked this repo and got a local version up on your computer, follow these steps:

In the Art directory (folder), create a directory named after yourself.
Within this folder you just made, create two files, an HTML file, and a CSS file.
Link your CSS file to your HTML file.
Using only HTML and CSS (no <script> allowed!!), create a work of art! It can be as simple or as complex as you like, as long as it's animated in some way!
Get a screen recording of your finished work, and make a gif! Try to crop it so that it looks good as a smallish (preferably squarish) image. Save this in your directory, together with your HTML and CSS files. Static screenshots are also acceptable.
If you don't add a gif/screenshot, the website won't show your animation.
Go to the root include.js. You will see an array of objects, each one represents a work of art that someone has created. Copy an example object and paste it at the end, filling it out with your art information and links:
  
let cards = [
  {
  
    pageLink: './Art/Joy/triangle/triangle.html',
    imageLink: './Art/Joy/triangle/triangle.gif',
    author: 'Joy',
    githubLink: 'https://github.com/royranger'
  
  }
];
