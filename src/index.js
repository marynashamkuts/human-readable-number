module.exports = function toReadable(num) {
    const ones = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let result = [];

    var number = String(num)
        .split("")
        .map((num) => {
            return Number(num);
        });
    if (num === 0) return "zero";
    if (num < 20) {
        return ones[num - 1];
    }
    if (num < 100) {
        if (num == 20) {
            return tens[1];
        }
        result.push(tens[number[0] - 1]);
        if (number[1] !== 0) {
            result.push(ones[number[1] - 1]);
        }
    }

    if (num >= 100 && num < 1000) {
        result.push(ones[number[0] - 1]);
        result.push("hundred");

        if (number[1] === 1) {
            const str = "" + number[1] + number[2];

            result.push(ones[parseInt(str) - 1]);

            return result.join(" ");
        }

        if (number[1] != 0 && number[1] != 1) {
            result.push(tens[number[1] - 1]);
        }
        if (number[2] != 0) {
            result.push(ones[number[2] - 1]);
        }
    }

    return result.join(" ");
};

