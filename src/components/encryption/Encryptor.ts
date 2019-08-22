export class Encryptor {
  public alphabet = this.generateAlphabet()
  public cipher = this.generateAlphabet()
  public subTable: { [key: string]: string } = {}

  constructor() {
    console.log('built')

    this.scrambleCipher()
    this.buildSubstituteTable()
  }

  public encrypt(input): string {
    const cleanedText: string = input.toLocaleLowerCase()

    const encryptedText = [...cleanedText].map((char, index): string => {
      const code = char.charCodeAt(0)

      if (code >= 97 && code < code + 26) {
        return this.subChar(char)
      } else {
        return char
      }
    })
    return encryptedText.join()
  }

  private generateAlphabet(): string[] {
    return new Array<String>(26).fill('').map((_, index): string => {
      const firstLetterCode = 97
      return String.fromCharCode(firstLetterCode + index)
    })
  }

  private scrambleCipher(): void {
    const randomIndex = (): number => Math.floor(Math.random() * 26)

    this.cipher.forEach((char, index, array) => {
      const destIndex = randomIndex()
      array[index] = array[destIndex]
      array[destIndex] = char
    })
  }

  private buildSubstituteTable() {
    this.alphabet.forEach((char, index) => {
      this.subTable[char] = this.cipher[index]
    })
  }

  private subChar(char: string): string {
    return this.subTable[char]
  }
}
