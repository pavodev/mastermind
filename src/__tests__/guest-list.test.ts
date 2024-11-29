import { Guess, GuessList } from "../guess-list";

describe("Guess lists", () => {
  let guess: Guess;
  beforeEach(() => {
    guess = new Guess(["1", "2", "3", "4"]);
  });

  test("Guess", () => {
    expect(guess.toString()).toBe("1,2,3,4");
  });

  test("GuessList empty", () => {
    const guessList = new GuessList();

    expect(guessList.map((e) => e).length).toBe(0);
  });

  test("GuessList push", () => {
    const guessList = new GuessList();
    guessList.push(guess);

    expect(guessList.map((e) => e).length).toBe(1);
  });

  test("GuessList not empty", () => {
    const guessList = new GuessList();
    const cloneGuessList = new GuessList(guessList);

    guessList.push(guess);

    expect(guessList.map((e) => e).length).toBe(1);
    expect(cloneGuessList).toEqual(cloneGuessList);
  });
});
