import * as assert from "assert";
import { Aborter } from "../src/Aborter";
import { QueueURL } from "../src/QueueURL";
import { getQSU } from "./utils";
import { record } from "./utils/recorder";
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

// tslint:disable:no-empty
describe("Aborter", () => {
  const serviceURL = getQSU();
  let queueName: string;
  let queueURL: QueueURL;

  let recorder: any;

  beforeEach(async function() {
    recorder = record(this);
    queueName = recorder.getUniqueName("queue");
    queueURL = QueueURL.fromServiceURL(serviceURL, queueName);
  });

  afterEach(async () => {
    recorder.stop();
  });

  it("should set value and get value successfully", async () => {
    const aborter = Aborter.none.withValue("mykey", "myvalue");
    assert.deepStrictEqual(aborter.getValue("mykey"), "myvalue");
  });

  it("should not abort after calling abort()", async () => {
    const cResp = await queueURL.create(Aborter.none);
    assert.ok(cResp.date);
    await queueURL.delete(Aborter.none);
  });

  it("should abort when calling abort() before request finishes", async () => {
    const aborter = Aborter.none;
    const response = queueURL.create(aborter);
    aborter.abort();
    try {
      await response;
      assert.fail();
    } catch (err) {}
  });

  it("should not abort when calling abort() after request finishes", async () => {
    const aborter = Aborter.none;
    await queueURL.create(aborter);
    aborter.abort();
    await queueURL.delete(Aborter.none);
  });

  it("should abort after aborter timeout", async () => {
    try {
      await queueURL.create(Aborter.timeout(1));
      assert.fail();
    } catch (err) {}
  });

  it("should abort after parent aborter calls abort()", async () => {
    try {
      const aborter = Aborter.none;
      const response = queueURL.create(aborter.withTimeout(10 * 60 * 1000));
      aborter.abort();
      await response;
      assert.fail();
    } catch (err) {}
  });

  it("should abort after parent aborter timeout", async () => {
    try {
      const aborter = Aborter.timeout(1);
      const response = queueURL.create(aborter.withTimeout(10 * 60 * 1000));
      await response;
      assert.fail();
    } catch (err) {}
  });
});
