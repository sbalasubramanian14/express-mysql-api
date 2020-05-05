const errHandler = (err) => {
  console.log("Error: ", err);
};

const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize;
  const limit = pageSize;

  return {
    offset,
    limit,
  };
};

module.exports = { errHandler, paginate };
