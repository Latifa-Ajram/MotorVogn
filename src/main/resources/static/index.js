
function registrer() {

    const bil = {

        personnr: $("#persnr").val(),
        navn: $("#navn").val(),
        adresse: $("#adresse").val(),
        kjennetegn: $("#tegn").val(),
        bilmerke: $("#merke").val(),
        biltype: $("#type").val()

    }
    $.post("/lagre", bil, function () {

        hentData();
    })
    $("#persnr").val("");
    $("#navn").val("");
    $("#adresse").val("");
    $("#tegn").val("");
    $("#merke").val("");
    $("#type").val("");

}
    function hentData(){
        $.get("/hentdata",function (data){
            formaterData(data);
            console.log(data)
        })
    }
    function formaterData(biler){
        console.log(biler)

            let ut="<table><tr><th>Personnr</th><th>Navn</th>" +
                "<th>Adresse</th><th>Kjennetegn</th><th>Merke</th>"+
                "<th>Type</th></tr>";
        for(let bil of biler){
            console.log(bil)

            ut +="<tr><td>"+bil.personnr+"</td><td>"+bil.navn+"</td>"+
                "<td>"+bil.adresse+"</td><td>"+bil.kjennetegn+"</td>"+
                "<td>"+bil.bilmerke+"</td><td>"+bil.biltype+"</td></tr>"
        }

        ut +="</table>"
        $("#liste").html(ut);

    }
    function slettAlle(){
        $.get("/slett",function (){

            hentData();
        });
    }


