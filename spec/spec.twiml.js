
describe 'Twiml'
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
end