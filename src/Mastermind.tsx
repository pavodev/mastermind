import * as React from "react";

import { useState } from "react";

import Code from "./code";
import CodeEditor from "./CodeEditor";
import { Guess, GuessList } from "./guess-list";
import Guesses from "./Guesses";

type MastermindProps = { title: string };

export default function Mastermind({ title }: MastermindProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [code, setCode] = useState(new Code());
  const [guessList, setGuessList] = useState(new GuessList());

  function addGuessToList(code: Guess) {
    const newList = new GuessList(guessList);
    newList.push(code);
    setGuessList(newList);
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{code.toString()}</p>
      <Guesses list={guessList}></Guesses>
      <CodeEditor onAddGuess={(guess) => addGuessToList(guess)}></CodeEditor>
    </>
  );
}
