import { Guess } from "./guess-list";

export default class Code {
  public values: Array<string>;

  constructor(values?: Array<string>) {
    if (values) {
      this.values = values;
      return;
    }

    this.values = new Array<string>(4);
    this.fillValues();
  }

  public fillValues(): void {
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = (Math.random() * 7).toFixed(0);
    }
  }

  public checkGuess(guess: Guess): string {
    let result = "";

    // Copy of the secret values and guess values to track used values
    const codeCopy = [...this.values];
    const guessCopy = [...guess.values];

    // First: Check for exact matches ('b')
    const exactMatches = codeCopy.map((codeValue, codeIndex) => {
      if (codeValue === guessCopy[codeIndex]) {
        // Mark exact matches as null to prevent reuse
        codeCopy[codeIndex] = "";
        guessCopy[codeIndex] = "";
        return "b";
      }
      return "";
    });

    // Second: Check for partial matches ('w')
    const partialMatches = guessCopy.map((guessValue) => {
      if (
        guessValue !== "" && // Ignore already matched positions
        codeCopy.includes(guessValue)
      ) {
        // Remove the matched value from codeCopy to prevent reuse
        codeCopy[codeCopy.indexOf(guessValue)] = "";
        return "w";
      }
      return "e"; // Not a match
    });

    // Combine the results
    result = exactMatches
      .map((match, index) => match || partialMatches[index])
      .join("");

    return result;
  }

  public toString(): string {
    return this.values!.join(",");
  }
}
