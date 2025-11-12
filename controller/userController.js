import client from "../config/database.js";

const userCollection = client.db("startech").collection("Users");

// Create new user
export const createUser = async (req, res) => {
  const { name, phone, email, google, userID, emailVerified } = req.body;
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
      userID,
      emailVerified,
    });
    res.status(200).send({ success: true });
  } catch (error) {
    console.error("Create user error:", error);
    res.status(500).send({ success: false, message: "Failed to create user" });
  }
};

// Get single user by email
export const getUserByEmail = async (req, res) => {
  const email = req.params.email;
  const user = await userCollection.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
};

//Get user by phone
export const getUserByPhone = async (req, res) => {
  const phone = req.params.phone;
  const user = await userCollection.findOne({ phone });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
};

//Update existing user
export const updateUser = async (req, res) => {
  const email = req.params.email;
  const updatedData = req.body;
  try {
    const result = await userCollection.updateOne(
      { email },
      { $set: updatedData }
    );
    if (result.modifiedCount > 0) {
      res.status(200).send({ success: true, message: "User updated" });
    } else {
      res.status(404).send({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};
