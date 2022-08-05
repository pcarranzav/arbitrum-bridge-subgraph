import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  BridgeCallTriggered,
  InboxToggle,
  MessageDelivered,
  OutboxToggle,
  OwnershipTransferred
} from "../generated/Bridge/Bridge"

export function createBridgeCallTriggeredEvent(
  outbox: Address,
  destAddr: Address,
  amount: BigInt,
  data: Bytes
): BridgeCallTriggered {
  let bridgeCallTriggeredEvent = changetype<BridgeCallTriggered>(newMockEvent())

  bridgeCallTriggeredEvent.parameters = new Array()

  bridgeCallTriggeredEvent.parameters.push(
    new ethereum.EventParam("outbox", ethereum.Value.fromAddress(outbox))
  )
  bridgeCallTriggeredEvent.parameters.push(
    new ethereum.EventParam("destAddr", ethereum.Value.fromAddress(destAddr))
  )
  bridgeCallTriggeredEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  bridgeCallTriggeredEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return bridgeCallTriggeredEvent
}

export function createInboxToggleEvent(
  inbox: Address,
  enabled: boolean
): InboxToggle {
  let inboxToggleEvent = changetype<InboxToggle>(newMockEvent())

  inboxToggleEvent.parameters = new Array()

  inboxToggleEvent.parameters.push(
    new ethereum.EventParam("inbox", ethereum.Value.fromAddress(inbox))
  )
  inboxToggleEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return inboxToggleEvent
}

export function createMessageDeliveredEvent(
  messageIndex: BigInt,
  beforeInboxAcc: Bytes,
  inbox: Address,
  kind: i32,
  sender: Address,
  messageDataHash: Bytes
): MessageDelivered {
  let messageDeliveredEvent = changetype<MessageDelivered>(newMockEvent())

  messageDeliveredEvent.parameters = new Array()

  messageDeliveredEvent.parameters.push(
    new ethereum.EventParam(
      "messageIndex",
      ethereum.Value.fromUnsignedBigInt(messageIndex)
    )
  )
  messageDeliveredEvent.parameters.push(
    new ethereum.EventParam(
      "beforeInboxAcc",
      ethereum.Value.fromFixedBytes(beforeInboxAcc)
    )
  )
  messageDeliveredEvent.parameters.push(
    new ethereum.EventParam("inbox", ethereum.Value.fromAddress(inbox))
  )
  messageDeliveredEvent.parameters.push(
    new ethereum.EventParam(
      "kind",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(kind))
    )
  )
  messageDeliveredEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  messageDeliveredEvent.parameters.push(
    new ethereum.EventParam(
      "messageDataHash",
      ethereum.Value.fromFixedBytes(messageDataHash)
    )
  )

  return messageDeliveredEvent
}

export function createOutboxToggleEvent(
  outbox: Address,
  enabled: boolean
): OutboxToggle {
  let outboxToggleEvent = changetype<OutboxToggle>(newMockEvent())

  outboxToggleEvent.parameters = new Array()

  outboxToggleEvent.parameters.push(
    new ethereum.EventParam("outbox", ethereum.Value.fromAddress(outbox))
  )
  outboxToggleEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return outboxToggleEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
