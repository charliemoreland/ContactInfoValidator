function validate() {
    var resultFnamecheck = nameCheck(document.forms["contact info"]["fname"].value);
    var image1 = getImage(Boolean(resultFnamecheck), "fname");
    var labelNotifyFname = getNotification(Boolean(resultFnamecheck), "fname");
    document.getElementById("Fname").appendChild(image1);
    document.getElementById("Fname").appendChild(labelNotifyFname);

    var resultLnamecheck = nameCheck(document.forms["contact info"]["lname"].value);
    var image2 = getImage(Boolean(resultLnamecheck), "lname");
    var labelNotifyLname = getNotification(Boolean(resultLnamecheck), "lname");
    document.getElementById("Lname").appendChild(image2);
    document.getElementById("Lname").appendChild(labelNotifyLname);

    var resultGendercheck = dropCheck(document.forms["contact info"]["gender"].value);
    var image3 = getImage(Boolean(resultGendercheck), "gender");
    var labelNotifyGender = getNotification(Boolean(resultGendercheck), "gender");
    document.getElementById("Gender").appendChild(image3);
    document.getElementById("Gender").appendChild(labelNotifyGender);


    var resultStatecheck = dropCheck(document.forms["contact info"]["state"].value);
    var image4 = getImage(Boolean(resultStatecheck), "state");
    var labelNotifyState = getNotification(Boolean(resultStatecheck), "state");
    document.getElementById("State").appendChild(image4);
    document.getElementById("State").appendChild(labelNotifyState);

    var value = (resultFnamecheck && resultGendercheck && resultLnamecheck && resultStatecheck);
    myFunction(value);
}

function nameCheck(entry) {
    let regex = /^[a-z]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function dropCheck(drop) {
    if (drop === "Null") {
        return false
    } else {
        return true;
    }
}

function myFunction(value) {
    if (value) {
        location.replace("validation2.html")
    }
}

function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute('class', 'errorMessage');
    }
    if (ID === "fname" || ID === "lname") {
        label.innerHTML = bool ? "" : "Name should only contain alphabetic characters";
    } else if (ID === "gender" || ID === "state") {
        label.innerHTML = bool ? "" : "Must select one of the dropdox options";
    } else {
        label.innerHTML = bool ? "" : "";
    }
    return label;
}


function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}