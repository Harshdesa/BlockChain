pragma solidity ^0.4.16;
  
contract ContractFactory {
	address owner;
	bytes32 name;
	address[] dataShareContracts;
	bytes32[] Names;
	mapping (address => address[]) public contracts;	


	event NewContract(address newContract);
		
	function ContractFactory() public payable{
		owner = msg.sender;
	}

	function createDataShareContract(address hospital, address patient, uint amount, address[] voters, bytes32 nameHospital, bytes32 namePatient) public payable returns (bool success) {
		address _newContract = new DataShareContract(hospital, patient, amount, voters, nameHospital, namePatient);
		dataShareContracts.push(_newContract);
		contracts[hospital].push(_newContract);
		contracts[patient].push(_newContract);
		NewContract(_newContract);
		return true;
	}

	//For testing purposes
	function getContract(address participant) public constant returns (address[]) {
		return contracts[participant];
	}

	function getLastContract(address participant) public constant returns (address) {
		uint lastIndex = contracts[participant].length-1;
		return contracts[participant][lastIndex];
	}	
	
	function getExistingContracts() public constant returns (address[]) {
		return dataShareContracts;
	}
	
	function getParticularExistingContract(uint index) public constant returns (address) {
		return dataShareContracts[index];
	}
	
	//For testing purposes
	function getParticularContract(address participant, uint index) public constant returns (address) {
		return contracts[participant][index];	
	}

	function removeContract(address contracT) public {
		for (uint i = 0; i < dataShareContracts.length; i++) {
			if(contracT == dataShareContracts[i]) {
				delete dataShareContracts[i];
			}
		}
	}
	
	function removeContracts(address contracT, address participant) public {
                for (uint i = 0; i < contracts[participant].length; i++) {
                        if(contracT == contracts[participant][i]) {
                                delete contracts[participant][i];
                        }
                }
        }

}

contract DataShareContract {
	address public patient;
	address public hospital;
	address[] public voters;
	uint public amount;
	uint public creationTime;
	address[] voteContracts;
	mapping (address => bytes32) public data;
	mapping (address => bytes32) public name;

	event PaymentSent(bool payment);
	event PaymentSet(bool payment);
	event DataSent(bool data);
	event ContractComplete(bool complete);
	event VoteContract(address voteContract);

	function DataShareContract(address _hospital, address _patient, uint _amount, address[] _voters, bytes32 _nameHospital, bytes32 _namePatient) public payable {
		hospital = _hospital;
		patient = _patient;
		amount = _amount;
		creationTime = now;
		name[hospital] = _nameHospital;
		name[patient] = _namePatient;
		for(uint i=0; i< _voters.length; i++)
		{
			voters.push(_voters[i]);
		}
	}

	modifier onlyBy(address _account)
	{
		require(msg.sender == _account);
		_;
	}
	
	function sendPayment() public payable {
		patient.transfer(amount);
	} 
	
	function fillMoney() payable {
	
	}

	function setPayment(uint _amount) public onlyBy(patient){
		amount = _amount;
		PaymentSet(true);
	}
	
	function sendData(bytes32 _data) public onlyBy(patient){
		data[hospital] = _data;
		DataSent(true);
	}
	
	//For testing purposes
        function getHospitalName() public constant returns (bytes32) {
                return name[hospital];
        }

	//For testing purposes
        function getPatientName() public constant returns (bytes32) {
                return name[patient];
        }

	//For testing purposes
	function getHospitalAddress() public constant returns (address) {
		return hospital;
	}

	//For testing purposes	
	function getPatientAddress() public constant returns (address) {
		return patient;	
	}

	//For testing purposes
	function getAmount() public constant returns (uint) {
        	return amount;
       	}

	//For testing purposes
	function getHospitalData() public onlyBy(hospital) constant returns (bytes32){
		return data[hospital]; 
	}
	
	function getVoterAddresses() public constant returns (address[]) {
                return voters;
        }

	
	//For testing purposes
	function getEthBalances(address entity) public constant returns (uint) {
                return entity.balance;
        }


	function getBreachDecision() public returns(bool success) {
	
		address accused = patient;		
		if(msg.sender == hospital)
		{
			accused = patient;
		}
		else if(msg.sender == patient){
			accused = hospital;
		}

		address _newContract = new BreachContract(creationTime, msg.sender, accused, voters, amount, data[hospital]);
                voteContracts.push(_newContract);
                VoteContract(_newContract);
                return true;
        }
	
	function getExistingContracts() public constant returns (address[]) {
                return voteContracts;
        }

	function getLastContract() public constant returns (address) {
                uint lastIndex = voteContracts.length-1;
                return voteContracts[lastIndex];
        }

	function destroyContract() public onlyBy(hospital) {  
		
		uint elapsedTime = 4;
		if(now > creationTime + elapsedTime * 1 minutes)
		{
			selfdestruct(hospital);
			ContractComplete(true);		
		}
	}

}


