import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  OutBoxTransactionExecuted,
  OutboxEntryCreated
} from "../generated/Outbox/Outbox"

export function createOutBoxTransactionExecutedEvent(
  destAddr: Address,
  l2Sender: Address,
  outboxEntryIndex: BigInt,
  transactionIndex: BigInt
): OutBoxTransactionExecuted {
  let outBoxTransactionExecutedEvent = changetype<OutBoxTransactionExecuted>(
    newMockEvent()
  )

  outBoxTransactionExecutedEvent.parameters = new Array()

  outBoxTransactionExecutedEvent.parameters.push(
    new ethereum.EventParam("destAddr", ethereum.Value.fromAddress(destAddr))
  )
  outBoxTransactionExecutedEvent.parameters.push(
    new ethereum.EventParam("l2Sender", ethereum.Value.fromAddress(l2Sender))
  )
  outBoxTransactionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "outboxEntryIndex",
      ethereum.Value.fromUnsignedBigInt(outboxEntryIndex)
    )
  )
  outBoxTransactionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionIndex",
      ethereum.Value.fromUnsignedBigInt(transactionIndex)
    )
  )

  return outBoxTransactionExecutedEvent
}

export function createOutboxEntryCreatedEvent(
  batchNum: BigInt,
  outboxEntryIndex: BigInt,
  outputRoot: Bytes,
  numInBatch: BigInt
): OutboxEntryCreated {
  let outboxEntryCreatedEvent = changetype<OutboxEntryCreated>(newMockEvent())

  outboxEntryCreatedEvent.parameters = new Array()

  outboxEntryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "batchNum",
      ethereum.Value.fromUnsignedBigInt(batchNum)
    )
  )
  outboxEntryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "outboxEntryIndex",
      ethereum.Value.fromUnsignedBigInt(outboxEntryIndex)
    )
  )
  outboxEntryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "outputRoot",
      ethereum.Value.fromFixedBytes(outputRoot)
    )
  )
  outboxEntryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "numInBatch",
      ethereum.Value.fromUnsignedBigInt(numInBatch)
    )
  )

  return outboxEntryCreatedEvent
}
