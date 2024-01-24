import { atom, useAtom, createStore } from "jotai";
import { Questionario } from "./questionario";

export const store = createStore();

export type Respostas = {
  [tipo: string]: {
    respostas: { [pergunta: string]: number };
    subtotal: number;
  };
};

const respostaAtom = atom({
  //   "Saúde Física": {
  //     respostas: {
  //       "De forma geral, me sinto em boa forma física comparando a outras pessoas de minha faixa etária.": 1,
  //       "Pratico pelo menos 30 minutos de atividade física, 3 vezes por semana.": 0,
  //       "Minha dieta é balanceada e completa, incluindo uma grande quantidade de fibras, frutas e vegetais.": 1,
  //       "Procuro manter um peso adequado para minha altura e faixa etária.": 1,
  //       "Não fumo.": 3,
  //       "Não bebo ou bebo socialmente.": 3,
  //       "Durmo o suficiente para reparar meu cansaço.": 2,
  //       "Consulto um médico clínico e realizo exames preventivos pelo menos uma vez ao ano.": 1,
  //       "Uso cinto de segurança e respeito os limites de velocidade quando estou dirigindo.": 1,
  //       "Tomo cuidados apropriados para a segurança pessoal dentro da minha casa.": 2,
  //     },
  //     subtotal: 15,
  //   },
  //   "Saúde Emocional": {
  //     respostas: {
  //       "Estou satisfeito(a) comigo mesmo.": 2,
  //       "Encontro maneiras adequadas de expressar minha emoção.": 1,
  //       "Procuro me comunicar de forma verdadeira e direta com as outras pessoas.": 2,
  //       "Sou uma pessoa bem humorada.": 2,
  //       "Gosto de estar sozinho(a) de vez em quando.": 3,
  //       "Peço ajuda quando necessário.": 1,
  //       "Sou capaz de dizer NÂO sem me sentir culpado(a).": 2,
  //       "Sei pedir desculpas quando erro.": 3,
  //       "Costumo elogiar os feitos positivos de outras pessoas.": 1,
  //       "Sou capaz de relaxar sem o uso de drogas ou medicamentos.": 2,
  //     },
  //     subtotal: 19,
  //   },
  //   "Saúde Familiar": {
  //     respostas: {
  //       "Estou satisfeito(a) com o tipo de relação que estabeleço com a minha família (pais, filhos, etc). Se não tenho, estou satisfeito(a) sozinho.": 1,
  //       "Tenho um parceiro(a) e estou satisfeito(a) com a nossa relação.": 1,
  //       "Diariamente dedico parte do meu tempo à minha família.": 1,
  //       "Gosto de conviver com a minha família nos finais de semana.": 2,
  //       "Ajudo minha família (pais, irmãos, tios e filhos) em termos financeiros quando eles precisam.": 1,
  //       "Ajudo minha família afetivamente (por intermédio da minha presença e conselhos), sempre que eles precisam.": 1,
  //       "Gosto de organizar encontros e festas de aniversário com a família para incentivar a união familiar.": 1,
  //       "Convivo com minha família o tempo que julgo necessário.": 1,
  //       "Nas férias, minha família costuma se reunir para usufruir de bons momentos juntos.": 1,
  //       "Já cuidei, ou cuidarei dos meus pais em sua velhice, com boa vontade e disposição.": 0,
  //     },
  //     subtotal: 10,
  //   },
  //   "Saúde Social": {
  //     respostas: {
  //       "Sou capaz de desenvolver relacionamentos próximos e estáveis.": 1,
  //       "Com meus amigos, costumamos realizar ações sociais voluntárias em prol de pessoas necessitadas.": 3,
  //       "Tenho um grupo de amigos(as) e mantenho uma relação próxima e frequente com eles/elas (festas de aniversários, saídas, encontros e passeios).": 2,
  //       "Estou satisfeito(a) com o tipo de relação que mantenho com meus colegas e superiores no trabalho.": 1,
  //       "Tenhopessoascomquemdesabafarquandoestoutensaouansiosa.": 2,
  //       "Tenho uma interação ativa com meus amigos e familiares no dia a dia.": 1,
  //       "Meu dia a dia é uma fonte de prazer para mim, ao lado das pessoas com as quais convivo.": 2,
  //       "Realizo atividades de lazer junto com amigos no domingo e jogos diversos prazerosos.": 1,
  //       "Exerço um papel social dentro da comunidade onde vivo.": 2,
  //       "Procuro, sempre que possível, estar em contato com a natureza.": 2,
  //     },
  //     subtotal: 17,
  //   },
  //   "Saúde Financeira": {
  //     respostas: {
  //       "Estou satisfeito(a) com meu salário e/ou com o que eu ganho pelo meu trabalho.": 3,
  //       "Consigo organizar minha vida financeira e mantenho minhas contas em dia.": 2,
  //       "Procuro guardar parte do que ganho na poupança ou em outro investimento para quando eu precisar de uma verba extra.": 1,
  //       "Não costumo pegar dinheiro emprestado no Banco, pois os juros são altos.": 3,
  //       "Faço prestações para comprar objetos de valor quando tenho previsão de poder pagá-las.": 2,
  //       "Não gasto em supérfluos quando não tenho dinheiro sobrando.": 3,
  //       "Costumo comprar à vista, não faço prestações, nem cheques pré- datados para compras do dia a dia.": 1,
  //       "Quando recebo algum dinheiro extra, procuro guardar uma parte na poupança ou investimento.": 1,
  //       "Sou capaz de dizer não empresto para algum amigo ou parente quando não tenho condições de arcar com os valores.": 2,
  //       "Não costumo entrar no saldo negativo do banco.": 3,
  //     },
  //     subtotal: 21,
  //   },
  //   "Saúde Intelectual": {
  //     respostas: {
  //       "Mantenho um contínuo crescimento na área intelectual.": 3,
  //       "Concentro-me facilmente.": 1,
  //       "Uso a criatividade em todas as áreas de minha vida.": 2,
  //       "Gosto de ler e a leitura faz parte do meu dia a dia.": 1,
  //       "Desenvolvo pelo menos uma atividade (hobbie) que eu gosto, mas não me sinto obrigada a fazer.": 2,
  //       "Gosto de me expressar por meio da dança, arte, música e encontro tempo para fazer isso.": 2,
  //       "Sou curioso(a) e novidades são uma fonte de motivação para mim.": 3,
  //       "Interesso-me por diversos assuntos relacionados à minha vida profissional.": 3,
  //       "Participo espontaneamente de grupos de estudos, palestras e debates.": 3,
  //       "Gosto de partilhar conhecimentos e ouvir outros pontos de vista a respeito de assuntos que me interessam.": 3,
  //     },
  //     subtotal: 23,
  //   },
  //   "Saúde Profissional": {
  //     respostas: {
  //       "Gosto do meu trabalho.": 3,
  //       "Estou satisfeito(a) com o tempo que meu trabalho/carreira requer na minha vida.": 3,
  //       "Minha carga de atividade profissional é sempre planejada.": 1,
  //       "Sinto que completei todas as tarefas do dia quando saio do meu emprego.": 1,
  //       "Procuro aprender com os erros.": 3,
  //       "Estou satisfeito(a) com a minha habilidade de tomar decisões.": 2,
  //       "Considero-me organizado(a).": 0,
  //       "Meu trabalho é recompensador para mim.": 3,
  //       "Estou orgulhoso(a) de minhas conquistas profissionais.": 3,
  //       "Tenho objetivos e planos para a minha carreira e pós-carreira.      ": 1,
  //     },
  //     subtotal: 20,
  //   },
  //   "Saúde Espiritual": {
  //     respostas: {
  //       "Considero-me uma pessoa feliz.": 3,
  //       "Estou em paz comigo mesmo(a).": 3,
  //       "Estou satisfeito(a) com minha vida espiritual.": 3,
  //       "Sinto-me equilibrado(a), guiada por meus valores pessoais.": 2,
  //       "Proponho objetivos realistas para a minha vida.": 1,
  //       "Estou satisfeito(a) com o progresso dos meus objetivos.": 1,
  //       "Me conecto com uma força maior do que eu que tem um significado pra mim.": 3,
  //       "Sou tolerante com as crenças e valores dos outros.": 2,
  //       "Gosto de praticar algum tipo de disciplina espiritual e sinto a presença de alguma “força” que guia minha passagem pela vida.": 3,
  //       "Busco realizar atividades de caráter voluntário e isto me faz um bem espiritual.": 3,
  //     },
  //     subtotal: 24,
  //   },
} as Respostas);

export function useRespostaSubtotal(q: Questionario) {
  const [respostas] = useAtom(respostaAtom);
  return respostas[q.tipo]?.subtotal || 0;
}

export function useRespostas(q: Questionario, p: string) {
  const [respostas, setResposta] = useAtom(respostaAtom);
  const resposta = respostas[q.tipo]?.respostas?.[p];
  const setter = (nresposta: number) => {
    if (typeof nresposta !== "number") return;
    if (nresposta < 0 || nresposta > 3) return;
    setResposta((old) => {
      const next = {
        ...old,
        [q.tipo]: {
          ...(old[q.tipo] || {}),
          respostas: {
            ...(old[q.tipo]?.respostas || {}),
            [p]: nresposta,
          },
        },
      };
      next[q.tipo]["subtotal"] = Object.values(next[q.tipo].respostas).reduce(
        (a, b) => a + b,
        0,
      );
      console.log(next);
      return next;
    });
  };
  return [typeof resposta === "number" ? resposta : "", setter] as const;
}

export function useTodasRespostas() {
  const [respostas] = useAtom(respostaAtom);
  return respostas;
}
