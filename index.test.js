const reverseObject = require('./index')

// Input:
let inputValue = {
  hired: {
    be: {
      to: {
      	deserve: 'I'
      }
    }
  }
};
 
// Output:
let outputValue = {
  I: {
    deserve: {
      to: {
         be: 'hired'
      }
    }
  }
};

describe('測試 reverseObject function', () => {
	test('物件反轉', () => {
		expect(reverseObject(inputValue)).toStrictEqual(outputValue)
	})
})
