
const createHtml = (cards) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./Assets/style.css">
        <title>Team Info Builder </title>
    </head>
    <body>
        <header>
            <h1 class="title">The Team's Profile Information</h1>
        </header>
        <main>
            <!-- contact cards' info here -->
            <section class="contact-cards">${cards}</section>
        </main>
        
    </body>
    </html> `
}

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

module.exports = {createHtml, managerCard, engineerCard, internCard}