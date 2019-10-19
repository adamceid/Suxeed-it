$(document).ready(function(){
    
    (function($) {
        "use strict";
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        var form = $("#contactForm");

        form.validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
        })
        form.submit(function(e){
            $(this).attr("disabled","disabled");
            e.preventDefault();
            $.ajax({
                type: form.attr("method"),
                url: form.attr("action"),
                data: form.serialize(),
                dataType: "json",
                success: function(data){
                    $(".response").text(data.content);
                    if(data.response == 'Success'){
                        $(".response").css({
                            "background-color": "#bbfc90",
                            "border": "solid 1px '#355e19'",
                            "font-family": "Arial",
                            "font-size": "15px",
                            "padding": "5px",
                            "display":"block",
                            "max-width": "380px"
                        });
                    }
                    else{
                        $(".response").css({
                            "background-color": "#f2c7c4",
                            "border": "solid 1px red",
                            "font-family": "Arial",
                            "font-size": "15px",
                            "padding": "5px",
                            "display":"block",
                            "max-width": "380px"
                        });
                    }
                },
                error: function(data){
                    $(".response").text("An error occured!");
                    $(".response").css({
                        "background-color": "#f2c7c4",
                        "border": "solid 1px red",
                        "font-family": "Arial",
                        "font-size": "15px",
                        "padding": "5px",
                        "display":"block",
                        "max-width": "250px"
                    });
                }
            });
        });
    })
 })(jQuery)
})