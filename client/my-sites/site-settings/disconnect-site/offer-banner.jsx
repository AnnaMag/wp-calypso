/**
 * External dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */

import Banner from './components/banner';
import { PLAN_PERSONAL } from 'lib/plans/constants';
import { getSelectedSiteSlug } from 'state/ui/selectors';

class OfferBanner extends Component {
	render() {
		const { translate } = this.props;
		const style = {
			backgroundColor: '#e6e6e6 ',
			margin: 'auto'
		};
		return (
			<Banner
				disableHref
				plan={ PLAN_PERSONAL }
				title={ translate( 'Jetpack\'s Peronal Plan offers a suite' +
					'of security services, including daily site backups' +
					'and one-click restores. For only €3.50/month.' ) }
					inlineStyle = { style }
				/>
		);
	}
}

export default connect(
	( state ) => ( {
		siteSlug: getSelectedSiteSlug( state ),
	} )
)( localize( OfferBanner ) );
