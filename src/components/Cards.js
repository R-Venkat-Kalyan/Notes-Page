import React from 'react';
import './Cards.css';


export default function Cards() {
    return (
        <div>
            <div className="container">
                {/* First three cards: Java, Python, OS */}
                <div className="card">
                    <div className="imgBx">
                        <i className="fab fa-java"></i>
                    </div>
                    <div className="contentBx">
                        <h2>Java Notes</h2>
                        <p>Basic aspects of Java programming with OOPs. Includes examples and exercises.</p>
                        <a href="https://online.fliphtml5.com/rhriu/pnak/" target="_blank" rel="noreferrer">View Notes</a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <i className="fab fa-python"></i>
                    </div>
                    <div className="contentBx">
                        <h2>Python Notes</h2>
                        <p>Basic Python programming. Includes syntax, libraries, and simple examples.</p>
                        <a href="https://github.com/R-Venkat-Kalyan/Notes/blob/master/Python%20Notes.txt" target="_blank" rel="noreferrer">View Notes</a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <i className="fas fa-cogs"></i>
                    </div>
                    <div className="contentBx">
                        <h2>OS Notes</h2>
                        <p>Basic concepts of Operating Systems. Covers foundational aspects and practical applications.</p>
                        <a href="https://online.fliphtml5.com/rhriu/gmja/" target="_blank" rel="noreferrer">View Notes</a>
                    </div>
                </div>

                {/* Remaining cards: HTML, JavaScript, React, Git, Spring Boot */}
                <div className="card">
                    <div className="imgBx">
                        <i className="fab fa-html5"></i>
                    </div>
                    <div className="contentBx">
                        <h2>HTML Notes</h2>
                        <p>Basic HTML concepts. Includes elements, attributes, and structure.</p>
                        <a href="https://online.fliphtml5.com/rhriu/baui/" target="_blank" rel="noreferrer">View Notes</a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <i className="fab fa-js"></i>
                    </div>
                    <div className="contentBx">
                        <h2>JavaScript Notes</h2>
                        <p>Basic JavaScript concepts. Includes syntax, functions, and events.</p>
                        <a href="https://online.fliphtml5.com/rhriu/vaxm/" target="_blank" rel="noreferrer">View Notes</a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <i className="fab fa-react"></i>
                    </div>
                    <div className="contentBx">
                        <h2>React Notes</h2>
                        <p>Basic concepts of React. Includes components, state, and props.</p>
                        <a href="https://online.fliphtml5.com/rhriu/lfhu/" target="_blank" rel="noreferrer">View Notes</a>
                    </div>
                </div>

                {/* Next three cards: DBMS, MongoDB, MySQL */}
                <div className="card">
                    <div className="imgBx">
                        <i class="fa-solid fa-database"></i>
                    </div>
                    <div className="contentBx">
                        <h2>DBMS Notes</h2>
                        <p>Foundational aspects of DBMS. Includes basic queries and theory.</p>
                        <a href="https://online.fliphtml5.com/rhriu/hnda/" target="_blank" rel="noreferrer">View Notes</a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <img src="mongodb.png" alt="MongoDB Icon" className="custom-icon" />
                    </div>
                    <div className="contentBx">
                        <h2>MongoDB Notes</h2>
                        <p>Basic MongoDB concepts. Includes CRUD operations and data modeling.</p>
                        <a href="https://online.fliphtml5.com/rhriu/csdz/" target="_blank" rel="noreferrer">View Notes</a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <img src="mysql.png" alt="MySQL Icon" className="custom-icon" />
                    </div>
                    <div className="contentBx">
                        <h2>MySQL Notes</h2>
                        <p>Basic MySQL concepts. Includes queries, database design, and transactions.</p>
                        <a href="https://online.fliphtml5.com/rhriu/qvfy/" target="_blank" rel="noreferrer">View Notes</a>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx">
                        <i className="fas fa-code-branch"></i>
                    </div>
                    <div className="contentBx">
                        <h2>Git Notes</h2>
                        <p>Basic Git & GitHub concepts. Includes commands, branching, and merging.</p>
                        <a href="https://online.fliphtml5.com/rhriu/czyg/" target="_blank" rel="noreferrer">View Notes</a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <i className="fas fa-laptop-code"></i>
                    </div>
                    <div className="contentBx">
                        <h2>Spring Boot Notes</h2>
                        <p>Basic aspects of Spring Boot. Includes setup, configuration, and simple applications.</p>
                        <a href="https://online.fliphtml5.com/rhriu/dwnc/" target="_blank" rel="noreferrer">View Notes</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
