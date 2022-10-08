let authData = {
	url: '',
	login: '',
	pass: '',
	theme: ''
};


var s3Client;
let trig = false;

function setLoginData({url, login, pass, theme}) {
	if (trig) {
		authData = {url: url, login: login, pass: pass, theme: theme};
		s3Client = new Minio.Client({
			endPoint: authData.url,
			port: 9000,
			useSSL: true,
			accessKey: authData.login,
			secretKey: authData.pass
		});
	}
}

let data, authRes=false, errName='';

let dataZ = {
	colors: {
	  	primary: {
			main: '#000000',
			light: '#000000',
			dark: '#000000',
			contrastText: '#000000'
	  	},
	  	secondary: {
			main: '#000000'
	  	},
	  	error: {
			main: '#000000'
	  	},
	  	warning: {
			main: '#000000'
	  	},
	  	info: {
			main: '#000000'
	  	},
	  	success: {
			main: '#000000'
	  	}
	},
	company_name: "",
	images: {
	  	favicon: "",
		logo_mini: "",
	  	logo: ""
	},
	resources: {
		webpage: "",
		facebook: "",
		linkedin: "",
		twitter: "",
		github: "",
		docs: "",
		android_market: "",
		ios_market: "",
		android_sdk: "",
		ios_sdk: "",
		privacyPolicy: ""
	}
};

function auth({url, login, pass, theme}) {
	if (trig) {
		data = {};
		let dataS='';
		setLoginData({url, login, pass, theme});
		console.log(authData);
		s3Client.getObject(authData.theme, 'prod/theme.json', function(e, dataStream) {
			if (e) {
				console.log('f');
				console.log(e);
				errName=e.code;
				if ((e.code==='NoSuchBucket')||(e.code==='NoSuchKey')) loginHidden={error: true, general: false, makeBucket: false};
				else loginHidden={error: false, general: false, makeBucket: false};
				authRes=false;
				rend();
			}
			try {
				dataStream.on('data', function(chunk) {
					dataS += chunk
				});
				dataStream.on('end', function() {
					data=JSON.parse(dataS);
					authRes=true;
					loginHidden={error: true, general: true, makeBucket: false};
					rend();
				})
				dataStream.on('error', function(e) {
					authRes=false;
					rend();
				})
			}
			catch(e) {
				console.log('g');
				data=dataZ;
			};
		});
		return authRes;
	}
}

function jsonSave() {  //функция должна передать json в минио
	if (trig) {
		console.log('save');
		if (authRes) {
			s3Client.putObject(authData.theme, 'prod/theme.json', JSON.stringify(data), function(e) {
				if (e) {
				return console.log(e)
				}
				console.log("Successfully uploaded the Buffer")
			})
			setPolicy();
		}
	}
}

function imageSave(addr, type, file) {
  console.log(file.current.files[0]);
  console.log(type);
  if (file.current.files[0]) {
	let reader = new FileReader();
	loading(true);
	reader.onloadend = ((event) => {

		s3Client.putObject(authData.theme, 'prod/'+file.current.files[0].name, event.target.result, function(e) {
			if (e) {
			return console.log(e)
			}
			if (type==='favicon') data.images.favicon='https://'+authData.url+'/'+authData.theme+'/prod/'+file.current.files[0].name;
			if (type==='flogo') data.images.logo='https://'+authData.url+'/'+authData.theme+'/prod/'+file.current.files[0].name;
			if (type==='slogo') data.images.logo_mini='https://'+authData.url+'/'+authData.theme+'/prod/'+file.current.files[0].name;
			jsonSave();
			loading(false);
			console.log("Successfully uploaded the Buffer");
			});
		});
		reader.readAsText(file.current.files[0]);
	}
  /**/
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

function loading(status) {
	document.getElementById("image1").hidden=!status;
}

function setPolicy() {
	let policy = `
	{
		"Version": "2012-10-17",
		"Statement": [
		  {
			"Effect": "Allow",
			"Principal": {
			  "AWS": [
				"*"
			  ]
			},
			"Action": [
			  "s3:DeleteObject",
			  "s3:GetObject",
			  "s3:PutObject"
			],
			"Resource": [
			  "arn:aws:s3:::themes/*"
			]
		  }
		]
	  }
	`;
	console.log(authData.theme);
	s3Client.setBucketPolicy(authData.theme, policy, (err) => {
		if (err) throw err	
			console.log('Set bucket policy');
		if (!err) console.log('policy set');
	})
}

function creatBucket() {
	s3Client.makeBucket(authData.theme, 'us-west-1', function(e) {
		if (e) {
		  return console.log(e)
		}
		console.log("Success");
		setPolicy();
	  })
}

function creatBorF(trig, event) {
	event.preventDefault();
	console.log(trig);	
	if (trig === 'no') loginHidden={error: true, general: false, makeBucket: true};
	if (trig === 'yes') {
		console.log(errName);
		if (errName==='NoSuchBucket') creatBucket(authData.theme);
		loginHidden={error: true, general: true, makeBucket: false};
		authRes=true;
	} 
	rend();
}

trig = true;