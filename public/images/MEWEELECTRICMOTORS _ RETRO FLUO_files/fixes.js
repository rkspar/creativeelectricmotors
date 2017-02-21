/* firefox getComputedStyle returning null bug */
if (window.getComputedStyle) {
    window.oldGetComputedStyle = window.getComputedStyle;
    window.getComputedStyle = function (element, pseudoElt) {
        var t = window.oldGetComputedStyle(element, pseudoElt);
        if (t === null) {
            return {
                getPropertyValue: function () {
                    return null
                }
            };
        } else {
            return t;
        }
    };
}