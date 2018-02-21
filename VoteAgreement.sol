pragma solidity ^0.4.16;

contract VoteAgreement {

	address public DD;
	address public DR;

	struct accused {
		address name;
		bool isDD
		bool notify;
		bool settleUp;
		bool isTerminated;
	}
	
	struct accuser {
		address name;
		bool isDD;
		bool isTerminated;
	}

	function VoteAgreement(address _accused, address _accuser) public {
		accused = _accused;
		accuser = _accuser;
		
	}

	// 1. Notice Requirement. Failure to Notify. 

	function failureToNotify() returns (bool){
		return getNotification();
	}
	function getNotification() returns (bool) {
		return accused.notify;
	}


	// 2. Mutual Indemnification.
	function mutualIndemnification() returns (bool) {
		return accused.settleUp;
	}

	// 3. Termination for Material Breach. Termination on Notice. Termination for Insolvency.

	function termination() returns (bool) {
		if(accused.isTerminated && accuser.isTerminated) {
			return true;
		}
		else {
			return false;
		}
	}

	// 4. Publications. Providing history of publications. Publication after End of Research

	function publication() returns (bool) {
		return (checkPublicationHistory(accuser) && checkPublicationNos(accused));
	}
	
	//5. Intellectual Property
	
	function intellectualProperty returns (bool) {
		return (checkIPFromData(accused) && checkIPnumberInList(accuser));
	}

	//6. No warranty of Completeness. Confidentiality Obligations

	function warranty returns (bool) {
		return (checkOthersHaveData() && checkCompareAccusedAccuserData());
	}

	//7. Representations

	function representation returns (bool) {
		return (checkIfLicenseGrantedElsewhere() && checkIfDataShareIsBreakingLaw());
	}

	//8. Unauthorized Disclosure

	function unauthDisclose returns (bool) {
		return (checkIfOtherAccountsHaveAccessToData() && checkTheirPermissions());
	}

	//9. Use Of Data 
	
	function checkUseOfData returns (bool) {
		return (checkAppropriateSafeguardsUsed() && checkDisclosedPII);
	}

	//10. Waivers. Affirmative Waivers. Written Waivers 

	function checkWaivers returns (bool) {
		reuturn (checkIfTheBreachHappenedInPresenceOfWaiver());
	}


	function getTheResult returns (bool) {
		return ( 1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9 && 10);
	}	
}
