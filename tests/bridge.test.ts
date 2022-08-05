import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { BridgeCallTriggered } from "../generated/schema"
import { BridgeCallTriggered as BridgeCallTriggeredEvent } from "../generated/Bridge/Bridge"
import { handleBridgeCallTriggered } from "../src/bridge"
import { createBridgeCallTriggeredEvent } from "./bridge-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let outbox = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let destAddr = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let data = Bytes.fromI32(1234567890)
    let newBridgeCallTriggeredEvent = createBridgeCallTriggeredEvent(
      outbox,
      destAddr,
      amount,
      data
    )
    handleBridgeCallTriggered(newBridgeCallTriggeredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BridgeCallTriggered created and stored", () => {
    assert.entityCount("BridgeCallTriggered", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BridgeCallTriggered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "outbox",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BridgeCallTriggered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "destAddr",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BridgeCallTriggered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "BridgeCallTriggered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "data",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
