console.log('hello');

let authRes=false;

var s3Client = new Minio.Client({
  endPoint: 'spamigor.site',
  port: 9000,
  useSSL: true,
  accessKey: 'spamigor',
  secretKey: 'ugD6s2xz'
});

let dataS='';
let data;

function auth({url, login, pass, theme}) {
    s3Client.getObject('my-bucketname', 'my-objectname2', function(e, dataStream) {
      if (e) {
        return console.log(e)
      }
      dataStream.on('data', function(chunk) {
        dataS += chunk
      })
      dataStream.on('end', function() {
        console.log("End");
        console.log(dataS);
        data=JSON.parse(dataS);
        authRes=true;
      })
      dataStream.on('error', function(e) {
        console.log(e)
      })
    })
  return authRes;
}

function jsonSave() {  //функция должна передать json в минио
  console.log('save');
}

function imageSave(addr, type) {
  console.log(type);
  console.log(addr)
}

  function getData() {
    return data;
}

function getKeysCount(buffer){
    let i = 0;
    for (let key in buffer) {
        i++;
    }
    return i;
}

function getKeys(buffer){
    let bufferIn = [];
    for (let key in buffer)
        bufferIn.push(key);
    return bufferIn;
}

function shextohex(col)
  {
    if (col.length==4) return col[0]+col[1]+col[1]+col[2]+col[2]+col[3]+col[3];
    if (col.length==7) return col;
}