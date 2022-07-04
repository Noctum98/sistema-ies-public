$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        let proceso_id = $(this).attr('id');
        let nota_final = $('#nota-'+proceso_id).val();

        let url = '/proceso/cambia/nota_final';
        let data = {
            "proceso_id": proceso_id,
            "nota_final": nota_final,
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
                    $('#nota-'+proceso_id).removeClass("text-danger");
                    $('#nota-'+proceso_id).removeClass("text-success");
                    if(response.nota >= 4){
                        $('#nota-'+proceso_id).addClass("text-success");
                    }else{
                        $('#nota-'+proceso_id).addClass("text-danger");
                    }

                }
            }
        });


    });
});