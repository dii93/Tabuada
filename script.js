function buscar() {
    let valor = parseInt(document.getElementById('txtn').value);
    let res = document.getElementById('resposta');
    texto = '';

    if (valor !== 0 && valor !== '') {


        for (let i = 1; i <= 10; i++) {
            texto = texto + i.toString() +
                ' x ' + valor.toString() +
                ' = ' + (i * valor).toString() +
                '<br>';
        }

        res.innerHTML = texto;

    } else {

        alert('Erro de Digitação');
    }
}