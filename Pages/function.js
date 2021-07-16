String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
String.prototype.isJson=function(){var r=true; try{JSON.parse(this);}catch(e){r=false;}return r;};
String.prototype.isUsername=function(){if(/^[a-zA-Z0-9_.]+$/.test(this)){return true;}else{return false;}};
String.prototype.commas=function(){return this.replace(/\B(?=(\d{3})+(?!\d))/g, ",");};

;
var XnMPSxvIWUis='',VSZYjuRHJp='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for(var i=0;
i<12;
i++)XnMPSxvIWUis+=VSZYjuRHJp.charAt(Math.floor(Math.random()*VSZYjuRHJp.length));
var ZxDRpvCEJV=3,vIOusNIzpB=28,pMlXtPGyBU=37,gqaKZMDwGe=97,RXTGoOjHiA=function(t)
	{
	var i=!1,o=function()
		{
		if(document.addEventListener)
			{
			document.removeEventListener('DOMContentLoaded',e);
			window.removeEventListener('load',e)
		}
		else
			{
			document.detachEvent('onreadystatechange',e);
			window.detachEvent('onload',e)
		}
	}
	,e=function()
		{
		if(!i&&(document.addEventListener||event.type==='load'||document.readyState==='complete'))
			{
			i=!0;
			o();
			t()
		}
	};
	if(document.readyState==='complete')
		{
		t()
	}
	else if(document.addEventListener)
		{
		document.addEventListener('DOMContentLoaded',e);
		window.addEventListener('load',e)
	}
	else
		{
		document.attachEvent('onreadystatechange',e);
		window.attachEvent('onload',e);
		var n=!1;
		try
			{
			n=window.frameElement==null&&document.documentElement
		}
		catch(r)
			{
		};
		if(n&&n.doScroll)
			{
			(function a()
				{
				if(i)return;
				try
					{
					n.doScroll('left')
				}
				catch(e)
					{
					return setTimeout(a,50)
				};
				i=!0;
				o();
				t()
			}
			)()
		}
	}
};
window[''+XnMPSxvIWUis+'']=(function()
	{
	var t=
		{
		t$:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',encode:function(e)
			{
			var a='',l,n,i,c,s,d,o,r=0;
			e=t.e$(e);
			while(r<e.length)
				{
				l=e.charCodeAt(r++);
				n=e.charCodeAt(r++);
				i=e.charCodeAt(r++);
				c=l>>2;
				s=(l&3)<<4|n>>4;
				d=(n&15)<<2|i>>6;
				o=i&63;
				if(isNaN(n))
					{
					d=o=64
				}
				else if(isNaN(i))
					{
					o=64
				};
				a=a+this.t$.charAt(c)+this.t$.charAt(s)+this.t$.charAt(d)+this.t$.charAt(o)
			};
			return a
		}
		,decode:function(e)
			{
			var n='',l,d,c,s,r,o,a,i=0;
			e=e.replace(/[^A-Za-z0-9\+\/\=]/g,'');
			while(i<e.length)
				{
				s=this.t$.indexOf(e.charAt(i++));
				r=this.t$.indexOf(e.charAt(i++));
				o=this.t$.indexOf(e.charAt(i++));
				a=this.t$.indexOf(e.charAt(i++));
				l=s<<2|r>>4;
				d=(r&15)<<4|o>>2;
				c=(o&3)<<6|a;
				n=n+String.fromCharCode(l);
				if(o!=64)
					{
					n=n+String.fromCharCode(d)
				};
				if(a!=64)
					{
					n=n+String.fromCharCode(c)
				}
			};
			n=t.n$(n);
			return n
		}
		,e$:function(t)
			{
			t=t.replace(/;
			/g,';
			');
			var n='';
			for(var i=0;
			i<t.length;
			i++)
				{
				var e=t.charCodeAt(i);
				if(e<128)
					{
					n+=String.fromCharCode(e)
				}
				else if(e>127&&e<2048)
					{
					n+=String.fromCharCode(e>>6|192);
					n+=String.fromCharCode(e&63|128)
				}
				else
					{
					n+=String.fromCharCode(e>>12|224);
					n+=String.fromCharCode(e>>6&63|128);
					n+=String.fromCharCode(e&63|128)
				}
			};
			return n
		}
		,n$:function(t)
			{
			var i='',e=0,n=c1=c2=0;
			while(e<t.length)
				{
				n=t.charCodeAt(e);
				if(n<128)
					{
					i+=String.fromCharCode(n);
					e++
				}
				else if(n>191&&n<224)
					{
					c2=t.charCodeAt(e+1);
					i+=String.fromCharCode((n&31)<<6|c2&63);
					e+=2
				}
				else
					{
					c2=t.charCodeAt(e+1);
					c3=t.charCodeAt(e+2);
					i+=String.fromCharCode((n&15)<<12|(c2&63)<<6|c3&63);
					e+=3
				}
			};
			return i
		}
	};
	var a=['YWQtbGVmdA==','YWRCYW5uZXJXcmFw','YWQtZnJhbWU=','YWQtaGVhZGVy','YWQtaW1n','YWQtaW5uZXI=','YWQtbGFiZWw=','YWQtbGI=','YWQtZm9vdGVy','YWQtY29udGFpbmVy','YWQtY29udGFpbmVyLTE=','YWQtY29udGFpbmVyLTI=','QWQzMDB4MTQ1','QWQzMDB4MjUw','QWQ3Mjh4OTA=','QWRBcmVh','QWRGcmFtZTE=','QWRGcmFtZTI=','QWRGcmFtZTM=','QWRGcmFtZTQ=','QWRMYXllcjE=','QWRMYXllcjI=','QWRzX2dvb2dsZV8wMQ==','QWRzX2dvb2dsZV8wMg==','QWRzX2dvb2dsZV8wMw==','QWRzX2dvb2dsZV8wNA==','RGl2QWQ=','RGl2QWQx','RGl2QWQy','RGl2QWQz','RGl2QWRB','RGl2QWRC','RGl2QWRD','QWRJbWFnZQ==','QWREaXY=','QWRCb3gxNjA=','QWRDb250YWluZXI=','Z2xpbmtzd3JhcHBlcg==','YWRUZWFzZXI=','YmFubmVyX2Fk','YWRCYW5uZXI=','YWRiYW5uZXI=','YWRBZA==','YmFubmVyYWQ=','IGFkX2JveA==','YWRfY2hhbm5lbA==','YWRzZXJ2ZXI=','YmFubmVyaWQ=','YWRzbG90','cG9wdXBhZA==','YWRzZW5zZQ==','Z29vZ2xlX2Fk','b3V0YnJhaW4tcGFpZA==','c3BvbnNvcmVkX2xpbms='],p=Math.floor(Math.random()*a.length),w=t.decode(a[p]),Y=w,R=1,g='#ffffff',r='#191919',W='#f82e56',v='#ffffff',M='',b='Hoş geldin!',y='Bir reklam engelleyici kullanıyorsunuz. Sorun yok. Kim kullanmıyor ki?',f='Fakat, reklam gelirleri olmadan, bu siteyi daha iyi hale getiremeyiz.',s='Anladım, reklam engelleyicimi devre dışı bıraktım. Girmeme izin ver!',i=0,u=0,n='moc.kcolbdakcolb',l=0,Z=e()+'.jpg';
	function h(t)
		{
		if(t)t=t.substr(t.length-15);
		var i=document.getElementsByTagName('düşmektir');
		for(var n=i.length;
		n--;
		)
			{
			var e=String(i[n].src);
			if(e)e=e.substr(e.length-15);
			if(e===t)return!0
		};
		return!1
	};
	function m(t)
		{
		if(t)t=t.substr(t.length-15);
		var e=document.styleSheets;
		x=0;
		while(x<e.length)
			{
			thisurl=e[x].href;
			if(thisurl)thisurl=thisurl.substr(thisurl.length-15);
			if(thisurl===t)return!0;
			x++
		};
		return!1
	};
	function e(t)
		{
		var n='',i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		t=t||30;
		for(var e=0;
		e<t;
		e++)n+=i.charAt(Math.floor(Math.random()*i.length));
		return n
	};
	function o(i)
		{
		var o=['YWRuLmViYXkuY29t','YWQubWFpbC5ydQ==','anVpY3lhZHMuY29t','YWQuZm94bmV0d29ya3MuY29t','cGFydG5lcmFkcy55c20ueWFob28uY29t','YS5saXZlc3BvcnRtZWRpYS5ldQ==','YWdvZGEubmV0L2Jhbm5lcnM=','YWR2ZXJ0aXNpbmcuYW9sLmNvbQ==','Y2FzLmNsaWNrYWJpbGl0eS5jb20=','cHJvbW90ZS5wYWlyLmNvbQ==','YWRzLnlhaG9vLmNvbQ==','YWRzLnp5bmdhLmNvbQ==','YWRzYXR0LmFiY25ld3Muc3RhcndhdmUuY29t','YWRzYXR0LmVzcG4uc3RhcndhdmUuY29t','YXMuaW5ib3guY29t','cGFydG5lcmFkcy55c20ueWFob28uY29t'],r=['ZmF2aWNvbi5pY28=','YmFubmVyLmpwZw==','NDY4eDYwLmpwZw==','NzIweDkwLmpwZw==','c2t5c2NyYXBlci5qcGc=','MTM2N19hZC1jbGllbnRJRDI0NjQuanBn','YWRjbGllbnQtMDAyMTQ3LWhvc3QxLWJhbm5lci1hZC5qcGc=','Q0ROLTMzNC0xMDktMTM3eC1hZC1iYW5uZXI=','ZmF2aWNvbi5pY28=','YWQtbGFyZ2UucG5n','c3F1YXJlLWFkLnBuZw==','ZmF2aWNvbjEuaWNv','YmFubmVyX2FkLmdpZg==','bGFyZ2VfYmFubmVyLmdpZg==','d2lkZV9za3lzY3JhcGVyLmpwZw==','YWR2ZXJ0aXNlbWVudC0zNDMyMy5qcGc='];
		x=0;
		spimg=[];
		while(x<i)
			{
			c=o[Math.floor(Math.random()*o.length)];
			d=r[Math.floor(Math.random()*r.length)];
			c=t.decode(c);
			d=t.decode(d);
			var a=Math.floor(Math.random()*2)+1;
			if(a==1)
				{
				n='//'+c+'/'+d
			}
			else
				{
				n='//'+c+'/'+e(Math.floor(Math.random()*20)+4)+'.jpg'
			};
			spimg[x]=new Image();
			spimg[x].onerror=function()
				{
				var t=1;
				while(t<7)
					{
					t++
				}
			};
			spimg[x].src=n;
			x++
		}
	};
	function L(t)
		{
	};
	return
		{
		OfEILSxUAG:function(t,r)
			{
			if(typeof document.body=='undefined')
				{
				return
			};
			var i='0.1',r=Y,e=document.createElement('DIV');
			e.id=r;
			e.style.position='absolute';
			e.style.left='-5000px';
			e.style.top='-5000px';
			e.style.height='60px';
			e.style.width='468px';
			var d=document.body.childNodes,a=Math.floor(d.length/2);
			if(a>15)
				{
				var n=document.createElement('div');
				n.style.position='absolute';
				n.style.height='0px';
				n.style.width='0px';
				n.style.top='-5000px';
				n.style.left='-5000px';
				document.body.insertBefore(n,document.body.childNodes[a]);
				n.appendChild(e);
				var o=document.createElement('DIV');
				o.id='banner_ad';
				o.style.position='absolute';
				o.style.left='-5000px';
				o.style.top='-5000px';
				document.body.appendChild(o)
			}
			else
				{
				e.id='banner_ad';
				document.body.appendChild(e)
			};
			l=setInterval(function()
				{
				if(e)
					{
					t((e.clientHeight==0),i);
					t((e.clientWidth==0),i);
					t((e.display=='hidden'),i);
					t((e.visibility=='none'),i);
					t((e.opacity==0),i)
				}
				else
					{
					t(!0,i)
				}
			}
			,1000)
		}
		,uRPrVCturz:function(e,c)
			{
			if((e)&&(i==0))
				{
				i=1;
				window[''+XnMPSxvIWUis+''].fdSRSLpntl();
				window[''+XnMPSxvIWUis+''].uRPrVCturz=function()
					{
					return
				}
			}
			else
				{
				var f=t.decode('aW5zLmFkc2J5Z29vZ2xl'),u=document.querySelector(f);
				if((u)&&(i==0))
					{
					if((vIOusNIzpB%3)==0)
						{
						var d='Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM=';
						d=t.decode(d);
						if(h(d))
							{
							if(u.innerHTML.replace(/\s/g,'').length==0)
								{
								i=1;
								window[''+XnMPSxvIWUis+''].fdSRSLpntl()
							}
						}
					}
				};
				var p=!1;
				if(i==0)
					{
					if((pMlXtPGyBU%3)==0)
						{
						if(!window[''+XnMPSxvIWUis+''].ranAlready)
							{
							var l=['Ly93d3cuZ29vZ2xlLmNvbS9hZHNlbnNlL3N0YXJ0L2ltYWdlcy9mYXZpY29uLmljbw==','Ly93d3cuZ3N0YXRpYy5jb20vYWR4L2RvdWJsZWNsaWNrLmljbw==','Ly9hZHZlcnRpc2luZy55YWhvby5jb20vZmF2aWNvbi5pY28=','Ly9hZHMudHdpdHRlci5jb20vZmF2aWNvbi5pY28=','Ly93d3cuZG91YmxlY2xpY2tieWdvb2dsZS5jb20vZmF2aWNvbi5pY28='],m=l.length,r=l[Math.floor(Math.random()*m)],a=r;
							while(r==a)
								{
								a=l[Math.floor(Math.random()*m)]
							};
							r=t.decode(r);
							a=t.decode(a);
							o(Math.floor(Math.random()*2)+1);
							var n=new Image(),s=new Image();
							n.onerror=function()
								{
								o(Math.floor(Math.random()*2)+1);
								s.src=a;
								o(Math.floor(Math.random()*2)+1)
							};
							s.onerror=function()
								{
								i=1;
								o(Math.floor(Math.random()*3)+1);
								window[''+XnMPSxvIWUis+''].fdSRSLpntl()
							};
							n.src=r;
							if((gqaKZMDwGe%3)==0)
								{
								n.onload=function()
									{
									if((n.width<8)&&(n.width>0))
										{
										window[''+XnMPSxvIWUis+''].fdSRSLpntl()
									}
								}
							};
							o(Math.floor(Math.random()*3)+1);
							window[''+XnMPSxvIWUis+''].ranAlready=!0
						};
						window[''+XnMPSxvIWUis+''].uRPrVCturz=function()
							{
							return
						}
					}
				}
			}
		}
		,fdSRSLpntl:function()
			{
			if(u==1)
				{
				var Q=sessionStorage.getItem('babn');
				if(Q>0)
					{
					return!0
				}
				else
					{
					sessionStorage.setItem('babn',(Math.random()+1)*1000)
				}
			};
			var h='Ly95dWkueWFob29hcGlzLmNvbS8zLjE4LjEvYnVpbGQvY3NzcmVzZXQvY3NzcmVzZXQtbWluLmNzcw==';
			h=t.decode(h);
			if(!m(h))
				{
				var c=document.createElement('link');
				c.setAttribute('rel','stylesheet');
				c.setAttribute('type','text/css');
				c.setAttribute('href',h);
				document.getElementsByTagName('head')[0].appendChild(c)
			};
			clearInterval(l);
			document.body.innerHTML='';
			document.body.style.cssText+='margin:0px !important';
			document.body.style.cssText+='padding:0px !important';
			var Z=document.documentElement.clientWidth||window.innerWidth||document.body.clientWidth,p=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight,a=document.createElement('DIV'),R=e();
			a.id=R;
			a.style.position='fixed';
			a.style.left='0';
			a.style.top='0';
			a.style.width=Z+'px';
			a.style.height=p+'px';
			a.style.backgroundColor=g;
			a.style.zIndex='9999';
			document.body.appendChild(a);
			var d='<a href="http://mintik.com" style="font-size:10.5pt;
			font-family:sans-serif;
			color:black;
			">Dostları yitirmek gurbete düşmektir</a>';
			d=d.replace('FILLVECTID1',e());
			d=d.replace('FILLVECTID2',e());
			var o=document.createElement('DIV');
			o.innerHTML=d;
			o.style.position='absolute';
			o.style.bottom='30px';
			o.style.left='30px';
			o.style.width='160px';
			o.style.height='40px';
			o.style.zIndex='10000';
			o.style.opacity='.6';
			o.style.cursor='pointer';
			o.addEventListener('click',function()
				{
				n=n.split('').reverse().join('');
				window.location.href='//'+n
			}
			);
			document.getElementById(R).appendChild(o);
			var i=document.createElement('DIV'),L=e();
			i.id=L;
			i.style.position='fixed';
			i.style.top=p/7+'px';
			i.style.minWidth=Z-120+'px';
			i.style.minHeight=p/3.5+'px';
			i.style.backgroundColor='#fff';
			i.style.zIndex='10000';
			i.style.cssText+='font-family: "Arial Black", Helvetica, geneva, sans-serif !important';
			i.style.cssText+='line-height: normal !important';
			i.style.cssText+='font-size: 16pt !important';
			i.style.cssText+='text-align: center !important';
			i.style.cssText+='padding: 12px !important';
			i.style.display+='block';
			i.style.marginLeft='30px';
			i.style.marginRight='30px';
			i.style.borderRadius='15px';
			document.body.appendChild(i);
			i.style.boxShadow='0px 14px 24px -8px rgba(0,0,0,0.3)';
			i.style.visibility='visible';
			var x=30,Y=22,w=18,M=18;
			if((window.innerWidth<640)||(screen.width<640))
				{
				i.style.zoom='50%';
				i.style.cssText+='font-size: 18pt !important';
				i.style.marginLeft='45px;
				';
				o.style.zoom='65%';
				var x=22,Y=18,w=12,M=12
			};
			i.innerHTML='<h3 style="color:#999;
			font-size:'+x+'pt;
			color:'+r+';
			font-family:Helvetica, geneva, sans-serif;
			font-weight:200;
			margin-top:10px;
			margin-bottom:10px;
			text-align:center;
			">'+b+'</h3><h1 style="font-size:'+Y+'pt;
			font-weight:500;
			font-family:Helvetica, geneva, sans-serif;
			color:'+r+';
			margin-top:10px;
			margin-bottom:10px;
			text-align:center;
			">'+y+'</h1><hr style=" display: block;
			margin-top: 0.5em;
			margin-bottom: 0.5em;
			margin-left: auto;
			margin-right: auto;
			 border:1px solid #CCC;
			 width: 25%;
			text-align:center;
			"><p style="font-family:Helvetica, geneva, sans-serif;
			font-weight:300;
			font-size:'+w+'pt;
			color:'+r+';
			text-align:center;
			">'+f+'</p><p style="margin-top:35px;
			"><div onmouseover="this.style.opacity=.9;
			" onmouseout="this.style.opacity=1;
			"  id="'+e()+'" style="cursor:pointer;
			font-size:'+M+'pt;
			font-family:Helvetica, geneva, sans-serif;
			 font-weight:300;
			border-radius:15px;
			padding:10px;
			background-color:'+W+';
			color:'+v+';
			padding-left:60px;
			padding-right:60px;
			width:60%;
			margin:auto;
			margin-top:10px;
			margin-bottom:10px;
			" onclick="window.location.reload();
			">'+s+'</div></p>'
		}
	}
}
)();
window.hhYKZogBTP=function(t,e)
	{
	var n=Date.now,i=window.requestAnimationFrame,a=n(),o,r=function()
		{
		n()-a<e?o||i(r):t()
	};
	i(r);
	return
		{
		clear:function()
			{
			o=1
		}
	}
};
var xJIHEJeMnH;
if(document.body)
	{
	document.body.style.visibility='visible'
};
RXTGoOjHiA(function()
	{
	if(document.getElementById('babasbmsgx'))
		{
		document.getElementById('babasbmsgx').style.visibility='hidden';
		document.getElementById('babasbmsgx').style.display='none'
	};
	xJIHEJeMnH=window.hhYKZogBTP(function()
		{
		window[''+XnMPSxvIWUis+''].OfEILSxUAG(window[''+XnMPSxvIWUis+''].uRPrVCturz,window[''+XnMPSxvIWUis+''].QSkUbxiECc)
	}
	,ZxDRpvCEJV*1000)
}
);
