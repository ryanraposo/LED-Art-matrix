import request from "supertest";
import mongoose from "mongoose";
import { TEST_DB_URL } from "../constants";
import { createTestServer } from "../testServer";
import { IGetGifsResponse, IGif } from "../types";
const app = createTestServer();

beforeAll((done) => {
  mongoose.connect(TEST_DB_URL, {}, () => done());
});

afterAll((done) => {
  mongoose.connection.db.dropDatabase(() => done());
});

let _gifs: IGif[] | null = null;

describe("test the CRUD on gifs", () => {
  test("gifs can be fetched", async () => {
    const gifs = await request(app).get("/gifs/get");
    expect(gifs.status).toBe(200);
    const parsed = JSON.parse(gifs.text) as IGetGifsResponse;
    expect(parsed.gifs.length > 0).toBe(true);
    _gifs = parsed.gifs;
  });

  test("get gifs again to replace the previous gifs", async () => {
    const gifs = await request(app).get("/gifs/get");
    expect(gifs.status).toBe(200);
    const parsed = JSON.parse(gifs.text) as IGetGifsResponse;
    expect(parsed.gifs.length > 0).toBe(true);
    expect(_gifs).not.toStrictEqual(parsed.gifs);
  });
});
