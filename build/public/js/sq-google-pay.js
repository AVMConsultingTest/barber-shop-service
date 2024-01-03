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
function GooglePay(buttonEl) {
    return __awaiter(this, void 0, void 0, function* () {
        const paymentRequest = window.payments.paymentRequest(
        // Use global method from sq-payment-flow.js
        window.getPaymentRequest());
        const googlePay = yield payments.googlePay(paymentRequest);
        yield googlePay.attach(buttonEl);
        function eventHandler(event) {
            return __awaiter(this, void 0, void 0, function* () {
                // Clear any existing messages
                window.paymentFlowMessageEl.innerText = '';
                try {
                    const result = yield googlePay.tokenize();
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
