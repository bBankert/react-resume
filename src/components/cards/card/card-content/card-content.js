
const CardContent = props => {

    return(
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <h4>{props.content.Subheading}</h4>
                <ul>
                    {props.content.Details.map((detail,idx) => 
                        <li key={props.content.Subheading + '-detail-'+idx}>{detail}</li>
                    )}
                    {props.content.Link ? <a href={props.content.Link}><li>Live Link</li></a> : ""}
                </ul>
            </li>    
        </ul>
    );


};

export default CardContent;