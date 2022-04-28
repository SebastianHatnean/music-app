import { HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

export class OptionsProvider {
  public static readonly options = new HttpHeaderResponse({ headers: OptionsProvider.getCustomHttpHeader() });

  public static changeOptions() {
    Object.assign(OptionsProvider.options, new HttpHeaderResponse({ headers: OptionsProvider.getCustomHttpHeader() }));
  }

  private static getCustomHttpHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer',
    });
  }
}
