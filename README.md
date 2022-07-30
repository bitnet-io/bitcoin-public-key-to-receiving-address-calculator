# Bitcoin Public Key to Receiving Address Calculator

## What is this?
A 'calculator' to generate a legacy, compatibility, or segwit receiving address from a compressed bitcoin public key. You can also generate a new random compressed WIF private key (along with the derived compressed public key and legacy receiving address).

You can access the site here: https://mission-bitcoin.github.io/bitcoin-public-key-to-receiving-address-calculator/

## Why does this exist?
Good question. 

I developed this mainly for my own learning, but thought it may be handy if anyone ever needs to demonstrate a particular public key can derive a specific receiving address (eg, during an audit which doesn't require disclosure of seed words, private keys (individual or extended), or extended public keys). In that case you're better off just signing a message with the private key, but I've surprisingly come across audit scenarios in which providing a public key is enough.

While it's relatively trivial (cryptographically speaking) to calculate a receiving address from a public key, I haven't found a website that makes it easy to do. Most sites with similar features start by having you generate (or enter) your seed words or private key first (ie, rather than starting with the public key).

If you're unsure how to find the public key for one of your receiving addresses, then you should use a comprehensive wallet software or wallet generation tool, for example:
- <a href="https://sparrowwallet.com/">Sparrow Wallet</a>
- <a href="https://samouraiwallet.com/">Samourai Wallet</a>
- <a href="https://iancoleman.io/bip39/">Ian Coleman's BIP39 Mnemonic Code Converter</a>
- <a href="https://bitcoiner.guide/seed/">Bitcoin QnA's Seed Tool</a>

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
