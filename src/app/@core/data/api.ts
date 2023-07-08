import {environment} from "environments/environment";


export class ApiUrls {
  /**
   global url service
   */
  static API_URL = environment.api;
  static WEBSOCKET_URL = environment.websocket;

  // the auth endpoints are handled with the Nebular module: ApiUrls.API_URL * U_PATH
  static U_LOGIN = () => `${ApiUrls.API_URL}/api/auth/login/`;
  static U_LOGOUT = () => `${ApiUrls.API_URL}/api/auth/logout/`;

  static U_USER = () => `${ApiUrls.API_URL}/api/user/me/`;
  static U_USERS = () => `${ApiUrls.API_URL}/api/user/list/`;
  static U_USER_SPOTIFY_ACCESS = () => `${ApiUrls.API_URL}/api/user/spotify-access/`;
  static U_USER_SPOTIFY_LOGIN = () => `${ApiUrls.API_URL}/api/user/spotify-login/`;
  static U_USER_SPOTIFY_CALLBACK = () => `${ApiUrls.API_URL}/api/user/spotify-callback/`;

  static U_EVENT = (id: string) => `${ApiUrls.API_URL}/api/event/detail/${id}/`;
  static U_EVENTS = () => `${ApiUrls.API_URL}/api/event/list/`;
  static U_PARTICIPANTS = () => `${ApiUrls.API_URL}/api/event/participants/`;

  static U_GALLERY = (id: string) => `${ApiUrls.API_URL}/api/gallery/containers/${id}/`;
  static U_GALLERY_FILES = () => `${ApiUrls.API_URL}/api/gallery/files/`;
  static U_GALLERY_UPLOAD = () => `${ApiUrls.API_URL}/api/gallery/upload/`;
  static U_GALLERY_LIKE = () => `${ApiUrls.API_URL}/api/gallery/like/`;
  static U_GALLERY_COMMENT = () => `${ApiUrls.API_URL}/api/gallery/comment/`;

  static U_POLL = () => `${ApiUrls.API_URL}/api/event/poll/`;
  static U_POLL_VOTE = () => `${ApiUrls.API_URL}/api/event/poll-vote/`;

  static U_LIVE = () => `${ApiUrls.WEBSOCKET_URL}/ws/live/`;
}
