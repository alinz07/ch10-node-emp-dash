//if I need function to help create the template literal. There will have to be a for loop somewhere, but I might be able to do that in the
//function that we export before I start making the template. We'll see.
const generateCards = EmployeeArrayTemplateData => {
    return `
    <container id="card-container">    
        ${EmployeeArrayTemplateData.map((employee) => {
            const {role, name, id, email, ...unique} = employee;
            console.log(unique);
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
                            Email: ${email}
                        </li>

                        <li>
                            ${(Object.keys(unique))[0]}: ${(Object.values(unique))[0]}
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>Portfolio Demo</title>
    </head>

    <body>
        
        <header>
            <h1>My Team</h1>
        </header>

        ${generateCards(EmployeeArrayTemplateData)}

    </body>

    </html>
    `;
}