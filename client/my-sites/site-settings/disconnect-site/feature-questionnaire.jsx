/**
 * External dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import { getCurrentUser } from 'state/current-user/selectors';
import { getSelectedSiteId } from 'state/ui/selectors';
import { getSelectedSiteSlug } from 'state/ui/selectors';
import { isJetpackSite } from 'state/sites/selectors';
import {
	isJetpackSiteConnected,
	isJetpackSiteInDevelopmentMode,
	isJetpackUserMaster,
} from 'state/selectors';

import Card from 'components/card';

import FeaturesMenu from './features-menu';
import DisconnectReasonsMenu from './disconnect-reasons-menu';
import DisconnectSiteButtons from './disconnect-site-buttons';
import OfferBanner from './offer-banner';

class FeatureQuestionnaire extends Component {
	render() {
		const {
			translate,
			siteSlug
				} = this.props;

		const textShare = translate( 'Would you mind sharing why you want to' +
		' disconnect ' ) + `${ siteSlug }` + translate( ' from Wordpress.com ' );
		const textInquire = translate( 'What feature are you looking for?' );

		return (
				<div className="disconnect-site__main" >
					<Card style = { { margin: 'auto' } } >
						<div className="disconnect-site__question">{ textShare }</div>
						<DisconnectReasonsMenu />
						<div className="disconnect-site__question"> { textInquire }</div>
						<FeaturesMenu />
					</Card>
						<OfferBanner />
						<DisconnectSiteButtons />
			</div>
	);
	}
}

export default connect(
	( state ) => {
		const siteId = getSelectedSiteId( state );

		return {
			currentUser: getCurrentUser( state ),
			siteId,
			siteIsConnected: isJetpackSiteConnected( state, siteId ),
			siteIsJetpack: isJetpackSite( state, siteId ),
			siteIsInDevMode: isJetpackSiteInDevelopmentMode( state, siteId ),
			userIsMaster: isJetpackUserMaster( state, siteId ),
			siteSlug: getSelectedSiteSlug( state ),
		};
	}
)( localize( FeatureQuestionnaire ) );
