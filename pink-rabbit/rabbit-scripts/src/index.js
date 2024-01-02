import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.less'
// import './index.css'
// import styles from './index.module.css'
import styles from './index.module.less'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div className={styles.app}>
    <div className="test">Hello, world!</div>
</div>);