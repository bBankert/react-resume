import React from 'react';

const Work = props => (
    <div id="professional" className="my-4">
         <div className="card">
            <div className="card-header bg-info">
                Professional Experience
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h5>Full Stack Developer : Select Medical</h5>
                        <ul>
                            <li>Developed and enhance web applications written in ASP.NET and Sitecore</li>
                            <li>Write and Enhance the API for form submissions</li>
                            <li>Write SQL queries for views and stored procdures for the API to execute</li>
                            <li>Worked with team members in a Agile methodology</li>
                            <li>Write Powershell powershell for automation of back-end tasks in Sitecore</li>
                            <li>Write SSIS Packages automate ETL tasks</li>
                            <li>Use TFS for source control</li>
                        </ul>
                    </li>
                    <li className="list-group-item">
                        <h5>Web Developer Intern : Highmark Health Solutions</h5>
                        <ul>
                            <li>Developed a reference site for the company's intranet using Angular</li>
                            <li>Adjusted the site to be mobile responsive and 508 compliant with Bootstrap</li>
                            <li>Developed using an agile methodology</li>
                            <li>Created documentation for future developers to reference for both the site and Angular</li>
                            <li>Assisted other interns with Angular questions</li>
                        </ul>
                    </li>
                    <li className="list-group-item">
                        <h5>IT Helpdesk Intern : University of Pennsylvania</h5>
                        <ul>
                            <li>Acted as point of contact for all techincal issues both students and faculty had</li>
                            <li>Assisted higher level IT members provide solutions for more complex issues</li>
                            <li>Imaged and deployed hardware for new faculty members</li>
                            <li>Created documentation for software usage that met the college's standards</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Work;