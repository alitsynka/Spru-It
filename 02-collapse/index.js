const accordionContent = document.querySelector('.collapsible__content');
const button = document.querySelector('.collapsible__button');
const hiddenElement = document.querySelector('.collapsible__action--hidden')
const visibleElement = document.querySelector('.collapsible__action--visible')

hiddenElement.style.display = 'none'

button.addEventListener('click', () => {
        if (accordionContent.style.display !== 'none') {
            hiddenElement.style.display = 'inline'
            visibleElement.style.display = 'none'
            accordionContent.style.display = 'none'
            return
        }
        hiddenElement.style.display = 'none'
        visibleElement.style.display = 'inline'
        accordionContent.style.display = 'inline'
    }
)
