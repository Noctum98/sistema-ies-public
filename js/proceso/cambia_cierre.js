$(document).ready(function () {
    console.log('ff')
    $('.check-cierre').on('change', function() {
        const campo = $(this);
        const proceso_id = campo.attr('id');
        const cierre = $(this).prop('checked');
        console.log(cierre)
 $('#span-'+proceso_id).removeClass('d-block')
 $('#span-'+proceso_id).addClass('d-none')
        $('#spin-'+proceso_id).removeClass('d-none')
        $('#spin-'+proceso_id).addClass('d-block')

        let url = '/proceso/cambia/cierre';
        let data = {
             "proceso_id":proceso_id,
             "cierre":cierre
         };
        //
        //
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
                $('#span-'+proceso_id).removeClass('d-none')
                $('#span-'+proceso_id).addClass('d-block')
                $('#spin-'+proceso_id).removeClass('d-block')
                $('#spin-'+proceso_id).addClass('d-none')
                console.log($('#span-'+proceso_id))


            }
        });
        
     });
});