import * as uuid from "uuid"

export class Utils {
  static onAddIdentificator<T>(list: T[]) {
    return list.map(el => ({...el, id: uuid.v4()}))
  }
}