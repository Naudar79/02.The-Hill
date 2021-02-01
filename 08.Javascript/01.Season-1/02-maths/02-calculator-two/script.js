// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        switch (operation) {
            case 'addition':
                window.alert((new Number(document.getElementById("op-one").value)) + (new Number(document.getElementById("op-two").value)));
                break;
            case 'substraction':
                window.alert((new Number(document.getElementById("op-one").value)) - (new Number(document.getElementById("op-two").value)));
                break;
            case 'multiplication':
                window.alert((new Number(document.getElementById("op-one").value)) * (new Number(document.getElementById("op-two").value)));
                break;
            case 'division':
                window.alert((new Number(document.getElementById("op-one").value)) / (new Number(document.getElementById("op-two").value)));
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();