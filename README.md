# BIP39 Mnemonic IOTA wallet seed generator

Download this repository (git clone or Download link), open index.html file in your browser and follow instructions below.
All the files required for this app to work are included and can be used 100% offline. We actually encourage you to do so
in case you have some evil extension in your browser leaking your data.

You can also use/view a live version of this app at https://acyuta108.github.io/iota-seed-generator-app/

**Instructions:**

1.  **Generate a 'New Mnemonic'**. Save it securely (Pen and Paper or
    offline password manager)
2.  **Type your passphrase.** This is very important given 2 facts: a.
    if a third party gets access to your mnemonic, and you did not use a
    passphrase when generating the seed, the third party will have
    direct access to your IOTA wallet funds; and b. you can create
    multiple wallets from a single mnemonic by using separate passphrase
    for each seed/wallet. This makes it easier to manage multiple
    wallets and for the purpose of plausible deniability (read [From
    mnemonic to
    seed](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
    in the BIP39 spec)
3.  **Convert to Seed**
4.  **Copy the Seed** (do not write it or save it anywhere) and **login
    into your [IOTA
    wallet](https://github.com/iotaledger/wallet/releases)**
5.  **And you are Done!** Next time you want to login to your IOTA
    wallet, come back to this tool (online or offline copy), paste the
    Mnemonic you saved in step 1, and follow the steps again.

**[IOTA](https://iota.org/)** tools designed and developed by
[GanapatiWeb](https://ganapatiweb.com).

The source code for this tool (and dependencies) can be found in our
[Github](http://github.com/acyuta108) page under the
[MIT](http://opensource.org/licenses/mit-license.php) license.

Disclaimer: This tool is NOT an official tool by the [IOTA
foundation](https://iotasupport.com/foundation.shtml). The main library
([authored by me](https://github.com/acyuta108/iota-bip39)) uses a
combination of [the official
iotal.lib.js](https://github.com/iotaledger/iota.lib.js/) library and
the [bip39](https://github.com/bitcoinjs/bip39) library for generating
seeds. Use this tool at your own risk of data and/or IOTA/any currency
funds loss. We built this tool to facilitate the use of any IOTA
cryptocurrency wallet in a more secure way, the way we use hardware
wallets or any
[BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
implemented tool for generating secure and deterministic cryptographic
keys. This tool does NOT transmit any data when creating or generating
secure mnemonics or seeds, and does NOT store any data. We encourage you
nevertheless disconnect from the network or download this tool
**directly** from our [Github
repo](http://github.com/acyuta108/iota-seed-generator.git) and use it on
an offline computer/device.
