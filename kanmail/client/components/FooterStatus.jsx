import React, { Component } from 'react';
import PropTypes from 'prop-types';

import requestStore from 'stores/request.js';
import { subscribe } from 'stores/base.jsx';


@subscribe(requestStore)
export default class FooterStatus extends Component {
    static propTypes = {
        fetchRequests: PropTypes.array.isRequired,
        pushRequests: PropTypes.array.isRequired,
        pendingPushRequests: PropTypes.array.isRequired,
    }

    render() {
        const fetchCount = this.props.fetchRequests.length;
        const pushCount = this.props.pushRequests.length;
        const pendingCount = this.props.pendingPushRequests.length;

        return (
            <div id="footer-status">
                <span className={fetchCount > 0 ? 'green' : ''}>
                    <i className="fa fa-arrow-down"></i>
                    {fetchCount}
                </span>
                <span className={pushCount > 0 ? 'red' : ''}>
                    <i className="fa fa-arrow-up"></i>
                    {pushCount}
                </span>
                <span className={pendingCount > 0 ? 'yellow' : ''}>
                    <i className="fa fa-clock-o"></i>
                    {pendingCount}
                </span>
            </div>
        );
    }
}
