import { useMemo } from "react";
import { questionario } from "./questionario";
import { useTodasRespostas } from "./respostas";

export function Grafico() {
  const respostas = useTodasRespostas();
  const partes = useMemo(() => {
    return questionario.map((q, idx) => {
      const subtotal = respostas[q.tipo]?.subtotal || 0;
      const e = (
        <div
          key={q.tipo}
          title={q.tipo + " " + subtotal.toFixed(0)}
          className="w-full h-full absolute"
          style={{
            transformOrigin: "50% 50%",
            transform: `rotate(${45 * idx}deg)`,
          }}
        >
          <div
            className="w-full h-full rounded-[50%] absolute transition-transform duration-[1s] ease-in-out"
            style={{
              backgroundColor: q.cor,
              clipPath: "polygon(50% 50%, 100% 0, 100% 50%)",
              transformOrigin: "50% 50%",
              transform: `scale(${subtotal / 30})`,
            }}
          ></div>
          <div
            className="w-full h-full rounded-[50%] relative text-xs"
            style={{
              color: q.cor,
              transformOrigin: "50% 50%",
              transform: `rotate(70deg) scale(1.6)`,
            }}
          >
            <div
              className="text-xs"
              style={{
                color: q.cor,
                transformOrigin: "50% 50%",
                transform: `rotate(${-70 + -45 * idx}deg) scale(0.7) translateX(35%)`,
              }}
            >
              {q.tipo}
            </div>
          </div>
        </div>
      );
      return e;
    });
  }, [respostas]);
  const marcas = useMemo(() => {
    const elements: React.ReactElement[] = [];
    for (let i = 5; i <= 30; i += 5) {
      const e = (
        <div
          key={i}
          className={
            "w-full h-full rounded-[50%] absolute bg-transparent border-[0.5px] border-solid " +
            (i % 10 === 0 ? "border-gray-400" : "border-gray-200")
          }
          style={{
            transformOrigin: "50% 50%",
            transform: `scale(${i / 30})`,
          }}
        />
      );
      elements.push(e);
    }
    return elements;
  }, []);
  return (
    <div>
      <div className="text-orange-600 w-full h-[800px]">
        <div className="pl-[100px] pt-[400px] text-5xl">
          Roda da Vida
        </div>
      </div>
      <div className="p-10 fixed right-[80px] bottom-[10px] z-10">
        <div className="relative w-[300px] rounded-[50%] h-[300px] my-[30px] mx-auto">
          {partes}
          {marcas}
        </div>
      </div>
    </div>
  );
}
