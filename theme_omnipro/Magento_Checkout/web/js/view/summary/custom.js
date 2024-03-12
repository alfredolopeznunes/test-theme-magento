define([
    'jquery',
    'ko',  
    'uiComponent',
    'Magento_Checkout/js/model/quote'
], function ($, ko, Component, quote) {  
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Magento_Checkout/checkout/summary/custom'
        },

        initialize: function () {
            this._super();
            this.isVisible = ko.observable(false);
            quote.shippingAddress.subscribe(this.updateVisibility, this);
            return this;
        },

        updateVisibility: function (address) {
            if (address && address.countryId) {
                this.isVisible(address.countryId === 'CO');
            }
        }
    });
});