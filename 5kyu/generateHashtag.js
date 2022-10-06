// The Hashtag Generator

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// Solution:
function generateHashtag (str) {
    if(str.trim() == '') return false
    const hashTag = '#' + str
        .split(' ')
        .filter(c => c != ' ')
        .map(c => c.charAt(0).toUpperCase() + c.slice(1))
        .join('')
    return hashTag.length > 140 ? false : hashTag
}