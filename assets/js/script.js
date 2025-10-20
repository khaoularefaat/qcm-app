var q1 = 0, q2 = 0, q3 = 0, q4 = 0, q5 = 0, q6 = 0, q7 = 0, q8 = 0, q9 = 0, q10 = 0;

function calcul() {
    score = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10;
}

function resultat() {
    calcul();

    switch (score) {
        case 0:
            alert("Votre résultat est " + score + " sur 10, Réessayez une autre fois");
            break;
        case 1:
        case 2:
        case 3:
        case 4:
            alert("Votre résultat est " + score + " sur 10, Insuffisant");
            break;
        case 5:
            alert("Votre résultat est " + score + " sur 10, Passable");
            break;
        case 6:
        case 7:
            alert("Votre résultat est " + score + " sur 10, Assez Bien");
            break;
        case 8:
            alert("Votre résultat est " + score + " sur 10, Bien");
            break;
        case 9:
            alert("Votre résultat est " + score + " sur 10, Très Bien");
            break;
        case 10:
            alert("Votre résultat est " + score + " sur 10, Excellent");
            break;
    }
}
