import React from "react";
import files from '../proof.pdf'
import '../styles/state.css'

export const Proof = () => {
    return (
        <div style={{ backgroundColor: '#1c1c1c', height: '100vh', width: '100%', overflowY: 'hidden' }}>
            <div className="container">
                <object data={files} type="application/pdf" className="internal">
                    <p>Please access the report here: <a href="https://www.canva.com/design/DAFjNTV2yLE/8TYPC6nJXJuK5-f67ouPYw/view?utm_content=DAFjNTV2yLE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"></a>.</p>
                </object>
            </div>
            <div className='mobile'>
                <p>Please access the report <a href="https://www.canva.com/design/DAFjNTV2yLE/8TYPC6nJXJuK5-f67ouPYw/view?utm_content=DAFjNTV2yLE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">here</a>.</p>
            </div>

        </div>


    );
}
