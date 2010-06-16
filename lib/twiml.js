var System = require("sys");

var Verb = function() {
    this.attrs = [];
    this.attr = {};
    this.verbs = [];
    this.name = "Verb";
    this.body = undefined;
    
};

Verb.prototype.set = function(attribute, val){
    this.attr[attribute] = val;
    this.attrs.push(attribute);
};

Verb.prototype.get = function(attribute){
    return this.attr[attribute];
};


Verb.prototype.render = function(){
    var output = "<" + this.name;
    
    for (var i=0; i < this.attrs.length; i++) {
        output += " " + this.attrs[i] + '="';
        output += this.get(this.attrs[i]) + '"';
    };
    
    output += ">"
    
    if (this.body !== undefined)
        output += this.body
    
    for (var i=0; i < this.verbs.length; i++) {
        output += this.verbs[i].render();
    };
    
    output += "</" + this.name + ">";
    return output;
};

var Say = function(body) {
    this.attrs = [];
    this.attr = {};
    this.body = body;
    this.name = "Say";
}
 
Say.prototype = new Verb();
 
Say.prototype.voice = function(val) {
    this.set("voice", val);
    return this;
};
 
Say.prototype.language = function(val) {
    this.set("language", val);
    return this;
};
 
Say.prototype.loop = function(val) {
    this.set("loop", val);
    return this;
};
 
var Play = function(body) {
    this.attrs = [];
    this.attr = {};
    this.body = body;
    this.name = "Play";
}
 
Play.prototype = new Verb();
 
Play.prototype.loop = function(val) {
    this.set("loop", val);
    return this;
};
 
var Gather = function(verbs) {
    this.attrs = [];
    this.attr = {};
    this.verbs = verbs || [];
    this.name = "Gather";
}
 
Gather.prototype = new Verb();
 
Gather.prototype.action = function(val) {
    this.set("action", val);
    return this;
};
 
Gather.prototype.method = function(val) {
    this.set("method", val);
    return this;
};
 
Gather.prototype.timeout = function(val) {
    this.set("timeout", val);
    return this;
};
 
Gather.prototype.finishOnKey = function(val) {
    this.set("finishOnKey", val);
    return this;
};
 
Gather.prototype.numDigits = function(val) {
    this.set("numDigits", val);
    return this;
};
 
var Record = function() {
    this.name = "Record";
    this.attrs = [];
    this.attr = {};
}
 
Record.prototype = new Verb();
 
Record.prototype.action = function(val) {
    this.set("action", val);
    return this;
};
 
Record.prototype.method = function(val) {
    this.set("method", val);
    return this;
};
 
Record.prototype.timeout = function(val) {
    this.set("timeout", val);
    return this;
};
 
Record.prototype.finishOnKey = function(val) {
    this.set("finishOnKey", val);
    return this;
};
 
Record.prototype.maxLength = function(val) {
    this.set("maxLength", val);
    return this;
};
 
Record.prototype.transcribe = function(val) {
    this.set("transcribe", val);
    return this;
};
 
Record.prototype.transcribeCallback = function(val) {
    this.set("transcribeCallback", val);
    return this;
};
 
Record.prototype.playBeep = function(val) {
    this.set("playBeep", val);
    return this;
};
 
var Sms = function(body) {
    this.body = body;
    this.name = "Sms";
    this.attrs = [];
    this.attr = {};
}
 
Sms.prototype = new Verb();
 
Sms.prototype.action = function(val) {
    this.set("action", val);
    return this;
};
 
Sms.prototype.method = function(val) {
    this.set("method", val);
    return this;
};
 
Sms.prototype.to = function(val) {
    this.set("to", val);
    return this;
};
 
Sms.prototype.from = function(val) {
    this.set("from", val);
    return this;
};
 
Sms.prototype.statusCallback = function(val) {
    this.set("statusCallback", val);
    return this;
};
 
var Dial = function(cons) {
    
    if (typeof cons == "string") {
        this.body = cons;
        this.verbs =[];
    } else {
        this.body = undefined;
        this.verbs = cons;
    }
    
    this.attrs = [];
    this.attr = {};
    this.name = "Dial";
}
 
Dial.prototype = new Verb();
 
Dial.prototype.action = function(val) {
    this.set("action", val);
    return this;
};
 
