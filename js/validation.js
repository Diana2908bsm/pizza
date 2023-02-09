document.getElementById('add-form').addEventListener('submit', function (event) {

    event.preventDefault();
    if (validation(this) == true) {
        alert('Форма проверена успешно!')
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

    form.querySelectorAll('input').forEach(input => {
        removeError(input)
        if (input.value == "") {
            result = false
            createError(input, 'Поле не заполнено')

        }
    })
    return result
}




