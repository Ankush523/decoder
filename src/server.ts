import { Dcyfr } from 'bytekode-eth-decoder'
import  AddAbi  from './abi.json'
const abi = AddAbi
const dcyfr = new Dcyfr(abi)
const data = '0xcf81464b'
const decodedResponse = dcyfr.getTxInfoFromData({ data })
console.log(decodedResponse)
const func = decodedResponse?.func
console.log("Function Executed : ", func)