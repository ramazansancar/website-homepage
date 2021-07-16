function _addCookie(item,name){

	var cookies = decodeURIComponent(_getCookie(name));

	var cookies2 = [];
	
	cookies2.push(item);

	if(cookies != 'undefined' && cookies.length > 0){

		if(cookies.isJson()){

			cookies = JSON.parse(cookies);
			
			for(var i = 0; i < cookies.length; i++){

				var cookie = cookies[i];

				if(cookie != null && cookie.id != null){

					if(cookie.id != item.id){

						cookies2.push(cookie);
					}
				}
			}
		}
	} else {
				
		document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
	}

	document.cookie = name+'='+encodeURIComponent(JSON.stringify(cookies2))+'; expires=Thu, 31 Dec 2037 00:00:00 UTC; path=/';
}

function _clearCookie(name){
	document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
}

function _removeCookie(id,name){

	var cookies = decodeURIComponent(_getCookie(name));

	var cookies2 = [];

	if(cookies != 'undefined' && cookies.length > 0){

		if(cookies.isJson()){

			cookies = JSON.parse(cookies);
			
			for(var i = 0; i < cookies.length; i++){

				var cookie = cookies[i];

				if(cookie != null && cookie.id != null){

					if(cookie.id != id){

						cookies2.push(cookie);
					}
				}
			}
		}
	} else {
				
		document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
	}

	document.cookie = name+'='+encodeURIComponent(JSON.stringify(cookies2))+'; expires=Thu, 31 Dec 2037 00:00:00 UTC; path=/';
}

function _getCookie(name){
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}