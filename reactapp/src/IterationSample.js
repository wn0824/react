import React, {useState} from 'react';

const Iteration = () => {
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'},
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 ID

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames =names.concat({
            id: nextId, //nextId값을 id로 설정하고
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const nameList = names.map(names => <li key={names.id} onDoubleClick={() => onRemove(names.id)}>{names.text}</li>);
    return (
        <>
        <input value={inputText} onChange={onChange}/>
        <button onClick={onClick}>add</button>
        <ul>{nameList}</ul>
        </>
    );
};

export default Iteration;