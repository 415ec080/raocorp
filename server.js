var http=require('http');
var fs=require('fs');
var nodemailer = require('nodemailer');
const {URLSearchParams}=require("url");
let params;
const PORT = process.env.PORT || 8081;


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '415ec080@gmail.com',
    pass: 'raomaths25'
  }
});

var mailOptions={
    from:'415ec080@gmail.com',
    to:'prathvirao0@gmail.com',
    subject:'yess',
    text:'yesssssssssss'
};


function create(req,res){
    if(req.method=='GET'&&req.url=='/'){
          res.writeHead(200,{"Contentr-Type":"html/plain"});
          fs.createReadStream("./learn_1.html").pipe(res);
          
    }
    else if(req.url!='/favicon.ico'){
//.................................now................................................
        
        var ur=req.url;
        ur=ur.replace('/?','');
       params=new URLSearchParams(ur);
        var z=params.get('Submit');
        console.log(z);
             if(z=='Submit'){
                console.log('UESSS');
                res.writeHead(200,{"Content-Type":"text/plain"});
               // res.write("hai");
                //var mai=params.get('mail');
                //console.log(mai);
               /* transporter.sendMail(mailOptions,function(error,info){
                    if(error){
                        console.log('err');
                    }
                    else{
                        console.log("sent");
                    }
                });*/
                
                var ran=Math.floor(10000+Math.random()*900000);
                //res.write(ran);
                 console.log(ran.toString());
                 
                 
        }
    //.............................................................................        
               else {
                //res.writeHead(200,{"Content-Type":"html/plain"});
                var x=req.url;
                
                x='.'+x;
                console.log(x);
                fs.createReadStream(x).pipe(res);
       // res.end();
               }             
    }
    else{
        res.writeHead(200,{"Contentr-Type":"html/plain"});
        res.end("error");
    }
}

http.createServer(create).listen(PORT);
console.log("at 8081");