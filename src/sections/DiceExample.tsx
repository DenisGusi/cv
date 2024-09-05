import { useState } from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-dark.css";

const diceButtonClasses =
  "flex-auto bg-zinc-800 border border-zinc-700 text-white font-bold text-sm px-2 py-2 rounded-md hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500";

hljs.registerLanguage("typescript", typescript);

const highlightedCode = hljs.highlight(
  `const [dicePool, setDicePool] = useState<{ [key: string]: number }>({});
const [results, setResults] = useState<{ notation: string; rolls: { [key: string]: number[] } }[]>([]);

const handleDiceClick = (diceType: string) => {
setDicePool((prevDicePool) => {
    const newDicePool = { ...prevDicePool };
    if (newDicePool[diceType]) {
    newDicePool[diceType] += 1;
    } else {
    newDicePool[diceType] = 1;
    }
    return newDicePool;
});
};

const rollDice = () => {
const notation = renderDiceNotation();
const rolls = Object.entries(dicePool).reduce((acc, [diceType, count]) => {
    acc[diceType] = Array.from(
    { length: count },
    () => Math.floor(Math.random() * parseInt(diceType)) + 1
    );
    return acc;
}, {} as { [key: string]: number[] });
setResults((prevResults) => [...prevResults, { notation, rolls }]);
};

const renderDiceNotation = () => {
return Object.entries(dicePool)
    .map(([diceType, count]) => \`\${count}d\${diceType}\`)
    .join(" + ");
};

const handleClearClick = () => {
setDicePool({});
};`,
  { language: "typescript" }
).value;

export default function DiceExample() {
  const [dicePool, setDicePool] = useState<{ [key: string]: number }>({});
  const [results, setResults] = useState<
    { notation: string; rolls: { [key: string]: number[] } }[]
  >([]);

  const handleDiceClick = (diceType: string) => {
    setDicePool((prevDicePool) => {
      const newDicePool = { ...prevDicePool };
      if (newDicePool[diceType]) {
        newDicePool[diceType] += 1;
      } else {
        newDicePool[diceType] = 1;
      }
      return newDicePool;
    });
  };

  const rollDice = () => {
    const notation = renderDiceNotation();
    const rolls = Object.entries(dicePool).reduce((acc, [diceType, count]) => {
      acc[diceType] = Array.from(
        { length: count },
        () => Math.floor(Math.random() * parseInt(diceType)) + 1
      );
      return acc;
    }, {} as { [key: string]: number[] });
    setResults((prevResults) => [...prevResults, { notation, rolls }]);
  };

  const renderDiceNotation = () => {
    return Object.entries(dicePool)
      .map(([diceType, count]) => `${count}d${diceType}`)
      .join(" + ");
  };

  const handleClearClick = () => {
    setDicePool({});
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pb-2 pt-2 sm:pt-60 lg:px-8 lg:pt-2">
      <div className="max-w-xl">
        <h2 className="text-lg font-semibold leading-8 tracking-tight text-zinc-300">
          Code Example
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          How about a tasting?
        </p>
      </div>
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <p className="text-white">
              A decent diceroller is essential for every virtual pen & paper game, which is why I wrote a small one here. Also very useful if you don't have physical dice at hand. On the right you can also see how the thing works under the hood and how I write Typescript, for example. 
              </p>
              <br />
              <p className="text-white">
              Of course, I can immediately see a few things that could be improved or added: I could make the results erasable, give the possibility to add a modifier for the dice notation (it is important in many pen & paper rule systems that you can add e.g. flat +2 to a roll) or also that the dice rolls are stored in an account via an API. But a small user administration would have to be designed for this first. A bit much for a CV in my opinion.
              </p>
              <div className="rounded-xl bg-zinc-800 max-w-5xl min-h-96 flex flex-col mt-16">
                <div className="bg-zinc-800 flex-grow">
                  <div className="overflow-auto overscroll-auto p-2 max-h-64">
                    {results.length > 0 && (
                      <div className="flex flex-col gap-2">
                        {results.map((result, index) => (
                          <div
                            key={index}
                            className="bg-zinc-700 p-2 rounded-md text-white"
                          >
                            <p className="font-bold">{result.notation}:</p>
                            <ul>
                              {Object.entries(result.rolls).map(
                                ([diceType, rolls]) => (
                                  <li key={diceType}>
                                    d{diceType}: {rolls.join(", ")}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-zinc-700 h-12">
                  <p className="text-white text-center pt-2">
                    {renderDiceNotation()}
                  </p>
                </div>
                <div className="bg-zinc-700 border-t bottom-0 min-h-10 flex flex-row p-2 gap-2">
                  <button
                    className={diceButtonClasses}
                    onClick={() => handleDiceClick("4")}
                  >
                    D4
                  </button>
                  <button
                    className={diceButtonClasses}
                    onClick={() => handleDiceClick("6")}
                  >
                    D6
                  </button>
                  <button
                    className={diceButtonClasses}
                    onClick={() => handleDiceClick("8")}
                  >
                    D8
                  </button>
                  <button
                    className={diceButtonClasses}
                    onClick={() => handleDiceClick("10")}
                  >
                    D10
                  </button>
                  <button
                    className={diceButtonClasses}
                    onClick={() => handleDiceClick("12")}
                  >
                    D12
                  </button>
                  <button
                    className={diceButtonClasses}
                    onClick={() => handleDiceClick("20")}
                  >
                    D20
                  </button>
                  <button
                    className={diceButtonClasses}
                    onClick={() => handleDiceClick("100")}
                  >
                    D100
                  </button>
                  <button
                    className="flex-auto bg-red-500 border border-zinc-700 text-white font-bold text-lg px-4 py-2 rounded-md hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                    onClick={() => handleClearClick()}
                  >
                    Clear
                  </button>
                  <button
                    className="flex-auto bg-green-500 border border-zinc-700 text-white font-bold text-lg px-4 py-2 rounded-md hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                    onClick={() => rollDice()}
                  >
                    Roll
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0">
            <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
              <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                <div className="overflow-hidden rounded-xl bg-zinc-800">
                  <div className="flex bg-zinc-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 ">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        DiceExample.tsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6 overflow-auto">
                    <pre className="hljs language-typescript">
                      <code
                        className="hljs language-typescript"
                        dangerouslySetInnerHTML={{ __html: highlightedCode }}
                      />
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
