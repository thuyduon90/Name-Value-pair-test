this.boxContent = function() {
    /* =============PROPERTIES=============== */
    this.sortBy = 'name';
    this.items = [];

    /* =============METHODS=============== */
    // SORT
    this.sortItem = () => {
            this.items.sort();
            if (this.sortBy == 'name') {
                this.items.sort(function(a, b) {
                    var nameA = a.name.toLowerCase(),
                        nameB = b.name.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                });
            } else if (this.sortBy == 'value') {
                this.items.sort(function(a, b) {
                    var nameA = a.value.toLowerCase(),
                        nameB = b.value.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                });
            }
        }
        // DELETE
    this.deleteItem = (items) => {
            items.forEach(element => {
                this.items
                var removeIndex = this.items.map((item) => { return item.id; }).indexOf(element);
                this.items.splice(removeIndex, 1);
            })
        }
        // ADD
    this.addItem = (item) => {
            this.items.push({ name: item.name, value: item.value, id: item.id })
        }
        // SHOW HTML
    this.showHTML = () => {
            items = this.items;
            $(".box").html('');
            items.forEach(element => {
                $(".box").append(`<div class="item" data-id="${element.id}">${element.name}=${element.value}</div>`);
            });
        }
        // CONVERT XML
    this.convertToXML = () => {
        return this.items.reduce((result, el) => {
            return result + `<pair name="${el.name}" value="${el.value}" id="${el.id}"></pair>\n`
        }, '')
    }
}