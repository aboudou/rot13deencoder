function initMap() {
  var rot13Map = new Array();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (i = 0; i < alphabet.length; i++)
    rot13Map[alphabet.charAt(i)] = alphabet.charAt((i+13)%26);
  for (i = 0; i < alphabet.length; i++)
    rot13Map[alphabet.charAt(i).toUpperCase()] = alphabet.charAt((i+13)%26).toUpperCase();
  return rot13Map;
}

function initLeetMap() {
  var leet13Map = new Array();
  var alphabet =  'abcdefghijklmnopqrstuvwxyz';
  var leetlower = '48cd3f9h!jk1mn0pqr57uvwxy2';
  var leetupper = '48CD3F9H!JK1MN0PQR57UVWXY2';

  for (i = 0; i < alphabet.length; i++)
    leet13Map[alphabet.charAt(i)] = leetlower.charAt((i+13)%26);
  for (i = 0; i < alphabet.length; i++)
    leet13Map[alphabet.charAt(i).toUpperCase()] = leetupper.charAt((i+13)%26);
  return leet13Map;
}

function rot13Convert(text) {
  if (!rot13Map)
    rot13Map = initMap();
  var output = "";
  for (i = 0; i < text.length; i++) {
    var c = text.charAt(i);

    output += (c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z' ? rot13Map[c] : c);
  }
  return output;
}

function leet13Convert(text) {
  if (!leet13Map)
    leet13Map = initLeetMap();
  var output = "";
  for (i = 0; i < text.length; i++) {
    var c = text.charAt(i);

    output += (c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z' ? leet13Map[c] : c);
  }
  return output;
}

function update() {
  if (document.getElementById('text').value == last)
    return;

  last = document.getElementById('text').value;
  switch (encoding) {
    case "rot13": {
      document.getElementById('rot13').value = rot13Convert(last);
      break;
    }
    case "leet13": {
      document.getElementById('rot13').value = leet13Convert(last);
      break;
    }
  }
}
 
function undo() {
  last = '';
  update();
}
