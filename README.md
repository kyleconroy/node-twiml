# node-twiml

A node module for easily creating [TwiML](http://www.twilio.com/docs/api/twiml/)

Compatible (and tested) on

    Node 0.1.101

## Examples

    require('twiml').dsl();
    
    twiml(function(){

        say("Hello World")
            .voice("male")

        play("url-to-mp3")
            .loop(5)

        gather(function(){

            record().method("POST")
        
            dial("5454567890")

        })
        
        pause().length(10)
        hangup()

    });

If you would rather not pollute the global namespace

    var tw = require('twiml');

    tw.twiml(function(){

        tw.say("Hello World")
            .voice("male")

        tw.play("url-to-mp3")
            .loop(5)

        tw.gather(function(){

            tw.record().method("POST")
    
            tw.dial("5454567890")

        })
    
        tw.pause().length(10)
        tw.hangup()

    });
    
## License 

(The MIT License)

Copyright (c) 2009 Your Name &lt;Your Email&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
