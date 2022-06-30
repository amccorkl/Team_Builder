const createHtml = (company, cards) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./Assets/style.css">
        <title>Team Info Builder ${companyName}</title>
    </head>
    <body>
        <header>
            <h1 class="title">The Team's Profile Information ${teamName}</h1>
        </header>
        <main>
            <!-- cards' info starting here -->
            <section class="contact-cards">
                ${cards}
            </section>
        </main>
        
    </body>
    </html> `
}

const contactCard = (role, employeeName, id, email, officeNumber) => {
    return `
        <article class="cards">
            <div class="card-header">
                <h2 class="title">${title}</h2>
                <h3 class="name">${employeeName}</h3>
            </div>
            <div class="details">
                <ul class="uls">
                    <li id="id">${id}</li>
                    //a href="mailto:${email}"
                    <li id="email">${email}</li>
                    <li id="office-number">${officeNumber}</li>
                    id="github">${github}</li>
                    //maybe school for the intern?
                </ul>
            </div>
        </article> `
}

module.exports = {createHtml, contactCard}