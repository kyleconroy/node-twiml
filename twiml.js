var System = require("sys");

var Verb = function() {
    this.attrs = [];
    this.verbs = [];
    this.name = "Verb";
    this.body = undefined;
    
};

Verb.prototype.set = function(attribute, val){
    var attr = {
        name: attribute,
        value: val
    };
    
    this.attrs.push(attr);
};

Verb.prototype.render = function(output){
    output += "<" + this.name;
    
    for (var i=0; i < this.attrs.length; i++) {
        output += " " + this.attrs[i].name + '="';
        output += " " + this.attrs[i].value + '"';
    };
    
    output += ">"
    
    if (this.body !== undefined)
        output += this.body
    
    for (var i=0; i < this._verbs.length; i++) {
        output = this.verbs[i].render(output);
    };
    
    output += "</" + this.name + ">";
    return output;
};

var Say = function(text) {
    this._body = text;
    this._voice = false;
    this._language = false;
};

Say.prototype.voice = function(v){
    this._voice = v;
    return this;
};

Say.prototype.language = function(lang) {
    this._language = lang;
    return this;
};

Say.prototype.render = function(lang) {
    System.puts("[Say]");
    System.puts(this._body);
    System.puts("[/Say]");
}

var Play = function(url) {
    this._url = url;
    this._loop = false;
};

Play.prototype.loop = function(num){
    this._loop = num;
    return this;
};

Play.prototype.render = function(lang) {
    System.puts("[Play");
    
    if (this._loop)
        System.puts(" loop=\"" + this._loop + "\"");
    
    System.puts("]")
    System.puts(this._url);
    System.puts("[/Play]");
};

var Record = function() {
    this._action = false;
    this._method = false;
    this._timeout = false;
    this._finishOnKey = false;
    this._maxLength = false;
}

var Gather = function(vrbs) {
    this._verbs = vrbs;
};

Gather.prototype.render = function(lang) {
    System.puts("[Gather]");
    for (var i=0; i < this._verbs.length; i++) {
        this._verbs[i].render();
    };
    System.puts("[/Gather]");
}


var verbs = [];
    
var addVerb = function(verb){
    verbs.push(verb);
    return verb;
};
    
GLOBAL.twiml = function(f) {
    f();
    for (var i=0; i < verbs.length; i++) {
        verbs[i].render();
    };
};

GLOBAL.say = function(body) {
    return addVerb(new Say(body));
};

GLOBAL.play = function(body) {
    return addVerb(new Play(body));
};

GLOBAL.gather = function(f){
    var temp = verbs;
    verbs = [];
    
    f();
    
    verb = new Gather(verbs);
    verbs = temp;
    verbs.push(verb);
    return verb;
};

  
    