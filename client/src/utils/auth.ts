import decode from "jwt-decode";
import { MyJwtData } from "../types";

class AuthService {
  public getProfile(): MyJwtData {
    return decode(this.getToken() as string);
  }

  public loggedIn(): boolean {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  public isTokenExpired(token: string): boolean {
    try {
      const decoded = decode(token) as MyJwtData;
      if (decoded.exp as number < Date.now() / 1000) {
        return true;
      } return false;
    } catch (err) {
      return false;
    }
  }

  public getToken(): string | false {
    // Retrieves the user token from localStorage
    const token = localStorage.getItem("id_token");
    if (token) {
      return token;
    } 
      return false;
  }

  public login(token: string): void {
    // Saves user token to localStorage
    localStorage.setItem("id_token", token);

    window.location.assign("/");
  }

  public logout(): void {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
  }
}

export default new AuthService();
