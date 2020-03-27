    // Functions
    // ======Split string========
    splitString = stringInput => {
            return stringInput.split("=");
        }
        // ======Validate input========
    validateInput = input => {
            flag = false;
            patt = /^[a-z0-9]+\=[a-z0-9]+$/i;
            if (patt.test(input) == true) {
                flag = true;
            } else {
                alert("Please check your input!")
            }
            return flag;
        }
        // ======Trim space============
    trimSpace = input => {
            return input.replace(/\s/g, "");
        }
        // ========Collect an Item============
    collectItem = (newItem, currentCollection) => {
            if (currentCollection.length == 0 || !(currentCollection.includes(newItem))) {
                currentCollection.push(newItem);
            } else {
                var index = currentCollection.indexOf(newItem);
                if (index !== -1) currentCollection.splice(index, 1);
            }
        }
        // =========Show colected items============
    showSelectedItems = (colection, doms) => {
        if (colection.length == 0) {
            $(doms).removeClass('selected')
        } else {
            let limit = doms.length;
            for (let i = 0; i < limit; i++) {
                let id = ($(doms[i]).data('id'));
                if (colection.includes(id)) {
                    $(doms[i]).addClass('selected');
                } else {
                    $(doms[i]).removeClass('selected');
                }
            }
        }
    }