let content = document.getElementById("profile");

/* API Request*/

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://randomuser.me/api/", true);

xhr.onload = () => {
    /* Request string */
    let string = xhr.responseText,
        /* Convert string to Object */
        object = JSON.parse(string),
        /* Parsing Information */
        result = object.results,
        name = result[0].name,
        cell = result[0].cell, 
        email = result[0].email,
        age = result[0].dob.age - 10,
        picture = result[0].picture.large,
        
        /* Filer for unwanted email parts */
        cut = function (e) {
            if (email.length > 20) {
                email = email.slice(9);
            } 
        };

    cut(email);

    content.innerHTML = `
            <img
                class="profile-image"
                src="${picture}"
                alt="profile image"
            />

            <div class="profile-content">
                <div class="profile-name-container">
                    <b>Name:</b>  
                    <p class="profile-title">${name.title}</p>
                    <p class="profile-name">${name.first}</p>
                    <p class="profile-surname">${name.last}</p>
                </div>
                <p class="profile-cell">
                <b>Number: </b>${cell}
                </p>
                <p class="profile-email">
                <b>Email: </b>${email}
                </p>
                <p class="profile-age">
                    <b>Age: </b>${age}
                </p>
            </div>

            `;
};

xhr.send();
