// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }
      else if (lowerCaseMessage.includes("connor")) {
        this.actionProvider.itsTheDev()
      }
    }
  }
  
  export default MessageParser