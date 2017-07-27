/**
 * External dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import SelectDropdown from 'components/select-dropdown';
import DropdownItem from 'components/select-dropdown/item';

import { isJetpackSite } from 'state/sites/selectors';
import { getSelectedSiteId, getSelectedSiteSlug } from 'state/ui/selectors';

class FeaturesMenu extends Component {
	render() {
		return (
			<div className="disconnect-site__drop-down" >
				<SelectDropdown
					selectedText="Backup"
					compact={ false }
					>
					<DropdownItem selected={ true } >Backup</DropdownItem>
					<DropdownItem > feature 2</DropdownItem>
					<DropdownItem > feature 3 </DropdownItem>
				</SelectDropdown>
			</div>
		);
	}
}

export default connect(
	( state ) => ( {
		siteIsJetpack: isJetpackSite( state, getSelectedSiteId( state ) ),
		siteSlug: getSelectedSiteSlug( state ),
	} )
)( localize( FeaturesMenu ) );
