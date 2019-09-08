import { Encryptor } from '../../components/encryption/Encryptor'
import { staticCipher, hashedPassword } from '../Helpers'

test('Correctly encrypts string with cipher', () => {
  const encryptor = new Encryptor()
  encryptor.setCipher(staticCipher)
  const message = 'Hello there!'
  const encrypted = encryptor.encrypt(message)
  expect(encrypted).toBe('pobbq mpoao!knefouspxgtbjyqzwavmdrhicl')
})

test('Correctly decrypts string with cipher', () => {
  const encryptor = new Encryptor()
  const encrypted = 'pobbq mpoao!knefouspxgtbjyqzwavmdrhicl'
  const message = encryptor.decrypt(encrypted + hashedPassword)

  expect(message).toBe('hello there!') // Note the lower case.
})
