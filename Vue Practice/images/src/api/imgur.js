/**
 * https://api.imgur.com/oauth2/authorize?
 *   client_id=YOUR_CLIENT_ID
 *   response_type=REQUESTED_RESPONSE_TYPE
 *   state=APPLICATION_STATE
 * 
 * Client ID: f82505ee0d28697
 * Client secret: 60818aa7079fad7583b6372d8c06f419e0ac03f1
 */
import qs from 'qs';

const CLIENT_ID = 'f82505ee0d28697'
const ROOT_URL = 'https://api.imgur.com'

export default {
	login() {
		const querystring = {
			client_id: CLIENT_ID,
			response_type: 'token'
		};

		window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
	}
};
