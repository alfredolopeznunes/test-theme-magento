define([
    'uiComponent',
    'jquery'
], function (Component, $) {
    'use strict';

    return Component.extend({

        /**
         * @override
         */
        initialize: function () {
            self = this;
            this._super();

            $(document).unbind().on("click", '.btn-plus, .btn-min', function(){
                var input = $(this);
                var currentQty = input.siblings('.cart-item-qty').val();

                if(input.hasClass('btn-plus')){
                    var qtyMore = parseInt(currentQty)+parseInt(1);
                    input.siblings('.cart-item-qty').val(qtyMore);
                    input.siblings('.cart-item-qty').attr('data-item-qty',qtyMore);

                    input.siblings('.update-cart-item').show();
                } else {
                    if(parseInt(currentQty) > 1){
                        var qtyLess = parseInt(currentQty)-parseInt(1);
                        input.siblings('.cart-item-qty').val(qtyLess); 
                        input.siblings('.cart-item-qty').attr('data-item-qty',qtyLess);

                        input.siblings('.update-cart-item').show();
                    }
                }
            });

            return this;
        }

    })
});