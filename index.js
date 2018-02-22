web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

abiDefinition = JSON.parse('[{"constant":true,"inputs":[{"name":"participant","type":"address"}],"name":"getContract","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getExistingContracts","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"participant","type":"address"}],"name":"getLastContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getParticularExistingContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hospital","type":"address"},{"name":"patient","type":"address"},{"name":"amount","type":"uint256"},{"name":"voters","type":"address[]"},{"name":"nameHospital","type":"bytes32"},{"name":"namePatient","type":"bytes32"}],"name":"createDataShareContract","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"contracT","type":"address"},{"name":"participant","type":"address"}],"name":"removeContracts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"participant","type":"address"},{"name":"index","type":"uint256"}],"name":"getParticularContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"contracT","type":"address"}],"name":"removeContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"contracts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"}],"name":"NewContract","type":"event"}]');


abiDefinition2 = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroyContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getVoterAddresses","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getExistingContracts","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getHospitalAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getHospitalData","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"setPayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPatientAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getBreachDecision","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"sendPayment","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getPatientName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"fillMoney","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"hospital","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"data","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_data","type":"bytes32"}],"name":"sendData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"patient","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getHospitalName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creationTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voters","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"entity","type":"address"}],"name":"getEthBalances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_hospital","type":"address"},{"name":"_patient","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_voters","type":"address[]"},{"name":"_nameHospital","type":"bytes32"},{"name":"_namePatient","type":"bytes32"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payment","type":"bool"}],"name":"PaymentSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payment","type":"bool"}],"name":"PaymentSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"data","type":"bool"}],"name":"DataSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"complete","type":"bool"}],"name":"ContractComplete","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"voteContract","type":"address"}],"name":"VoteContract","type":"event"}]');


abiDefinition3 = JSON.parse('[{"constant":false,"inputs":[],"name":"destroyContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"CheckUseOfData","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"noBreach","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"failureToNotify","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getData","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"termination","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"publication","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFinalDecision","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBalanceAccused","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"autoVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accuser","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"clearVotes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accused","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"intellectualProperty","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBalanceAccuser","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAccuser","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getVoter","outputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creationTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voters","outputs":[{"name":"name","type":"address"},{"name":"yesOrNo","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mutualIndemnification","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCreationTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"breachDetected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAccused","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_creationTime","type":"uint256"},{"name":"_accuser","type":"address"},{"name":"_accused","type":"address"},{"name":"_voters","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_dataSent","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"complete","type":"bool"}],"name":"ContractComplete","type":"event"}]');


ContractFactoryContract = web3.eth.contract(abiDefinition);

DataShareContract = web3.eth.contract(abiDefinition2);

BreachContract = web3.eth.contract(abiDefinition3);

contractInstance = ContractFactoryContract.at('0x3cd4804caa16fd36aaf66cc6751f8ac4a62141bd');


users = {"Patient1": web3.eth.accounts[1], "Patient2": web3.eth.accounts[2], "Patient3": web3.eth.accounts[3], "Hospital1": web3.eth.accounts[4], "Hospital2": web3.eth.accounts[5], "Hospital3": web3.eth.accounts[6]}

usersDropDownId = {"patient1Contracts": web3.eth.accounts[1], "patient2Contracts": web3.eth.accounts[2], "patient3Contracts": web3.eth.accounts[3], "hospital1Contracts": web3.eth.accounts[4], "hospital2Contracts": web3.eth.accounts[5], "hospital3Contracts": web3.eth.accounts[6]}

voters = {"Law": web3.eth.accounts[6] , "FBI": web3.eth.accounts[7],"Auditor": web3.eth.accounts[8],"Judge": web3.eth.accounts[9]}

buttonToDivMapping = {"Patient1": 'patient1', "Patient2": 'patient2', "Patient3": 'patient3', "Hospital1": 'hospital1', "Hospital2": 'hospital2', "Hospital3": 'hospital3'}


function startContract(from,payment,voteString,to,dropDownID) {
	
		fromAddress = users[from.id];
        	console.log(fromAddress);
        	textEntered = $(to).val();
        	toAddress = users[textEntered];
        	console.log(toAddress);

		console.log("Requesting data from TBD");
		console.log(contractInstance.getExistingContracts());
		
		//GET THE LOCATIONS
		fromDivId = buttonToDivMapping[from.id];
		toDivId = buttonToDivMapping[$(to).val()];
		fromDiv = document.getElementById(fromDivId);
        	toDiv = document.getElementById(toDivId);
	
		//CREATE DATA SHARE CONTRACT
		publish(contractInstance.createDataShareContract(fromAddress,toAddress,$(payment).val(),storeVoters($(voteString).val()),from.id,$(to).val(),{from:fromAddress,gas:4700000}),fromDiv);
		
		//SAVE CONTRACT ADDRESS	
		createdContractAddress = contractInstance.getLastContract(fromAddress);
		addContract(createdContractAddress, dropDownID); 
		addContract(createdContractAddress, 'allContractsCloud1');		
	
		//SEND MONEY FROM REQUESTER TO CONTRACT
		contractInstance2 = DataShareContract.at(createdContractAddress);	
		contractInstance2.fillMoney({from:fromAddress,value: $(payment).val()})

		//NOTIFICATION TO DATA DISTRIBUTOR		
		publish("Send your data from patient to hospital : ",toDiv);	

}



