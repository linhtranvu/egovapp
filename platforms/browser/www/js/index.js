var domain = "http://cbccvc.danang.gov.vn/";
// var  domain = "http://localhost/cbccvc_dev/";

$(document).ready(function() {

    var username = localStorage.getItem("username");
    if(username ){
        loadEgov();
    } 
    
    $(".btn-login").click(function(event) {
        url = domain+"index.php?option=com_snv&view=egovapp&task=login&format=raw";
        jQuery.post(url, $("#frm_login").serialize() ,function(data){
            $("#div_main").html(data);
            if($("#tableCustomCSS").length > 0){
                username = $("#tableCustomCSS > tbody > tr:nth-child(2) > td > label.egov-label-bold").text().trim();
                // alert(username);
                localStorage.setItem("username", username); 
                loadEgov();
                
                
            }
        })
    });

});

function loadEgov(){

    window.location = "egov.html";
    // window.open("egov.html");

}