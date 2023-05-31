import {environment} from "environments/environment";


export class ApiUrls {
  /**
   global url service
   */
  static API_URL = environment.api;
  static EVENT_ID = environment.event

  // the auth endpoints are handled with the Nebular module: ApiUrls.API_URL * U_PATH
  static U_LOGIN = () => `${ApiUrls.API_URL}/api/auth/login/`;
  static U_LOGOUT = () => `${ApiUrls.API_URL}/api/auth/logout/`;

  static U_USER = () => `${ApiUrls.API_URL}/api/user/detail/`;
  static U_USERS = () => `${ApiUrls.API_URL}/api/user/list/`;

  static U_EVENT = (id: string) => `${ApiUrls.API_URL}/api/event/detail/${id}/`;
  static U_PARTICIPANTS = () => `${ApiUrls.API_URL}/api/event/participants/`;

  static U_GALLERY = (id: string) => `${ApiUrls.API_URL}/api/gallery/containers/${id}/`;
  static U_GALLERY_UPLOAD = () => `${ApiUrls.API_URL}/api/gallery/upload/`;

  static U_POLL = () => `${ApiUrls.API_URL}/api/event/poll/`;
  static U_POLL_VOTE = () => `${ApiUrls.API_URL}/api/event/poll-vote/`;

}
