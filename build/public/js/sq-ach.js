"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function ACHPay(buttonEl) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountHolderNameEl = document.getElementById('ach-account-holder-name');
        const achMessageEl = document.getElementById('ach-message');
        const achWrapperEl = document.getElementById('ach-wrapper');
        let ach;
        try {
            ach = yield window.payments.ach();
            achWrapperEl.style.display = 'block';
        }
        catch (e) {
            // If the ACH payment method is not supported by your account then
            // do not enable the #ach-account-holder-name input field
            if (e.name === 'PaymentMethodUnsupportedError') {
                achMessageEl.innerText = 'ACH payment is not supported by your account';
                accountHolderNameEl.disabled = true;
            }
            // if we can't load ACH, we shouldn't bind events for the button
            return;
        }
        function eventHandler(event) {
            return __awaiter(this, void 0, void 0, function* () {
                const accountHolderName = accountHolderNameEl.value.trim();
                if (accountHolderName === '') {
                    achMessageEl.innerText = 'Please input full name';
                    return;
                }
                // Clear any existing messages
                window.paymentFlowMessageEl.innerText = '';
                try {
                    const result = yield ach.tokenize({
                        accountHolderName,
                    });
                    if (result.status === 'OK') {
                        // Use global method from sq-payment-flow.js
                        window.createPayment(result.token);
                    }
                }
                catch (e) {
                    if (e.message) {
                        window.showError(`Error: ${e.message}`);
                    }
                    else {
                        window.showError('Something went wrong');
                    }
                }
            });
        }
        buttonEl.addEventListener('click', eventHandler);
    });
}
