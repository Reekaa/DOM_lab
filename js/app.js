document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // console.log(form);
      // console.log(event.target.title.value);
      // console.log(event.target.author.value);
      // console.log(event.target.category.value);
      const title = event.target.title.value;
      const author = event.target.author.value;
      const category = event.target.category.value;

      const formParag = document.querySelector('#list-of-books');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const li3 = document.createElement('li');
      li1.textContent = `${title}`;
      li2.textContent = `${author}`;
      li3.textContent = `${category}`;

      formParag.appendChild(li1);
      formParag.appendChild(li2);
      formParag.appendChild(li3);

      form.reset()



      })

      const clearButton = document.querySelector('#clear');

      clearButton.addEventListener('click', (event) => {
        const formParag = document.querySelector('#list-of-books');
        formParag.innerHTML = '';
      })


})
