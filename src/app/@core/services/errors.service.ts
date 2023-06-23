import {Injectable} from "@angular/core";
import {ErrorCode, ErrorsData} from "@core/data/errors";
import {NavigationExtras, Router} from "@angular/router";

@Injectable()
export class ErrorsService extends ErrorsData {

  constructor(private router: Router) {
    super();
  }

  /**
   * Navigate to error page
   * @param code the predefined error code
   * @param message the message to display
   */
  displayError(code: string = ErrorCode.GENERIC_ERROR, message: string | null = null): void {

    const queryParams: {code: string, message?: string} = { code }
    if (message) {
      queryParams['message'] = message;
    }
    const navigationExtras: NavigationExtras = { queryParams: queryParams };
    this.router.navigate(['/black-hole/error'], navigationExtras).then();
  }
}
