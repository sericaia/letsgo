'use strict'

/* Participant class */

function Participant (id, name, email) {
    this.id = id || "";
    this.name = name || "";
    this.email = email || "";
    this.resourceList = [];
}

Participant.prototype.getId = function(){
    return this.id;
};

Participant.prototype.setId = function(id){
    this.id = id;
};

Participant.prototype.getName = function(){
    return this.name;
};

Participant.prototype.setName = function(name){
    this.name = name;
};

Participant.prototype.getEmail = function(){
    return this.email;
};

Participant.prototype.setEmail = function(email){
    this.email = email;
};