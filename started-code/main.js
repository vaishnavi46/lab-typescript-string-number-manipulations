"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.printWithSpace = function (sentence) {
        var letter = new String();
        for (var i = 0; i < sentence.length; i++) {
            //console.log ("Block statement execution no." + i);
            letter = letter + sentence.charAt(i) + " ";
        }
        console.log(letter);
    };
    StringManipulations.prototype.findVowel = function (str) {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            var ch = str.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                count += 1;
            }
        }
        console.log(count);
    };
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        var str3 = new String("prakash");
        console.log(word + " " + str3);
        console.log(word.slice(2));
        console.log(word.length);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var count = 0;
        for (var i = 1; i <= num; i++) {
            if (num % i == 0) {
                count += 1;
            }
        }
        if (count == 2) {
            console.log("prime");
        }
        else {
            console.log("not");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        var current_num = 0, current_num1 = 0, current_num2 = 0;
        while (num != 0) {
            current_num = current_num + Math.floor(num % 10);
            num = (num / 10);
            //console.log(Math.floor(num%10));
        }
        //console.log(current_num);
        while (current_num != 0) {
            current_num1 = current_num1 + Math.floor(current_num % 10);
            current_num = (current_num / 10);
            //console.log(Math.floor(num%10));
        }
        //console.log(current_num1);
        while (current_num1 != 0) {
            current_num2 = current_num2 + Math.floor(current_num1 % 10);
            current_num1 = (current_num1 / 10);
            //console.log(Math.floor(num%10));
        }
        //console.log(current_num2);
        if (current_num2 == 1) {
            console.log("its a magic number");
        }
        else {
            console.log("not a magic number");
        }
    };
    return NumbersManipulations;
}());
var obj = new StringManipulations();
// obj.print("surya");
// obj.printWithSpace("prograd");
// obj.findVowel("vaishu");
var obj1 = new NumbersManipulations();
// obj1.findPrime(20);
obj1.findMagic(199);
