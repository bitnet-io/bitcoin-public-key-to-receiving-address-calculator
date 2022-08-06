const bitcoinjs = require("bitcoinjs-lib");
const bitcorejs = require("bitcore-lib");

publicKey.addEventListener("keyup", pubKeytoReceivingAddr);
addressType.addEventListener("change", pubKeytoReceivingAddr);
button.addEventListener("mousedown", pubKeytoReceivingAddr);
buttonKeyPair.addEventListener("mousedown", generateRandomKeyPair);

function pubKeytoReceivingAddr() {
  const mempoolSpaceURL = document.getElementById("mempoolSpaceURL");
  const btcBalance = document.getElementById("btcBalance");
  const btcReceived = document.getElementById("btcReceived");
  const btcSpent = document.getElementById("btcSpent");

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

    receivingAddressOutput.value = address.address;
    mempoolSpaceURL.innerHTML = `<a href="https://mempool.space/address/${address.address}" id="mempoolSpaceURL"><font color="orange">Mempool.space Stats<br>(view more detail)</font></a>`;
    getAddressInfo(address.address);
  } else {
    receivingAddressOutput.value = "";
    mempoolSpaceURL.innerHTML = `<a href="https://mempool.space" id="mempoolSpaceURL"><font color="orange"><b>Mempool.space Stats</b></font></a>`;
    btcBalance.innerHTML = "N/A";
    btcReceived.innerHTML = "N/A";
    btcSpent.innerHTML = "N/A";
  }
}

function generateRandomKeyPair() {
  let randomPrivateKey = new bitcorejs.PrivateKey(),
    randomPublicKey = randomPrivateKey.toPublicKey(),
    randomPrivateKeyWIF = randomPrivateKey.toWIF(),
    randomReceivingAddress = randomPrivateKey.toAddress();

  (document.getElementById("randomPublicKey").value = randomPublicKey),
    (document.getElementById("randomPrivateKey").value = randomPrivateKeyWIF),
    (document.getElementById("randomReceivingAddress").value =
      randomReceivingAddress);
}

function getAddressInfo(address) {
  fetch("https://mempool.space/api/address/" + address)
    .then((response) => response.json())
    .then((data) => {
      let currentBalance =
        data.chain_stats.funded_txo_sum / 100000000 -
        data.chain_stats.spent_txo_sum / 100000000;
      let pastReceived = data.chain_stats.funded_txo_sum / 100000000;
      let pastSpent = data.chain_stats.spent_txo_sum / 100000000;

      btcBalance.innerHTML = currentBalance;
      btcReceived.innerHTML = pastReceived;
      btcSpent.innerHTML = pastSpent;
    });
}
