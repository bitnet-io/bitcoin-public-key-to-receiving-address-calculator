const bitcoinjs = require("bitcoinjs-lib");
const bitcorejs = require("bitcore-lib");

publicKey.addEventListener("keyup", pubKeytoReceivingAddr);
addressType.addEventListener("change", pubKeytoReceivingAddr);
button.addEventListener("mousedown", pubKeytoReceivingAddr);
buttonKeyPair.addEventListener("mousedown", generateRandomKeyPair);

function pubKeytoReceivingAddr() {
  let address = {},
    inputPubKey = document.getElementById("publicKey").value,
    pubkey = Buffer.from(inputPubKey, "hex"),
    inputAddrType =
      document.getElementById("addressType").options[
        document.getElementById("addressType").selectedIndex
      ].value,
    receivingAddressOutput = document.getElementById("receivingAddress");

  if (pubkey.length == 33) {
    if (inputAddrType === "segwit") {
      address = bitcoinjs.payments.p2wpkh({
        pubkey,
      });
    } else if (inputAddrType === "compatibility") {
      address = bitcoinjs.payments.p2sh({
        redeem: bitcoinjs.payments.p2wpkh({
          pubkey,
        }),
      });
    } else if (inputAddrType === "legacy") {
      address = bitcoinjs.payments.p2pkh({
        pubkey,
      });
    }
    receivingAddressOutput.value = `${address.address}`;
  } else {
    receivingAddressOutput.value = "";
  }
}

function generateRandomKeyPair() {
  let randomPrivateKey = new bitcorejs.PrivateKey(), // Can pass in WIF PrivKey if preferred over random, eg 'KySeaS5oD47g5Egw1PjrZJW63DhvoXpxipcyifiT9T1qmuGbiVz1'
    randomPublicKey = randomPrivateKey.toPublicKey(),
    randomPrivateKeyWIF = randomPrivateKey.toWIF(),
    randomReceivingAddress = randomPrivateKey.toAddress();

  (document.getElementById("randomPublicKey").value = randomPublicKey),
    (document.getElementById("randomPrivateKey").value = randomPrivateKeyWIF),
    (document.getElementById("randomReceivingAddress").value =
      randomReceivingAddress);
}
