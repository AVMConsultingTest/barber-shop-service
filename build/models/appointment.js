"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Appointment = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({ timestamps: true, underscored: true, tableName: "Companies", createdAt: "created_at", updatedAt: "updated_at" })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _phone_number_decorators;
    let _phone_number_initializers = [];
    let _service_decorators;
    let _service_initializers = [];
    let _serviceDetails_decorators;
    let _serviceDetails_initializers = [];
    let _bookingDate_decorators;
    let _bookingDate_initializers = [];
    let _bookingTime_decorators;
    let _bookingTime_initializers = [];
    let _barberDetails_decorators;
    let _barberDetails_initializers = [];
    var Appointment = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.phone_number = __runInitializers(this, _phone_number_initializers, void 0);
            this.service = __runInitializers(this, _service_initializers, void 0);
            this.serviceDetails = __runInitializers(this, _serviceDetails_initializers, void 0);
            this.bookingDate = __runInitializers(this, _bookingDate_initializers, void 0);
            this.bookingTime = __runInitializers(this, _bookingTime_initializers, void 0);
            this.barberDetails = __runInitializers(this, _barberDetails_initializers, void 0);
            // @Column phone_number: string | undefined;
            // @Column address_line1: string | null;
            // @Column address_line2: string | null;
            // @Column state: string | null;
            // @Column city: string | null;
            // @Column zip_code: string | null;
            // @Column country: string | null;
            // @Column account_number: string | null;
            // @Column routing_number: string | null;
            // @Column ein_number: string | null;
            // @Column mc_number: string | null;
            // @Column dot_number: string | null;
            // @Column logo: string | null;
            // @Column factoring_account_number: string;
            // @Column factoring_username: string;
            // @Column factoring_password: string;
        }
    };
    __setFunctionName(_classThis, "Appointment");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _name_decorators = [(0, sequelize_typescript_1.Column)({ allowNull: false, unique: true })];
        _email_decorators = [(0, sequelize_typescript_1.Column)({ allowNull: false, unique: true })];
        _phone_number_decorators = [(0, sequelize_typescript_1.Column)({ allowNull: false, unique: true })];
        _service_decorators = [(0, sequelize_typescript_1.Column)({ allowNull: false, unique: true })];
        _serviceDetails_decorators = [(0, sequelize_typescript_1.Column)({ allowNull: false, unique: true })];
        _bookingDate_decorators = [(0, sequelize_typescript_1.Column)({ allowNull: false, unique: true })];
        _bookingTime_decorators = [(0, sequelize_typescript_1.Column)({ allowNull: false, unique: true })];
        _barberDetails_decorators = [(0, sequelize_typescript_1.Column)({ allowNull: false, unique: true })];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _phone_number_decorators, { kind: "field", name: "phone_number", static: false, private: false, access: { has: obj => "phone_number" in obj, get: obj => obj.phone_number, set: (obj, value) => { obj.phone_number = value; } }, metadata: _metadata }, _phone_number_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _service_decorators, { kind: "field", name: "service", static: false, private: false, access: { has: obj => "service" in obj, get: obj => obj.service, set: (obj, value) => { obj.service = value; } }, metadata: _metadata }, _service_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _serviceDetails_decorators, { kind: "field", name: "serviceDetails", static: false, private: false, access: { has: obj => "serviceDetails" in obj, get: obj => obj.serviceDetails, set: (obj, value) => { obj.serviceDetails = value; } }, metadata: _metadata }, _serviceDetails_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _bookingDate_decorators, { kind: "field", name: "bookingDate", static: false, private: false, access: { has: obj => "bookingDate" in obj, get: obj => obj.bookingDate, set: (obj, value) => { obj.bookingDate = value; } }, metadata: _metadata }, _bookingDate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _bookingTime_decorators, { kind: "field", name: "bookingTime", static: false, private: false, access: { has: obj => "bookingTime" in obj, get: obj => obj.bookingTime, set: (obj, value) => { obj.bookingTime = value; } }, metadata: _metadata }, _bookingTime_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _barberDetails_decorators, { kind: "field", name: "barberDetails", static: false, private: false, access: { has: obj => "barberDetails" in obj, get: obj => obj.barberDetails, set: (obj, value) => { obj.barberDetails = value; } }, metadata: _metadata }, _barberDetails_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Appointment = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Appointment = _classThis;
})();
exports.Appointment = Appointment;
