/**
 * External dependencies
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import page from 'page';
/**
 * Internal dependencies
 */
import { getSelectedSiteId, getSelectedSiteSlug } from 'state/ui/selectors';
import { isJetpackSite } from 'state/sites/selectors';
import { isSiteAutomatedTransfer } from 'state/selectors';

export function RedirectToGeneral( ComponentToRender, redirectLink ) {
	return class extends Component {
		static propTypes = {
			minimumVersion: PropTypes.string,
			pluginId: PropTypes.string.isRequired,
			siteId: PropTypes.number,
			// Connected props
			siteSlug: PropTypes.string,
		}

		componentDidMount() {
			this.verifySiteIsJetpack();
		}

		componentDidUpdate() {
			this.verifySiteIsJetpack();
		}

		verifySiteIsJetpack() {
			if ( this.props.siteIsJetpack === false || this.props.siteIsAtomic ) {
				this.redirectToGeneral();
			}
		}

		redirectToGeneral = () => {
			const {
				siteId,
				siteSlug
			} = this.props;

			if ( ! siteId ) {
				return null;
			}

			const url = redirectLink ? redirectLink : '/settings/general/';
			page( url + siteSlug );
		};
		render() {
			return <ComponentToRender />;
		}
	};
}

export default connect(
	( state ) => {
		const siteId = getSelectedSiteId( state );

		return {
			siteIsAtomic: isSiteAutomatedTransfer( state, siteId ),
			siteIsJetpack: isJetpackSite( state, siteId ),
			siteSlug: getSelectedSiteSlug( state ),
		};
	}
)( RedirectToGeneral );
