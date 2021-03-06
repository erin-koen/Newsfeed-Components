// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. EEK note - you reference the domElement here rather than the document as a whole. 
    this.expandButton = domElement.querySelector('.expandButton')
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article. (EEK note to self - expand article is refering to domElement, which in this case is an article from the articles nodelist below. It opens when the event listener notices that the button's been clicked.)
    
    if (this.expandButton.textContent === 'Expand'){
      this.expandButton.textContent = 'Hide';
      this.domElement.classList.toggle('article-open');
    } else {
      this.expandButton.textContent = 'Expand';
      // this.domElement.classList.toggle('article-open');
      this.domElement.style.display = 'none';
    }
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));
// console.log(articles);