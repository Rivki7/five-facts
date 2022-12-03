const buttons = document.querySelectorAll('button')
const faqs = document.querySelectorAll('.faq')

buttons.forEach(button => {
    button.classList.add('faq-toggle')
})


faqs.forEach(faq => {
    faq.addEventListener('click', classToggle)
})

function classToggle() {
    this.classList.toggle('active')
}


// buttons.forEach(button => {
//     button.addEventListener('click', classToggle)
// })

// function classToggle() {
//     this.parentElement.classList.toggle('active')
// }

