function insert (num) {
        var number =  document.getElementById('visor').innerHTML;
        document.getElementById('visor').innerHTML = number + num;
}

function allclear () {
        document.getElementById('visor').innerHTML  = '';
}

function erase () {
        var correction = document.getElementById('visor').innerHTML;
        document.getElementById('visor').innerHTML = correction.substring(0, correction.length -1);
}

function result(){
        var result = document.getElementById('visor').innerHTML;
        if (result) {
                document.getElementById('visor').innerHTML = eval(result);
        } else {
                window.alert('NADA PARA CALCULAR, INSIRA DADOS!')
        }
}