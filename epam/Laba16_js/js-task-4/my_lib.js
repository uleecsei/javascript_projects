function my$(selector) {
    sel = document.querySelectorAll(selector);
    NodeList.prototype.eq = function (n) {
        return document.querySelectorAll(`${selector}:nth-child(${n + 1})`);
    }
    NodeList.prototype.gt = function (n) {
        return document.querySelectorAll(`${selector}:nth-child(n + ${n + 2})`);
    }
    NodeList.prototype.lt = function (n) {
        return document.querySelectorAll(`${selector}:nth-child(-n + ${n})`);
    }
    NodeList.prototype.addClass = function (name) {
        sel.forEach(element => {
            element.setAttribute('class', name);
        });
        return sel;
    }
    NodeList.prototype.hasClass = function (name) {
        for (let i of sel) {
            if (i.getAttribute('class') != name) {
                return false;
            }
        }
        return true;
    }
    NodeList.prototype.removeClass = function (name) {
        sel.forEach((element) => {
            let attr = element.getAttribute('class');
            if (!attr) return;
            if (attr.indexOf(name) + 1) {
                attr = attr.replace(name, "")
                element.setAttribute('class', attr);
            }
        });
        return sel;
    }
    NodeList.prototype.toggleClass = function (name) {
        return sel.hasClass(name) ? sel.removeClass(name) : sel.addClass(name);
    }
    NodeList.prototype.html = function (code) {
        sel.forEach((element) => {
            element.innerHTML = code;
        });
        return sel;
    }
    NodeList.prototype.text = function (code) {
        code = code.replace(/</g, "&lt;").replace(/>/g, "&gt");
        sel.forEach((element) => {
            element.innerHTML = code;
        });
        return sel;
    }
    NodeList.prototype.css = function (prop, value) {
        prop = prop.split('-');
        if (prop[1]) {
            prop = prop[0] + prop[1][0].toUpperCase() + prop[1].slice(1);
        } else {
            prop = prop.join("");
        }
        if (!value) {
            let result = "";
            sel.forEach((element) => {
                if (!/0, 0, 0/g.test(getComputedStyle(element)[prop])){
                    result += getComputedStyle(element)[prop];
                }
            })
            return result;
        }
        sel.forEach((element) => {
            element.style[prop] = value;
        });
        return sel;
    }
    return sel;
}