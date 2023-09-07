import Image from "next/image";
import styles from "./page.module.css";
import TicTacToe from "./TicTacToe";

export default function Home() {
  return (
    <div className="main">
      <TicTacToe />
    </div>
  );
}
