import { BigInt } from "@graphprotocol/graph-ts"
import {
  Inbox,
  InboxMessageDelivered as InboxMessageDeliveredEvent,
  InboxMessageDeliveredFromOrigin,
  PauseToggled,
  RewriteToggled,
  WhitelistSourceUpdated
} from "../generated/Inbox/Inbox"
import { InboxMessageDelivered } from "../generated/schema"

export function handleInboxMessageDelivered(
  event: InboxMessageDeliveredEvent
): void {
  let entity = new InboxMessageDelivered(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  // Entity fields can be set based on event parameters
  entity.messageNum = event.params.messageNum
  entity.data = event.params.data

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.bridge(...)
  // - contract.isCreateRetryablePaused(...)
  // - contract.isMaster(...)
  // - contract.sendContractTransaction(...)
  // - contract.sendL2Message(...)
  // - contract.sendL2MessageFromOrigin(...)
  // - contract.sendUnsignedTransaction(...)
  // - contract.shouldRewriteSender(...)
  // - contract.whitelist(...)
}

export function handleInboxMessageDeliveredFromOrigin(
  event: InboxMessageDeliveredFromOrigin
): void {}

export function handlePauseToggled(event: PauseToggled): void {}

export function handleRewriteToggled(event: RewriteToggled): void {}

export function handleWhitelistSourceUpdated(
  event: WhitelistSourceUpdated
): void {}
