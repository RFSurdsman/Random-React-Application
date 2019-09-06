import React from 'react';

type Counter = [number, React.Dispatch<React.SetStateAction<number>>];
type Stringer = [string, React.Dispatch<React.SetStateAction<string>>];

export const CounterContext = React.createContext<Counter>([0, () => { }]);
export const TextContext = React.createContext<Stringer>(['', () => { }]);

export const ContextAPIProvider: React.FC = (props) => {
    const [counter, setCounter] = React.useState<number>(0);
    const [string, setString] = React.useState<string>('Default String');

    return (
        <TextContext.Provider value={[string, setString]}>
            <CounterContext.Provider value={[counter, setCounter]}>
                {props.children}
            </CounterContext.Provider>
        </TextContext.Provider>
    );
}
