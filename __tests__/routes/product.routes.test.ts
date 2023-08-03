import request from "supertest";
import app from "../../src/app";

const products = [
  { name: "test-laptop", quantity: 20 },
  { name: "test-machine", quantity: 30 },
];

const ids = "05b6f4dc-11d1-4943-91ec-fd8dd85bfaa2";
const updateId = "9d7b7953-e2d7-4c47-a860-ac135ef7af0e";
describe("Test the CRUD for product", () => {
  test("create a product", async () => {
    const product = products[0];
    const res = await request(app).post("/products/create").send(product);
    expect(res).not.toBeUndefined();
    expect(res.body).not.toBeUndefined();
    expect(res.body.data).not.toBeUndefined();
    expect(res.body.data.name).toEqual(product.name);
    expect(res.body.data.quantity).toEqual(product.quantity);
    expect(res.body.data.id).toBeUndefined();
    const res2 = await request(app).post("/products/create").send(product);
  });

  test("list all products", async () => {
    const res = await request(app).get("/products");
    expect(res).not.toBeUndefined();
    expect(res.body).not.toBeUndefined();
    expect(res.body.data).not.toBeUndefined();
    expect(res.body.data.products).not.toBeUndefined();
  });

  test("delete a product", async () => {
    const responseProducts = await request(app).get("/products");
    const productDoesExist = responseProducts.body.data.products.filter(
      (p: { id: string }) => p.id === ids
    );
    expect(productDoesExist).not.toBeUndefined();
    expect(productDoesExist.length).toBeGreaterThan(0);
    const deleteResponse = await request(app).delete("/products/" + ids);
    expect(deleteResponse.body).not.toBeUndefined();
    expect(deleteResponse.body.data).not.toBeUndefined();
    expect(deleteResponse.body.data.message).not.toBeUndefined();
    expect(deleteResponse.body.data.message).toEqual("product deleted");
  });

  test("update quantity", async () => {
    const res = await request(app).post(
      `/products/${updateId}/update_quantity/?number=10`
    );
    expect(res.body).not.toBeUndefined();
    expect(res.body.data).not.toBeUndefined();
    console.log(res.body.data.product);
    expect(res.body.data.message).toEqual("updated successfully");
  });
});
