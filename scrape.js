import * as cheerio from 'cheerio';

const url = "https://books.toscrape.com/";

let html = await fetch(url);
let text = await html.text();
 
const $ = cheerio.load(text);

let lista = [];

$('article.product_pod h3 a').each((i, el) => {
  let $e = $(el);
  lista.push($e.attr('title')); 
});

//let a = $('article.product_pod h3 a').attr('title');

console.log(lista);


