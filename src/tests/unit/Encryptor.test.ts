import { Encryptor } from '../../components/encryption/Encryptor'
import { staticCypher } from '../Helpers'

test('Correctly encrypts string', () => {
  const encryptor = new Encryptor()
  encryptor.cipher = staticCypher
  const message = 'Hello there!'
  expect(encryptor.encrypt(message)).toHaveReturnedWith(
    `vnzzu xvnyn!knefouspxgtbjyqzwavmdrhicl`
  )
})