Dial.prototype.method = function(val) {
    this.set("method", val);
    return this;
};
 
Dial.prototype.timeout = function(val) {
    this.set("timeout", val);
    return this;
};
 
Dial.prototype.hangupOnStar = function(val) {
    this.set("hangupOnStar", val);
    return this;
};
 
Dial.prototype.timeLimit = function(val) {
    this.set("timeLimit", val);
    return this;
};
 
Dial.prototype.callerId = function(val) {
    this.set("callerId", val);
    return this;
};
 
var Redirect = function(body) {
    this.body = body;
    this.name = "Redirect";
    this.attrs = [];
    this.attr = {};
}
 
Redirect.prototype = new Verb();
 
Redirect.prototype.method = function(val) {
    this.set("method", val);
    return this;
};
 
var Number = function(body) {
    this.body = body;
    this.name = "Number";
    this.attrs = [];
    this.attr = {};
}
 
Number.prototype = new Verb();
 
Number.prototype.url = function(val) {
    this.set("url", val);
    return this;
};
 
Number.prototype.sendDigits = function(val) {
    this.set("sendDigits", val);
    return this;
};
 
var Conference = function(body) {
    this.body = body;
    this.name = "Conference";
    this.attrs = [];
    this.attr = {};
}
 
Conference.prototype = new Verb();
 
Conference.prototype.muted = function(val) {
    this.set("muted", val);
    return this;
};
 
Conference.prototype.beep = function(val) {
    this.set("beep", val);
    return this;
};
 
Conference.prototype.startConferenceOnEnter = function(val) {
    this.set("startConferenceOnEnter", val);
    return this;
};
 
Conference.prototype.endConferenceOnExit = function(val) {
    this.set("endConferenceOnExit", val);
    return this;
};
 
Conference.prototype.waitUrl = function(val) {
    this.set("waitUrl", val);
    return this;
};
 
Conference.prototype.waitMethod = function(val) {
    this.set("waitMethod", val);
    return this;
};
 
var Pause = function() {
    this.name = "Pause";
    this.attrs = [];
    this.attr = {};
}
 
Pause.prototype = new Verb();
 
Pause.prototype.length = function(val) {
    this.set("length", val);
    return this;
};
 
var Hangup = function() {
    this.name = "Hangup";
    this.attrs = [];
    this.attr = {};
}
 
Hangup.prototype = new Verb();

var verbs = [];
    
var addVerb = function(verb){
    verbs.push(verb);
    return verb;
};
    
exports.twiml = function(f) {
    verbs = [];
    
    f();
    
    var output = "<Response>";
    
    for (var i=0; i < verbs.length; i++) {
        output += verbs[i].render();
    };
    
    output += "</Response>";
    return output;
};

exports.say = function(body) {
    return addVerb(new Say(body));
};

exports.play = function(body) {
    return addVerb(new Play(body));
};

exports.gather = function(f){
    var temp = verbs;
    verbs = [];
    
    f();
    
    verb = new Gather(verbs);
    verbs = temp;
    verbs.push(verb);
    return verb;
};

exports.redirect = function(body) {
    return addVerb(new Redirect(body));
};

exports.conference = function(body) {
    return addVerb(new Conference(body));
};

exports.number = function(body) {
    return addVerb(new Number(body));
}

exports.record = function(body) {
    return addVerb(new Record());
};

exports.hangup = function() {
    return addVerb(new Hangup());
};

exports.dial = function(f) {
    if (typeof f == "string") {
        return addVerb(new Dial(f));
    } else {
        var temp = verbs;
        verbs = [];

        f();

        verb = new Dial(verbs);
        verbs = temp;
        verbs.push(verb);
        return verb;
    }
};

exports.pause = function(body) {
    return addVerb(new Pause(body));
}

exports.dsl = function() {
    GLOBAL.twiml = exports.twiml;
    GLOBAL.say =  exports.say;
    GLOBAL.play = exports.play;
    GLOBAL.gather = exports.gather;
    GLOBAL.redirect = exports.redirect;
    GLOBAL.conference = exports.conference;
    GLOBAL.number = exports.number;
    GLOBAL.record = exports.record;
    GLOBAL.hangup = exports.hangup;
    GLOBAL.dial = exports.dial;
    GLOBAL.pause = exports.pause;
}
  
    