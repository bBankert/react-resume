import React from 'react';

const Projects = props => (
    <div id="projects" className="my-4">
        <div className="card">
            <div className="card-header bg-info">
                Personal Projects
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h5>UML Editor</h5>
                        <ul>
                            <li>Developed a client side UML editor with Angular and Typescript</li>
                            <li>Worked with team members in a Agile methodology</li>
                            <li>Write Unit Tests for regression testing with Jenkins CI/CD</li>
                            <li>Use GitHub for source control</li>
                            <a href="https://gwca-uml.firebaseapp.com"><li>Live Link</li></a>
                        </ul>
                    </li>
                    <li className="list-group-item">
                        <h5>Resume Webpage</h5>
                        <ul>
                            <li>Use Javascript to develop functions for elements and the sidebar</li>
                            <li>Use Photoshop to create images for the background</li>
                            <li>Made the webpage mobile responsive</li>
                            <a href="https://bbankert.github.io"><li>Live Link</li></a>
                        </ul>
                    </li>
                    <li className="list-group-item">
                    <h5>ASP.NET with C#</h5>
                        <ul>
                            <li>Created a basic web application through .NET</li>
                            <li>Developed a 'login' web application that allows for users to see and modify their information on the SQLite DB.
                                <ul>
                                    <li>There is also an 'admin' that can see all of the other 'accounts'</li>
                                </ul>
                            </li>
                            <li>Create a 'Recipe Book' application in ASP.NET MVC
                                <ul>
                                    <li>Used session data to be able to keep the user data globally accessible for the duration of the application</li>
                                    <li>Made a code-first database that holds multiple many-to-many relationships</li>
                                </ul>
                            </li>
                            <a href="https://github.com/bBankert/.NET/"><li>Link to other .NET projects</li></a>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default  Projects;