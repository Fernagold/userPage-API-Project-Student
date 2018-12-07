// Create instances of your classes here
let renderer = new Renderer

let x = new APIManager(renderer)
x.getQuote()
x.getUsers()
x.getPokemon()
x.getMeat()


$("#gen-page").on("click",function(){
     x.generateNewPage()
} )

// Render your page and create an on-click to generate a new user here

