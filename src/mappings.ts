import { EthereumBlock } from '@graphprotocol/graph-ts'

import { BlockGasUsage } from '../generated/schema'

export function handleBlock(block: EthereumBlock): void {
  let entity = new BlockGasUsage(block.number.toString())
  entity.blockNumber = block.number
  entity.blockSize = block.size
  entity.gasUsed = block.gasUsed
  entity.gasLimit = block.gasLimit
  entity.timestamp = block.timestamp

  entity.save()
}
