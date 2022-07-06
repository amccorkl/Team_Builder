

const createHtml = (employeesEntered) => {
    let html = [];
    for (let i = 0; i < employeesEntered.length; i++) {
        if (employeesEntered[i].getTitle() === "Manager") {
            html.push(managerCard(employeesEntered[i].name, "Manager", employeesEntered[i].id, employeesEntered[i].email, employeesEntered[i].officeNumber))
        }
        if (employeesEntered[i].getTitle() === "Engineer") {
            html.push(engineerCard(employeesEntered[i].name, "Engineer", employeesEntered[i].id, employeesEntered[i].email, employeesEntered[i].github))
        }
        if (employeesEntered[i].getTitle() === "Intern") {
            html.push(internCard(employeesEntered[i].name, "Intern", employeesEntered[i].id, employeesEntered[i].email, employeesEntered[i].school))
        }
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Info Builder </title>
    </head>
    <body>
        <header>
            <h1 class="title">The Team's Profile Information</h1>
        </header>
        <main>
            <!-- contact cards' info here -->
            <section class="contact-cards">${html.join("")}</section>
        </main>
        
    </body>
    </html> `
};

const managerCard = (title, name, id, email, officeNumber) => {
    return `
        <article class="cards">
            <div class="card-header">
                <h2 class="title">${title}</h2>
                <h3 class="name">${name}</h3>
            </div>
            <div class="details">
                <ul class="uls">
                    <li id="id">${id}</li>
                    <li id="email"> Email: <a href="mailto:${email}">${email}</a></li>
                    <li id="office-number">${officeNumber}</li>
                </ul>
            </div>
        </article> `
}

const engineerCard = (title, name, id, email, github) => {
    return `
        <article class="cards">
            <div class="card-header">
                <h2 class="title">${title}</h2>
                <h3 class="name">${name}</h3>
            </div>
            <div class="details">
                <ul class="uls">
                    <li id="id">${id}</li>
                    <li id="email"> Email: <a href="mailto:${email}">${email}</a></li>
                    <li id="github">${github}</li>
                </ul>
            </div>
        </article> `
}

const internCard = (title, name, id, email, school) => {
    return `
        <article class="cards">
            <div class="card-header">
                <h2 class="title">${title}</h2>
                <h3 class="name">${name}</h3>
            </div>
            <div class="details">
                <ul class="uls">
                    <li id="id">${id}</li>
                    <li id="email"> Email: <a href="mailto:${email}">${email}</a></li>
                    <li id="school">${school}</li>
                </ul>
            </div>
        </article> `
}

module.exports = createHtml;