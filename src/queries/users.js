const usersQueries = {
  findByEmail: (email) => {
    return {
      name: "fetch-user",
      text: "SELECT * FROM users WHERE email = $1",
      values: [email],
    };
  },
};

module.exports = usersQueries;
