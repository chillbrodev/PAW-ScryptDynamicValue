import Scrypt from 'scrypt-async';

class ScryptDynamicValue {
  evaluate(context) {
    if(!(this.input && this.salt && this.iteration && this.block && this.parallel && this.keyLength)) {
      return "Missing Params"
    }

    var key = ""
    Scrypt(this.input, this.salt, {
      N: this.iteration,
      r: this.block,
      p: this.parallel,
      dkLen: this.keyLength,
      encoding: this.encoding
    }, function(derivedKey) {
        console.log(derivedKey);
        key = derivedKey
    });

    return key
  }
}

Object.assign(ScryptDynamicValue, {
  identifier: 'com.cbd.ScryptDynamicValue',
  title: 'Scrypt Password Hash',
  help: 'https://github.com/chillbrodev/PAW-ScryptDynamicValue',
  inputs: [
    InputField("input", "Input", "String"),
    InputField("salt", "Salt", "String"),
    InputField("iteration", "Iteration Cost", "String"),
    InputField("block", "Block Size", "String"),
    InputField("parallel", "Parallel Factor", "String"),
    InputField("keyLength", "Key Length", "String"),
    InputField("encoding", "Encoding", 'Select', {
      choices: {
        'hex': 'Hex',
        'base64': 'Base64',
        'binary': 'Binary',
        'undefined': 'Byte Array',
      },
      persisted: true,
    }),
  ],
});

registerDynamicValueClass(ScryptDynamicValue);
