var __jrrda = ['96992031.1633615202.1541208257.1541384516.1541405783.1'];
var __jrrdb = ['96992031.4.1633615202|1.154140578'];
var __jrrdc = ['96992031'];
var __jrrdv = ['96992031|www.jdfcloud.com|-|referral|-'];
var c_domain = 'jdjrflow.jd.com';
(function() {
	b();

	function b() {
		var ai = {
			cdomain: "",
			getHost: function(l) {
				var s = /.*\:\/\/([^\/|:]*).*/;
				var g = l.match(s);
				var p = "";
				if(typeof g != "undefined" && null != g) {
					p = g[1]
				}
				return p
			},
			urlParams: function(g) {
				var l = new RegExp("(^|&)" + g + "=([^&]*)(&|$)");
				var p = window.location.search.substr(1).match(l);
				if(p != null) {
					return unescape(p[2])
				}
				return null
			},
			setCookie: function(g, l, s) {
				var p = new Date();
				p.setTime(p.getTime() + s);
				document.cookie = g + "=" + escape(l) + ";expires=" + p.toGMTString() + ";path=/;domain=" + this.cdomain
			},
			getCookie: function(g) {
				var t = "";
				if(document.cookie && document.cookie != "") {
					var s = document.cookie.split(";");
					for(var p = 0; p < s.length; p++) {
						var l = $.trim(s[p]);
						if(l.substring(0, g.length + 1) == (g + "=")) {
							t = decodeURIComponent(l.substring(g.length + 1));
							break
						}
					}
				}
				return t
			}
		};
		var a3 = {
			account: "",
			visit: function() {
				var y = ai.getCookie("_jrda");
				var s = ai.getCookie("_jrdb");
				var l = new Date().getTime();
				var g = 1;
				var t = 30 * 60 * 1000;
				var p = 180 * 24 * 60 * 60 * 1000;
				if(!y && !s) {
					ai.setCookie("_jrda", g, p);
					ai.setCookie("_jrdb", l, t)
				} else {
					if(y && !s) {
						g = parseInt(y) + 1;
						ai.setCookie("_jrda", g, p);
						ai.setCookie("_jrdb", l, t)
					} else {
						ai.setCookie("_jrdb", l, t)
					}
				}
			},
			order: function(D) {
				var L = ai.getHost(D),
					l = "",
					p = null,
					C = null,
					t = null,
					y = null;
				var K = ai.getHost(document.location.href);
				if(K == "trade.z.jd.com" || L == "trade.z.jd.com") {
					y = "10002";
					p = $(".module_item:first dl:first dd").html();
					t = $("#_projectId").val();
					var g = $(".f_red28:first").html();
					if(g != null) {
						C = g.substr(1, g.length - 1)
					}
				} else {
					if(L == "licai.bx.jd.com") {
						y = "102";
						p = ai.urlParams("orderId");
						C = ai.urlParams("shouldPay")
					} else {
						if(L == "bill.jr.jd.com") {
							y = "10003";
							p = $("#orderId").val();
							C = $("#shouldPay").val()
						} else {
							if(L == "") {
								L = document.location.href;
								if(L.match("trade.jr.jd.com")) {
									var s = $("a[href='/centre/jrbpayin.action']").size();
									if(s == 1) {
										y = "10000";
										p = ai.urlParams("order");
										C = ai.urlParams("amount")
									} else {
										$("a[class='loan-pub-btn']").each(function() {
											var W = this;
											var O = $(W).attr("href");
											if(O.indexOf("list.jr.jd.com/detail")) {
												y = "101";
												p = ai.urlParams("order");
												C = $(".bill-money").html().substr(1);
												t = $(".loan-pub-btn").last().attr("href").split("/")[4].split(".")[0]
											}
										})
									}
								}
							} else {
								if(L == "jrapp.jd.com") {
									L = document.location.href;
									if(L.match("m.z.jd.com")) {
										y = "10002";
										p = ai.urlParams("orderId");
										C = ai.urlParams("amount")
									}
								}
							}
						}
					}
				}
				if(p != null && C != null) {
					l = p + "|" + C + "|" + t + "|" + y
				}
				return l
			},
			req: function(W, t) {
				var K = document.referrer;
				var D = "";
				for(var a5 in t) {
					D += ((a5 + "=" + t[a5]) + "$")
				}
				D = D.substring(0, D.length - 1);
				var y = ai.getCookie("__jdu");
				if(y == "") {
					var l = ai.getCookie("__jda");
					if(l != "") {
						var s = l.split(".");
						y = s[1]
					}
				}
				var g = ai.getCookie("pin");
				if(!g) {
					g = ai.getCookie("pt_pin")
				}
				if(!g) {
					g = ai.getCookie("pwdt_id")
				}
				var p = ai.getCookie("_jrda");
				var L = ai.getCookie("flow_site_ad");
				var O = ai.getCookie("flow_outsite_ad");
				var aa = ("https:" == document.location.protocol ? "https://" : "http://") + "jdjrflow.jd.com/log.gif?uid=" + y + "&p=" + g + "&t=" + W + "&m=" + this.account + "&ref=" + encodeURIComponent(K) + "&v=" + encodeURIComponent(D) + "&order=" + this.order(K) + "&jrda=" + p + "&sitead=" + L + "&outsitead=" + O + "&rm=" + (new Date).getTime() + "&__jrrda=" + __jrrda + "&__jrrdb=" + __jrrdb + "&__jrrdc=" + __jrrdc + "&__jrrdv=" + __jrrdv;
				var C = new Image(1, 1);
				C.src = aa;
				C.onload = function() {
					C.onload = null;
					C.onerror = null
				}
			}
		};
		if("undefined" == typeof _jraqnew || _jraqnew.length == 0) {
			var af = document.domain.lastIndexOf(".");
			var au = document.domain.substring(0, af).lastIndexOf(".");
			if(au > -1) {
				ai.cdomain = document.domain.substring(au)
			} else {
				ai.cdomain = "." + document.domain
			}
			a3.account = "UA-J2000-1"
		} else {
			if(_jraqnew.length == 1) {
				var al = _jraqnew.pop();
				a3.account = al[1];
				var af = document.domain.lastIndexOf(".");
				var au = document.domain.substring(0, af).lastIndexOf(".");
				if(au > -1) {
					ai.cdomain = document.domain.substring(au)
				} else {
					ai.cdomain = "." + document.domain
				}
			} else {
				var a0 = _jraqnew.pop();
				ai.cdomain = a0[1];
				var al = _jraqnew.pop();
				a3.account = al[1]
			}
		}
		var am = "jr.jd.com,z.jd.com,zbbs.jd.com,baitiao.jd.com,baitiao.ps.jd.com,go.jd.com,loan.jd.com,bao.jd.com,baoxian.jd.com,licai.bx.jd.com,licai.jd.com,8.jd.com,8.jr.jd.com,jinku.pay.jd.com".split(",");
		var a2 = function(W) {
			var y = document.referrer,
				L = ai.cdomain;
			var s = y && y.split("/")[2],
				O = false;
			var a5 = __jrrdv;
			var p = /from=jrad_(([0-9]{1,})|JD)/;
			var g = p.exec(ax.location.href);
			var aa = /&loc=([0-9]{1,})/;
			var D = aa.exec(ax.location.href);
			if(g != null && D != null && D[1] == 2) {
				W.set(i, "jrad_" + g[1]);
				W.set(aD, "-");
				W.set(e, "referral");
				W.set(az, "-")
			} else {
				if(s && (s.indexOf(".jd.com") > -1)) {
					for(var a6 = am, C = 0; C < a6.length; C++) {
						var K = a6[C].toLowerCase();
						if(s.indexOf(K) > -1) {
							O = true;
							break
						}
					}
					if(!O && (/jrad_(([0-9]{1,})|JD)/.exec(W.get(i)) == null)) {
						W.set(i, "JD");
						W.set(aD, "-");
						W.set(e, "referral");
						W.set(az, "-")
					}
				} else {
					if(!s) {
						if(a5[0] != null && "JD" === W.get(i)) {
							W.set(i, "direct");
							W.set(aD, "-");
							W.set(e, "none");
							W.set(az, "-")
						}
					}
				}
			}
			if(window.jrBase && window.jrBase.navId) {
				W.set(m, window.jrBase.navId)
			}
			var l = navigator.userAgent.toLowerCase();
			if(l && l.indexOf("deviceid=") != -1) {
				uas = l.split("&");
				for(T in uas) {
					if(uas[T].indexOf("deviceid=") != -1) {
						W.set(x, uas[T].split("=")[1]);
						break
					}
				}
			}
			var t = ai.getCookie("qyjr_user");
			if(t) {
				W.set(o, t)
			}
		};
		var ah = window,
			ax = document,
			aK = encodeURIComponent,
			aj = decodeURIComponent,
			X = void 0,
			T = "push",
			M = "join",
			R = "split",
			V = "length",
			E = "indexOf",
			r = "prototype",
			P = "toLowerCase";
		var z = {};
		z.util = {
			getParameter: function(p, l) {
				var s = new RegExp("(?:^|&|[?]|[/])" + l + "=([^&]*)");
				var g = s.exec(p);
				return g ? aK(g[1]) : ""
			},
			Wv: function(s, g, p, l) {
				s = s + "=" + g + "; path=/; ";
				l && (s += "expires=" + (new Date(new Date().getTime() + l)).toGMTString() + "; ");
				p && (s += "domain=" + p + ";");
				ax.cookie = s
			},
			Vv: function(y) {
				for(var g = [], t = ax.cookie[R](";"), l = RegExp("^\\s*" + y + "=\\s*(.*?)\\s*$"), s = 0; s < t[V]; s++) {
					var p = t[s]["match"](l);
					p && g[T](p[1])
				}
				return g
			}
		};
		var aQ = 0;

		function aq(g) {
			return(g ? "_" : "") + aQ++
		}
		var at = aq(),
			ak = aq(),
			ap = aq(),
			Q = aq(),
			f = aq(),
			aS = aq(),
			ac = aq(),
			ay = aq(),
			an = aq(),
			ar = aq(),
			aH = aq(),
			aG = aq(),
			aO = aq(),
			aX = aq(),
			ae = aq(),
			Z = aq(),
			I = aq(),
			G = aq(),
			S = aq(),
			aJ = aq(),
			u = aq(),
			H = aq(),
			k = aq(),
			c = aq(),
			aV = aq(),
			aF = aq(),
			U = aq(),
			aT = aq(),
			i = aq(),
			aD = aq(),
			e = aq(),
			az = aq(),
			a4 = aq(),
			d = aq(),
			m = aq(),
			x = aq(),
			o = aq();
		var aW = function() {
			var p = {};
			this.set = function(t, s) {
				p[t] = s
			}, this.get = function(s) {
				return p[s] !== X ? p[s] : null
			}, this.m = function(t) {
				var s = this.get(t);
				var C = s == X || s === "" ? 0 : 1 * s;
				p[t] = C + 1
			};
			this.set(at, "UA-J2011-1");
			this.set(Q, ai.cdomain);
			this.set(ap, q());
			this.set(f, Math.round((new Date).getTime() / 1000));
			this.set(aS, 63072000000);
			this.set(ac, 15768000000);
			this.set(ay, 1800000);
			this.set(aX, Y());
			var g = ag();
			this.set(ae, g.name);
			this.set(Z, g.version);
			this.set(I, N());
			var l = aR();
			this.set(G, l.D);
			this.set(S, l.C);
			this.set(aJ, l.language);
			this.set(u, l.javaEnabled);
			this.set(H, l.characterSet);
			this.set(aT, aw);
			this.set(a4, new Date().getTime())
		};
		var aw = "baidu:wd,baidu:word,so.com:q,so.360.cn:q,360so.com:q,360sou.com:q,baidu:q1,m.baidu:word,m.baidu:w,wap.soso:key,m.so:q,page.yicha:key,sz.roboo:q,i.easou:q,wap.sogou:keyword,google:q,soso:w,sogou:query,youdao:q,ucweb:keyword,ucweb:word,114so:kw,yahoo:p,yahoo:q,live:q,msn:q,bing:q,aol:query,aol:q,daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,lycos:query,ask:q,netscape:query,cnn:query,about:terms,mamma:q,voila:rdata,virgilio:qs,alice:qs,yandex:text,najdi:q,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,ozu:q,terra:query,rambler:query".split(","),
			a1 = function() {
				return Math.round((new Date).getTime() / 1000)
			},
			B = function() {
				return Math.round(Math.random() * 2147483647)
			},
			ad = function() {
				return B() ^ av() & 2147483647
			},
			q = function() {
				return ab(ax.domain)
			},
			aR = function() {
				var l = {},
					g = ah.navigator,
					p = ah.screen;
				l.D = p ? p.width + "x" + p.height : "-";
				l.C = p ? p.colorDepth + "-bit" : "-";
				l.language = (g && (g.language || g.browserLanguage) || "-")[P]();
				l.javaEnabled = g && g.javaEnabled() ? 1 : 0;
				l.characterSet = ax.characterSet || ax.charset || "-";
				return l
			},
			Y = function() {
				var D, C, y, t;
				y = "ShockwaveFlash";
				if((D = (D = window.navigator) ? D.plugins : X) && D[V] > 0) {
					for(C = 0; C < D[V] && !t; C++) {
						y = D[C], y.name[E]("Shockwave Flash") > -1 && (t = y.description[R]("Shockwave Flash ")[1])
					}
				} else {
					y = y + "." + y;
					try {
						C = new ActiveXObject(y + ".7"), t = C.GetVariable("$version")
					} catch(s) {}
					if(!t) {
						try {
							C = new ActiveXObject(y + ".6"), t = "WIN 6,0,21,0", C.AllowScriptAccess = "always", t = C.GetVariable("$version")
						} catch(p) {}
					}
					if(!t) {
						try {
							C = new ActiveXObject(y), t = C.GetVariable("$version")
						} catch(l) {}
					}
					t && (t = t[R](" ")[1][R](","), t = t[0] + "." + t[1] + " r" + t[2])
				}
				var K = z.util.Vv("_r2");
				D = t ? (t + (K[V] > 0 ? ("_" + K[0]) : "")) : "-";
				var g = z.util.Vv("limgs");
				D = D + (g[V] > 0 ? ("_" + g[0]) : "");
				return D
			},
			aA = function(g) {
				return X == g || "-" == g || "" == g
			},
			ab = function(l) {
				var g = 1,
					s = 0,
					p;
				if(!aA(l)) {
					g = 0;
					for(p = l[V] - 1; p >= 0; p--) {
						s = l.charCodeAt(p), g = (g << 6 & 268435455) + s + (s << 14), s = g & 266338304, g = s != 0 ? g ^ s >> 21 : g
					}
				}
				return g
			},
			av = function() {
				var p = aR();
				for(var l = p, g = ah.navigator, l = g.appName + g.version + l.language + g.platform + g.userAgent + l.javaEnabled + l.D + l.C + (ax.cookie ? ax.cookie : "") + (ax.referrer ? ax.referrer : ""), g = l.length, s = ah.history.length; s > 0;) {
					l += s-- ^ g++
				}
				return ab(l)
			},
			ag = function() {
				var g = {
						name: "other",
						version: "0"
					},
					s = navigator.userAgent.toLowerCase();
				browserRegExp = {
					jrapp: /jdjr[|\-]([\w.]+)/,
					jdapp: /jdapp[|\;]([\w.]+)/,
					weixin: /micromessenger[|\/]([\w.]+)/,
					walletclient: /[|\/]walletclient/,
					se360: /360se/,
					se360_2x: /qihu/,
					ie: /msie[ ]([\w.]+)/,
					firefox: /firefox[|\/]([\w.]+)/,
					chrome: /chrome[|\/]([\w.]+)/,
					safari: /version[|\/]([\w.]+)(\s\w.+)?\s?safari/,
					opera: /opera[|\/]([\w.]+)/
				};
				for(var p in browserRegExp) {
					var l = browserRegExp[p].exec(s);
					if(l) {
						g.name = p;
						g.version = l[1] || "0";
						break
					}
				}
				return g
			},
			N = function() {
				var g = /(win|android|linux|nokia|ipad|iphone|ipod|mac|sunos|solaris)/.exec(navigator.platform.toLowerCase());
				if(!g) {
					return "other"
				} else {
					if(g[0] == "linux") {
						var l = /(android)/.exec(navigator.userAgent.toLowerCase());
						return l == null ? g[0] : "android"
					} else {
						return g[0]
					}
				}
			},
			aP = function() {
				var p = "",
					y = ["jwotest_product", "jwotest_list", "jwotest_cart", "jwotest_orderinfo", "jwotest_homepage", "jwotest_other1", "jwotest_other2", "jwotest_other3"];
				for(var t = 0, g = y.length; t < g; t++) {
					var s = z.util.Vv(y[t]);
					if(s[V] == 0) {
						continue
					}
					var C = aj(s[0]).match(/=(.*?)&/gi),
						l = [];
					if(C == null) {
						continue
					}
					$.each(C, function(K, D) {
						l.push(K == 0 ? "T" + D.substring(1, D.length - 1) : D.substring(1, D.length - 1))
					});
					p += l[M]("-") + ";"
				}
				return p
			},
			aN = function(l) {
				l.set(an, ax.location.hostname);
				l.set(ar, ax.title);
				l.set(aH, ax.location.pathname);
				l.set(aG, ax.referrer);
				l.set(aO, ax.location.href);
				var C = __jrrda,
					s = C[V] > 0 ? C[0][R](".") : null;
				l.set(ak, s ? s[1] : ad());
				l.set(k, s ? s[2] : l.get(f));
				l.set(c, s ? s[3] : l.get(f));
				l.set(aV, s ? s[4] : l.get(f));
				l.set(aF, s ? s[5] : 1);
				var t = __jrrdv,
					g = t[V] > 0 ? t[0][R]("|") : null;
				l.set(i, g ? g[1] : "direct");
				l.set(aD, g ? g[2] : "-");
				l.set(e, g ? g[3] : "none");
				l.set(az, g ? g[4] : "-");
				var y = __jrrdb,
					p = y[V] > 0 ? y[0][R](".") : null;
				l.set(U, p ? p[1] : 0);
				l.set(d, aP() || "-");
				return !0
			},
			aL = function() {
				var l = __jrrdb,
					g = l[V] > 0 ? l[0][R](".") : null;
				return(g && g.length == 4) ? g[1] * 1 : 0
			},
			aM = function(be) {
				var s = ax.location.href,
					D = ax.referrer,
					bb = be.get(Q),
					C = z.util.getParameter(s, "utm_source"),
					t = [],
					aa = be.get(i),
					W = be.get(aD),
					O = be.get(e),
					K = be.get(az),
					g = (__jrrdb.length == 0);
				if(C) {
					var l = z.util.getParameter(s, "utm_campaign"),
						bd = z.util.getParameter(s, "utm_medium"),
						a5 = z.util.getParameter(s, "utm_term");
					t[T](C);
					t[T](l || "-");
					t[T](bd || "-");
					t[T](a5 || "not set")
				} else {
					var p = D && D[R]("/")[2],
						bc = false;
					if(p && p[E](bb) < 0) {
						for(var a6 = be.get(aT), a8 = 0; a8 < a6.length; a8++) {
							var ba = a6[a8][R](":");
							if(p[E](ba[0][P]()) > -1 && D[E]((ba[1] + "=")[P]()) > -1) {
								var y = /jrad_([0-9]{1,})/;
								var a7 = y.exec(be.get(i));
								if(a7 != null) {
									bc = true;
									break
								}
								var a9 = aj(ba[1][P]()),
									L = z.util.getParameter(D, a9);
								t[T](ba[0]);
								t[T]("-");
								t[T]("organic");
								t[T](L || "not set");
								bc = true;
								break
							}
						}
						if(!bc) {
							if(p[E]("zol.com.cn") > -1) {
								t[T]("zol.com.cn");
								t[T]("-");
								t[T]("cpc");
								t[T]("not set")
							} else {
								t[T](p);
								t[T]("-");
								t[T]("referral");
								t[T]("-")
							}
						}
					}
				}
				if(t[V] > 0 && ((t[0] != aa || t[1] != W || t[2] != O) || (g && t[2] === "referral"))) {
					be.set(i, t[0] || "direct");
					be.set(aD, t[1] || "-");
					be.set(e, t[2] || "none");
					be.set(az, t[3] || "-");
					aB(be)
				} else {
					if(g) {
						aB(be)
					} else {
						j(be)
					}
				}
			},
			n = function(l, g) {
				var p = g.split(".");
				l.set(k, p[2]);
				l.set(c, p[4]);
				l.set(aV, a1());
				l.m(aF);
				l.set(U, 1)
			},
			J = function(l) {
				var g = l.get(f);
				l.set(ak, ad());
				l.set(k, g);
				l.set(c, g);
				l.set(aV, g);
				l.set(aF, 1);
				l.set(U, 1)
			},
			j = function(g) {
				g.m(U)
			},
			A = function(g) {
				return [g.get(ap), g.get(ak) || "-", g.get(k) || "-", g.get(c) || "-", g.get(aV) || "-", g.get(aF) || 1][M](".")
			},
			h = function(g) {
				return [g.get(ap), g.get(U) || 1, g.get(ak) + "|" + g.get(aF) || 1, g.get(aV) || g.get(f)][M](".")
			},
			F = function(g) {
				return [g.get(ap), g.get(i) || ax.domain, g.get(aD) || "(direct)", g.get(e) || "direct", g.get(az) || "-"][M]("|")
			},
			aB = function(g) {
				var l = __jrrda;
				l.length == 0 ? J(g) : n(g, l[0])
			};
		var w = new aW(),
			aE = function() {
				this.a = {};
				this.add = function(g, l) {
					this.a[g] = l
				};
				this.get = function(g) {
					return this.a[g]
				};
				this.toString = function() {
					return this.a[M]("&")
				}
			},
			ao = function(l, g) {
				function s(y, t) {
					t && p[T](y + "=" + t + ";")
				}
				var p = [];
				s("__jrrda", A(l));
				s("__jrrdv", F(l));
				g.add("jdcc", p[M]("+"))
			},
			v = function(l, g) {
				g.add("jdac", l.get(at)), g.add("jduid", l.get(ak)), g.add("jdsid", l.get(ak) + "|" + l.get(aF)), g.add("jdje", l.get(u)), g.add("jdsc", l.get(S)), g.add("jdsr", l.get(G)), g.add("jdul", l.get(aJ)), g.add("jdcs", l.get(H)), g.add("jddt", l.get(ar) || "-"), g.add("jdmr", aK(l.get(aG))), g.add("jdhn", l.get(an) || "-"), g.add("jdfl", l.get(aX)), g.add("jdos", l.get(I)), g.add("jdbr", l.get(ae)), g.add("jdbv", l.get(Z)), g.add("jdwb", l.get(k)), g.add("jdxb", l.get(c)), g.add("jdyb", l.get(aV)), g.add("jdzb", l.get(aF)), g.add("jdcb", l.get(U)), g.add("jdusc", l.get(i) || "direct"), g.add("jducp", l.get(aD) || "-"), g.add("jdumd", l.get(e) || "-"), g.add("jduct", l.get(az) || "-"), g.add("jdlt", typeof jdpts != "object" ? 0 : jdpts._st == undefined ? 0 : l.get(a4) - jdpts._st), g.add("jdtad", l.get(d)), g.add("nav", l.get(m) || "-"), g.add("did", l.get(x) || "-"), g.add("qyu", l.get(o) || "-")
			},
			aZ = function(l, g, p, s) {
				g.add("jdac", l.get(at)), g.add("jduid", l.get(ak)), g.add("jdsid", l.get(ak) + "|" + l.get(aF)), g.add("jdje", "-"), g.add("jdsc", "-"), g.add("jdsr", "-"), g.add("jdul", "-"), g.add("jdcs", "-"), g.add("jddt", "-"), g.add("jdmr", aK(l.get(aG))), g.add("jdhn", "-"), g.add("jdfl", "-"), g.add("jdos", "-"), g.add("jdbr", "-"), g.add("jdbv", "-"), g.add("jdwb", "-"), g.add("jdxb", "-"), g.add("jdyb", "-"), g.add("jdzb", l.get(aF)), g.add("jdcb", s ? (aL() + s) : l.get(U)), g.add("jdusc", "-"), g.add("jducp", "-"), g.add("jdumd", "-"), g.add("jduct", "-"), g.add("jdlt", 0), g.add("jdtad", p)
			},
			aY = function() {
				aN(w) && aM(w);
				a2(w);
				var l = new aE(),
					g = w.get(Q);
				v(w, l);
				__jrrda = A(w);
				__jrrdb = h(w);
				__jrrdc = w.get(ap);
				__jrrdv = F(w);
				return l.a
			},
			aI = function() {
				var g = new aE();
				v(w, g);
				return g.a
			},
			aU = function(g, l) {
				var p = new aE();
				aZ(w, p, g, l);
				return p.a
			},
			aC = function(l) {
				if(l instanceof Array) {
					var s = "";
					for(var p = 0, g = l.length; p < g; p++) {
						s += l[p] + ((p == g - 1) ? "" : "|||")
					}
					return s
				}
				return l
			};
		z.tracker = {
			bloading: function(p, l, s) {
				var g = aY()
			}
		};
		z.tracker.bloading("J", "A", new Date().getTime());
		$(document).bind("click", function(y) {
			y = y || event;
			var W = document;
			var aa = y.srcElement || y.target;
			var C = $(aa).attr("clstag");
			var L = "";
			while(!C) {
				aa = aa.parentNode;
				if(!aa || (aa.nodeName == "BODY")) {
					break
				}
				C = $(aa).attr("clstag")
			}
			if(C) {
				var l = C.split("|"),
					g = l[1],
					K = l[2],
					O = l[3];
				if(aa.nodeName == "IMG") {
					aa = aa.parentNode
				}
				var p = $(aa).attr("href");
				if(p == undefined || p.indexOf("javascript") != -1) {
					p = ""
				} else {
					if(p.indexOf("http") == -1) {
						p = window.location.host + p
					}
				}
				switch(g) {
					case "keycount":
						var D = {
							page: K,
							location: O,
							tag: "Q",
							href: p
						};
						a3.req("www.130000", D);
						L = K + "|" + O;
						break
				}
			}
		});
		(function() {
			var g = function() {
				var l = aI();
				var p = {
					je: l.jdje,
					sc: l.jdsc,
					sr: l.jdsr,
					ul: l.jdul,
					cs: l.jdcs,
					dt: l.jddt,
					hn: l.jdhn,
					fl: l.jdfl,
					os: l.jdos,
					br: l.jdbr,
					bv: l.jdbv,
					wb: l.jdwb,
					xb: l.jdxb,
					yb: l.jdyb,
					zb: l.jdzb,
					cb: l.jdcb,
					usc: l.jdusc,
					ucp: l.jducp,
					umd: l.jdumd,
					uct: l.jduct,
					lt: l.jdlt,
					ct: new Date().getTime(),
					tad: l.jdtad,
					nav: l.nav,
					did: l.did,
					qyu: l.qyu
				};
				a3.visit();
				a3.req("www.110000", p)
			};
			g();
			if(!window.JRTRACKER) {
				window.JRTRACKER = {
					pvlog: g
				}
			}
		})()
	}
	try {
		(function() {
			var d = {
				getClientHeight: function() {
					var e = 0;
					if(document.body.clientHeight && document.documentElement.clientHeight) {
						e = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
					} else {
						e = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
					}
					return e
				},
				getClientWidth: function() {
					var e = 0;
					if(document.body.clientWidth && document.documentElement.clientWidth) {
						e = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth
					} else {
						e = (document.body.clientWidth > document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth
					}
					return e
				},
				getScrollTop: function() {
					var e = 0;
					if(document.documentElement && document.documentElement.scrollTop) {
						e = document.documentElement.scrollTop
					} else {
						if(document.body) {
							e = document.body.scrollTop
						}
					}
					return e
				},
				getScrollHeight: function() {
					return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
				},
				getCookie: function(h) {
					var f = h + "=";
					var l = f.length;
					var e = document.cookie.length;
					var k = 0;
					while(k < e) {
						var g = k + l;
						if(document.cookie.substring(k, g) == f) {
							return this.getCookieValue(g)
						}
						k = document.cookie.indexOf(" ", k) + 1;
						if(k == 0) {
							break
						}
					}
					return null
				},
				getCookieValue: function(f) {
					var e = document.cookie.indexOf(";", f);
					if(e == -1) {
						e = document.cookie.length
					}
					return document.cookie.substring(f, e)
				},
				getDateStr: function(i) {
					var e = new Date();
					e.setDate(e.getDate() + i);
					var g = e.getFullYear();
					var h = e.getMonth() + 1;
					var f = e.getDate();
					return g + "-" + (h < 10 ? "0" + h : h) + "-" + (f < 10 ? "0" + f : f)
				},
				reportDataByGif: function(j) {
					var i = d.getCookie("__jdu");
					if(i == "") {
						var e = d.getCookie("__jda");
						if(e != "") {
							var h = e.split(".");
							i = h[1]
						}
					}
					var f = d.getCookie("pin");
					if(!f) {
						f = d.getCookie("pt_pin")
					}
					if(!f) {
						f = d.getCookie("pwdt_id")
					}
					var g = d.getCookie("_jrda");
					var l = d.getCookie("flow_site_ad");
					var m = d.getCookie("flow_outsite_ad");
					var n = ("https:" == document.location.protocol ? "https://" : "http://") + "jdjrflow.jd.com/log.gif?uid=" + i + "&p=" + f + "&t=www.130000&m=UA-J2011-12&ref=" + (window.location.href).split("?")[0] + "&v=" + encodeURIComponent(j) + "&jrda=" + g + "&sitead=" + l + "&outsitead=" + m + "&rm=" + (new Date).getTime() + "&__jrrda=" + d.getCookie("__jrrda") + "&__jrrdb=" + d.getCookie("__jrrdb") + "&__jrrdc=" + d.getCookie("__jrrdc") + "&__jrrdv=" + d.getCookie("__jrrdv");
					var k = new Image(1, 1);
					k.src = n;
					k.onload = function() {
						k.onload = null;
						k.onerror = null
					}
				},
				touchFunc: function() {
					c.scrollFunc()
				}
			};
			var c = {
				clstagDomObj: [],
				rootEle: document.body,
				scrollTimer: null,
				docClientHeight: 0,
				docScrollTop: 0,
				docScrollHeight: 0,
				_this: this,
				isContains: function(e, g) {
					var f = e.length;
					while(f--) {
						if(e[f].clstag === g) {
							return true
						}
					}
					return false
				},
				foreachNodes: function(j) {
					try {
						if(j.hasChildNodes) {
							var f = j.childNodes;
							for(var g = 0, e = f.length; g < e; g++) {
								var l = f.item(g);
								if((typeof l.offsetTop !== "undefined") && (typeof l.offsetHeight !== "undefined")) {
									if(l.attributes.clstag && l.style.display !== "none") {
										var k = l.attributes.clstag.nodeValue;
										if(!this.isContains(this.clstagDomObj, k) && k) {
											this.clstagDomObj.push({
												node: l,
												clstag: k,
												flag: false
											})
										}
									}
									this.foreachNodes(l)
								}
							}
						}
					} catch(h) {}
				},
				scrollFunc: function() {
					var h = this,
						f = window.scrollY,
						g = window.scrollY + d.getClientHeight(),
						e = window.screen.availHeight;
					this.docClientHeight = d.getClientHeight();
					this.docScrollTop = d.getScrollTop();
					this.docScrollHeight = d.getScrollHeight();
					if(this.docScrollTop === f) {
						setTimeout(function() {
							if(h.clstagDomObj.length > 0) {
								var v = [],
									p = [];
								for(var o = 0, q = h.clstagDomObj.length; o < q; o++) {
									var n = h.clstagDomObj[o];
									if(parseInt(n.node.offsetHeight) < document.body.clientHeight) {
										var u = n.node.getBoundingClientRect().top;
										var k = n.node.getBoundingClientRect().right;
										var j = n.node.getBoundingClientRect().bottom;
										var s = n.node.getBoundingClientRect().left;
										var m = n.node.offsetWidth;
										if((u <= d.getClientHeight()) && u > 0 && (k > 0 && k <= window.screen.availWidth)) {
											if(n.node.attributes.clstag && !n.flag) {
												n.flag = true;
												var t = n.clstag;
												v.push((o + 1) + "_" + t.split("|")[2]);
												p.push((o + 1) + "_" + t.split("|")[3])
											}
										} else {
											if(-(u) < n.node.offsetHeight && u < 0 && (k > 0 && k <= window.screen.availWidth)) {
												if(n.node.attributes.clstag && !n.flag) {
													n.flag = true;
													var t = n.clstag;
													v.push((o + 1) + "_" + t.split("|")[2]);
													p.push((o + 1) + "_" + t.split("|")[3])
												}
											} else {
												if((u <= d.getClientHeight()) && u > 0 && j < window.screen.availHeight * 2) {
													if(n.node.attributes.clstag && !n.flag) {
														n.flag = true;
														var t = n.clstag;
														v.push((o + 1) + "_" + t.split("|")[2]);
														p.push((o + 1) + "_" + t.split("|")[3])
													}
												} else {
													if(window.location.href.indexOf("downloadApp") > -1) {
														if(n.node.attributes.clstag && !n.flag) {
															n.flag = true;
															var t = n.clstag;
															v.push((o + 1) + "_" + t.split("|")[2]);
															p.push((o + 1) + "_" + t.split("|")[3])
														}
													}
												}
											}
										}
									}
								}
								if(v.length > 0 && (v.length == p.length)) {
									var r = "bty=1$page=" + v.join(",") + "$location=" + p.join(",");
									try {
										d.reportDataByGif(r)
									} catch(l) {}
								}
							}
							clearTimeout(h.scrollTimer);
							h.scrollTimer = null
						}, 50)
					}
				}
			};
			if(/(iPhone|iPad|iPod|iOS|ios|Android|Mobile)/i.test(navigator.userAgent)) {
				c.foreachNodes(document.body);
				setTimeout(function() {
					if(document.readyState === "interactive" || document.readyState === "complete") {
						c.scrollFunc()
					}
				}, 300)
			}
			document.onscroll = function() {
				if(c.scrollTimer === null && /(iPhone|iPad|iPod|iOS|ios|Android|Mobile)/i.test(navigator.userAgent)) {
					c.scrollTimer = setTimeout(function() {
						if(document.readyState === "complete") {
							c.foreachNodes(document.body);
							c.scrollFunc()
						}
					}, 50)
				}
			}
		})()
	} catch(a) {
		console.log("注入曝光统计脚本错误  " + a.message)
	}
})();