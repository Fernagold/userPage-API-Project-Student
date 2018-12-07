//This is the class that will manage all your APIs
//Each method should also invoke the renderer for its own section

class APIManager {
    constructor(renderer) {
        this.renderer = renderer

    }
    getUsers(value) {
        // Generate 7 new Users
        $.ajax({
            method: "GET",
            url: "https://randomuser.me/api/?results=7",
            success: (data) => {
                let randomUser = data.results[0]
                let randomFriends = data.results.splice(1)
                this.renderer.renderUsers(randomUser)
                this.renderer.renderFriends(randomFriends)
                console.log(randomUser)
            }
        })
    }
    getQuote() {
        // get a random quote and author
        $.ajax({
            method: "GET",
            url: "https://talaikis.com/api/quotes/random/",
            success: (result) => {
                this.renderer.renderQuote(result)
                console.log(result)
            }
        })
    }
    getPokemon() {
        let num = Math.floor((Math.random() * 100) + 1);
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${num}/`,
            success: (result) => {
                this.renderer.renderPokemon(result)
                console.log(result)
            }
        })
    }
    getMeat() {
        // generate two paragraphs of text that are all meat
        $.ajax({
            method: "GET",
            url: "https://baconipsum.com/api/?type=meat-and-filler",
            success: (result) => {
                this.renderer.renderMeat(result)
                console.log(result)
            }
        })
    }
    generateNewPage() {
        this.getUsers()
        this.getQuote()
        this.getPokemon()
        this.getMeat()


    }
}