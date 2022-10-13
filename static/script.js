let classcount = {0: 354678, 1: 2004954, 2: 16133, 3: 121514, 4: 66903, 5: 441696, 6: 1899, 7: 19542, 8: 91973, 9: 606577, 10: 2715, 11: 26407, 12: 13946, 13: 111947, 14: 236, 15: 3191, 16: 351430, 17: 1977297, 18: 15830, 19: 119904, 20: 66183, 21: 436069, 22: 2005, 23: 19067, 24: 90498, 25: 596596, 26: 2623, 27: 25974, 28: 13769, 29: 110556, 30: 217, 31: 3132, 32: 363234, 33: 2046381, 34: 16035, 35: 124620, 36: 68600, 37: 450789, 38: 2051, 39: 19814, 40: 94013, 41: 618066, 42: 2642, 43: 26452, 44: 14387, 45: 114106, 46: 207, 47: 3198, 48: 358205, 49: 2016391, 50: 16378, 51: 122859, 52: 67531, 53: 444218, 54: 1977, 55: 19297, 56: 92915, 57: 609532, 58: 2705, 59: 26418, 60: 13983, 61: 112221, 62: 213, 63: 3120, 64: 23495, 65: 133179, 66: 1032, 67: 8153, 68: 4496, 69: 29441, 70: 126, 71: 1290, 72: 6052, 73: 40204, 74: 197, 75: 1728, 76: 948, 77: 7501, 78: 13, 79: 215, 80: 23597, 81: 132126, 82: 1068, 83: 7933, 84: 4409, 85: 29149, 86: 121, 87: 1265, 88: 5973, 89: 39839, 90: 164, 91: 1753, 92: 949, 93: 7431, 94: 7, 95: 224, 96: 23943, 97: 136549, 98: 1104, 99: 8319, 100: 4552, 101: 29750, 102: 132, 103: 1341, 104: 6117, 105: 41075, 106: 185, 107: 1801, 108: 909, 109: 7509, 110: 21, 111: 231, 112: 23752, 113: 133993, 114: 1106, 115: 8110, 116: 4497, 117: 29989, 118: 147, 119: 1276, 120: 6183, 121: 40654, 122: 183, 123: 1804, 124: 942, 125: 7442, 126: 16, 127: 218, 128: 23842, 129: 134518, 130: 1139, 131: 8188, 132: 4593, 133: 29812, 134: 137, 135: 1242, 136: 6234, 137: 40676, 138: 186, 139: 1788, 140: 951, 141: 7439, 142: 10, 143: 186, 144: 23602, 145: 132960, 146: 1017, 147: 8105, 148: 4558, 149: 29209, 150: 143, 151: 1315, 152: 6105, 153: 40350, 154: 201, 155: 1731, 156: 978, 157: 7451, 158: 12, 159: 188, 160: 23914, 161: 137186, 162: 1062, 163: 8271, 164: 4516, 165: 30264, 166: 142, 167: 1321, 168: 6361, 169: 41417, 170: 177, 171: 1766, 172: 1023, 173: 7679, 174: 13, 175: 220, 176: 24193, 177: 135472, 178: 1166, 179: 8235, 180: 4491, 181: 29843, 182: 127, 183: 1307, 184: 6202, 185: 41287, 186: 164, 187: 1723, 188: 953, 189: 7418, 190: 13, 191: 218, 192: 1599, 193: 9322, 194: 67, 195: 585, 196: 296, 197: 1984, 198: 6, 199: 87, 200: 401, 201: 2796, 202: 12, 203: 126, 204: 57, 205: 486, 206: 1, 207: 21, 208: 1584, 209: 9016, 210: 82, 211: 548, 212: 291, 213: 1955, 214: 9, 215: 103, 216: 412, 217: 2811, 218: 12, 219: 119, 220: 63, 221: 486, 222: 1, 223: 14, 224: 1651, 225: 9267, 226: 79, 227: 556, 228: 311, 229: 2157, 230: 7, 231: 77, 232: 419, 233: 2819, 234: 12, 235: 146, 236: 73, 237: 529, 239: 9, 240: 1631, 241: 9228, 242: 72, 243: 588, 244: 322, 245: 1964, 246: 8, 247: 102, 248: 419, 249: 2859, 250: 13, 251: 117, 252: 57, 253: 508, 254: 3, 255: 19};

function binaryToHex(s) {
    var i, k, part, accum, ret = '';
    for (i = s.length-1; i >= 3; i -= 4) {
        // extract out in substrings of 4 and convert to hex
        part = s.substr(i+1-4, 4);
        accum = 0;
        for (k = 0; k < 4; k += 1) {
            if (part[k] !== '0' && part[k] !== '1') {
                // invalid character
                alert("INVALID");
                return;
            }
            // compute the length 4 substring
            accum = accum * 2 + parseInt(part[k], 10);
        }
        if (accum >= 10) {
            // 'A' to 'F'
            ret = String.fromCharCode(accum - 10 + 'A'.charCodeAt(0)) + ret;
        } else {
            // '0' to '9'
            ret = String(accum) + ret;
        }
    }
    // remaining characters, i = 0, 1, or 2
    if (i >= 0) {
        accum = 0;
        // convert from front
        for (k = 0; k <= i; k += 1) {
            if (s[k] !== '0' && s[k] !== '1') {
                return { valid: false };
            }
            accum = accum * 2 + parseInt(s[k], 10);
        }
        // 3 bits, value cannot exceed 2^3 - 1 = 7, just convert
        ret = String(accum) + ret;
    }
    return ret;
}

