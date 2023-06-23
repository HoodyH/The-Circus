export enum ErrorCode {
  GENERIC_ERROR='E0040',
  EVENT_NOT_FOUND_ERROR='E0062',
  UNATHORIZED_ERROR='E0062',
}

export interface Error {
  emoji: string,
  verboseCode: string,
  message: string
}

export const errors: { [code: string]: Error } = {
  [ErrorCode.GENERIC_ERROR]: {
    emoji: '😭',
    verboseCode: 'GENERIC_ERROR',
    message: "Ciao, purtroppo un errore ha impedito l'operazione 😢"
  },
  [ErrorCode.EVENT_NOT_FOUND_ERROR]: {
    emoji: '😭',
    verboseCode: 'EVENT_NOT_FOUND',
    message: "Ciao, purtroppo l'evento che stai cercando non esiste 😢"
  },
  [ErrorCode.UNATHORIZED_ERROR]: {
    emoji: '😭',
    verboseCode: 'UNATHORIZED',
    message: "Ciao, purtroppo non sei autorizzato ad accedere a questa pagina 😢"
  }
};


export abstract class ErrorsData {

  abstract displayError(code?: string, message?: string | null): void;

}