//Publish the command to the CONSOLE and the LOG at the location
function publish(command,location) {
	contentRaw = command;
        console.log(contentRaw);
	
	var newLine = document.createElement("br");
	location.appendChild(newLine);
        
	content = document.createTextNode(contentRaw);
        location.appendChild(content);
}


//Negotiator function between data requestor and data provider

function requestDataNoContract(from,payment,voterString,to) {
		
		
                fromDivId = buttonToDivMapping[from.id];
                toDivId = buttonToDivMapping[$(to).val()];
                fromDiv = document.getElementById(fromDivId);
                toDiv = document.getElementById(toDivId);
		
		RecordToSend = from.id + "__" + $(payment).val() + "__" + $(voterString).val() + "__" + $(to).val(); 

		var encrypt = new JSEncrypt();
        	encrypt.setPublicKey(pubKey);
        	var encrypted = encrypt.encrypt(RecordToSend);		//Encrypt the Data here
        	console.log(encrypted);		
		
		sendDataR(from.id, encrypted, toDiv);		//Send the Encrypted Data here	
}

function storeVoters(VoterList) {
	var arr = VoterList.split(",");
	var VoterArray = [];
	for(i=0;i< arr.length;i++)
	{
		VoterArray.push(voters[arr[i]]);
	}
	return VoterArray;
	
}

function getFromLocation(Data) {
	var arr = Data.split("__");
	return arr[0];
}

function getPayment(Data) {
	var arr = Data.split("__");
	return arr[1];
}

function getVoters(Data) {
	var arr = Data.split("__");
	return arr[2];
}



function sendDataR(from, Data, location) {

		
	var key;
	if(from == "Hospital1"){ key = privateKeys.hospital1; }
	if(from == "Hospital2"){ key = privateKeys.hospital2; }
	if(from == "Hospital3"){ key = privateKeys.hospital3; }
	if(from == "Patient1"){ key = privateKeys.patient1; }
	if(from == "Patient2"){ key = privateKeys.patient2; }
	if(from == "Patient3"){ key = privateKeys.patient3; }
	

	var decrypt = new JSEncrypt();
	decrypt.setPrivateKey(key);
	var uncrypted = decrypt.decrypt(Data);
	console.log(uncrypted);

	publish("Request received from: ",location);
	publish(getFromLocation(uncrypted), location);
	publish("Proposed Payment: ",location);
	publish(getPayment(uncrypted),location);
	publish("Proposed Set of Voters: ",location);
	publish(getVoters(uncrypted),location);
	publish(storeVoters(uncrypted),location);
	publish("If you like this deal, go ahead and start the contract ELSE negotiate",location);
}


function setupReader(file) {
    var name = file.name;
    var reader = new FileReader();  
    reader.onload = function(e) {  
        pubKey = e.target.result;
	console.log(pubKey); 
    }
    reader.readAsText(file, "UTF-8");
}