contract BreachContract {

        address public accuser;
        address public accused;
        uint public breachDetected =0 ;
        uint public noBreach = 0;
	uint amountDecided;
	bytes32 dataSent;
	uint public creationTime;
	event ContractComplete(bool complete);

        struct Voters {
        address name;
        bytes32 yesOrNo;
        }

        Voters[] public voters;

        function BreachContract(uint _creationTime, address _accuser, address _accused, address[] _voters, uint _amount, bytes32 _dataSent) public {
                breachDetected = 0;
                noBreach = 0;
		accuser = _accuser;
		accused = _accused;
		amountDecided = _amount;
		dataSent = _dataSent;
		creationTime = _creationTime;
                for (uint i = 0; i < _voters.length; i++) {
                        voters.push(Voters({name:  _voters[i],yesOrNo: "nil"}));
                }
        }

        function clearVotes() public {
                breachDetected = 0;
                noBreach = 0;
        }

	function getVoter(uint index) public constant returns(address, bytes32) {
        	return (voters[index].name, voters[index].yesOrNo);
    	}
	
	//For testing purposes
	function getAccuser() public constant returns (address) {
                return accuser;
        }

	//For testing purposes
        function getAccused() public constant returns (address) {
                return accused;
        }
	
	//For testing purposes
        function getAmount() public constant returns (uint) {
                return amountDecided;
        }
	
	//For testing purposes
        function getData() public constant returns (bytes32) {
                return dataSent;
        }
	
	//For testing purposes
        function getBalanceAccuser() public constant returns (uint) {
                return accuser.balance;
        }

	//For testing purposes
        function getBalanceAccused() public constant returns (uint) {
                return accused.balance;
        }
	
	//Condition1
	function CheckUseOfData() public constant returns (bool) {
                return true; 
        }	
	
	//Condition2
	function failureToNotify() public constant returns (bool){
                return false;
        }
	
	//Condition3
	function mutualIndemnification() public constant returns (bool){
                return true;
        }
	
	//Condition4
	function intellectualProperty() public constant returns (bool){
                return false;
        }

	//Condition5
	function publication() public constant returns (bool){
                return true;
        }

	//Condition6
        function termination() public constant returns (bool){
                return false;
        }

        function autoVote() public {
                for (uint i = 0; i < voters.length; i++) {
                        if((i == 0)||(i==2))
                        {
				bool decision = termination() && intellectualProperty();
                                voters[i].yesOrNo = "yes";
                        }
                        else {
                                voters[i].yesOrNo = "no";
                        }
                }
        }

        function getFinalDecision() public constant returns (bool){
                for (uint i = 0; i < voters.length; i++) {
                        if(voters[i].yesOrNo == "yes") {
                                breachDetected++;
                        }
                        if(voters[i].yesOrNo == "no")  {
                                 noBreach++;
                        }
                }
                if (breachDetected > noBreach)  {
                        return true;
                }
                else {
                        return false;
                }
        }

	//For testing purposes
	function getCreationTime() public constant returns (uint) {
		return creationTime;
	}

	function destroyContract() public {
                        selfdestruct(msg.sender);
                        ContractComplete(true);
        }


}
