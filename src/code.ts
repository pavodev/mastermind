import { Guess } from "./guess-list";

export default class Code {
  constructor(private values?: Array<string>) {
    if (values) return;

    this.values = new Array<string>(4);
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = (Math.random() * 7).toFixed(0);
    }
  }

  public toString(): string {
    return this.values!.join(",");
  }
}
