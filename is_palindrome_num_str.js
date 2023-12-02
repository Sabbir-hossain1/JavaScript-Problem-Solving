function isPalindrome(input){
    clean_string = String(input).replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    return clean_string === clean_string.split('').reverse().join('')
}