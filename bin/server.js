var app = require('../app');
var fs = require('fs');
var OpenTok = require('opentok');
const nodemailer = require('nodemailer');
const port = 4000;
const bodyParser = require('body-parser');
const { response } = require('../app');
const http = require('http').Server(app);
const io = require('socket.io')(http);



var opentok = new OpenTok('46825214','fea230c6469548306c7a4dbec7ce293f0395506a');

//Generate a basic session. Or you could use an existing session ID.
var SESSION_ID;
var QUALITY_SESSION_ID;

console.log('Creating Opentok quality session.....');
opentok.createSession({mediaModa:"routed"},function(error,result){
    if(error){
        console.log("Error creating quality session:",error);
        process.exit(1);
    }else{
        QUALITY_SESSION_ID = result.sessionId;
        console.log("Quality session created ...");
    }
});


var sessionId;
var token
opentok.createSession({}, function (error, session) {
    if (error) {
        console.log("Error creating session:", error)
    } else {
        sessionId = session.sessionId;
        console.log("Session ID: " + sessionId);
        token = opentok.generateToken(sessionId);
        console.log("token",token,"end");
    }
});



console.log("Creating OpenTok session....");
opentok.createSession({mediaMode:"relayed"},function(error,result){
    if(error)
    {
        console.log("Error creating session:",error);
        process.exit(1);
    }else{
        SESSION_ID = result.sessionId;
        fs.writeFile('last_session.id',SESSION_ID,function(err){
            if(err){
                console.log("Error creating session : ",err);
                process.exit(1);
            }

            console.log('Session created...');
        })
    }
})

const documents = {};

io.on("connection", (socket) => {
  let previousId;
  const safeJoin = (currentId) => {
    socket.leave(previousId);
    socket.join(currentId, () =>
      console.log(`Socket ${socket.id} joined room ${currentId}`)
    );
    previousId = currentId;
  };

  socket.on("getDoc", (docId) => {
    safeJoin(docId);
    socket.emit("document", documents[docId]);
  });

  socket.on("addDoc", (doc) => {
    documents[doc.id] = doc;
    safeJoin(doc.id);
    io.emit("documents", Object.keys(documents));
    socket.emit("document", doc);
  });

  socket.on("editDoc", (doc) => {
    documents[doc.id] = doc;
    socket.to(doc.id).emit("document", doc);
  });

  io.emit("documents", Object.keys(documents));

  console.log(`Socket ${socket.id} has connected`);
});

http.listen(port, () => {
  console.log("Listening on port 4000");
});



