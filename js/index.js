const n = parseInt(prompt('Введіть порядковий номер числа Фібоначчі: '));
first = 1;
second = 1;

for (let i = 3; i <= n; i++) {
    next = first + second;
    if (i < n) {
        first = second;
        second = next;
    } else {
        if (i === n) {
            alert(next);
        } else {
            alert('Невідоме значення');
        }
    }
}

function fibRec(n) {
    return fibRec(n-1)+fibRec(n-2);
    if (n >= 1) {
        alert.fibRec(n);
    }else {
        alert('')
    }
}