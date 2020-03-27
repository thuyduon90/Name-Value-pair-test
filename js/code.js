$(document).ready(function() {
    /* ++++++++++++++DECLARATION++++++++++++++ */
    var boxObject = new boxContent();
    var selectedItem = [];
    /* ++++++++++++++++++++++++++++++++++++++ */

    /* +++++++++++++++EXECUTION+++++++++++++++ */
    /* =============ADD PAIR=============== */
    $("#form-input-pair").submit(function(event) {
        event.preventDefault();
        var inputPair = $("#input-pair").val();
        var treatedPair = trimSpace(inputPair);
        if (validateInput(treatedPair)) {
            boxObject.addItem({ name: splitString(treatedPair)[0], value: splitString(treatedPair)[1], id: Date.now() })
            boxObject.sortItem();
            boxObject.showHTML();
            showSelectedItems(selectedItem, $('.item'))
        }
    });
    /* =============SORT by NAME=============== */
    $("#sortByName").click(function(e) {
        e.preventDefault();
        boxObject.sortBy = 'name'
        boxObject.sortItem();
        boxObject.showHTML();
        showSelectedItems(selectedItem, $('.item'))
    });
    /* =============SORT by VALUE=============== */
    $("#sortByValue").click(function(e) {
        e.preventDefault();
        boxObject.sortBy = 'value'
        boxObject.sortItem();
        boxObject.showHTML();
        showSelectedItems(selectedItem, $('.item'))
    });
    /* =============SELECT ITEMS=============== */
    $(document).on('click', '.item', function(e) {
        e.preventDefault();
        let id = ($(this).data('id'));
        collectItem(id, selectedItem);
        showSelectedItems(selectedItem, $('.item'))
    });
    /* =============DELETE ITEMS=============== */
    $("#delete").click(function(e) {
        e.preventDefault();
        if (selectedItem.length > 0) {
            boxObject.deleteItem(selectedItem);
            selectedItem = [];
            boxObject.showHTML();
            showSelectedItems(selectedItem, $('.item'))
        } else {
            alert("No collected item!")
        }
    });
    /* =============SHOW XML=============== */
    $("#show-xml").click(function(e) {
        e.preventDefault();
        var xml = boxObject.convertToXML();
        alert(xml);
    });
    /* ++++++++++++++++++++++++++++++++++++++ */
});