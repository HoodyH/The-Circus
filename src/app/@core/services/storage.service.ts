import { Injectable } from '@angular/core';


@Injectable()
export class StorageService {

    private AUTH_TOKEN = "LM0KEY0XX60001";

    private static set(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    private static get(key: string) {
        return localStorage.getItem(key);
    }

    private static remove(key: string) {
        localStorage.removeItem(key);
    }

    clearStorage(){
      localStorage.clear();
    }

    getToken() : string {
        let token = StorageService.get(this.AUTH_TOKEN);

        if(!token || "null"==token){
        return "";
        }
        return token;
    }

    setToken(token: string) {
        StorageService.set(this.AUTH_TOKEN, token);
    }
}
