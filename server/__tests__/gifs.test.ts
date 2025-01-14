/* eslint-disable @typescript-eslint/ban-ts-comment */
import request from "supertest";
import mongoose from "mongoose";
import { MOCK_GIPHY_RES, TEST_DB_URL } from "../constants";
import { createTestServer } from "../testServer";
import { IGetGifsResponse, IGif } from "../types";

jest.mock("node-fetch");
//@ts-ignore
import fetch from "node-fetch";

fetch.mockImplementation(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_GIPHY_RES);
    },
  });
});

const app = createTestServer();

beforeAll(async () => {
  await mongoose.connect(TEST_DB_URL, {});
});

afterAll(async () => {
  mongoose.connection.db.dropDatabase(async () => {
    await mongoose.connection.close();
  });
});

let _gifs: IGif[] | null = null;

describe("test the CRUD on gifs", () => {
  test("gifs can be fetched", async () => {
    const gifs = await request(app).get("/gifs/get");
    expect(gifs.status).toBe(200);
    expect(fetch).toHaveBeenCalledTimes(1);
    const parsed = JSON.parse(gifs.text) as IGetGifsResponse;
    expect(parsed.gifs.length > 0).toBe(true);
    _gifs = parsed.gifs;
  });

  test("get gifs again to replace the previous gifs", async () => {
    const gifs = await request(app).get("/gifs/get");
    expect(gifs.status).toBe(200);
    expect(fetch).toHaveBeenCalledTimes(2);
    const parsed = JSON.parse(gifs.text) as IGetGifsResponse;
    expect(parsed.gifs.length > 0).toBe(true);
    expect(_gifs).not.toStrictEqual(parsed.gifs);
  });
});
