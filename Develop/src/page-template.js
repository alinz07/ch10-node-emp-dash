const generateCards = EmployeeArrayTemplateData => {
    return `
    <container id="card-container">    
        ${EmployeeArrayTemplateData.map((employee) => {
            const {role, name, id, email, ...unique} = employee;
            console.log(unique);
            if (Object.keys(unique)[0] == 'github') {
                githubName = Object.values(unique)[0];
                theHref = "https://github.com/" + githubName;
                listItem = `${(Object.keys(unique))[0]}: <a href="${theHref}">${(Object.values(unique))[0]}</a>`;
            } else {
                listItem = `${(Object.keys(unique))[0]}: ${(Object.values(unique))[0]}`;
            }
            return `
            <section id="card">
                <div id="top-of-card">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                </div>
                <div id="info-list">
                    <ul>
                        <li>
                            Id: ${id}
                        </li>

                        <li>
                            <a href="mailto:${email}">Email: ${email}</a>
                        </li>

                        <li>
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Portfolio Demo</title>
    </head>

    <body>
        
        <header>
            <h1>My Team</h1>
        </header>

        ${generateCards(EmployeeArrayTemplateData)}

    </body>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    </html>
    `;
}