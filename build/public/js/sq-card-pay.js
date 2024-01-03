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
function CardPay(fieldEl, buttonEl) {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a card payment object and attach to page
        const card = yield window.payments.card({
            style: {
                '.input-container.is-focus': {
                    borderColor: '#006AFF'
                },
                '.message-text.is-error': {
                    color: '#BF0020'
                }
            }
        });
        yield card.attach(fieldEl);
        function eventHandler(event) {
            return __awaiter(this, void 0, void 0, function* () {
                // Clear any existing messages
                window.paymentFlowMessageEl.innerText = '';
                try {
                    const result = yield card.tokenize();
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
