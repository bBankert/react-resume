import React from  'react';
import Introduction from '../components/cards/introduction';
import Education from '../components/cards/education';
import Projects from '../components/cards/projects';
import Work from '../components/cards/work';

const Content = props => (
    <div className="offset-md-2 col-md-7 col-sm-12">
        <Introduction/>
        <Education/>
        <Projects/>
        <Work/>
    </div>
);

export default Content;