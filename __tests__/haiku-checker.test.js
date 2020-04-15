import { checkHaiku } from './../src/main.js'

describe("haiku checker", ()=>{
  test('haiku checker returns boolean',  ()=>{
    expect(typeof checkHaiku('poem')).toEqual('bool')
  })
})