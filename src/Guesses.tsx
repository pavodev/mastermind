import { GuessList } from "./guess-list";

type Props = {
  list: GuessList;
};

export default function Guesses({ list }: Props) {
  const myList = list.map((e) => <li>{e.toString()}</li>);
  return <ol>{myList}</ol>;
}
