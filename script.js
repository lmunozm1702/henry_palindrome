const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

const checkPalindrome = str => {
  //Remove all non alphanumeric characters and set to lowercase
  let strNormalized = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  if (strNormalized === '') {
    alert('Please input a value.');
    return;
  }

  if (strNormalized === strNormalized.split('').reverse().join('')) {
    result.innerHTML = `${str} is a palindrome.`;
  }
  else {
    result.innerHTML = `${str} is not a palindrome.`;
  }

  result.classList.remove('hidden');
};

checkBtn.addEventListener('click', () => {
  checkPalindrome(textInput.value);
  textInput.value = '';
});


