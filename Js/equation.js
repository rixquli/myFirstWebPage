const element = document.querySelector('input');
const toReplace = document.getElementById('replace');
const pos = [];
const equapos = [];
element.addEventListener('change', () => {
  const elementValue = document.getElementById('input').value;

  for (let i = 0; i < elementValue.length; i += 1) {
    pos[i] = elementValue.charAt(i);
  }

  for (let c = 0; c < elementValue.length; c += 2) { // a metre 2 par deffaut sauf test
    // first
    if (
      pos[c] === '0'
      || pos[c] === '1'
      || pos[c] === '2'
      || pos[c] === '3'
      || pos[c] === '4'
      || pos[c] === '5'
      || pos[c] === '6'
      || pos[c] === '7'
      || pos[c] === '8'
      || pos[c] === '9'
      || pos[c] === '+'
      || pos[c] === '-'
      || pos[c] === 'y'
    ) {
      equapos[c] = elementValue.charAt(c);

      for (let i = c + 1; i < elementValue.length; i += 1) {
        i = i;
        if (
          pos[i] === 'y'
          || pos[i] === '0'
          || pos[i] === '1'
          || pos[i] === '2'
          || pos[i] === '3'
          || pos[i] === '4'
          || pos[i] === '5'
          || pos[i] === '6'
          || pos[i] === '7'
          || pos[i] === '8'
          || pos[i] === '9'
        ) {
          equapos[c] += elementValue.charAt(i);
        } else i = c + 1;
        if (pos[i] === '=') {
          equapos[i] = '=';
          break;
        } else i = c + 1;
        if (
          pos[i] === '-'
          || pos[i] === '+'
          || pos[i] === '*'
          || pos[i] === '/'
        ) {
          equapos[i] = elementValue.charAt(i);
          break;
        }
      }
    } else {
      break;
    }
  }
  toReplace.innerHTML = `cc mais ${equapos}`;
});
