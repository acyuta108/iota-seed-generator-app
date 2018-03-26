Vue.use(Buefy.default);

new Vue({
    el: '#app',
    data: {
        mnemonicValue: '',
        mnemonicIsValid: false,
        passphraseValue: '',
        passphraseMessage: ['We strongly recommend using a passphrase for your seed!'],
        seedValue: '',
        networkStatusOnline: navigator.onLine
    },
    mounted: function () {
        document.addEventListener('offline', () => this.networkStatusOnline = navigator.onLine);
        document.addEventListener('online', () => this.networkStatusOnline = navigator.onLine);
    },
    computed: {
        mnemonicStatus: function () {
            this.validateMnemonic();
            let status = this.mnemonicIsValid ? 'success' : 'error';
            if (this.mnemonicValue === '') {
                status = 'empty';
            }
            return status;
        },
        mnemonicStyle: function () {
            let style = 'is-warning';
            switch (this.mnemonicStatus) {
                case 'empty':
                    style = 'is-warning';
                    break;
                case 'success':
                    style = 'is-success';
                    break;
                case 'error':
                    style = 'is-danger';
                    break;
            }
            return style;
        },
        mnemonicMessage: function () {
            const message = [];
            switch (this.mnemonicStatus) {
                case 'error':
                    message.push('Mnemonic is invalid!');
                    break;
                case 'success':
                    message.push("Store mnemonic safely and don\'t forget your passphrase otherwise you'll loose access to your wallet/funds!");
                    break;
                default:
                    message.push('Type or Generate new mnemonic');
            }
            return message;
        }
    },
    methods: {
        generate: function () {
            this.mnemonicValue = iotaBip39.generate();
        },
        convert: function () {
            this.seedValue = iotaBip39.toSeed(this.mnemonicValue, this.passphraseValue);
        },
        validateMnemonic: function () {
            this.mnemonicIsValid = iotaBip39.validate(this.mnemonicValue);
        },
        seedToClip: function () {
            const seedField = document.getElementById('seed');
            seedField.type = 'text';
            seedField.select();
            document.execCommand('Copy');
            seedField.type = 'password';
            this.seedToClipSnack();
        },
        clearSeed: function () {
            this.seedValue = '';
        },
        seedToClipSnack: function () {
            this.$snackbar.open('Seed copied to clipbard!');
        },
        networkStatusWarning: function () {
                const onlineMessage = 'Although this app NEVER transmits data when generating/converting a mnemonic, we recommend to use this tool while offline. Disconnect your wifi/eth until the network status button changes to "You are offline"';
                const offlineMessage = 'You are currently Offline and "safe" to generate a new mnemonic/seed';
                this.$snackbar.open({
                    message: this.networkStatusOnline ? onlineMessage: offlineMessage,
                    indefinite: true,
                    type: this.networkStatusOnline ? 'is-warning' : 'is-success'
                });
        }
    },
    watch: {
        mnemonicValue: function () {
            this.clearSeed();
        },
        passphraseValue: function () {
            this.clearSeed();
        }
    }
});
