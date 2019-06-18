module.exports = function(h) {
    
    return (right) => {
        var sortControl = require('./sort-control')(h, right);
        
         var headings = [];
         //var placement = "{title: 'ddd', placement: 'top'}";
         
         //var xx = function(){ return {placement: 'top'}};
         //var me = this;
         
         if (this.hasChildRow && this.opts.childRowTogglerFirst) headings.push(<th></th>);
        
         this.allColumns.map(function(column) {
             let spanID = 'tt_' + Date.now();
          headings.push(<th on-click={this.orderByColumn.bind(this,column)}
            class={this.sortableClass(column)}>
            <span v-b-tooltip title={this.getHeadingTooltip(column, h)} class="VueTables__heading" >{this.getHeading(column, h)}</span>
            {sortControl.call(this, column)}
            </th>)
        }.bind(this))
        
         if (this.hasChildRow && !this.opts.childRowTogglerFirst) headings.push(<th></th>);
        
         return headings;
        }    
    }
 