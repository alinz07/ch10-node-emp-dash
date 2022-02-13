const generateCards = EmployeeArrayTemplateData => {
    return `
    <container id="card-container" class="row justify-content-center flex-wrap">    
        ${EmployeeArrayTemplateData.map((employee) => {
            const {role, name, id, email, ...unique} = employee;
            console.log(unique);

            if (Object.keys(unique)[0] == 'github') {
                githubName = Object.values(unique)[0];
                theHref = "https://github.com/" + githubName;
                listItem = `${(Object.keys(unique))[0]}: <a href="${theHref}" target="_blank">${(Object.values(unique))[0]}</a>`;
            } else {
                listItem = `${(Object.keys(unique))[0]}: ${(Object.values(unique))[0]}`;
            }

            if (role == 'Engineer') {
                icon = `<i class="fa-solid fa-glasses"></i>`;
            } else if (role == 'Manager') {
                icon = `<i class="fa-solid fa-mug-hot"></i>`;
            } else if (role == 'Intern') {
                icon = `<i class="fa-solid fa-graduation-cap"></i>`;
            }
            
            return `
            <section id="card" class="col-sm-5 col-lg-3 card m-2 shadow mr-4 bg-body rounded">
                <div class="card-header bg-primary">
                    <h3 class="text-light">${name}</h2>
                    <h4 class="text-light"><span> ${icon} </span> ${role}</h3>
                </div>
                <div id="info-list">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Id: ${id}
                        </li>

                        <li class="list-group-item">
                            <a href="mailto:${email}">Email: ${email}</a>
                        </li>

                        <li class="list-group-item">
                            ${listItem}
                        </li>
                    </ul>
                </div>
            </section>
            `;
        })
        .join('')}
    </container>
    `
};


module.exports = EmployeeArrayTemplateData => {
    console.log(EmployeeArrayTemplateData);
    
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/style.css">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <header class="bg-danger position-relative">
            <h1 class="text-light position-absolute">My Team</h1>
        </header>
        <section class="container">
            ${generateCards(EmployeeArrayTemplateData)}
        </section>

    </body>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    </html>
    `;
}