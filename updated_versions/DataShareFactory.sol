pragma solidity ^0.4.20;

contract DataShareContractFactory {
    address owner;
    bytes32 name;
    address[] dataShareContracts;
    mapping (address => address[]) public contracts;
    address congressFactoryAddress = 0x7c2842d44e7d4535b50f1c975d5cb04f5324ac8f; //PUT CongressFactory ADDRESS HERE

    event NewContract(address newContract);
        
    function DataShareContractFactory() public {
        owner = msg.sender;
    }
    
    //_votesForQuorum is number of potential voters who need to vote for breach to be even considered.
    //_votingTimeMinutes is number of minutes the vote is open for
    //_votingMajorityDifference is the margin of majority vote needed by the winning vote for breach to be valid. E.g. 7 votes to 5 has a margin of 2 votes. 0 for simple majority, positive for greater than majority.
    function createDataShareContract(address _dataRequester, address _dataProvider, uint _payment, address[] _voters, uint _votesForQuorum, uint _votingTimeMinutes, int _votingMajorityDifference, bytes32 _dataRequesterName, bytes32 _dataProviderName) public payable returns (bool _success) {
        address DSContract = new DataShareContract(_dataRequester, _dataProvider, _payment, _voters, _votesForQuorum, _votingTimeMinutes, _votingMajorityDifference, _dataRequesterName, _dataProviderName);
        dataShareContracts.push(DSContract);
        contracts[_dataRequester].push(DSContract);
        contracts[_dataProvider].push(DSContract);
        NewContract(DSContract);
        return true;
    }

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
    
    function getParticularContract(address participant, uint index) public constant returns (address) {
        return contracts[participant][index];
    }

    function removeContract(address _contract) public {
        for (uint i = 0; i < dataShareContracts.length; i++) {
            if (_contract == dataShareContracts[i]) {
                delete dataShareContracts[i];
            }
        }
    }
    
    function removeContracts(address _contract, address participant) public {
        for (uint i = 0; i < contracts[participant].length; i++) {
            if (_contract == contracts[participant][i]) {
                delete contracts[participant][i];
            }
        }
    }
}

contract DataShareContract {
    address public dataRequester;
    address public dataProvider;
    uint public payment;
    address[] public voters;
    uint votesForQuorum;
    uint votingTimeMinutes;
    int votingMajorityDifference;
    uint public creationTime;
    address public breachContract;
    address[] voteContracts;
    address congressFactoryAddress = 0x7c2842d44e7d4535b50f1c975d5cb04f5324ac8f;
    mapping (address => bytes32) public data;
    mapping (address => bytes32) public accountNames;

    event PaymentSent(bool payment);
    event PaymentSet(bool payment);
    event DataSent(bool data);
    event ContractComplete(bool complete);
    event VoteContract(address voteContract);
    event Message(string message);
    function DataShareContract(address _dataRequester, address _dataProvider, uint _payment, address[] _voters, uint _votesForQuorum, uint _votingTimeMinutes, int _votingMajorityDifference, bytes32 _dataRequesterName, bytes32 _dataProviderName) public payable {
        dataRequester = _dataRequester;
        dataProvider = _dataProvider;
        payment = _payment;
        voters = _voters;
        votesForQuorum = _votesForQuorum;
        votingTimeMinutes = _votingTimeMinutes;
        votingMajorityDifference = _votingMajorityDifference;
        creationTime = now;
        accountNames[dataRequester] = _dataRequesterName;
        accountNames[dataProvider] = _dataProviderName;
        voteContracts.push(breachContract);
        VoteContract(breachContract);
    }

    modifier onlyBy(address _account)
    {
        require(msg.sender == _account);
        _;
    }

    function createBreachContract(address[] _voters, uint _votesForQuorum, uint _votingTimeMinutes, int _votingMajorityDifference) private returns (bool success) {
        CongressFactory congressObject = CongressFactory(congressFactoryAddress);
        breachContract = congressObject.createCongress(_votesForQuorum, _votingTimeMinutes, _votingMajorityDifference);
        Congress bc = Congress(breachContract);
        for (uint i = 0; i < _voters.length; i++) {
            bc.addMember(_voters[i], "");
            voters.push(_voters[i]);
        }
        return true;
    }

    function createBreachVote(string _description) public payable returns (bool finished) {
        bool success;
        if (breachContract == 0x0) {
            success = createBreachContract(voters, votesForQuorum, votingTimeMinutes, votingMajorityDifference);
        }
        else {
            success = true;
        }
        if (success) {
            Congress bc = Congress(breachContract);
            bc.newProposalInEther(msg.sender, payment, _description, "");
        }
        return true;
    }
    
    function sendPayment() public payable {
        dataProvider.transfer(payment);
    } 

    function setPayment(uint _payment) public onlyBy(dataProvider) {
        payment = _payment;
        PaymentSet(true);
    }
    
    function sendData(bytes32 _data) public onlyBy(dataProvider) {
        data[dataRequester] = _data;
        DataSent(true);
    }
    
    function getRequesterName() public constant returns (bytes32) {
        return accountNames[dataRequester];
    }

    function getProviderName() public constant returns (bytes32) {
        return accountNames[dataProvider];
    }

    function getRequesterAddress() public constant returns (address) {
        return dataRequester;
    }
    
    function getProviderAddress() public constant returns (address) {
        return dataProvider;	
    }

    function getPayment() public constant returns (uint) {
        return payment;
    }

    function getRequesterData() public onlyBy(dataRequester) constant returns (bytes32) {
        return data[dataRequester]; 
    }
    
    function getVoterAddresses() public constant returns (address[]) {
        return voters;
    }

    
    function getEthBalances(address entity) public constant returns (uint) {
        return entity.balance;
    }


    function getBreachDecision(uint _proposalID) public returns(bool success) {
        // address accused;
        // if (msg.sender == dataRequester) {
        //     accused = dataProvider;
        // } else if (msg.sender == dataProvider) {
        //     accused = dataRequester;
        // }
        Congress bc = Congress(breachContract);
        uint passed = bc.getProposalDecision(_proposalID);
        if (passed == 2) {
            Message("Voting is still open");
            return false;
        }
        else if (passed == 0) {
            return false;
        }
        else {
            bc.executeProposal(_proposalID, "");
        }
        return true;
    }
    
    function getExistingContracts() public constant returns (address[]) {
        return voteContracts;
    }

    function getLastContract() public constant returns (address) {
        uint lastIndex = voteContracts.length-1;
        return voteContracts[lastIndex];
    }

    function destroyContract() public onlyBy(dataRequester) {  
        uint elapsedTime = 4;
        if (now > creationTime + elapsedTime * 1 minutes) {
            selfdestruct(dataRequester);
            ContractComplete(true);		
        }
    }
}

interface Congress {
    function addMember(address targetMember, string memberName);
    function newProposalInEther(address beneficiary, uint etherAmount, string jobDescription, bytes transactionBytecode) returns (uint proposalID);
    function vote(uint proposalNumber, bool supportsProposal, string justificationText) returns (uint voteID);
    function executeProposal(uint proposalNumber, bytes transactionBytecode) public returns (bool success);
    function getProposalDecision(uint proposalNumber) public returns (uint decision_code);
}

interface CongressFactory {
    function createCongress(uint minimumQuorumForProposals, uint minutesForDebate, int marginOfVotesForMajority) returns (address _congressAddress);
}
