function checkBoxStatus() {
    let options = document.getElementsByClassName("option");
    let result = document.getElementById("result");
    let missingfields = [];

    let anyChecked = false;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            anyChecked = true;
            break;
        }
    }

    if (!anyChecked) {
        missingfields.push("at least one skill");
    }

    if (missingfields.length > 0) {
        result.innerHTML = "Please select " + missingfields.join(", ");
    } else {
        result.innerHTML = "Skill selected successfully";
    }
}
