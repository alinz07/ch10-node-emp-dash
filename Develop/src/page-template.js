//if I need function to help create the template literal. There will have to be a for loop somewhere, but I might be able to do that in the
//function that we export before I start making the template. We'll see.



module.exports = EmployeeArrayTemplateData => {
    console.log(EmployeeArrayTemplateData);
    EmployeeArrayTemplateData.forEach(employee => {
        //have to use spread operator ... because unique is not
        //the name of the property of the object and I don't
        //want to have to use conditionals for each unique property
        //I'll find a way to get the info from the object wehn
        //using it in the template literal.
        const {name, id, email, ...unique} = employee;
        console.log(name, id, email, unique);
    });
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

        <p> Let's make sure this is working </p>

    </body>

    </html>
    `;
}