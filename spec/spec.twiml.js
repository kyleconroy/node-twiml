
describe 'Twiml'
  describe 'twiml()'
    it 'should create a valid response'
      var t = twiml(function(){
        say("Hello").voice("male").language("fr")
        play("http://www.a.com").loop(5)
        say("Godobye")
        gather(function(){
          say("Really, Goodbye")
          dial("5454542323")
        });
      });
      t.should.be '<Response><Say voice="male" language="fr">Hello</Say><Play loop="5">http://www.a.com</Play><Say>Godobye</Say><Gather><Say>Really, Goodbye</Say><Dial>5454542323</Dial></Gather></Response>'
    end
    
    it 'should create an empty response'
      var t = twiml(function(){});
      t.should.be '<Response></Response>'
    end
  end

  describe 'say()'
    it 'should set body'
      say("Hello World").body.should.be "Hello World"
    end
    
    describe 'voice()'
      it 'should set voice to male'
        var s = say('Hello').voice('male')
        s.get("voice").should.be "male"
        s.render().should.be '<Say voice="male">Hello</Say>'
      end
    end
    
    describe 'language()'
      it 'should set language to french'
        var s = say('Hello').language('fr')
        s.get('language').should.be 'fr'
        s.render().should.be '<Say language="fr">Hello</Say>'
      end
    end
  end
  
  describe 'play()'
    it 'should set the play url'
      play("http://a.com/foo.mp3").body.should.be "http://a.com/foo.mp3"
    end
  end
  
end