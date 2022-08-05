import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  InboxMessageDelivered,
  InboxMessageDeliveredFromOrigin,
  PauseToggled,
  RewriteToggled,
  WhitelistSourceUpdated
} from "../generated/Inbox/Inbox"

export function createInboxMessageDeliveredEvent(
  messageNum: BigInt,
  data: Bytes
): InboxMessageDelivered {
  let inboxMessageDeliveredEvent = changetype<InboxMessageDelivered>(
    newMockEvent()
  )

  inboxMessageDeliveredEvent.parameters = new Array()

  inboxMessageDeliveredEvent.parameters.push(
    new ethereum.EventParam(
      "messageNum",
      ethereum.Value.fromUnsignedBigInt(messageNum)
    )
  )
  inboxMessageDeliveredEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return inboxMessageDeliveredEvent
}

export function createInboxMessageDeliveredFromOriginEvent(
  messageNum: BigInt
): InboxMessageDeliveredFromOrigin {
  let inboxMessageDeliveredFromOriginEvent = changetype<
    InboxMessageDeliveredFromOrigin
  >(newMockEvent())

  inboxMessageDeliveredFromOriginEvent.parameters = new Array()

  inboxMessageDeliveredFromOriginEvent.parameters.push(
    new ethereum.EventParam(
      "messageNum",
      ethereum.Value.fromUnsignedBigInt(messageNum)
    )
  )

  return inboxMessageDeliveredFromOriginEvent
}

export function createPauseToggledEvent(enabled: boolean): PauseToggled {
  let pauseToggledEvent = changetype<PauseToggled>(newMockEvent())

  pauseToggledEvent.parameters = new Array()

  pauseToggledEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return pauseToggledEvent
}

export function createRewriteToggledEvent(enabled: boolean): RewriteToggled {
  let rewriteToggledEvent = changetype<RewriteToggled>(newMockEvent())

  rewriteToggledEvent.parameters = new Array()

  rewriteToggledEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return rewriteToggledEvent
}

export function createWhitelistSourceUpdatedEvent(
  newSource: Address
): WhitelistSourceUpdated {
  let whitelistSourceUpdatedEvent = changetype<WhitelistSourceUpdated>(
    newMockEvent()
  )

  whitelistSourceUpdatedEvent.parameters = new Array()

  whitelistSourceUpdatedEvent.parameters.push(
    new ethereum.EventParam("newSource", ethereum.Value.fromAddress(newSource))
  )

  return whitelistSourceUpdatedEvent
}
