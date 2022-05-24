$(document).ready(function () {

    $("#username").blur(function (event) {
        $("#submit").addClass('disabled');
        $(".spin").removeClass("d-none")
        $(".aviso").empty();
        var username = event.target.value;
        if (username) {
            var rutaBusquedaUsuario = "/buscaUsuarioByUsername/" + username;
        }
        $.get(rutaBusquedaUsuario, function (response, state) {

            if (response.length <= 0) {
                $("#submit").removeClass('disabled');
                $('.card-body').removeClass('disabled')
                $(".spin").addClass("d-none")
                $("form :input").prop("disabled", false);
            } else {
                $("form :input").prop("disabled", true);
                $('#username').prop("disabled", false);
                $(".aviso").append("El Usuario ya existe <br/>");
                $(".aviso").append("<a href='usuarios/detalle/" + response[0].id + "'>" + response[0].nombre + " " + response[0].apellido + "</a>")
                $(".spin").addClass("d-none")
            }
        });

    });
});