function sender(cloudDropDownId) {
	
	//RETRIEVE THE CONTRACT ADDRESS THE CLOUD WANTS TO USE TO SEND DATA TO REQUESTER
	var elt = document.getElementById(cloudDropDownId);
        contractAddress = elt.options[elt.selectedIndex].text;
	contractInstance2 = DataShareContract.at(contractAddress);      

	//GET THE LOCATIONS
	fromDivId = buttonToDivMapping[web3.toAscii(contractInstance2.getHospitalName()).replace(/\0/g, '')];
	toDivId = buttonToDivMapping[web3.toAscii(contractInstance2.getPatientName()).replace(/\0/g, '')];
        fromDiv = document.getElementById(fromDivId);
        toDiv = document.getElementById(toDivId);
	
	publish(contractInstance2.sendData(pubKey,{from:contractInstance2.getPatientAddress()}),toDiv);
	publish("The following data is sent: ",cloudDiv);
	publish(pubKey,cloudDiv);

        //PAYMENT TO BE DONE FROM CONTRACT TO PATIENT
	publish("Balance before the transfer: ",toDiv);
	publish(contractInstance2.getEthBalances(createdContractAddress),toDiv);
	publish(contractInstance2.getEthBalances(contractInstance2.getPatientAddress()),toDiv);	
        
	contractInstance2.sendPayment({from:contractInstance2.getHospitalAddress(), gas:470000});
	publish("Balance after the transfer: ",toDiv);
	publish(contractInstance2.getEthBalances(createdContractAddress),toDiv);
	publish(contractInstance2.getEthBalances(contractInstance2.getPatientAddress()),toDiv);

	                
        //NOTIFICATION TO REQUESTER THAT DATA HAS BEEN SENT WITH THE DATA
	publish("Data sent : ",fromDiv);
	publish(web3.toAscii(contractInstance2.getHospitalData({from:contractInstance2.getHospitalAddress()})),fromDiv);
                        
	//publish("Destroying the contract and now accesing the data sent by the destroyed contract",fromDiv);
	//publish(contractInstance2.destroyContract({from:contractInstance2.getHospitalAddress()}),fromDiv);

}

//window.onload = function() {
//	fileInput = document.getElementById('hospital1_priv');
//      fileInput.addEventListener('change', function(e) {
//	  	  var file = fileInput.files[0];// Put the rest of the demo code here.
//	          setupReader(file);  
// 	});
//	fileInput2 = document.getElementById('hospital2_priv');
//        fileInput2.addEventListener('change', function(e) {
//               var file = fileInput2.files[0];// Put the rest of the demo code here.
//              setupReader(file);
//     });
//	fileInput3 = document.getElementById('hospital3_priv');
//      fileInput3.addEventListener('change', function(e) {
//	           var file = fileInput3.files[0];// Put the rest of the demo code here.
//	           setupReader(file);
//  	});
//	fileInput4 = document.getElementById('patient1_priv');
//		fileInput4.addEventListener('change', function(e) {
//	        var file = fileInput4.files[0];// Put the rest of the demo code here.
//	        setupReader(file);
//	 });
//  		fileInput5 = document.getElementById('patient2_priv');
// 		fileInput5.addEventListener('change', function(e) {
//	        var file = fileInput5.files[0];// Put the rest of the demo code here.
//	         setupReader(file);
//     	 });
//      fileInput6 = document.getElementById('patient3_priv');
//        fileInput6.addEventListener('change', function(e) {
//                var file = fileInput6.files[0];// Put the rest of the demo code here.
//                setupReader(file);
//        });
//	fileInput7 = document.getElementById('cloud');
//        fileInput7.addEventListener('change', function(e) {
//                var file = fileInput7.files[0];// Put the rest of the demo code here.
//                setupReader(file);
//		//var name = file.name;
    		//var reader = new FileReader();
		//var data;
    		//reader.onload = function(e) {
        	//	data = e.target.result;
        	//	console.log(data);
    		//}
    		//reader.readAsText(file, "UTF-8");
//        });
//}

function suspectedBreach(contractDropDownId) {
	
	//RETRIEVE THE CONTRACT ADDRESS THE CLOUD WANTS TO USE TO SEND DATA TO REQUESTER
        var elt = document.getElementById(contractDropDownId);
        contractAddress = elt.options[elt.selectedIndex].text;
        contractInstance2 = DataShareContract.at(contractAddress);

	//GET THE LOCATIONS
        fromDivId = buttonToDivMapping[web3.toAscii(contractInstance2.getHospitalName()).replace(/\0/g, '')];
        toDivId = buttonToDivMapping[web3.toAscii(contractInstance2.getPatientName()).replace(/\0/g, '')];
        fromDiv = document.getElementById(fromDivId);
        toDiv = document.getElementById(toDivId);

	publish(contractInstance2.getBreachDecision({from:web3.eth.accounts[2],gas:4700000}),toDiv);

	//SAVE CONTRACT ADDRESS
	breachContractAddress = contractInstance2.getLastContract();

	//START THE VOTING CONTRACT AND GIVE THE DECISION
	contractInstance3 = BreachContract.at(breachContractAddress);
	contractInstance3.clearVotes({from:web3.eth.accounts[0], gas:470000});
        contractInstance3.autoVote({from:web3.eth.accounts[0],gas:470000});
	publish("The decision of breach : ",fromDiv);
        publish(contractInstance3.getFinalDecision({from:web3.eth.accounts[0],gas:470000}),fromDiv);

	//DESTROY THE CONTRACT
	publish(contractInstance3.destroyContract({from:web3.eth.accounts[0]}),fromDiv);
}


