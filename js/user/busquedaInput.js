$(document).ready(function () {

    $("#username").blur(function (event) {
        $("#submit").addClass('disabled');

        $(".aviso").empty();
        var username = event.target.value;
        if (username !=='') {
            $(".spin").removeClass("d-none")
            var rutaBusquedaUsuario = "/buscaUsuarioByUsername/" + username;

            $.get(rutaBusquedaUsuario, function (response, state) {

                if (response.length <= 0) {
                    $("#submit").removeClass('disabled');
                    $('.card-body').removeClass('disabled')
                    $(".spin").addClass("d-none")
                    $("form :input").prop("disabled", false);
                    $(".aviso").append("El Usuario no existe en la base de datos ");
                } else {
                    $("form :input").prop("disabled", true);
                    $('#username').prop("disabled", false);
                    $(".aviso").append("El Usuario ya existe en la base de datos<br/>");
                    $(".aviso").append("<a href='usuarios/detalle/" + response[0].id + "'>" + response[0].nombre + " " + response[0].apellido + "</a>")
                    $(".spin").addClass("d-none")
                }
            });
        }

    });
});
