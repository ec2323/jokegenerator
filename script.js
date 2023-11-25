console.log("Welcome to the Lobster Club Improv Comedy Show!");


const button = document.getElementById("button")
button.addEventListener('click', () => getJoke())

async function getJoke() {
    console.log("ur mom");
    options = {
        method: 'GET', // specify this is a GET request, not a PUT or POST
        headers: {
            "Accept" : "application/json" // request the response in JSON format
        }
    }
    try {
        const response = await fetch('https://icanhazdadjoke.com/', options)
        const responseAsJson = await response.json()
        console.log(responseAsJson)
        document.getElementById("joke").innerHTML = responseAsJson.joke;
    }
    catch (error) {
        console.log(error)
    }
}