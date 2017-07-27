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

class DisconnectReasonsMenu extends Component {
	render() {
		return (
			<div className="disconnect-site__drop-down">
				<SelectDropdown
					selectedText="Jetpack is missing a feature"
					compact={ false }
				>
				<DropdownItem selected={ true } >reason 2</DropdownItem>
				<DropdownItem > reason 3</DropdownItem>
				<DropdownItem >reason 4</DropdownItem>
				<DropdownItem >reason 5</DropdownItem>
				<DropdownItem >Other</DropdownItem>
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
)( localize( DisconnectReasonsMenu ) );
