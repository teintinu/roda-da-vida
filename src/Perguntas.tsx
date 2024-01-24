import React from "react";
import { Questionario, questionario } from "./questionario";
import { useRespostas, useRespostaSubtotal } from "./respostas";

export function Perguntas() {
  return (
    <div 
//    className="w-full h-full overflow-scroll"
  //  style={{
    //  clipPath: "polygon(0 0, 100% 0, 100% 26%, 58% 46%, 53% 100%, 0 100%)"
    //}}
    >
      {questionario.map((q, qIdx) => (
        <PerguntasQ key={q.tipo} q={q} qIdx={qIdx} />
      ))}
    </div>
  );
}

function PerguntasQ({ q, qIdx }: { q: Questionario, qIdx: number }) {
  const subtotal = useRespostaSubtotal(q);
  return (
    <div>
      <div className="text-2xl uppercase p-2"
      style={{color: q.cor}}
      >{q.tipo}</div>
      <div>
        {q.perguntas.map((p, pIdx) => (
          <PerguntasP key={p} q={q} qIdx={qIdx} p={p} pIdx={pIdx} />
        ))}
      </div>
      <div className="pl-10">Total: {subtotal.toFixed(0)}</div>
    </div>
  );
}

export const opcoes = [
  "raramente ou não se aplica",
  "algumas vezes se aplica",
  "multas vezes se aplica",
  "sempre se aplica",
].map((o, idx) => ({ text: o, val: idx }));

function PerguntasP({ q, qIdx, p, pIdx }: { q: Questionario; qIdx: number, p: string, pIdx: number }) {
  const [resposta, setResposta] = useRespostas(q, p);
  return (
    <div className="px-2 pb-3 flex" title={opcoes[resposta || 0].text}>
      <input
        className="w-10 focus:border-blue border-b-2 border-b-solid font-mono pl-1"
        autoFocus={qIdx===0&&pIdx===0}
        type="number"
        min={0}
        max={3}
        value={resposta}
        onChange={(e) => setResposta(parseInt(e.target.value))}
      />
      <div>{p}</div>
    </div>
  );
}
