// DIA 1 web scraper
const lista = document.querySelectorAll('article.porduct_pod h3 a'); //Retorna uma lista de todos os tags 'a'
lista.array.forEach(element => {
  console.log(element.title);
}); //Passa por cada elemento da lista e imprime o nome do elemento
