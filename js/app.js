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
        picture = result[0].picture.large,
        /* Filer for unwanted email parts */
        cut = function (e) {
            if (email.length > 20) {
                email = email.slice(9);
            }
        };

    cut(email);
    console.log(result)

    content.innerHTML = `
            <img
                class="profile-image"
                src="${picture}"
                alt="profile image"
            />

            <div class="profile-content">
                <div class="profile-name-container">
                Name:  
                    <p class="profile-title">${name.title}</p>
                    <p class="profile-name">${name.first}</p>
                    <p class="profile-surname">${name.last}</p>
                </div>
                <p class="profile-cell">
                    Number: ${cell}
                </p>
                <p class="profile-email">
                    Email: ${email}
                </p>
            </div>

            `;
};

xhr.send();
