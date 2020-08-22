function validateForm(){
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var cin = document.getElementById("cin").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var homme = document.getElementById("homme").checked;
    var femme = document.getElementById("femme").checked;
    var autre = document.getElementById("autre").checked;
    var telephone = document.getElementById("telephone").value;
    var notification = document.getElementById("notification");

    if(nom == ""){
        alert("Le Nom est vide !");
        return false;
    }

    else if(prenom == ""){
        alert("Le Prénom est vide !");
        return false;
    }

    else if(cin == ""){
        alert("Le CIN est vide !");
        return false;
    }

    else if(cin.length != 8){
        alert("Le CIN doit être de 8 chiffres !");
        return false;
    }

    else if(email == ""){
        alert("L'Email est vide !");
        return false;
    }

    else if(password == ""){
        alert("Le Password est vide !");
        return false;
    }

    else if( (homme == false) && (femme == false) && (autre == false) ) {
        alert("Aucune gendre séléctionnée !");
        return false;
    }

    else if(telephone == ""){
        alert("Le Téléphone est vide !");
        return false;
    }

    else if(telephone.length != 8){
        alert("Le Téléphone doit être de 8 chiffres !");
        return false;
    }

    else {
        notification.innerText = "Le formulaire a été envoyé avec succé !";
        return false;
    }

}