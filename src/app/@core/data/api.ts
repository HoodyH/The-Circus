import {environment} from "environments/environment";


export class ApiUrls {
  /**
   global url service
   */
  static API_URL = environment.api;

  // the auth endpoints are handled with the Nebular module: ApiUrls.API_URL * U_PATH
  static U_LOGIN = () => `${ApiUrls.API_URL}/api/auth/login/`;
  static U_LOGOUT = () => `${ApiUrls.API_URL}/api/auth/logout/`;

  static U_USER = () => `${ApiUrls.API_URL}/api/user/detail/`;
  static U_USERS = () => `${ApiUrls.API_URL}/api/user/list/`;

  static U_EVENT = () => `${ApiUrls.API_URL}/api/event/detail/`;

  static U_POLL = () => `${ApiUrls.API_URL}/api/event/poll/`;
  static U_POLL_VOTE = () => `${ApiUrls.API_URL}/api/event/poll-vote/`;

}
