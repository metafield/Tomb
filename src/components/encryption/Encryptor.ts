export class Encryptor {
  public alphabet = this.generateAlphabet()
  public cipher = this.generateAlphabet()
  public subTable: { [key: string]: string } = {}

  constructor() {
    console.log('built')

    this.scrambleCipher()
    this.buildSubstituteTable()
  }

  public decrypt(data: string): string {
    console.log('data: ', data)

    const metadata = data.slice(-86)
    console.log('metadata: ', metadata)

    const cipher = metadata.slice(1, 26)
    const hash = metadata.slice(-60)
    const body = data.slice(0, -85)
    console.log('cipher: ', cipher)
    console.log('body: ', body)

    this.setCipher(cipher)

    const message = [...body].map(char => this.revertChar(char)).join('')
    console.log(message)
    return message
  }

  public setCipher(cipher: string): void {
    this.cipher = cipher.split('')
    this.buildSubstituteTable()
  }

  public encrypt(input: string): string {
    const cleanedText: string = input.toLocaleLowerCase()

    const encryptedText = [...cleanedText].map((char): string => {
      const code = char.charCodeAt(0)

      if (code >= 97 && code < code + 26) {
        return this.convertChar(char)
      } else {
        return char
      }
    })
    return encryptedText.concat(this.cipher).join('')
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

  private convertChar(char: string): string {
    return this.subTable[char]
  }

  private revertChar(char: string): string {
    for (const key in this.subTable) {
      if (this.subTable[key] === char) {
        return key
      }
    }
    return char
  }
}
