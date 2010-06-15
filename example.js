require('./twiml');
var System = require('sys');

System.puts(twiml(function(){

    say("Hello World")        // Adds a say object to the response
        .voice("male")         // Changes that object;b

    play("url-to-mp3")
        .loop(5)

    gather(function(){

        say("hello world")
            .voice("french")
            
        play("http://www.url-to-no-where")
        
        dial("5454567890")

    })
    
    record().method("POST")
    
    dial(function(){
        number("345234123")
            .sendDigits("2341")
    })
    
    dial(function(){
        conference("MyRoomName")
    })
    
    pause().length(10)
    hangup()

}));