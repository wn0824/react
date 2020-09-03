import React from 'react';
import styles from './CSSModule.module.css'

const CSSModule = () => {
    return (
        <div className={styles.wrapper}>
            Hello, im <span className='something'>CSS module!</span>
        </div>
    );
};

export default CSSModule;