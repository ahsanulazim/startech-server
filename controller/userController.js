import client from "../config/database.js";

const userCollection = client.db("shajidint").collection("Users");

// Create new user
export const createUser = async (req, res) => {
  const { name, email, phone } = req.body;
  const role = "customer";
  const joined = new Date(
    new Date().toLocaleString("en-BD", { timeZone: "Asia/Dhaka" })
  );
  try {
    await userCollection.insertOne({ name, email, phone, role, joined });
    res.status(200).send({ success: true });
  } catch (error) {
    console.error("Create user error:", error);
    res.status(500).send({ success: false, message: "Failed to create user" });
  }
};
