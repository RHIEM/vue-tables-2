module.exports = function(column) {

    if (!this.userControlsColumns) {
        this.userColumnsDisplay = JSON.parse(JSON.stringify(this.allColumns));                
        this.userControlsColumns = true;            
    }

    if (this.userColumnsDisplay.includes(column)) {
        
        // can't have no columns
        if (this.userColumnsDisplay.length===1) return;
        
        var index = this.userColumnsDisplay.indexOf(column);
        this.userColumnsDisplay.splice(index, 1);
    } else {
        this.userColumnsDisplay.push(column);
    }

    this.updateState('userControlsColumns', true);
    this.updateState('userColumnsDisplay', this.userColumnsDisplay);

    localStorage[this.name] = this.userColumnsDisplay;

    this.$nextTick(()=>{
        this._setFiltersDOM(this.query);
        
    });

}