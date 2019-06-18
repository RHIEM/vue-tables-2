'use strict';

module.exports = function (h) {
  var _this = this;

  return function (right) {
    var sortControl = require('./sort-control')(h, right);

    var headings = [];
    //var placement = "{title: 'ddd', placement: 'top'}";

    //var xx = function(){ return {placement: 'top'}};
    //var me = this;

    if (_this.hasChildRow && _this.opts.childRowTogglerFirst) headings.push(h('th'));

    _this.allColumns.map(function (column) {
      var spanID = 'tt_' + Date.now();
      headings.push(h(
        'th',
        {
          on: {
            'click': this.orderByColumn.bind(this, column)
          },

          'class': this.sortableClass(column) },
        [h(
          'span',
          {
            directives: [{
              name: 'b-tooltip',
              value: true
            }],
            attrs: { title: this.getHeadingTooltip(column, h) },
            'class': 'VueTables__heading' },
          [this.getHeading(column, h)]
        ), sortControl.call(this, column)]
      ));
    }.bind(_this));

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst) headings.push(h('th'));

    return headings;
  };
};