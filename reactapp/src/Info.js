import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(()=> {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('clean up');
            console.log(name);
        };
    }, [name]);

    const onCangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onCangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>name:</b> {name}
            </div>
            <div>
                <b>nickname:</b> {nickname}
            </div>
        </div>
    )

}

export default Info;