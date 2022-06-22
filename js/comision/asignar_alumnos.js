$(document).ready(function () {
    $('form').on('change', function() {
        var form = $(this);
        var alumno_id = form.attr("id");
        var comision_id = $('input[name=comision_id]:checked', "#"+alumno_id).val();
        let url = '/comision/alumno/agregar';
        let data = {
            "alumno_id":alumno_id,
            "comision_id":comision_id
        };

        $.ajax({
            method: "POST",
            url: url,
            data: data,
            //dataType: "dataType",
            success: function (response) {
                if (response.errors) {
                    for (const key in response.errors) {
                        if (Object.hasOwnProperty.call(response.errors, key)) {
                            const element = response.errors[key];
                            $("#alerts").append("<div class='alert alert-danger'>" + element[0] + "</div>");
                        }
                    }
                } else {
                    $("#alerts").html("");
                    console.log(response);
                }


            }
        });
        
     });
});