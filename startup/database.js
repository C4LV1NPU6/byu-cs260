const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('lightbikebattle').collection('user');
const scoreCollection = client.db('lightbikebattle').collection('score');

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(username, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
    wins: 0,
    losses: 0,
  };
  await userCollection.insertOne(user);

  return user;
}

function addScore(score) {
  scoreCollection.insertOne(score);
}

function getHighScores() {
  const query = {};
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addScore,
  getHighScores,
};
