$(function(){
    $.ajax({
        url:"https://api.saraiva.com.br//sc/produto/collection/10121686%7C9875730%7C9358803%7C9873991%7C9955275%7C10121687%7C8881153%7C9389693%7C4238667%7C9919331%7C10088927%7C1416781%7C10116877%7C10125836/0/0/1/",
        dataType: 'json',
        success: function(objLivros){
            console.log(objLivros)
        },
        error: function(){
            alert('Ocorreu um erro ao retornar os livros da Saraiva!');
        }
    })
})