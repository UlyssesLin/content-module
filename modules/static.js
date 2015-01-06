//Ulysses Lin 1/6/2015
var path=require('path');

module.exports={
	find:function(url){
		if(url=='/'){
			return('views/index.html');
		}else if(path.extname(url)=='.css'){
			//substring needed since url auto has "/" in front
			return(url.substring(1));
		}else if(url=='/cats.html'){
			return('views/cats.html');
		}else if(path.extname(url)=='.jpg'){
			//substring needed since url auto has "/" in front
			return(url.substring(1));
		}else{
			return null;
		}
	}
}