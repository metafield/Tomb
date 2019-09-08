import { Encryptor } from '../../components/encryption/Encryptor'
import { staticCypher } from '../Helpers'
import { TabBarIOS } from 'react-native'

test('Correctly encrypts string', () => {
  const encryptor = new Encryptor()
  encryptor.cipher = staticCypher
  // TODO: the error is the buuildtable not being called
  const message = 'Hello there!'
  const encrypted = encryptor.encrypt(message)
  expect(encrypted).toBe(`vnzzu xvnyn!knefouspxgtbjyqzwavmdrhicl`)
})
