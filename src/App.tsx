import * as React from "react";
import { Perguntas, opcoes } from "./Perguntas";
import { Grafico } from "./Grafico";

export default function App() {
  return (
    <div>
      <div className="p-2">
        <h1 className="text-3xl font-bold p-2 bg-orange-500">
          Cecília Xavier - Roda da Vida
        </h1>
      </div>
      <div className="w-full text-xs font-serif flex content-end">
      <table>
        <tbody>
            {opcoes.map(o=>(
          <tr>
          <td>{o.val}</td>
          <td>=</td>
          <td>{o.text}</td>
          </tr>
            ))}
          </tbody>
        </table>
        </div>
      <Perguntas />
      <Grafico />
    </div>
  );
}
