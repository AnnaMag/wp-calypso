/**
 * External dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import DataSynchronization from './data-synchronization';
import DisconnectSiteLink from './disconnect-site-link';
import DocumentHead from 'components/data/document-head';
import HeaderCake from 'components/header-cake';
import Main from 'components/main';
import SiteOwnership from './site-ownership';

class ManageConnection extends Component {

	render() {
		const { translate } = this.props;

		return (
			<Main className="manage-connection site-settings">
				<DocumentHead title={ translate( 'Site Settings' ) } />

				<HeaderCake onClick={ this.redirectToGeneral }>
					{ translate( 'Manage Connection' ) }
				</HeaderCake>

				<SiteOwnership />
				<DataSynchronization />
				<DisconnectSiteLink />
			</Main>
		);
	}
}

export default connect(
	( ) => {}
)( localize( ManageConnection ) );
