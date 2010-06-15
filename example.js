require('./twiml');

twiml(function(){

    say("Hello World")        // Adds a say object to the response
        .voice("male")         // Changes that object;b

    play("url-to-mp3")
        .loop(5)

    gather(function(){

        say("hello world")
            .voice("french")
            
        play("http://www.url-to-no-where")

    })

})