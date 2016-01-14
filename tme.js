var tme = {

	browser: ( function () {

		var ua = navigator.userAgent;

		if ( /Arora/i.test( ua ) ) {

			 return 'Arora';

		} else if ( /Opera|OPR/.test( ua ) ) {

			return 'Opera';

		} else if ( /Maxthon/i.test( ua ) ) {

			return 'Maxthon';

		} else if ( /Vivaldi/i.test( ua ) ) {

			return 'Vivaldi';

		} else if ( /YaBrowser/i.test( ua ) ) {

			return 'Yandex';

		} else if ( /Chrome/i.test( ua ) ) {

			 return 'Chrome';

		} else if ( /Epiphany/i.test( ua ) ) {

			return 'Epiphany';

		} else if ( /Firefox/i.test( ua ) ) {

			return 'Firefox';

		} else if ( /Mobile(\/.*)? Safari/i.test( ua ) ) {

			return 'Mobile Safari';

		} else if ( /MSIE/i.test( ua ) ) {

			return 'Internet Explorer';

		} else if ( /Midori/i.test( ua ) ) {

			return 'Midori';

		} else if ( /Safari/i.test( ua ) ) {

			return 'Safari';

		}

		return false;

	} )(),

	os: ( function () {

		var ua = navigator.userAgent;

		if ( /Android/i.test( ua ) ) {

			return 'Android';

		} else if ( /CrOS/i.test( ua ) ) {

			return 'Chrome OS';

		} else if ( /iP[ao]d|iPhone/i.test( ua ) ) {

			return 'iOS';

		} else if ( /Linux/i.test( ua ) ) {

			return 'Linux';

		} else if ( /Mac OS/i.test( ua ) ) {

			return 'Mac OS';

		} else if ( /windows/i.test( ua ) ) {

			return 'Windows';

		}

		return false;

	} )(),

	support: {

		canvas: !! window.CanvasRenderingContext2D,

		localStorage: ( function () {

			try {

				return !! window.localStorage.getItem;

			} catch ( error ) {

				return false;

			}

		} )(),

		sessionStorage: ( function () {

			try {

				return !! window.sessionStorage.getItem;

			} catch ( error ) {

				return false;

			}

		} )(),

	}

};

console.log(tme);
