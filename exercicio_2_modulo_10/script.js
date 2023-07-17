$('document').ready(function() {

    $('#tel').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    /* mascaras criadas acima*/

    $('form').validate({
        rules : {
            nome: {
                required: true
            },
            email : {
                required: true,
                email: true
            },
            tel : {
                required: true,
                minlength: 15
            },
            cpf : {
                required: true,
                minlength: 14
            },
            endereco: {
                required: true 
            },
            cep: {
                required: true,
                minlength: 9
            }
        }, 
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu email',
            tel: 'Por favor, digite seu telefone',
            cpf: 'Por favor, digite seu CPF',
            endereco: 'Por favor, insira seu endereço',
            cep: 'Por favor, digite seu CEP'
        }
    })

    /* validação criada acima */

    $('form').hide()
    $('input[type=checkbox]').click(function() {
        if (this.checked) {
            $('form').slideDown(1250)
            $('span').removeClass().addClass('fa-solid fa-angle-up')
        } else {
            $('form').slideUp(1250)
            $('span').removeClass().addClass('fa-solid fa-angle-down')

        }
    })
})