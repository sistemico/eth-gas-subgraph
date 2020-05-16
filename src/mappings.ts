import { ethereum } from '@graphprotocol/graph-ts'

import { Block } from '../generated/schema'

export function handleBlock(block: ethereum.Block): void {
  let entity = new Block(block.number.toString())
  entity.number = block.number
  entity.size = block.size

  entity.gasUsed = block.gasUsed
  entity.gasLimit = block.gasLimit
  entity.timestamp = block.timestamp

  entity.save()
}
