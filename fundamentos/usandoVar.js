{
    {
        {
            {
                var sera = "sera?"
            }
        }
    }
}

// nesta situação, var estando dentro de bloco, ainda sera visivel fora dos blocos

console.log(sera)


// por esta dentro da funcao, é uma variavel local e não pode ser acessada de fora

function teste (){
    var nome = "jean";
}

console.log(nome);