//ADD CONTRACT TO THE LIST
function addContract(contractAddress, idOfCharacter) {
    var x = document.getElementById(idOfCharacter);
    var option = document.createElement("option");
    option.text = contractAddress;
    x.add(option);
}


//ON CLICK OF DROPDOWN MENU, RELOAD ALL EXISTING CONTRACTS
//function contractLoader(idOfCharacter) {

//	document.getElementById('idOfCharacter').options.length = 0;
//	participant = users2[idOfCharacter];
//	for(int i=0;i< contractInstance.getContract(participant).length(); i++) {
//		addContract(contractInstance.getParticularContract(participant, i), idOfCharacter);
//	}
//			
//}

//DESTROYING CONTRACTS WITH TIME
window.onload = function() {
	fileInput = document.getElementById('hospital1_priv');
        fileInput.addEventListener('change', function(e) {
                var file = fileInput.files[0];// Put the rest of the demo code here.
                setupReader(file);
        });
        fileInput2 = document.getElementById('hospital2_priv');
        fileInput2.addEventListener('change', function(e) {
                var file = fileInput2.files[0];// Put the rest of the demo code here.
                setupReader(file);
        });     
        fileInput3 = document.getElementById('hospital3_priv');
        fileInput3.addEventListener('change', function(e) {
                var file = fileInput3.files[0];// Put the rest of the demo code here.
                setupReader(file);
        });     
        fileInput4 = document.getElementById('patient1_priv');
        fileInput4.addEventListener('change', function(e) {
                var file = fileInput4.files[0];// Put the rest of the demo code here.
                setupReader(file);
        });     
        fileInput5 = document.getElementById('patient2_priv');
        fileInput5.addEventListener('change', function(e) {
                var file = fileInput5.files[0];// Put the rest of the demo code here.
                setupReader(file);
        });     
        fileInput6 = document.getElementById('patient3_priv');
        fileInput6.addEventListener('change', function(e) {
                var file = fileInput6.files[0];// Put the rest of the demo code here.
                setupReader(file);
        });     
        fileInput7 = document.getElementById('cloud');
        fileInput7.addEventListener('change', function(e) {
                var file = fileInput7.files[0];// Put the rest of the demo code here.
                setupReader(file);
                //var name = file.name;
                //var reader = new FileReader();
                //var data;
                //reader.onload = function(e) {
                //      data = e.target.result;
                //      console.log(data);
                //}     
                //reader.readAsText(file, "UTF-8");
        });	



	for(i=0;i< contractInstance.getExistingContracts().length; i++) {
		contractAddress = contractInstance.getParticularExistingContract(i);
		console.log(contractAddress);
		contractInstance2 = DataShareContract.at(contractAddress);
		hospitalAddress = contractInstance2.getHospitalAddress();
		console.log(hospitalAddress);
		patientAddress = contractInstance2.getPatientAddress();
		console.log(patientAddress);
		if((contractInstance2.getHospitalAddress() == '0x0')&&(contractInstance2.getPatientAddress() == '0x0'))
                {
                        contractInstance.removeContract(contractAddress,{from:web3.eth.accounts[0]});
                        contractInstance.removeContracts(contractAddress, hospitalAddress, {from: web3.eth.accounts[0]});
                        contractInstance.removeContracts(contractAddress, patientAddress, {from: web3.eth.accounts[0]});
                }
		else {
			contractInstance2.destroyContract({from:hospitalAddress});
		}
		if((contractInstance2.getHospitalAddress() == '0x0')&&(contractInstance2.getPatientAddress() == '0x0'))
		{
			contractInstance.removeContract(contractAddress, {from:web3.eth.accounts[0]});
			contractInstance.removeContracts(contractAddress, hospitalAddress, {from:web3.eth.accounts[0]});
			contractInstance.removeContracts(contractAddress, patientAddress, {from:web3.eth.accounts[0]});
		}
	}

	for(var id in usersDropDownId)
	{
		document.getElementById(id).options.length = 0;
		for(i=0;i< contractInstance.getContract(usersDropDownId[id]).length; i++) {
        	      addContract(contractInstance.getParticularContract(usersDropDownId[id], i), id);
     	 	}
	}
                
	document.getElementById('allContractsCloud1').options.length = 0;
        for(i=0;i< contractInstance.getExistingContracts().length; i++) {
        	addContract(contractInstance.getParticularExistingContract(i), 'allContractsCloud1');
       	} 
}

function destroyContract() {
	//contractInstance2 = DataShareContract.at(/*getInputFromDropDown*/); 
	publish("Destroying the contract and now accesing the data sent by the destroyed contract",fromDiv);
	publish(contractInstance2.destroyContract({from:contractInstance2.getHospitalAddress()}),fromDiv);

}

