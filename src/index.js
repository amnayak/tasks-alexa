require('dotenv').load();

var http       = require('http')
  , AlexaSkill = require('./AlexaSkill')
  , tasks = require('./tasks')
  , APP_ID = 'amazon app id'

//var getTaskList = authorize(JSON.parse(content), listTaskLists, "", "");

var Tasks = function(){
  AlexaSkill.call(this, APP_ID);
};

Tasks.prototype = Object.create(AlexaSkill.prototype);
Tasks.prototype.constructor = Tasks;

Tasks.prototype.eventHandlers.onSessionStarted = function(sessionStartedRequest, session){
  // What happens when the session starts? Optional
  console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId
      + ", sessionId: " + session.sessionId);
};

Tasks.prototype.eventHandlers.onLaunch = function(launchRequest, session, response){
  // This is when they launch the skill but don't specify what they want. Prompt
  // them for their bus stop
  var output = 'Welcome to Tasks. ' +
    'You may list tasks and task lists.';

  var reprompt = 'What would you like to do with tasks?';

  response.ask(output, reprompt);

  console.log("onLaunch requestId: " + launchRequest.requestId
      + ", sessionId: " + session.sessionId);
};

Tasks.prototype.intentHandlers = {
  ListTasksIntent: function(intent, session, response){
    console.log('ay');
    //DO SOMETHING
  },
  ListTaskListsIntent: function(intent, session, response){
    console.log('lmao');
    //DO SOMETHING ELSE
  },
  HelpIntent: function(intent, session, response){
    var speechOutput = 'You may list tasks and task lists. ' +
      'What would you like to do?';
    response.ask(speechOutput);
  }
};

exports.handler = function(event, context) {
    var skill = new Tasks();
    skill.execute(event, context);
};
