import client from "../config/database.js";

const userCollection = client.db("shajidint").collection("Users");

// Create new user
export const createUser = async (req, res) => {
  const { name, email, phone, google } = req.body;
  const role = "customer";
  const joined = new Date();
  try {
    await userCollection.insertOne({
      name,
      email,
      phone,
      role,
      joined,
      google,
    });
    res.status(200).send({ success: true });
  } catch (error) {
    console.error("Create user error:", error);
    res.status(500).send({ success: false, message: "Failed to create user" });
  }
};

// Get single user
export const getUserByEmail = async (req, res) => {
  const email = req.params.email;
  const user = await userCollection.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
};

export const getUserByPhone = async (req, res) => {
  const phone = req.params.phone;
  const user = await userCollection.findOne({ phone });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
};
