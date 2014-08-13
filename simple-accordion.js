/**
 * Accordion Class Definition
 *   create a simple 2-level expandable accordion
 *
 * @author Brandon Beeler
 */
var SimpleAccordion = function (selector) {
    this.$obj = $(selector);
    this.init();
}

SimpleAccordion.prototype = {
    /**
     * Main Render Function
     */
    init: function() {
        // rig up group headers to toggle collapse classes
        this.$obj.find(".accordion-group > .group-header, .accordion-sub-group > .sub-group-header").click(function() {
            var $group = $(this).parent();

            // close other groups before opening a new one
            $(".accordion-group").not('.collapsed').not('#' + $group.attr('id')).addClass('collapsed');
            $group.toggleClass('collapsed');
        });
    }
};