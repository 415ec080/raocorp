var http=require('http');
var fs=require('fs')
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

http.createServer(function(req,res){
res.writeHead(200);
res.end("https://github-production-release-asset-2e65be.s3.amazonaws.com/78153411/9d7087c0-9a26-11e7-9d19-9e822db58117?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20171130%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20171130T131616Z&X-Amz-Expires=300&X-Amz-Signature=bc3c113ad04924c5877c24b3697ccbd4fb0c226e69efbb30fcdaf68790613532&X-Amz-SignedHeaders=host&actor_id=24791621&response-content-disposition=attachment%3B%20filename%3Drubyinstaller-2.4.2-2-x64.exe&response-content-type=application%2Foctet-stream");
//fs.createReadStream('./test_2.html').pipe(res);

}).listen(server_port,server_ip_address,function(){
    console.log("on :"+server_ip_address+"\nport :"+server_port);
});
