let cards = [
    {
      artName: 'Tilting effect',
      pageLink: './Art/Adwaith@123/index.html',
      imageLink: './Art/Adwaith@123/pic.gif',
      author: 'Adwaith@123',
      githubLink: 'https://github.com/Adwaith123/'
    },
    {
        artName: 'Streching effect',
        pageLink: './Art/Adwaith@234/index.html',
        imageLink: './Art/Adwaith@234/capture.GIF',
        author: 'Adwaith@234',
        githubLink: 'https://github.com/Adwaith123/'
      },
];

// Creates cards from the array above
// You don't need to modify this
let contents = [];
Shuffle(cards).forEach((c) => {
  contents.push([
    `<li class="card">` +
      `<a href='${c.pageLink}'>` +
      `<img class="art-image" src='${c.imageLink}' alt='${c.artName}' />` +
      `</a>` +
      `<div class="flex-content">` +
      `<a href='${c.pageLink}'><h3 class="art-title">${c.artName}</h3></a>` +
      `<p class='author'><a href="${c.githubLink}" target="_blank"><i class="fab fa-github"></i> ${c.author}</a> </p>` +
      `</div>` +
      `</li>`
  ]);
});

document.getElementById('cards').innerHTML = contents;

function Shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}
