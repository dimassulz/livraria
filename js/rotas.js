var rotas = function (obj) {
    var nomeView = obj.attr('href').replace('#', '') + '.html';
    $.ajax({
        url: 'views/'+nomeView,
        type: 'GET',
        dataType: 'html',
        beforeSend: function () {

        },
        success: function (viewHtml) {
            $('#conteudo').html(viewHtml);
        },
        error: function () {
            alert('Ocorreu um erro ao retornar a view ' + nomeView);
        }
    })
};
$(function () {
    $('.navbar-nav a, .navbar-brand ').on('click', function () {
        $('.nav-item').removeClass('active');
        rotas($(this));
        $(this).parent().addClass('active');
    });
    
    $('#home').trigger('click');
});
