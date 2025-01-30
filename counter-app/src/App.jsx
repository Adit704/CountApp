import React from 'react';
import CounterIntent from './intent/CounterIntent';
import CounterModel from './model/CounterModel';
import CounterView from './view/CounterView';

const intent = new CounterIntent();
const model = new CounterModel(intent);

function App() {
    return <CounterView model={model} intent={intent} />;
}

export default App;
