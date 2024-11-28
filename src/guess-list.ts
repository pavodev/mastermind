import { ReactElement } from "react";

type GuessFunction<T> = (g: Guess) => T;

export class GuessList {
  private guesses = new Array<Guess>();

  constructor(other?: GuessList) {
    if (other) {
      this.guesses.push(...other.guesses);
    }
  }

  push(guess: Guess) {
    this.guesses.push(guess);
  }

  map(f: GuessFunction<ReactElement>) {
    return this.guesses.map(f);
  }
}

export class Guess {
  constructor(public values: string[]) {}

  toString(): string {
    return this.values.join(",");
  }
}
