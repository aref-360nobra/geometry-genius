export function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;
    const inputFieldValueAtFloat = parseFloat(inputFieldValue);

    return inputFieldValueAtFloat;
}
export function multiplier(num1, num2) {
    return num1 * num2;
}
