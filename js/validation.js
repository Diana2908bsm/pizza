const modalTrigger = document.querySelector('.header-top__btn'),
    modal = document.querySelector('.enter'),
    modalCloseBtn = document.querySelector('.enter__exit')
console.log(modalTrigger)
modalTrigger.addEventListener('click', () => {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
    console.log(modal)
})

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
}
modalCloseBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal()
        console.log(e.target)
    }
    console.log(e.target)
})






















document.getElementById('add-form').addEventListener('submit', function (event) {

    event.preventDefault();
    if (validation(this) == true) {
        alert('Форма проверена успешно!')
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
})
function validation(form) {

    function removeError(input) {
        const parent = input.parentNode
        console.log(parent)

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }


    function createError(input, text) {
        const parent = input.parentNode
        parent.classList.add('error')
        const errorLabel = document.createElement('label')
        errorLabel.classList.add('error-label')
        errorLabel.textContent = text
        console.log(errorLabel)
        parent.append(errorLabel)
    }

    let result = true
    console.log(input)
    form.querySelectorAll('input').forEach(input => {
        removeError(input)
        if (input.value == "") {
            result = false
            createError(input, 'Поле не заполнено')

        }
    })
    return result
}




