import Code from "../code";
import { Guess } from "../guess-list";

describe("toString function", () => {
  test("toString first test", () => {
    const code = new Code(["1", "2", "3"]);

    expect(code.toString()).toBe("1,2,3");
    expect(code.toString()).toMatch(/[0-7],[0-7],[0-7]/);
  });

  // Questo test è inutile perché è legato all'interfaccia interna della classe.
  // L'ideale è testare solo l'interfaccia esterna
  test("fillValues", () => {
    const emptyCode = new Code();
    expect(emptyCode.values.length).toBe(4);
  });

  test("compare guesses", () => {
    const code = new Code(["1", "2", "3", "4"]);
    const guess = new Guess(["1", "2", "3", "4"]);
    const guessWrong = new Guess(["5", "6", "7", "0"]);
    const guessPartial = new Guess(["1", "6", "2", "0"]);

    expect(code.checkGuess(guess)).toBe("bbbb");
    expect(code.checkGuess(guessWrong)).toBe("eeee");
    expect(code.checkGuess(guessPartial)).toBe("bewe");
  });
});
// Finire: farlo funzionare indipendentemente dalla posizione dei valori
