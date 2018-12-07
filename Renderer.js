// Fill in the functions for your Renderer Class

class Renderer {
    renderUsers(users) {
        $(".user-container").empty()
        const source = $('#user-template').html();
        const template = Handlebars.compile(source)
        const newHTML = template(users)
        $(".user-container").append(newHTML)

    }
    renderFriends(users) {
        $(".friends-container").find("ul").empty()
        const source = $('#user-friends-template').html();
        const template = Handlebars.compile(source)
        const newHTML = template({ users })
        $(".friends-container").append(newHTML)

    }
    renderQuote(quoteInfo) {
        $(".quote-container").empty()
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source)
        const newHTML = template( quoteInfo )
        $(".quote-container").append(newHTML)

    }
    renderPokemon(pokemonInfo) {
        $(".pokemon-container").empty()
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source)
        const newHTML = template( pokemonInfo )
        $(".pokemon-container").append(newHTML)

    }
    renderMeat(meatText) {
        $(".meat-container").empty()
        const source = $('#meat-template').html();
        const template = Handlebars.compile(source)
        const newHTML = template({ meatText })
        $(".meat-container").append(newHTML)


    }
}
