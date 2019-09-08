import { Encryptor } from '../../components/encryption/Encryptor'
import { staticCipher } from '../Helpers'

test('Correctly encrypts string with cipher', () => {
  const encryptor = new Encryptor()
  encryptor.setCipher(staticCipher)
  const message = 'Hello there!'
  const encrypted = encryptor.encrypt(message)
  expect(encrypted).toBe(`pobbq mpoao!knefouspxgtbjyqzwavmdrhicl`)
})
