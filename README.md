# Bitcoin Public Key to Receiving Address Calculator

You can access the site here: https://mission-bitcoin.github.io/bitcoin-public-key-to-receiving-address-calculator/

## What is this?
A calculator to generate a legacy, compatibility, or segwit receiving address from a compressed bitcoin child public key. One use for this is to demonstrate 'likely' ownership during an audit in which you would rather not provide your private key, extended public key, nor a message signed by the private key. 

This tool is not intended to generate multiple addresses (eg, from mnemonic seed words, a parent private key, or an extended public key). You'll mostly find this calculator useful if you already have a receiving address and the associated child public key, or if you have a child public key and want to determine which standard receiving addresses it derives.

If you just want to test the calculator out, then you can also generate a random compressed WIF private key along with the derived public key and legacy receiving address. Only use these to test the calculator - do not use them to store your bitcoin!

This site was purposely designed without the option to input seed words, a private key, or an extended public key (ie, because it's a security risk). If you're concerned about entering a child public key on this page, then you can download the site from Github and run it offline.

## Why does this exist?
Good question. 

I developed this mainly for my own learning. Also, while it's relatively trivial to calculate a receiving address from a public key, I haven't found a website that makes it easy to do. Most wallet/address calculator sites start by having you generate (or enter) your seed words or private key first (ie, rather than starting with a child public key).

If you're unsure how to find the public key for one of your receiving addresses, then you can use a comprehensive wallet software or wallet generation tool, for example:
- <a href="https://sparrowwallet.com/" target="blank">Sparrow Wallet</a>
- <a href="https://samouraiwallet.com/" target="blank">Samourai Wallet</a>
- <a href="https://iancoleman.io/bip39/" target="blank">Ian Coleman's BIP39 Mnemonic Code Converter</a>
- <a href="https://bitcoiner.guide/seed/" target="blank">Bitcoin QnA's Seed Tool</a>

------------------------------------------------------------------------------------------------------------------

**Libraries:**

- @bitcoinjs : https://github.com/bitcoinjs/bitcoinjs-lib (bitcoinjs-lib) - MIT Licence
- @bitcore : https://github.com/bitpay/bitcore/ (bitcore-lib) - MIT Licence
- @browserify : https://github.com/browserify/browserify (browserify) - MIT Licence

**Licence:**

MIT Licence

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
