const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
  checkPalindrome(textInput.value);
  textInput.value = '';
});

checkPalindrome = str => {
  //Remove all non alphanumeric characters and set to lowercase
  strNormalized = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  if (strNormalized === '') {
    result.innerHTML = 'Please input a value.';
    return;
  }

  if (strNormalized === strNormalized.split('').reverse().join('')) {
    result.innerHTML = `${str} is a palindrome!`;
  }
  else {
    result.innerHTML = `${str} is not a palindrome.`;
  }
};

