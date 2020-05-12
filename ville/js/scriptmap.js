$("#envoyer").on("click", function (event) {
    event.preventDefault();
    $('#myModal').modal("show");
    $(".modal-title").html("Bienvenue "+ document.querySelector("#Prenom").value);
    $('.modal-body').html("Vous étes né le: "+ document.querySelector("#datedenaissance").value
    +"</br>Et vous Habitez à: "
    + document.querySelector("#Adresse").value
    +'</br><a href="https://maps.google.com/maps?q='
    +document.querySelector("#Adresse").value
    +'"><img src="https://maps.googleapis.com/maps/api/staticmap?markers='
    +document.querySelector("#Adresse").value+'&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/></a>');
}