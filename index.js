const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');

checkBtn.addEventListener('click', () => {
  if (textInput.value === '') {
    alert('Please input a value.');
    return;
  }
  checkPalindrome();
  textInput.value = '';
});

checkPalindrome = str => {

};

