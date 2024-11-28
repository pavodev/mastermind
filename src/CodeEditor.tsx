import { Guess } from "./guess-list";

type Props = {
  onAddGuess: (g: Guess) => void;
};

export default function CodeEditor({ onAddGuess }: Props) {
  const fields = new Array<React.ReactElement>();

  for (let i = 0; i < 4; i++) {
    const field = <input name={`f${i}`} key={i}></input>;
    fields.push(field);
  }

  function handleSubmitCode(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const fields = event.currentTarget.elements;
    const values: string[] = [];
    for (let i = 0; i < fields.length; i++) {
      if (fields[i] instanceof HTMLInputElement) {
        values.push((fields[i] as HTMLInputElement).value);
      }
    }
    const guess = new Guess(values);
    onAddGuess(guess);
  }

  return (
    <>
      <form onSubmit={handleSubmitCode}>
        {fields}
        <button type="submit">Conferma</button>
      </form>
    </>
  );
}
