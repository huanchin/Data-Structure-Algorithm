/* Write a function that given a sorted array of integers and a number. 
Find if there’s any pair in the array that has average of the given number. 
Find all of them. There might be multiple pairs fit the condition. */
// averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5)
// The number pair is -11 and 14, 0 and 3, 1 and 2

function averagePair(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  const result = [];

  while (left < right) {
    const temp_avg = (arr[left] + arr[right]) / 2;
    if (temp_avg > num) {
      right--;
    } else if (temp_avg < num) {
      left++;
    } else if (temp_avg == num) {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    }
  }

  console.log(result);
  return result;
}

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

/* Write a function that checks if the input string is a palindrome. 
Palindrome is a word that can be read forwards and backwards. */
// Ex.
// isPalindrome('awesome') false
// isPalindrome('foobar') false
// isPalindrome('tacocat') true
// isPalindrome('amanaplanacanalpanama') true

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
}

isPalindrome("awesome");
isPalindrome("foobar");
isPalindrome("tacocat");
isPalindrome("amanaplanacanalpanama");

/*A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
Write a function that checks if one string is a subsequence of the other string. */
// Ex.
// isSubsequence("hello", "hello Dear"); true
// isSubsequence(“book", “brooklyn"); true
// isSubsequence("abc", "bac"); false (order matters)

function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;

  if (str1.length > str2.length) {
    console.log(false);
    return false;
  }

  while (pointer1 < str1.length) {
    if (pointer2 > str2.length) {
      console.log(false);
      return false;
    }
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
      pointer2++;
    } else if (str1[pointer1] !== str2[pointer2]) {
      pointer2++;
    }
  }

  console.log(true);
  return true;
}

isSubsequence("hello", "hello Dear");
isSubsequence("book", "brooklyn");
isSubsequence("abc", "bac");
