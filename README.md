# BlockChain

Privkeys are the public keys.
If you want to sign a message, you will click on choose file and choose the public key.pem.

Example, if hospital2 wants to send a message to patient2, 
hospital2 will enter the details in the fields, click on choose file, select hospital2_pub.pem and then send the message. patient2 will use the priv key corresponding to hospital2 to verify the signed message. 

This is reverse signing, but Javascript did not have public key cryptography mechanism for signing. So, I did a reverse signing instead, where the private keys are public and the public keys are private. 