function hexToBinary(s) {
    var i, k, part, ret = '';
    // lookup table for easier conversion. '0' characters are padded for '1' to '7'
    var lookupTable = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100',
        '5': '0101', '6': '0110', '7': '0111', '8': '1000', '9': '1001',
        'a': '1010', 'b': '1011', 'c': '1100', 'd': '1101',
        'e': '1110', 'f': '1111',
        'A': '1010', 'B': '1011', 'C': '1100', 'D': '1101',
        'E': '1110', 'F': '1111'
    };
    for (i = 0; i < s.length; i += 1) {
        if (lookupTable.hasOwnProperty(s[i])) {
            ret += lookupTable[s[i]];
        } else {
            alert("invalid code");
            return;
        }
    }
    return ret;
}

let filterState = {f1:"nocry", f2: false, f3: true, f4: false, f50: true, f51: true, f52: true, f53: true, f6: false, f7: false};

let classIn = function(cls){
  if (filterState.f1 == "lava" && ((cls & 1) == 0)){
    return "0";
  }
  if (filterState.f1 == "nocry" && ((cls & 1) == 1)){
    return "0";
  }
  if (filterState.f2 == true && ((cls >> 1) & 1) == 0){
    return "0";
  }
  if (filterState.f3 == true && ((cls >> 2) & 1) == 0){
    return "0";
  }
  if (filterState.f4 == true && ((cls >> 3) & 1) == 0){
    return "0";
  }
  let btype = ((cls >> 4) & 3);
  if (filterState.f50 == false && btype == 0){
    return "0";
  }
  if (filterState.f51 == false && btype == 1){
    return "0";
  }  
  if (filterState.f52 == false && btype == 2){
    return "0";
  }  
  if (filterState.f53 == false && btype == 3){
    return "0";
  } 
  if (filterState.f6 == true && ((cls >> 6) & 1) == 0){
    return "0";
  }
  if (filterState.f7 == true && ((cls >> 7) & 1) == 0){
    return "0";
  }
  return "1";
}

let displayCode = function(){
  $("#hexcode").val("");
  $("#yourcode").html("...");
  let result = "";
  let i = 0;
  let totalWeight = 0;
  for(i=0; i < 256; i++){
    let temp = classIn(i);
    result += temp;
    if (temp == "1"){
      if (classcount.hasOwnProperty(i)){
        totalWeight += classcount[i];
      }
    }
  }
  if (filterState.f6 == true){
    result += "1";
  } else {
    result += "0";
  }
  if (filterState.f7 == true){
    result += "1";
  } else {
    result += "0";
  }
  result += "00";
  let approxWeight = totalWeight*6;
  if (approxWeight < 140000){
    $("#weight").html("too strong of a filter: " + approxWeight);
  } else {
    let theCode = binaryToHex(result);
    $("#hexcode").val(theCode);
    $("#yourcode").html(theCode);
    $("#weight").html("good to go: " + approxWeight);    
  }
}

$(document).ready(function(){
  $("input[name=f1]").change(evt=>{
    let temp = $(evt.currentTarget).val();
    filterState.f1 = temp;
    displayCode();
  });
  $("#f2").change(evt=>{
    let temp = $(evt.currentTarget).prop("checked");
    filterState.f2 = temp;
    displayCode();
  });
  $("#f3").change(evt=>{
    let temp = $(evt.currentTarget).prop("checked");
    filterState.f3 = temp;
    displayCode();
  });
  $("#f4").change(evt=>{
    let temp = $(evt.currentTarget).prop("checked");
    filterState.f4 = temp;
    displayCode();
  });
  $("#f6").change(evt=>{
    let temp = $(evt.currentTarget).prop("checked");
    filterState.f6 = temp;
    displayCode();
  });
  $("#f7").change(evt=>{
    let temp = $(evt.currentTarget).prop("checked");
    filterState.f7 = temp;
    displayCode();
  });        
  $("#f50").change(evt=>{
    let temp = $(evt.currentTarget).prop("checked");
    filterState.f50 = temp;
    displayCode();
  });        
  $("#f51").change(evt=>{
    let temp = $(evt.currentTarget).prop("checked");
    filterState.f51 = temp;
    displayCode();
  });        
  $("#f52").change(evt=>{
    let temp = $(evt.currentTarget).prop("checked");
    filterState.f52 = temp;
    displayCode();
  });        
  $("#f53").change(evt=>{
    let temp = $(evt.currentTarget).prop("checked");
    filterState.f53 = temp;
    displayCode();
  });  
//    <input type="text" id="hexcode" placeholder="Your filter's code">
//    <button class="button" id="fetchseed">Generate A Seed</button>
//    <h3 id="response"></h3>
  $("#fetchseed").click(()=>{
    let code = $("#hexcode").val();
    if (code.match(/^[0-9A-Fa-f]{65}$/)){
      $("#response").html("requesting structure seed...");
      $.ajax({
        method:"GET",
        url:"/proxy1",
        data: {"filter":code},
        success: function(sseed){
          $("#response").html("Received structure seed, finding a biome fit...");
          console.log(sseed);
          $.ajax({
            method:"GET",
            url:"/proxy2",
            data: sseed,
            success: function(worldseed){
              $("#response").html(`Seed: ${worldseed}`);
              console.log(worldseed);
              $("#verification").html(`Temp Token: ${JSON.stringify(sseed)}`);
            }
          });
        }
      });
    }
  });
});