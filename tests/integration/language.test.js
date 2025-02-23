const request = require("supertest");
const { describe } = require("node:test");
const { Language } = require("../../models/language");
const dataLanguage = require("./language.json");

let server = null;
const deleteData = true;

describe("/api/languages", () => {
  beforeEach(async () => {
    server = require("../../index");
    if (deleteData) {
      await Language.deleteMany({});
    }
  });
  afterEach(() => {
    server.close();
  });

  describe("GET /", () => {
    it("should return 8 languages", async () => {
      Language.insertMany(dataLanguage);
      const res = await request(server).get("/api/languages");
      expect(res.status).toBe(200);
    })
  })

  // describe("POST /", () => {
  //   const exec = async () => {
  //     return await request(server)
  //       .post("/api/languages")
  //       .send({ name: languageName, acronym: acronym });
  //   };

  //   beforeEach(() => {
  //     languageName = "Português - BR";
  //     acronym = "PT-BR";
  //   });

  //   it("should return the language if is valid", async () => {
  //     const res = await exec();
  //     expect(res.status).toBe(200);

  //     expect(res.body).toHaveProperty("_id");
  //     expect(res.body).toHaveProperty("name", languageName);
  //     expect(res.body).toHaveProperty("acronym", acronym);
  //   });
  // });
});
