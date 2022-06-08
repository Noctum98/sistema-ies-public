$(document).ready(function () {

    // Asistencia Tradicional

    $("form").submit(function (e) {
        e.preventDefault();
        var theForm = $(this);

        var proceso_id = theForm.attr("id");
        var porcentaje = $('#calificacion-procentaje-' + proceso_id).val();
        var calificacion_id = $('#calificacion_id').val();
        let url = "/procesoCalificacion";
        let data = {
            "porcentaje": porcentaje,
            "proceso_id": proceso_id,
            "calificacion_id": calificacion_id
        }

        $("#spinner-" + proceso_id).html("<div class='spinner-border text-primary mt-2' role='status' id='spinner-info'><span class='sr-only'>Loading...</span></div>")
        $.ajax({
            method: "POST",
            url: url,
            data: data,
            //dataType: "dataType",
            success: function (response) {
                $("#spinner-info").remove();

                if (response.errors) {
                    for (const key in response.errors) {
                        if (Object.hasOwnProperty.call(response.errors, key)) {
                            const element = response.errors[key];
                            $("#alerts").append("<div class='alert alert-danger'>" + element[0] + "</div>");
                        }
                    }
                } else {
                    $("#alerts").html("");

                    if (response.nota >= 4) {
                        $(".nota-" + proceso_id).html("<p class='text-success font-weight-bold'>" + response.nota + "</p>");
                    } else {
                        $(".nota-" + proceso_id).html("<p class='text-danger font-weight-bold'>" + response.nota + "</p>");
                    }
                }


            }
        });

    });

});