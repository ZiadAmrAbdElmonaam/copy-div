let divsContainer = document.querySelector('.container');

divsContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('smallDiv') && !event.target.classList.contains('disabled')) {
        
        let newDiv = document.createElement('div')
        for (let styleClass of event.target.classList) {
            newDiv.classList.add(styleClass)
        }
        divsContainer.append(newDiv)

        event.target.classList.add('disabled')

    }
})