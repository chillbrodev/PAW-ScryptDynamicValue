# Paw-ScryptDynamicValue
Scrypt password hashing Dynamic Value Extension for [Paw](https://paw.cloud) which uses the [Scrypt-Async Module](https://github.com/dchest/scrypt-async-js)

## About Scrypt

[Scrypt](https://en.wikipedia.org/wiki/Scrypt) In cryptography, scrypt is a password-based key derivation function created by Colin Percival, originally for the Tarsnap online backup service. The algorithm was specifically designed to make it costly to perform large-scale custom hardware attacks by requiring large amounts of memory.

## About Scrypt-Async

Learn how to use [Scrypt-Async](https://github.com/dchest/scrypt-async-js) by visiting the author's GitHub.

## Usage

Install from Paw's official website, [https://paw.cloud/extensions/ScryptDynamicValue](https://paw.cloud/extensions/ScryptDynamicValue).

or

Clone the repo and follow the development steps to install the extension into PAW Extensions folder.

## Development

### Prerequisites

``` shell
npm install
```

### Build

``` shell
make build
```

### Install

``` shell
make install
```

### Usage in PAW

Add a field and right click to open the options menu.
Navigate to Extensions and select Scrypt Dynamic Value from the list.

## ChangeLog

### v1.0.0 - 2019-08-15

#### Added
- Scrypt password hashing

## LICENSE

BSD-like, see LICENSE file or MIT license at your choice.