import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { faChartLine, faEnvelope, faUser, faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';

@inject("CRMStore")
@observer
class Badges extends Component {
    render() {
        let CRMStore = this.props.CRMStore
        return (
            <div className="badges">
                <div className="badge newClients">
                    <FontAwesomeIcon className="icon" icon={faChartLine} />
                    <span className="number">{CRMStore.newClients.numClients}</span>
                    <span className="explanation">New {CRMStore.newClients.month} Clients</span>
                </div>
                <div className="badge emailsSent">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    <span className="number">{CRMStore.emailsSent}</span>
                    <span className="explanation">Emails Sent</span>
                </div>
                <div className="badge outstandingClients">
                    <FontAwesomeIcon className="icon" icon={faUser} />
                    <span className="number">{CRMStore.outstandingClients}</span>
                    <span className="explanation">Outstanding Clients</span>
                </div>
                <div className="badge hottestCountry">
                    <FontAwesomeIcon className="icon" icon={faGlobeAfrica} />
                    <span className="number">{CRMStore.hottestCountry ? CRMStore.hottestCountry.country : null}</span>
                    <span className="explanation">Hottest Country</span>
                </div>
            </div>
        );
    }
}

export default Badges;