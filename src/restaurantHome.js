const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const headLine = document.createElement('h1');
    headLine.textContent = "Welcome to the restaurant!";
    pageContent.appendChild(headLine);

    const paragraph = document.createElement('p');
    paragraph.textContent = "trary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable s";
    pageContent.appendChild(paragraph)

    // Append the pageContent to the content element
    content.appendChild(pageContent);
};

export default createRestaurantHomePage;