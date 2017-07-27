/**
 * External dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import ButtonGroup from 'components/button-group';
import Card from 'components/card';
import DisconnectJetpackButton from 'my-sites/plugins/disconnect-jetpack/disconnect-jetpack-button';
import { get } from 'lodash';
import { getSelectedSiteSlug } from 'state/ui/selectors';

class DisconnectSiteButtons extends Component {
	onDisconnect = () => {
	}
	jetpackDisconnectOption() {
		const { site, siteIsJetpack, translate } = this.props;
		const isAutomatedTransfer = get( site, 'options.is_automated_transfer', false );

		if ( ! siteIsJetpack || isAutomatedTransfer ) {
			return null;
		}

		const disconnectText = translate( 'Disconnect Site', {
			context: 'Jetpack: Action user takes to disconnect Jetpack site from .com link in general site settings'
		} );

		return <DisconnectJetpackButton
				site={ site }
				text= { disconnectText }
				redirect= "/stats"
				linkDisplay={ false } />;
	}
	render() {
		const {
			translate,
			siteSlug
		} = this.props;
		return (
			<Card>
					<ButtonGroup>
						<Button primary href={ '/plans/' + siteSlug } >
									{ translate( 'Explore Plans' ) }</Button>
						<Button scary onClick={ this.onDisconnect } >
									{ translate( 'Disconnect Anyway' ) } </Button>
					</ButtonGroup>
			</Card>
		);
	}
}

export default connect(
	( state ) => ( {
		siteSlug: getSelectedSiteSlug( state ),
	} )
)( localize( DisconnectSiteButtons ) );
