/*
Copyright (c) 2019 Jon Holtan. @chillbrodev All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

   * Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
   * Redistributions in binary form must reproduce the above
copyright notice, this list of conditions and the following disclaimer
in the documentation and/or other materials provided with the
distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
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
