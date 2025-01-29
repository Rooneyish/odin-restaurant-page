const createMenuPage = ()=>{
    const content = document.querySelector('#content');
    content.innerHTML = ''; 
    
    const menuPage = document.createElement('div');
    menuPage.classList.add('menuPage');

    const header1= document.createElement('h2');
    header1.textContent ="Menu";
    menuPage.appendChild(header1);

    const paragraph = document.createElement('p');
    paragraph.textContent = "array to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable s"
    menuPage.appendChild(paragraph);

    content.appendChild(menuPage);
}

export default createMenuPage;